import * as DTS from "./DateToString.JS";

export function Generate(date) {
	// Convert input to date object, in case it wasn't one...
	let WorkingDate = new Date(date);
	let Today = new Date();

	// Display working date on page.
	document.querySelector("#WorkingDate").innerText = DTS.GetVerboseDate(WorkingDate);

	const CalendarTable = document.querySelector("#calendar tbody");
	CalendarTable.innerHTML = "";

	// Find the starting date. The first day of the week before the start of the month.
	let DateIndex = WorkingDate; 
	DateIndex.setDate( 1 -6 -DateIndex.getDay() );

	// Before starting the loop to populate the calendar, we'll be tracking which month with this tag. (CSS needs this.)
	let WhichMonth = "LastMonth";
	for (let WeekCounter = 0; WeekCounter < 7; WeekCounter++){
		let row = document.createElement("tr");
		for (let DayCounter = 0; DayCounter < 7; DayCounter++){
			// Create cell
			let cell = document.createElement('td');
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
			row.appendChild(cell);
			// increment date
			DateIndex.setDate(DateIndex.getDate() +1);
		}
		CalendarTable.appendChild(row);
	}
}