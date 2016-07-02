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

	$sqlStatement = "SELECT category_ID, category, category_color FROM settings WHERE user_ID = $currentUser ORDER BY category";

	$statement = $db->prepare($sqlStatement);
	$statement->execute();

	$returnStatement = "";
	
	while ($row = $statement->fetch(PDO::FETCH_ASSOC))
	{
		$rowID = $row['category_ID'];
		$rowColor = "#" . $row['category_color'];
		$category = $row['category'];
		$returnStatement = $returnStatement . "<tr id=\"" . $rowID . "\" class=\"item\" onclick=\"selectRow(this);\" style=\"background: " . $rowColor . "\"><td>" . $category . "</td></tr>";		
	}	
	
	echo $returnStatement;
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>