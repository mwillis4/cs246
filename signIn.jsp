<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
	<form method="post" action="login">
		<table>
			<tr>
    			<td><label for="user">Username:</label></td>
        		<td><input type="text" id="user" name="user"></input></td>
        	</tr>
        	<tr>
        		<td><label for="pass">Password:</label></td>
        		<td><input type="password" id="pass" name="pass"></input></td>
        	</tr>
        </table>
        <input type="submit" value="Login" />
    </form>
</body>
</html>