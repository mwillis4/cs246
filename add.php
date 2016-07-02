<?php
	$currentUser = $_GET['userID'];
	$taskName = $_GET['taskName'];
	$taskCategory = $_GET['category'];
	$taskDueDate = $_GET['dueDate'];
	$taskDueTime = $_GET['dueTime'];
	$taskComments = $_GET['comments'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
    try
    {
		$myZero = 0;
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$statement = $db->prepare('INSERT INTO tasks(user_ID, task_name, task_category, task_duedate, task_comments, to_do) VALUES(:user_ID, :task_name, :task_category, :task_duedate, :task_comments, :to_do)');
		
		
		$fullDueDate = $taskDueDate . " " . $taskDueTime;
		
		$statement->bindParam(':user_ID', $currentUser);
		$statement->bindParam(':task_name', $taskName);
		$statement->bindParam(':task_category', $taskCategory);
		$statement->bindParam(':task_duedate', $fullDueDate);
		$statement->bindParam(':task_comments', $taskComments);
		$statement->bindParam(':to_do', $myZero);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>