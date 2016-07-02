<?php
	$currentNote = $_GET['noteID'];
	$noteName = $_GET['noteName'];
	$contents = $_GET['contents'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
    try
    {
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$sqlString = "UPDATE notes SET note_name = \"$noteName\", note_contents = \"$contents\" WHERE note_ID = \"$currentNote\"";
		$statement = $db->prepare($sqlString);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>