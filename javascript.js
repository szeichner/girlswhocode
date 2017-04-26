//add javscript here
function savejournalentry() 
{
	var journalEntry = document.getElementById("newentry").value;
	
	if (journalEntry) 
	{
		
	//if there is text then it will save if not then it will not save
		localStorage.setItem("oldentry", journalEntry);
	    clear();	
	}
}

function clear()
{
    //to save first then clear text from input box
    document.getElementById("newentry").value = "hello";
}
