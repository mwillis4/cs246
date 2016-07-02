		var black = "#000000";
		var myGreen = "#028110";
		
		function changeAllTask()
		{
			
			document.getElementById("viewHolder").src = "m_allTasks.html";
			document.getElementById("mobileAllTask").style.background = myGreen;
			document.getElementById("mobileDailyView").style.background = black;
			document.getElementById("mobileWeekly").style.background = black;
			document.getElementById("mobileNotes").style.background = black;
			document.getElementById("mobileCategories").style.background = black;
		}
		
		function changeDaily()
		{
			document.getElementById("viewHolder").src = "m_dailyView.html";
			document.getElementById("mobileAllTask").style.background = black;
			document.getElementById("mobileDailyView").style.background = myGreen;
			document.getElementById("mobileWeekly").style.background = black;
			document.getElementById("mobileNotes").style.background = black;
			document.getElementById("mobileCategories").style.background = black;
		}
		
		function changeWeekly()
		{
			document.getElementById("viewHolder").src = "m_weeklyView.html";
			document.getElementById("mobileAllTask").style.background = black;
			document.getElementById("mobileDailyView").style.background = black;
			document.getElementById("mobileWeekly").style.background = myGreen;
			document.getElementById("mobileNotes").style.background = black;
			document.getElementById("mobileCategories").style.background = black;
		}
		
		
		function changeNotes()
		{
			document.getElementById("viewHolder").src = "m_notesView.html";
			document.getElementById("mobileAllTask").style.background = black;
			document.getElementById("mobileDailyView").style.background = black;
			document.getElementById("mobileWeekly").style.background = black;
			document.getElementById("mobileNotes").style.background = myGreen;
			document.getElementById("mobileCategories").style.background = black;
		}
		
		function changeSetting()
		{
			document.getElementById("viewHolder").src = "m_settingsView.html";
			document.getElementById("mobileAllTask").style.background = black;
			document.getElementById("mobileDailyView").style.background = black;
			document.getElementById("mobileWeekly").style.background = black;
			document.getElementById("mobileNotes").style.background = black;
			document.getElementById("mobileCategories").style.background = myGreen;
		}

		function loadData()
		{

		}