<?php

	$openShiftVar = getenv('OPENSHIFT_MYSQL_DB_HOST');
	$dbHost ;
	$dbPort;
	$dbUser;
	$dbPassword;
	
	if ($openShiftVar === null || $openShiftVar == "")
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
	
	$dbName = 'scriptures';

	$db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);
?>

<!DOCTYPE html>
<html lang = "en">
     <meta charset = "utf-8" />
     <title>Scripture SQL</title>
     <body>
	 
	<?php
	
		$statement = $db->prepare('SELECT book, chapter, verse, contents FROM scriptures');
		$statement->execute();
	
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			print "$row['book']  $row['chapter'] : $row['verse']  - $row['contents']";		
		}
		
	?>

</body>
</html>