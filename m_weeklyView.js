var currentDate;
var i = 0;

function loadWeek()
{	
	var  currentDay;
	var currentMonth;
	var d = new Date();
	d.setDate(d.getDate() + i);
	
	if ((d.getMonth() + 1) < 10)
	{
		currentMonth = "0" + (d.getMonth() +1);
	}
	else
	{
		currentMonth = (d.getMonth() +1);
	}
	
	if(parseInt(d.getDate()) < 10)
	{
		currentDay = "0" + d.getDate();
	}
	else
	{	
		currentDay = d.getDate();
	}
	
	var nextDay = d.getFullYear() + "-" + currentMonth + "-" + currentDay;
	
	currentDate = currentMonth + "-" + currentDay;
	
	var urlAppend  = "weeklyView.php?userID=" + sessionStorage.getItem('userID');
	urlAppend += "&date=" + nextDay;
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
				var heading =  "<table border=1 style=\"margin: auto; table-layout: fixed\"><tr><th>" + currentDate + "</th></tr>"
				
				var fullInputString = heading + allCats + "</table>";

				var tableName = "day" + (i + 1);
			
				document.getElementById(tableName).innerHTML = String(fullInputString);
				
				i++;
				
				if(i < 3)
				{
					loadWeek();
				}
            }
		}  
	}