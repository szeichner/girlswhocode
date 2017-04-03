function setNewPageNm()
{
	var pageId = "pageTitle";
	var element = document.getElementById(pageId);
	var newPageText = document.getElementById("inputText").value;
	
	if (newPageText)
	{
		element.innerHTML = newPageText;
	}else
	{
		alert("Enter some text first, please!")
	}
}

function resetPageNm()
{
	var pageId = "pageTitle";
	window.location.reload();
}