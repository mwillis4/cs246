function loading()
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
		document.getElementById("dueDate").value = dateString;
		
		var currentTime;
		var currentHour;
		var currentMinute;
		
		if (myDate.getHours() < 10)
		{
			currentHour = "0" + (myDate.getHours());
		}
		else
		{
			currentHour = myDate.getHours();
		}
		
		if(myDate.getMinutes() < 10)
		{
			currentMinute = "0" + myDate.getMinutes();
		}
		else
		{	
			currentMinute = myDate.getMinutes();
		}
		
		currentTime = currentHour + ":" + currentMinute;
		document.getElementById("dueTime").value = currentTime;

		var holder = document.getElementById("radios");
		var typeItems = holder.getElementsByTagName("input");
		
		var itemsLength = typeItems.length;
		
		for (var i = 0; i < itemsLength; i++)
		{
			if(typeItems[i].type === "radio")
			{
				typeItems[i].onclick = timeChange;
			}
		}
		
		
		
		var urlAppend  = "addEdit.php?userID=" + sessionStorage.getItem('userID');
		settingsRequest = new XMLHttpRequest();
		settingsRequest.onreadystatechange = pullSettingsResult;
		settingsRequest.open("GET",urlAppend, true);
		settingsRequest.send();
		

	}
	
	function timeChange()
	{
		if  (document.getElementById("nowRadio").checked)
		{
			var myDate = new Date();
			var currentTime;
			var currentHour;
			var currentMinute;
		
			if (myDate.getHours() < 10)
			{
				currentHour = "0" + (myDate.getHours());
			}
			else
			{
				currentHour = myDate.getHours();
			}
		
			if(myDate.getMinutes() < 10)
			{
				currentMinute = "0" + myDate.getMinutes();
			}
			else
			{	
				currentMinute = myDate.getMinutes();
			}
		
			currentTime = currentHour + ":" + currentMinute;
			document.getElementById("dueTime").value = currentTime;
		}
		
		if  (document.getElementById("noonRadio").checked)
		{
			document.getElementById("dueTime").value = "12:00";
		}
		
		if  (document.getElementById("midnightRadio").checked)
		{
			document.getElementById("dueTime").value = "23:59";
		}
	}
	
	function pullSettingsResult()
	{
		if (settingsRequest.readyState == 4)
		{
			
			if (settingsRequest.status == 200)
			{
				document.getElementById("category").innerHTML = settingsRequest.responseText;
            }
		}  
	}
		
		var addRequest
		
		function submitItem() 
		{
			if(document.getElementById("nameText").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add a name for the task";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("nameText").focus();
				return;
			}
			else if(document.getElementById("category").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add a category for the task";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("category").focus();
				return;
			}
			else
			{
				var urlAppend = "add.php?userID=" + sessionStorage.getItem('userID');
				urlAppend += "&taskName=" + document.getElementById("nameText").value;
				urlAppend += "&category=" + document.getElementById("category").value;
				urlAppend += "&dueDate=" + document.getElementById("dueDate").value;
				urlAppend += "&dueTime=" + document.getElementById("dueTime").value;
				urlAppend += "&comments=" + document.getElementById("comments").value;
				
				addRequest = new XMLHttpRequest();
				addRequest.open("GET",urlAppend, true);
				addRequest.onreadystatechange = addRequestResult;
				addRequest.send();		
			}
		}
		
		function addRequestResult()
		{
			if (addRequest.readyState == 4)
			{
			
				if (addRequest.status == 200)
				{
					localStorage.clear();
					window.location.replace('mainpage.php');
				}
			}	
		}
		
		function reset()
		{
			document.getElementById("nameText").value = "";
			document.getElementById("category").value = "";
			document.getElementById("comments").value = ""
			
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
		document.getElementById("dueDate").value = dateString;
		
		var currentTime;
		var currentHour;
		var currentMinute;
		
		if (myDate.getHours() < 10)
		{
			currentHour = "0" + (myDate.getHours());
		}
		else
		{
			currentHour = myDate.getHours();
		}
		
		if(myDate.getMinutes() < 10)
		{
			currentMinute = "0" + myDate.getMinutes();
		}
		else
		{	
			currentMinute = myDate.getMinutes();
		}
		
		currentTime = currentHour + ":" + currentMinute;
		document.getElementById("dueTime").value = currentTime;
		}
		
