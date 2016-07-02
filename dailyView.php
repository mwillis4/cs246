<?php
	
	$currentUser = $_GET['userID'];
	$newDate       = $_GET['date'];
	
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

	$sqlString = "SELECT tasks.task_ID, tasks.task_name, settings.category, tasks.task_duedate, tasks.task_comments, settings.category_color FROM tasks INNER JOIN settings ON task_category=settings.category_ID  WHERE tasks.user_ID = $currentUser AND tasks.task_duedate LIKE \"$newDate %\"";

	$statement = $db->prepare($sqlString);
	$statement->execute();

	$returnStatement = "";
	
	while ($row = $statement->fetch(PDO::FETCH_ASSOC))
	{
		$taskID = $row['task_ID'];
		$name = $row['task_name'];
		$category = $row['category'];
		$fulldue = explode(" ", $row['task_duedate']);
		$duedate = $fulldue[0];
		$duetime = substr($fulldue[1], 0, -3);
		$comments = $row['task_comments'];
		$rowColor = $row['category_color'];
		
		$returnStatement = $returnStatement . "<tr style=\"background:#" . $rowColor . "\" id=\"" . $taskID . "\" class=\"item\" onclick=\"selectRow(this);\">";
		$returnStatement = $returnStatement . "<td style=\"width: 20%\">" . $name . "</td>";
		$returnStatement = $returnStatement . "<td style=\"width: 20%\">" . $category . "</td>";
		$returnStatement = $returnStatement . "<td style=\"width: 165px\"><div class=\"myDateTime\" id=\"taskDueDate\">" . $duedate . "</div>";
		$returnStatement = $returnStatement . "<div class=\"myDateTime\" id=\"taskDueTime\">" . $duetime . "</div></td>";
		$returnStatement = $returnStatement . "<td>" . $comments . "</td></tr>";		
	}	
	
	echo $returnStatement;
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>