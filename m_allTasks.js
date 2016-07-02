var selectedRow
	
	function selectRow(item)
	{
		if(selectedRow != null)
		{
			selectedRow.style.height = 40;
		}
		
		selectedRow = item;
		
		item.style.height = 65;
	}
	
	function addClick()
	{
		localStorage.clear();
		window.location.replace('m_addEdit.html');
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
			window.location.replace('m_addEdit.html');
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
			window.location.replace('m_deleteCheck.html');
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
				
				var heading =  '<table border=1 style=\"margin: auto;  table-layout: fixed\" id=\"allTasksList\"><tr><th style=\"width: 20%\">Name</th><th style=\"width: 0px\">Category</th><th style=\"width: 0px;\">Due Date</th><th style="width: 0px;">Comments</th></tr>' ;
				
				var fullInputString = heading + "<tbody>" + allCats + '</tbody></table>';
				
				document.getElementById("TasksHolder").innerHTML = String(fullInputString);
            }
		}  
	}