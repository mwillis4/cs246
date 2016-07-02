	function updateColor()
	{
		document.getElementById("catText").style.background = document.getElementById("colorPick").value;
	}
	
	function clearBoxes()
	{
		document.getElementById("catText").value = "";
		document.getElementById("colorPick").value = "#ffffff";
		document.getElementById("catText").style.background = "#ffffff";
	}
	
	function add()
	{
		var urlAppend = "settingsAdd.php?userID=" + sessionStorage.getItem('userID');
		urlAppend += "&category=" + document.getElementById("catText").value;
		urlAppend += "&categoryColor=" + document.getElementById("colorPick").value.replace('#', '');
		
		addRequest = new XMLHttpRequest();
		addRequest.open("GET",urlAppend, true);
		addRequest.onreadystatechange = addRequestResult;
		addRequest.send();	
	}
	
	function addRequestResult()
	{
		if (addRequest.readyState == 4)
		{
		
			if (addRequest.status == 200)
			{
				localStorage.clear();
				window.location.replace('m_settingsView.html');
			}
		}	
	}
	
	function cancel()
	{
		window.location.replace('m_settingsView.html');
	}