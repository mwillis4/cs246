function loading()
	{
		document.getElementById("nameText").innerHTML = localStorage.getItem("taskName");
		document.getElementById("categoryText").innerHTML = localStorage.getItem("taskCategory");
		document.getElementById("dueDateText").innerHTML = localStorage.getItem("dueDate") + " " + localStorage.getItem("dueTime");
		document.getElementById("commentsText").innerHTML = localStorage.getItem("comments");		
	}

	
	
	function yesClick()
	{
		var urlAppend = "deleteCheck.php?taskID=" + localStorage.getItem('taskID');
	
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
				window.location.replace('m_allTasks.html');
			}
		}	
	}
	
	function noClick()
	{
		window.location.replace('m_allTasks.html');
	}