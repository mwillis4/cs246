<script src="notesView.js"></script>

<style>
	#allHolder{
		text-align: center;
		margin-top: 20px;
	}
</style>
<link href="innerStyle.css" rel="stylesheet" />
<body onload="loadNotes()">
	<div id="allHolder">

	</div>
	
	<hr>
	
	<div id="buttonHolder">
		<div class="operationButton" id="addButton" onclick="addClick()"><img src="User-Interface-Plus-icon.png"/></div>
		<div class="operationButton" id="editButton" onclick="editClick()"><img src="Computer-Hardware-Restart-icon.png"/></div>
		<div class="operationButton"  id="deleteButton" onclick="deleteClick()"><img src="Programming-Delete-Sign-icon.png"/></div>
	</div>	
	</div>
	
	<div id="noticeHolder">
	<h2 id="notice" >No Item Selected</h2>
	</div>

</body>