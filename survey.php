<?php
$question1       = $_GET['question1Answers'];
$question2       = $_GET['question2Answers'];
$question3       = $_GET['question3Answers'];
$question4       = $_GET['question4Answers'];
$question5       = $_GET['question5Answers'];

$filePath   = "survey2.json";

$encodedStuff;
$decodedContents;

if (!file_exists($filePath))
{
	class Survey{
		public $blueResponse = 0;
		public $redResponse = 0;
		public $greenResponse = 0;
		public $purpleResponse = 0;
		public $yellowResponse = 0;
		public $pinkResponse = 0;
		
		public $a110Response = 0;
		public $a1120Response = 0;
		public $a2130Response = 0;
		public $a3140Response = 0;
		public $a4150Response = 0;
		public $a5160Response = 0;
		public $a61upResponse = 0;
		
		public $freshmanResponse = 0;
		public $sophomoreResponse = 0;
		public $juniorResponse = 0;
		public $seniorResponse = 0;
		public $seniorUpResponse = 0;
		
		public $csResponse = 0;
		public $seResponse = 0;
		public $webdResponse = 0;
		public $citResponse = 0;
		public $compeResponse = 0;
		
		public $wcResponse = 0;
		public $mowResponse = 0;
		public $miwResponse = 0;
		public $ecResponse = 0;
		public $oftcResponse = 0;
	}	
	
	$newSurvey = new Survey();

	file_put_contents($filePath, json_encode($newSurvey));
}


	$contents = file_get_contents($filePath);
	$decodedContents = json_decode($contents, true);

	
	if($question1 != null)
		$decodedContents[$question1]++;

	if($question2 != null)
		$decodedContents[$question2]++;
	
	if($question3 != null)
		$decodedContents[$question3]++;
	
	if($question4 != null)
		$decodedContents[$question4]++;
	
	if($question5 != null)
		$decodedContents[$question5]++;


	$encodedContents = json_encode($decodedContents);
	
	file_put_contents($filePath, $encodedContents);

	echo $encodedContents
	
?>