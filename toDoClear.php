<?php
	$currentUser = $_GET['userID'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
    try
    {
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$sqlString = "UPDATE tasks SET to_do = 0 WHERE user_ID = $currentUser";
		$statement = $db->prepare($sqlString);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>