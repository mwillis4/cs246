<!doctype html>
<html lang="en">
<link href="mainpage.css" rel="stylesheet" />

<head>
    <title>ASM Planning</title>
	<link rel="icon" 
      type="image/png" 
      href="logo.png">
</head>

<body onload="loadData()">
	<div id="header">
		<table>
			<tr>
				<td id="imgCol"><img src="logo.png"></td>
			    <!--<td>-->
					<!--<div id="tabHolder">-->
						<!--<div class="menuTabs">Reminders</div>-->
						<!--<div class="menuTabs">Information</div>-->
					<!--</div>-->
				<!--</td>-->
				<td>
					<div id="loginHolder">
						<div id="welcome">Hi User!</div>
						<a href="loginPage.html">Sign Out</a>
					</div>
				</td>
			</tr>
		</table>
	</div>
	<table style="height: 100%">
	<tr>
		<td id="viewsCol">
			<div id="views">
				<h3>Views</h3>
				<div id = "allTask" onclick="changeAllTask()">All Tasks</div>
				<div id = "dailyView" onclick="changeDaily()">Daily View</div>
				<div id = "weekly" onclick="changeWeekly()">Weekly</div>
				<div id = "toDoList" onclick="changeToDoList()">To Do List</div>
				<div id = "pending" onclick="changePending()">Pending</div>
				<div id = "notes" onclick="changeNotes()">Notes</div>
				<div id = "categories" onclick="changeSetting()">Categories</div>
			</div>
		</td>
		<td>
			<iframe id="viewHolder">
			</iframe>	
		</td>
	<tr>
	
	<script src="mainpage.js"></script>
	
</body>
</html>