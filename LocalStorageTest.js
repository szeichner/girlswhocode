function setNewPageNm()
{
	var pageId = "pageTitle";
	var element = document.getElementById(pageId);
	var newPageText = document.getElementById("inputText").value;
	
	if (newPageText)
	{
		element.innerHTML = newPageText;
		localStorage.setItem(pageId, newPageText);
	}else
	{
		alert("Enter some text first, please!")
	}
}

function tryGetStoredPageNm()
{
	var pageId = "pageTitle";
	var newPageText = localStorage.getItem(pageId);

	if (newPageText)
	{
		document.getElementById(pageId).innerHTML = newPageText;
	}
}

function resetPageNm()
{
	var pageId = "pageTitle";
	localStorage.removeItem(pageId);
	window.location.reload();
}

window.onload = function()
{
	tryGetStoredPageNm();
}