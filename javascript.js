//add javscript here
function savejournalentry()

{
    var oldEntry = localStorage.getItem("oldentry");
    var journalEntry = document.getElementById("newentry").value;
    if (oldEntry)
    {
        var entryArray = new Array(oldEntry);
        entryArray.push(journalEntry);
    } else {
        var entryArray = new Array(journalEntry);
    }
	if (journalEntry) 
	{
	//if there is text then it will save if not then it will not save
		localStorage.setItem("oldentry", entryArray);
	    clearEntry();
        location.reload();
	}
}

function clearEntry()
{
    //to save first then clear text from input box
    document.getElementById("newentry").value = " ";
}
window.onload = function()
{
	getOldEntry();
}
function getOldEntry()
{
	var pageId = "oldentry";
    var firstOldEntry = localStorage.getItem("oldentry");
    var oldEntry = firstOldEntry.split(",");
    var text, fLen, i;
fLen = oldEntry.length;
text = "<ul>";
for (i = fLen - 1; i >= 0; i--) {
    text += "<li>" + oldEntry[i] + "</li>";
    var mi = document.createElement("input");
    mi.setAttribute('type', 'text');
    mi.setAttribute('value', oldEntry[i]);
    var form= document.getElementById("entryinbox")
    form.appendChild(mi)
}
}
