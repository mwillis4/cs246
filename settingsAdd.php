<?php
	$currentUser = $_GET['userID'];
	$category = $_GET['category'];
	$categoryColor = $_GET['categoryColor'];
	
	$dbName = 'planner_db';
    $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
    $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
	
    try
    {
		$myZero = 0;
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$statement = $db->prepare('INSERT INTO settings(user_ID, category, category_color) VALUES(:user_ID, :category, :category_color)');
		
		$statement->bindParam(':user_ID', $currentUser);
		$statement->bindParam(':category', $category);
		$statement->bindParam(':category_color', $categoryColor);
		$statement->execute();
		
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>