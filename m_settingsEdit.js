	function updateColor()
	{
		document.getElementById("catText").style.background = document.getElementById("colorPick").value;
	}
		
	function componentToHex(c) 
	{
		var myInt = parseInt(c);
		
		var hex = myInt.toString(16)
		
		if(hex.length == 1)
		{
			hex = "0" + hex;
		}
			
		return hex;
	}

	function rgbToHex(r, g, b) 
	{
		var hexString = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		
		return hexString
	}
	
	function createRGB (rgbValue)
	{
		rgb = rgbValue.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		
		var hexString = rgbToHex(rgb[1], rgb[2], rgb[3]);
		
		return hexString;
	}
	
	function loadSettings()
	{	
		var backColor = createRGB(localStorage.getItem("categoryColor"));
		
		document.getElementById("colorPick").value = backColor;	
		document.getElementById("catText").value = localStorage.getItem("category");
		document.getElementById("catText").style.background = backColor;
	}
	
	function clearBoxes()
	{
		document.getElementById("catText").value = "";
		document.getElementById("colorPick").value = "#ffffff";
		document.getElementById("catText").style.background = "#ffffff";
	}

	function cancelEdit()
	{
		window.location.replace('m_settingsView.html');
	}
	
	function add()
	{
		var urlAppend = "settingsEdit.php?categoryID=" + localStorage.getItem('categoryID');
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
				window.location.replace('m_settingsView.html');
			}
		}	
	}
	