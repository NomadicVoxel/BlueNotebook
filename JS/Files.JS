import * as Calendar from "./Calendar.JS";

export function load(title){
	Calendar.Generate(title);
}

export function about(){
	let AboutDialog = document.querySelector("dialog#about");
	AboutDialog.showModal();
}

export function exportPage(){
	let Entry = document.querySelector("textarea#EntryText");
	let content = Entry.value;
	

	// Download content by making a "link" to the file contents. 
	let link = document.createElement("a");
	link.href = window.URL.createObjectURL(new Blob([Content],{type:"text/plain"}));
	link.download="BlueNotebook.txt";
	link.click();
}

