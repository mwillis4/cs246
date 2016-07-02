<?php
	$currentUser = $_GET['userID'];
	$noteName = $_GET['noteName'];
	$contents = $_GET['contents'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
    try
    {
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$statement = $db->prepare('INSERT INTO notes(user_ID, note_name, note_date, note_contents) VALUES(:user_ID, :note_name, :note_date, :note_contents)');
		
		$noteDate = date("Y-m-d");
		
		$statement->bindParam(':user_ID', $currentUser);
		$statement->bindParam(':note_name', $noteName);
		$statement->bindParam(':note_date', $noteDate);
		$statement->bindParam(':note_contents', $contents);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>