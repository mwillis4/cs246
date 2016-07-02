<?php
	$currentCategory = $_GET['categoryID'];
	$category = $_GET['category'];
	$categoryColor = $_GET['categoryColor'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
	
    try
    {
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$sqlString = "UPDATE settings SET category = \"$category\", category_color = \"$categoryColor\" WHERE category_ID = $currentCategory";
		$statement = $db->prepare($sqlString);
		$statement->execute();
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>