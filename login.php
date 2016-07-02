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

		$sqlQueryString = "SELECT  user_ID, user_password FROM login WHERE userName = \"$username\"";
		
		$statement = $db->prepare($sqlQueryString);
		$statement->execute();

		
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$userID = $row['user_ID'];
			$readPassword = $row['user_password'];	
			
			if ($readPassword === $password) 
			{
				echo $userID;
			}
		}
	}
	catch (PDOException $ex)
	{
		echo "Error connecting to DB. Details: $ex";
		die();
	}
?>
