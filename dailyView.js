	function onOpen()
	{
		var myDate = new Date();
		var currentMonth;
		var currentDay;
		if ((myDate.getMonth() + 1) < 10)
		{
			currentMonth = "0" + (myDate.getMonth() +1);
		}
		else
		{
			currentMonth = (myDate.getMonth() +1);
		}
		
		if(Number(myDate.getDate()) < 10)
		{
			currentDay = "0" + myDate.getDate();
		}
		else
		{	
			currentDay = myDate.getDate();
		}
		
		var dateString = myDate.getFullYear() + "-" + currentMonth + "-" + currentDay;
		document.getElementById("datePicker").value = dateString;
		
		var urlAppend  = "dailyView.php?userID=" + sessionStorage.getItem('userID');
		urlAppend += "&date=" + document.getElementById("datePicker").value;
		dayRequest = new XMLHttpRequest();
		dayRequest.onreadystatechange = pullDayResult;
		dayRequest.open("GET",urlAppend, true);
		dayRequest.send();
	}

	function loadDate()
	{	
		var urlAppend  = "dailyView.php?userID=" + sessionStorage.getItem('userID');
		urlAppend += "&date=" + document.getElementById("datePicker").value;
		dayRequest = new XMLHttpRequest();
		dayRequest.onreadystatechange = pullDayResult;
		dayRequest.open("GET",urlAppend, true);
		dayRequest.send();
	}
	
	function pullDayResult()
	{
		if (dayRequest.readyState == 4)
		{
			
			if (dayRequest.status == 200)
			{
				
				var allCats = dayRequest.responseText;
				var heading =  '<table border=1 style=\"margin: auto; width:100%; table-layout: fixed\" id=\"allTasksList\"><tr><th style=\"width: 20%\">Name</th><th style=\"width: 20%\">Category</th><th style=\"width: 165px\">Due Date</th><th>Comments</th></tr></table>' ;
				
				var fullInputString = heading + "<div id=\"TableBody\"><table border=1 style=\"margin: auto; width:100%; table-layout: fixed\" id=\"allTasksList\">" + allCats + '</table></div>';
				
				document.getElementById("dayHolder").innerHTML = String(fullInputString);
            }
		}  
	}