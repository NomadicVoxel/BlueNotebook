import * as DTS from "./DateToString.JS";

export function Generate(date) {
	// Convert input to date object, in case it wasn't one...
	let WorkingDate = new Date(date);
	let Today = new Date();

	// Display working date on page.
	document.querySelector("output.WorkingDate").innerText = DTS.GetVerboseDate(WorkingDate);

	const DateList = document.querySelector(".calendar ul:last-of-type");
	DateList.innerHTML = "";

	// Find the starting date. The first day of the week before the start of the month.
	let DateIndex = WorkingDate; 
	DateIndex.setDate( 1 -6 -DateIndex.getDay() );

	// Before starting the loop to populate the calendar, we'll be tracking which month with this tag. (CSS needs this.)
	let WhichMonth = "LastMonth";
	for (let counter = 0; counter < 49; counter++){
		// Create cell
		let cell = document.createElement('li');
		cell.innerText = DateIndex.getDate();
		// label this month.
		if(DateIndex.getDate()==1){
			if(WhichMonth == "LastMonth") { 
				WhichMonth = "ThisMonth";
			} else{
				WhichMonth = "NextMonth";
			}
		}
		cell.classList.add(WhichMonth);
		// Label today
		if ((WorkingDate.getDate() === new Date().getDate()) & (WhichMonth == "ThisMonth")){
			cell.classList.add("Today");
		}
		DateList.appendChild(cell);
		// increment date
		DateIndex.setDate(DateIndex.getDate() +1);
	}
}