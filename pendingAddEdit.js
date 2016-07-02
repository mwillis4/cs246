function loading()
{
	var urlAppend  = "addEdit.php?userID=" + sessionStorage.getItem('userID');
	settingsRequest = new XMLHttpRequest();
	settingsRequest.onreadystatechange = pullSettingsResult;
	settingsRequest.open("GET",urlAppend, true);
	settingsRequest.send();
	
	if(localStorage.getItem('taskName') !== null)
	{
		document.getElementById("nameText").value = localStorage.getItem("taskName");
	}

	if(localStorage.getItem('dueDate') !== null)
	{
		document.getElementById("dueDate").value = localStorage.getItem("dueDate");
	}
	if(localStorage.getItem('dueTime') !== null)
	{
		document.getElementById("dueTime").value = localStorage.getItem("dueTime");
	}
	if(localStorage.getItem('comments') !== null)
	{
		document.getElementById("comments").value = localStorage.getItem("comments");
	}

	
}
	
	function pullSettingsResult()
	{
		if (settingsRequest.readyState == 4)
		{
			
			if (settingsRequest.status == 200)
			{
				document.getElementById("category").innerHTML = settingsRequest.responseText;
				if(localStorage.getItem('taskCategory') !== null)
				{
					document.getElementById("category").value = localStorage.getItem("taskCategory");
				}
            }
            else
            {
                alert("There was a problem retrieving the text file:\n" + settingsRequest.statusText);
            }
		}  
	}
	
		function submitItem() 
		{
			if(document.getElementById("nameText").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add a name for the task";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("nameText").focus();
				return;
			}
			if(document.getElementById("category").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add a category for the task";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("category").focus();
				return;
			}
			
			var urlAppend = "pendingAddEdit.php?taskID=" + localStorage.getItem('taskID');
			urlAppend += "&taskName=" + document.getElementById("nameText").value;
			urlAppend += "&category=" + document.getElementById("category").value;
			urlAppend += "&dueDate=" + document.getElementById("dueDate").value;
			urlAppend += "&dueTime=" + document.getElementById("dueTime").value;
			urlAppend += "&comments=" + document.getElementById("comments").value;
			
			editRequest = new XMLHttpRequest();
			editRequest.open("GET",urlAppend, true);
			editRequest.onreadystatechange = editRequestResult;
			editRequest.send();		
			
		}
		
		function editRequestResult()
		{
			if (editRequest.readyState == 4)
			{
			
				if (editRequest.status == 200)
				{
					localStorage.clear();
					window.location.replace('pendingView.html');
				}
			}	
		}
		
		function reset()
		{
			document.getElementById("nameText").value = "";
			document.getElementById("category").value = "";
			document.getElementById("dueDate").value = "";
			document.getElementById("dueTime").value = "";
			document.getElementById("comments").value = ""
		}
		
		function cancel()
		{
			localStorage.clear();
			window.location.replace('pendingView.html');
		}