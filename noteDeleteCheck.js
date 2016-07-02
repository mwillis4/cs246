function loading()
	{
		document.getElementById("nameText").innerHTML = localStorage.getItem("nameText");
		document.getElementById("noteDateText").innerHTML = localStorage.getItem("dateText");
		document.getElementById("contentsText").innerHTML = localStorage.getItem("contentsText");		
	}

	
	
	function yesClick()
	{
		var urlAppend = "noteDeleteCheck.php?noteID=" + localStorage.getItem('noteID');
	
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
				window.location.replace('notesView.html');
			}
		}	
	}
	
	function noClick()
	{
		window.location.replace('notesView.html');
	}