var addTask = function() {
	var task = document.getElementById("inputText1").value;
	localStorage.setItem(0,task);
}


var pageRender= function() {
	if(localStorage.getItem(0)!==null){
		var savedTask = localStorage.getItem(0);
		var listElement = "<li><input type='checkbox' onclick='removeChild()'>
				<span>" + savedTask + "</span>";
		document.getElementByTagName("ul").appendChild(listElement);
	}
}

