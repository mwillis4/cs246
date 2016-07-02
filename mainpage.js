		var black = "#000000";
		var myGreen = "#028110";
		
		function changeAllTask()
		{
			
			document.getElementById("viewHolder").src = "allTasks.html";
			document.getElementById("allTask").style.background = myGreen;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = black;
		}
		
		function changeDaily()
		{
			document.getElementById("viewHolder").src = "dailyView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = myGreen;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = black;
		}
		
		function changeWeekly()
		{
			document.getElementById("viewHolder").src = "weeklyView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = myGreen;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = black;
		}
		
		function changeToDoList()
		{
			document.getElementById("viewHolder").src = "toDoView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = myGreen;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = black;
		}
		
		function changePending()
		{
			document.getElementById("viewHolder").src = "pendingView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = myGreen;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = black;
		}
		
		function changeNotes()
		{
			document.getElementById("viewHolder").src = "notesView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = myGreen;
			document.getElementById("categories").style.background = black;
		}
		
		function changeSetting()
		{
			document.getElementById("viewHolder").src = "settingsView.html";
			document.getElementById("allTask").style.background = black;
			document.getElementById("dailyView").style.background = black;
			document.getElementById("weekly").style.background = black;
			document.getElementById("toDoList").style.background = black;
			document.getElementById("pending").style.background = black;
			document.getElementById("notes").style.background = black;
			document.getElementById("categories").style.background = myGreen;
		}

		function loadData()
		{
			if (sessionStorage.getItem('userName') === null || sessionStorage.getItem('userID') === null)
			{
				window.location.replace('loginPage.html');
			}		
			else
			{
				document.getElementById("welcome").innerHTML = "Hi " + sessionStorage.getItem('userName') + "!";
				document.title = "ASM - " + sessionStorage.getItem('userName');
				changeAllTask();
			}
		}