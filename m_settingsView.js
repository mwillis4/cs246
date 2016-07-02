	var settingsRequest;
	
	function loadSettings()
	{	
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
			selectedRow.style.height = 40;
		}
		
		selectedRow = item;
		
		item.style.height = 65;
	}
	
	
	function add()
	{
		window.location.replace('m_settingsAdd.html');
	}
	
	function edit()
	{
		if (selectedRow != null)
		{
			
			var rowItems = selectedRow.getElementsByTagName("td");
			
			localStorage.setItem("categoryID", selectedRow.id);
			localStorage.setItem("category", rowItems[0].innerHTML);
			localStorage.setItem("categoryColor", selectedRow.style.backgroundColor);
			window.location.replace('m_settingsEdit.html');
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
			window.location.replace('m_settingsDeleteCheck.html');
		}
		else
		{
			localStorage.clear();
			document.getElementById("noticeHolder").style.visibility = "visible";
		}
	}