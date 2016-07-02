	function updateColor()
	{
		document.getElementById("catText").style.background = document.getElementById("colorPick").value;
	}
	
	var settingsRequest;
	
	function loadSettings()
	{	
		document.getElementById("colorPick").value = "#ffffff";
	
		var urlAppend  = "settingsView.php?userID=" + sessionStorage.getItem('userID');
		settingsRequest = new XMLHttpRequest();
		settingsRequest.onreadystatechange = pullSettingsResult;
		settingsRequest.open("GET",urlAppend, true);
		settingsRequest.send();
	}
	
	function pullSettingsResult()
	{
		if (settingsRequest.readyState == 4)
		{
			
			if (settingsRequest.status == 200)
			{
				var allCats = settingsRequest.responseText;
				
				var fullInputString = '<table border=1 style=\"margin: auto; vertical-align:top; textAlign: center; width:60%\" id=\"categoryTable\"><tr><th>Categories</th></tr>' + allCats + '</table>';
				
				document.getElementById("catTableHolder").innerHTML = String(fullInputString);
            }
		}  
	}
	
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
				window.location.replace('settingsView.html');
			}
		}	
	}
	
	function edit()
	{
		if (selectedRow != null)
		{
			
			var rowItems = selectedRow.getElementsByTagName("td");
			
			localStorage.setItem("categoryID", selectedRow.id);
			localStorage.setItem("category", rowItems[0].innerHTML);
			localStorage.setItem("categoryColor", selectedRow.style.backgroundColor);
			window.location.replace('settingsEdit.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}
	
	function deletingCateogry()
	{
		if (selectedRow != null)
		{
			var rowItems = selectedRow.getElementsByTagName("td");
			
			localStorage.setItem("categoryID", selectedRow.id);
			localStorage.setItem("category", rowItems[0].innerHTML);
			window.location.replace('settingsDeleteCheck.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}