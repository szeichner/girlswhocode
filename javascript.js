function savejournalentry() 
{
	var journalEntry = document.getElementById(lastentry).value;
	
	if (journalEntry) 
	{
		
	//if there is text then it will save if not then it will not save
		localStorage.setitem("oldentry", journalEntry);
		
	}
}
