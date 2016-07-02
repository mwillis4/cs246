<?php
	$currentTask = $_GET['taskID'];
	$taskName = $_GET['taskName'];
	$taskCategory = $_GET['category'];
	$taskDueDate = $_GET['dueDate'];
	$taskDueTime = $_GET['dueTime'];
	$taskComments = $_GET['comments'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
	$fullDueDate = $taskDueDate . " " . $taskDueTime;
	
    try
    {
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$sqlString = "UPDATE tasks SET task_name = \"$taskName\", task_category = \"$taskCategory\", task_duedate = \"$fullDueDate\", task_comments = \"$taskComments\" WHERE task_ID = $currentTask";
		$statement = $db->prepare($sqlString);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>