<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>New Post</title>
</head>
<body>
	<form method="post" action="createPost">
    	<table>
			<tr>
    			<td><label for="subject">Subject:</label></td>
        		<td><input type="text" id="subject" name="subject"></input></td>
        	</tr>
        	<tr>
        		<td><label for="post">Password:</label></td>
        		<td><textarea id="post" name="post"></textarea></td>
        	</tr>
        </table>
        <input type="submit" value="Submit" />
    </form>
    <a href="allPosts.jsp">See All Posts</a>
</body>
</html>