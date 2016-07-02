		var loginRequest;
	
		function loginClick()
		{
			var urlAppend = "login.php?userName=" + document.getElementById("userName").value;
			urlAppend += "&password=" + document.getElementById("password").value;
				
			loginRequest = new XMLHttpRequest();
			loginRequest.open("GET",urlAppend, true);
			loginRequest.onreadystatechange = loginRequestResult;
			loginRequest.send();		
		}
		
		function loginRequestResult()
		{
			if (loginRequest.readyState == 4)
			{
			
				if (loginRequest.status == 200)
				{
					if (loginRequest.responseText === "")
					{
						document.getElementById("badMember").innerHTML = "Invalid Password";
						document.getElementById("newUserName").focus();
					}
					else
					{
						sessionStorage.setItem('userID', loginRequest.responseText);
						sessionStorage.setItem('userName', document.getElementById("userName").value);
						window.location.replace('mainpage.php');

					}
				}
			}	  
		}
		
		
		function newMember()
		{
			if(document.getElementById("newPassword").value !== document.getElementById("confirmPassword").value)
			{
				document.getElementById("badNewMember").innerHTML = "Passwords do not match";
			}
			else
			{
				var urlAppend = "loginPage.php?userName=" + document.getElementById("newUserName").value;
				urlAppend += "&password=" + document.getElementById("newPassword").value;
			
				addRequest = new XMLHttpRequest();
				addRequest.open("GET",urlAppend, true);
				addRequest.onreadystatechange = addRequestResult;
				addRequest.send();		
			}
		}
		
		function addRequestResult()
		{
			if (addRequest.readyState == 4)
			{
			
				if (addRequest.status == 200)
				{
					if (addRequest.responseText === "0")
					{
						document.getElementById("badNewMember").innerHTML = "Username is already in use. Please create a new username";
						document.getElementById("newUserName").focus();
					}
					else
					{
						sessionStorage.setItem('userID', addRequest.responseText);
						sessionStorage.setItem('userName', document.getElementById("newUserName").value);
						window.location.replace('newCategory.html');						
					}
				}
			}	  	
		}