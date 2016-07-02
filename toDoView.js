	function loadList()
	{	
		var urlAppend  = "toDoView.php?toDo=0&userID=" + sessionStorage.getItem('userID');
		allRequest = new XMLHttpRequest();
		allRequest.onreadystatechange = pullAllResult;
		allRequest.open("GET",urlAppend, true);
		allRequest.send();
		
		var urlAppend  = "toDoView.php?toDo=1&userID=" + sessionStorage.getItem('userID');
		todoRequest = new XMLHttpRequest();
		todoRequest.onreadystatechange = pullToDoResult;
		todoRequest.open("GET",urlAppend, true);
		todoRequest.send();
	}
	
	function pullAllResult()
	{
		if (allRequest.readyState == 4)
		{
			
			if (allRequest.status == 200)
			{
				
				var allCats = allRequest.responseText;
				var heading =  '<table border=1 style=\"margin: auto; table-layout:fixed\"><tr><th>Name</th><th>Category</th><th>Due Date</th></tr></table>' 
				
				var fullInputString = heading + "<div id=\"TableBody\"><table border=1 style=\"margin: auto; width:100%; table-layout: fixed; max-height: 10px; overflow-y: auto\" id=\"allTasksList\">" + allCats + '</table></div>';
				
				document.getElementById("allItemsList").innerHTML = String(fullInputString);
            }
		}  
	}
	
	function pullToDoResult()
	{
		if (todoRequest.readyState == 4)
		{
			
			if (todoRequest.status == 200)
			{
				
				var allCats = todoRequest.responseText;
				var heading =  '<table border=1 style=\"margin: auto\"><tr><th>Name</th><th>Category</th><th>Due Date</th></tr>' 
				
				var fullInputString = heading + allCats + '</table>';
				
				document.getElementById("toDoListHolder").innerHTML = String(fullInputString);
            }
		}  
	}
	
	var selectedRow;
	
	function selectRow(item)
	{
		
		if(selectedRow != null)
			selectedRow.style.height = 10;

		selectedRow = item;
		
		selectedRow.style.height = 50;
	}
	
	function addItem()
	{
		var urlAppend  = "toDoAdd.php?taskID=" + selectedRow.id;
		addRequest = new XMLHttpRequest();
		addRequest.onreadystatechange = pullAddResult;
		addRequest.open("GET",urlAppend, true);
		addRequest.send();
	}
	
	function pullAddResult()
	{
		if (addRequest.readyState == 4)
		{
			
			if (addRequest.status == 200)
			{
				location.reload();
            }
		}  
	}
	
	function removeItem()
	{
		var urlAppend  = "toDoRemove.php?taskID=" + selectedRow.id;
		removeRequest = new XMLHttpRequest();
		removeRequest.onreadystatechange = pullRemoveResult;
		removeRequest.open("GET",urlAppend, true);
		removeRequest.send();
	}
	
	function pullRemoveResult()
	{
		if (removeRequest.readyState == 4)
		{
			
			if (removeRequest.status == 200)
			{
				location.reload();
            }
		}  
	}
	
	function clearAll()
	{
		var urlAppend  = "toDoClear.php?userID=" + sessionStorage.getItem('userID');
		clearRequest = new XMLHttpRequest();
		clearRequest.onreadystatechange = pullClearResult;
		clearRequest.open("GET",urlAppend, true);
		clearRequest.send();
	}
	
	function pullClearResult()
	{
		if (clearRequest.readyState == 4)
		{
			
			if (clearRequest.status == 200)
			{
				location.reload();
            }
		}  
	}