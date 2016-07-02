function loading()
	{
		document.getElementById("categoryText").innerHTML = localStorage.getItem("category");
	}

	
	
	function yesClick()
	{
		var urlAppend = "settingsDeleteCheck.php?categoryID=" + localStorage.getItem('categoryID');
	
		deleteRequest = new XMLHttpRequest();
		deleteRequest.open("GET",urlAppend, true);
		deleteRequest.onreadystatechange = deleteRequestResult;
		deleteRequest.send();		
		
	}
	
	function deleteRequestResult()
	{
		if (deleteRequest.readyState == 4)
		{
		
			if (deleteRequest.status == 200)
			{
				localStorage.clear();
				window.location.replace('settingsView.html');
			}
		}	
	}
	
	function noClick()
	{
		window.location.replace('settingsView.html');
	}