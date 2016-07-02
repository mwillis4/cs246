var selectedRow
	
function selectRow(item)
{
		
	if(selectedRow != null)
		selectedRow.style.height = 10;
		
	selectedRow = item;
		
	selectedRow.style.height = 50;
}

function editClick() 
{
		if (selectedRow != null)
		{
			localStorage.setItem("taskID", selectedRow.id);
			var rowItems = selectedRow.getElementsByTagName("td");
			
			
			localStorage.setItem("taskName", rowItems[0].innerHTML);
			localStorage.setItem("taskCategory", rowItems[1].id);
			
			var fullDuedate = rowItems[3].getElementsByTagName("div");
			
			localStorage.setItem("dueDate", fullDuedate[0].innerHTML);
			localStorage.setItem("dueTime", fullDuedate[1].innerHTML);
			localStorage.setItem("comments", rowItems[4].innerHTML);
			window.location.replace('pendingAddEdit.html');
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
		localStorage.setItem("taskID", selectedRow.id);
		var rowItems = selectedRow.getElementsByTagName("td");
		
		localStorage.setItem("taskName", rowItems[0].innerHTML);
		localStorage.setItem("taskCategory", rowItems[1].innerHTML);
		
		var fullDuedate = rowItems[3].getElementsByTagName("div");
		
		localStorage.setItem("dueDate", fullDuedate[0].innerHTML);
		localStorage.setItem("dueTime", fullDuedate[1].innerHTML);
		localStorage.setItem("comments", rowItems[4].innerHTML);
		window.location.replace('pendingDeleteCheck.html');
	}
	else
	{
		localStorage.clear();
		document.getElementById("noticeHolder").style.visibility = "visible";
	}
}

	function loadPending()
	{	
		var urlAppend  = "pendingView.php?userID=" + sessionStorage.getItem('userID');
		pendingRequest = new XMLHttpRequest();
		pendingRequest.onreadystatechange = pullPendingResult;
		pendingRequest.open("GET",urlAppend, true);
		pendingRequest.send();
	}
	
	function pullPendingResult()
	{
		if (pendingRequest.readyState == 4)
		{
			
			if (pendingRequest.status == 200)
			{
				var allCats = pendingRequest.responseText;
				
				var heading =  '<table border=1 style=\"margin: auto; table-layout: fixed\"><tr><th style=\"width: 20%\" >Name</th><th style=\"width: 20%\" >Category</th><th style=\"width: 200px\">Date Completed</th><th style=\"width: 165px\" >Due Date</th><th>Comments</th></tr>' 
				
				var fullInputString = heading + allCats + '</table>';
				
				document.getElementById("pendingHolder").innerHTML = String(fullInputString);
            }
		}  
	}