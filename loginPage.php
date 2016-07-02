<?php
	$username = $_GET['userName'];
	$password = $_GET['password'];
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

		$sqlQueryString = "SELECT  user_ID FROM login WHERE userName = \"$username\"";
		
		$statement = $db->prepare($sqlQueryString);
		$statement->execute();
		
		$db = new PDO("mysql:host=$dbHost;dbname=$dbName", "planneruser", "planneruser");
		$statement = $db->prepare('INSERT INTO login(userName, user_password) VALUES(:userName, :user_password)');
		$statement->bindParam(':userName', $username);
		$statement->bindParam(':user_password', $password);
		$statement->execute();
		$userId = $db->lastInsertId();
		
		echo $userId;
		
    }
    catch (Exception $ex)
    {
        echo "Error: $ex";
        die(); // :(
    }
?>