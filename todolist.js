var addTask = function() {
	var task = document.getElementById("inputText1").value;
	localStorage.setItem(0,task);
}


var pageRender= function() {
	if(localStorage.getItem(0)!==null){
		var savedTask = localStorage.getItem(0);
		var listElement = document.createElement("li");
		listElement.innerHTML="<input type='checkbox' onclick='removeMyChild()'><span>" + savedTask + "</span>";
		document.getElementById("unorderedList").appendChild(listElement);
		
	}
}


var removeMyChild= function() {
			var listElement= document.getElementById("unorderedList")

			removeMyChild.parentNode.removeMyChild("listElement")
}