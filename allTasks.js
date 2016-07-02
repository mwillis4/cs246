var selectedRow
	
	function selectRow(item)
	{
		if(selectedRow != null)
		{
			selectedRow.style.height = 10;
		}
		
		selectedRow = item;
		
		item.style.height = 50;
	}
	
	function addClick()
	{
		localStorage.clear();
		window.location.replace('addEdit.html');
	}
	
	function editClick()
	{
		if (selectedRow != null)
		{
			var rowItems = selectedRow.getElementsByTagName("td");
			
			localStorage.setItem("taskID", selectedRow.id);
			localStorage.setItem("taskName", rowItems[0].innerHTML);
			localStorage.setItem("taskCategory", rowItems[1].id);
			
			var fullDuedate = rowItems[2].getElementsByTagName("div");
			
			localStorage.setItem("dueDate", fullDuedate[0].innerHTML);
			localStorage.setItem("dueTime", fullDuedate[1].innerHTML);
			localStorage.setItem("comments", rowItems[3].innerHTML);
			window.location.replace('addEdit.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}
	
	function deleteClick()
	{
		if (selectedRow != null)
		{
			var rowItems = selectedRow.getElementsByTagName("td");
			
			
			localStorage.setItem("taskName", rowItems[0].innerHTML);
			localStorage.setItem("taskCategory", rowItems[1].innerHTML);
			
			var fullDuedate = rowItems[2].getElementsByTagName("div");
		
			localStorage.setItem("taskID", selectedRow.id);
			localStorage.setItem("dueDate", fullDuedate[0].innerHTML);
			localStorage.setItem("dueTime", fullDuedate[1].innerHTML);
			localStorage.setItem("comments", rowItems[3].innerHTML);
			window.location.replace('deleteCheck.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}
	
	function pendingClick()
	{
		if (selectedRow != null)
		{
			var rowItems = selectedRow.getElementsByTagName("td");
			
			localStorage.setItem("taskID", selectedRow.id);
			
			localStorage.setItem("taskName", rowItems[0].innerHTML);
			localStorage.setItem("taskCategory", rowItems[1].innerHTML);
			
			var fullDuedate = rowItems[2].getElementsByTagName("div");
			
			localStorage.setItem("dueDate", fullDuedate[0].innerHTML);
			localStorage.setItem("dueTime", fullDuedate[1].innerHTML);
			localStorage.setItem("comments", rowItems[3].innerHTML);
			window.location.replace('pendingCheck.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}
	
	function loadAllTasks()
	{	
		
		var urlAppend  = "allTasks.php?userID=" + sessionStorage.getItem('userID');
		allTasksRequest = new XMLHttpRequest();
		allTasksRequest.onreadystatechange = pullTasksResult;
		allTasksRequest.open("GET",urlAppend, true);
		allTasksRequest.send();
	}
	
	function pullTasksResult()
	{
		if (allTasksRequest.readyState == 4)
		{
			
			if (allTasksRequest.status == 200)
			{
				var allCats = allTasksRequest.responseText;
				
				var heading =  '<table border=1 style=\"margin: auto; width:100%; height: 20px; table-layout: fixed\" id=\"allTasksList\"><tr><th style=\"width: 20%\">Name</th><th style=\"width: 20%\">Category</th><th style=\"width: 165px\">Due Date</th><th>Comments</th></tr></table>' ;
				
				var fullInputString = heading + "<div id=\"TableBody\"><table border=1 style=\"margin: auto; width:100%; table-layout: fixed\" id=\"allTasksList\">" + allCats + '</table></div>';
				
				document.getElementById("TasksHolder").innerHTML = String(fullInputString);
            }
		}  
	}