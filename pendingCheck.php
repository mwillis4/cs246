<?php
	
	$currentTask = $_GET['taskID'];
	$currentUser = $_GET['userID'];
	
	try
	{
	$openShiftVar = getenv('OPENSHIFT_MYSQL_DB_HOST');
	$dbHost ;
	$dbPort;
	$dbUser;
	$dbPassword;
	
	if ($openShiftVar === null || $openShiftVar === "")
	{
		// Not in the openshift environment
		$dbHost = "localhost";
		$dbPort = '';
		$dbUser = 'morganwillis';
		$dbPassword = 'doYourBusiness';
	}

	else 
	{
		
		// In the openshift environment 
		$dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
		$dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
		$dbUser = getenv('OPENSHIFT_MYSQL_DB_USERNAME');
		$dbPassword = getenv('OPENSHIFT_MYSQL_DB_PASSWORD');
	}

	

	$dbName = 'planner_db';

	$db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);

	$sqlString = "SELECT task_name, task_category, task_duedate, task_comments FROM tasks WHERE task_ID = $currentTask";

	$statement = $db->prepare($sqlString);
	$statement->execute();

	
	while ($row = $statement->fetch(PDO::FETCH_ASSOC))
	{
		$name = $row['task_name'];
		$category = $row['task_category'];
		$fulldue = $row['task_duedate'];
		$comments = $row['task_comments'];
	}
	
	$sqlString = "DELETE FROM tasks WHERE task_ID = $currentTask";

	$statement = $db->prepare($sqlString);
	$statement->execute();
	
	$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
	$statement = $db->prepare('INSERT INTO pending(user_ID, task_name, task_category, completed_date, task_duedate, task_comments) VALUES(:user_ID, :task_name, :task_category, :completed_date, :task_duedate, :task_comments)');
	
	$completeDate = date("Y-m-d");
	
	$statement->bindParam(':user_ID', $currentUser);
	$statement->bindParam(':task_name', $name);
	$statement->bindParam(':task_category', $category);
	$statement->bindParam(':completed_date', $completeDate);
	$statement->bindParam(':task_duedate', $fulldue);
	$statement->bindParam(':task_comments', $comments);
	$statement->execute();
	
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>