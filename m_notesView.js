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
		window.location.replace('m_noteAddEdit.html');
	}
	
	function editClick()
	{
		if (selectedRow != null)
		{
			var rowItems = selectedRow.getElementsByTagName("td");
		
			localStorage.setItem("noteID", selectedRow.id);
			localStorage.setItem("nameText", rowItems[0].innerHTML);
			localStorage.setItem("contentsText", rowItems[2].innerHTML);
			window.location.replace('m_noteAddEdit.html');
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
				
			localStorage.setItem("noteID", selectedRow.id);
			localStorage.setItem("nameText", rowItems[0].innerHTML);
			localStorage.setItem("contentsText", rowItems[2].innerHTML);
			window.location.replace('m_noteDeleteCheck.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}	
	
		function loadNotes()
	{	
		var urlAppend  = "notesView.php?userID=" + sessionStorage.getItem('userID');
		notesRequest = new XMLHttpRequest();
		notesRequest.onreadystatechange = pullNotesResult;
		notesRequest.open("GET",urlAppend, true);
		notesRequest.send();
	}
	
	function pullNotesResult()
	{
		if (notesRequest.readyState == 4)
		{
			
			if (notesRequest.status == 200)
			{
				var allCats = notesRequest.responseText;
				
				var fullInputString = '<table border=1 style=\"margin: auto; table-layout:fixed\"><tr><th style="width: 20%">Name</th><th style=\"width: 0px\"></th> <th style=\"width: 0px\"></th></tr>' + allCats + '</table>';
				
				document.getElementById("allHolder").innerHTML = String(fullInputString);
            }
		}  
	}