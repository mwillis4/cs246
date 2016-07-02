function loading()
	{
		document.getElementById("nameText").innerHTML = localStorage.getItem("taskName");
		document.getElementById("categoryText").innerHTML = localStorage.getItem("taskCategory");
		document.getElementById("dueDateText").innerHTML = localStorage.getItem("dueDate") + " " + localStorage.getItem("dueTime");
		document.getElementById("commentsText").innerHTML = localStorage.getItem("comments");
	}
	
	function yesClick()
	{
		var urlAppend = "pendingCheck.php?taskID=" + localStorage.getItem('taskID');
		urlAppend += "&userID=" + sessionStorage.getItem('userID');

	
		pendingRequest = new XMLHttpRequest();
		pendingRequest.open("GET",urlAppend, true);
		pendingRequest.onreadystatechange = pendingRequestResult;
		pendingRequest.send();		
		
	}
	
	function pendingRequestResult()
	{
		if (pendingRequest.readyState == 4)
		{	
			if (pendingRequest.status == 200)
			{
				localStorage.clear();
				window.location.replace('allTasks.html');
			}
		}	
	}
	
	function noClick()
	{
		window.location.replace('allTasks.html');
	}