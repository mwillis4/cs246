<?php
	
	$toDo      		 = $_GET['toDo'];
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

	$sqlString = "SELECT tasks.task_ID, tasks.task_name, settings.category, tasks.task_duedate, settings.category_color FROM tasks INNER JOIN settings ON task_category=settings.category_ID  WHERE tasks.user_ID = $currentUser AND tasks.to_do=$toDo ORDER BY tasks.task_duedate";
	
	$statement = $db->prepare($sqlString);
	$statement->execute();

	$returnStatement = "";
	
	while ($row = $statement->fetch(PDO::FETCH_ASSOC))
	{
		$taskID = $row['task_ID'];
		$rowColor = "#" . $row['category_color'];
		$name = $row['task_name'];
		$category = $row['category'];
		$fulldue = explode(" ", $row['task_duedate']);
		$duedate = $fulldue[0];
		
		$returnStatement = $returnStatement . "<tr id=\"" . $taskID . "\" style=\"background:" . $rowColor . "\" class=\"item\" onclick=\"selectRow(this);\"><td>" . $name . "</td>";
		$returnStatement = $returnStatement . "<td>" . $category . "</td>";
		$returnStatement = $returnStatement . "<td><div class=\"myDateTime\" id=\"taskDueDate\">" . $duedate . "</div></td></tr>";
	}	
	
	echo $returnStatement;
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>