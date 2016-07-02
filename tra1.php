<?php
$name = $_GET['nameText'];
$email = $_GET['emailText'];
$major = $_GET['majorAnswers'];
$north = $_GET['NorthAmerica'];
$south = $_GET['SouthAmerica'];
$europe = $_GET['Europe'];
$asia = $_GET['Asia'];
$australia = $_GET['Australia'];
$africa = $_GET['Africa'];
$antartica = $_GET['Antartica'];
$comments = $_GET['comments'];
?>

<!DOCTYPE html>
<html lang = "en">
     <meta charset = "utf-8" />
     <title>Information Confirmation</title>
     <body>
	 
		<h3>Name</h3>
		<?php
			print $name;
		?>
		<br>
		<br>
		
		<h3>Email</h3>
		<?php
			print 'mailto:';
			print $email;
		?>
		<br>
		<br>

		<h3>Your major</h3>
		<?php
			print $major;
		?>
		<br>
		<br>
		
		<h3>Places visited</h3>
		<?php
				if($north != null)
					print "North America\r\n";
		?>
		<br>
		<?php
			if($south != null)
				print "South America\r\n";
		?>
		<br>
		<?php
			if($europe != null)
				print "Europe\r\n";
		?>
		<br>
		<?php
			if($asia != null)
				print "Asia\r\n";
		?>
		<br>
		<?php
			if($australia != null)
				print "Australia\r\n";
		?>
		<br>
		<?php
			if($africa != null)
				print "Africa\r\n";
		?>
		<br>
		<?php
			if($antartica != null)
				print "Antartica\r\n";
		?>
		<br>
		<br>
		
		<h3>Comments</h3>
		<?php
			print $comments;
		?>
</body>
</html>