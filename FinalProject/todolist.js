var addTask = function() {
var task = document.getElementById("inputText1").value;
localStorage.setItem(0,task);
var listElement = document.createElement("li");
listElement.innerHTML="<input type='checkbox' onclick='removeMyChild()'><span>" + task + "</span>";
document.getElementById("unorderedList").appendChild(listElement);
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
var list= document.getElementById("unorderedList")
      var children = list.children;
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
}
function savelist()

{
    var storedTask = localStorage.getItem("unorderedList");
    var currentTask = document.getElementById("inputText1").value;
    if (list)
    {
        var entryArray = new Array(list);
        entryArray.push(list);
    } else {
        var entryArray = new Array(list);
    }
if (list) 
{
//if there is text then it will save if not then it will not save
localStorage.setItem("list", entryArray);
   clearEntry();
        location.reload();
}
}
