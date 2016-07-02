		function loading()
		{
			if(localStorage.getItem('nameText') !== null)
			{
				document.getElementById("nameText").value = localStorage.getItem("nameText");
			}
			if(localStorage.getItem('contentsText') !== null)
			{
				document.getElementById("contentsText").value = localStorage.getItem("contentsText");
			}
		}
		
		function submitItem() 
		{
			if(document.getElementById("nameText").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add a name for the note";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("nameText").focus();
				return;
			}
			if(document.getElementById("contentsText").value === "")
			{
				document.getElementById("notice").innerHTML = "Please add some contents to the note";
				document.getElementById("notice").style.visibility = "visible";
				document.getElementById("category").focus();
				return;
			}
			
			if (localStorage.getItem('taskName') === null && localStorage.getItem('contentsText') === null)
			{
				var urlAppend = "noteAdd.php?userID=" + sessionStorage.getItem('userID');
				urlAppend += "&noteName=" + document.getElementById("nameText").value;
				urlAppend += "&contents=" + document.getElementById("contentsText").value;
			
				addRequest = new XMLHttpRequest();
				addRequest.open("GET",urlAppend, true);
				addRequest.onreadystatechange = addRequestResult;
				addRequest.send();		
			}
			else
			{
				var urlAppend = "noteEdit.php?noteID=" + localStorage.getItem('noteID');
				urlAppend += "&noteName=" + document.getElementById("nameText").value;
				urlAppend += "&contents=" + document.getElementById("contentsText").value;
			
				editRequest = new XMLHttpRequest();
				editRequest.open("GET",urlAppend, true);
				editRequest.onreadystatechange = editRequestResult;
				editRequest.send();	
			}
		}
		
		function addRequestResult()
		{
			if (addRequest.readyState == 4)
			{
			
				if (addRequest.status == 200)
				{
					localStorage.clear();
					window.location.replace('notesView.html');
				}
			}	
		}
		
		function editRequestResult()
		{
			if (editRequest.readyState == 4)
			{
			
				if (editRequest.status == 200)
				{
					localStorage.clear();
					window.location.replace('notesView.html');
				}
			}	
		}
		
		function reset()
		{
			document.getElementById("nameText").value = "";
			document.getElementById("contentsText").value = ""
		}
		
		function cancel()
		{
			localStorage.clear();
			window.location.replace('notesView.html');
		}