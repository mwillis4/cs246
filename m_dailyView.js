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
				var heading =  '<table border=1 style=\"margin: auto; width:100%; table-layout: fixed\" id=\"allTasksList\"><tr><th style=\"width: 20%\">Name</th><th style=\"width: 0px\">Category</th><th style=\"width: 0px\">Due Date</th><th style=\"width: 0px\">Comments</th></tr>' ;
				
				var fullInputString = heading + "<tbody>" + allCats + '</tbody></table>';
				
				document.getElementById("dayHolder").innerHTML = String(fullInputString);
            }
		}  
	}