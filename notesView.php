<?php

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

	$mySQLStatement = "SELECT note_ID, note_name, note_date, note_contents FROM notes WHERE user_ID = $currentUser ORDER BY note_date";

	$statement = $db->prepare($mySQLStatement);
	$statement->execute();

	$returnStatement = "";
	
	while ($row = $statement->fetch(PDO::FETCH_ASSOC))
	{
		$rowNum = $row["note_ID"];
		$name = $row['note_name'];
		$date = $row['note_date'];
		$contents = $row['note_contents'];
		
		$returnStatement = $returnStatement . "<tr id = \"" . $rowNum . "\" class=\"item\" onclick=\"selectRow(this);\"><td>" . $name . "</td>";
		$returnStatement = $returnStatement . "<td>" . $date . "</td>";
		$returnStatement = $returnStatement . "<td>" . $contents . "</td></tr>";		
	}	
	
	echo $returnStatement;
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>