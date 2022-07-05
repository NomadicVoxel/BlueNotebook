import * as DTS from "./DateToString.JS";
export function Generate(date) {
	// Convert input to date object, in case it wasn't one...
	let WorkingDate = new Date(date);
	let Today = new Date();

	// Display working date on page.
	document.querySelector("#WorkingDate").innerText = DTS.GetVerboseDate(WorkingDate);

	// Blank the calendar
	const CalendarTable = document.querySelector("#calendar tbody");
	CalendarTable.innerHTML = "";

	// Find the starting date. The first day of the week before the start of the month.
	let DateIndex = WorkingDate; 
	DateIndex.setDate( 1 -(13 -DateIndex.getDay()) );
	
	// Before starting the loop to populate the calendar, we'll be tracking which month with this tag. (CSS needs this.)
	let WhichMonth = "LastMonth";
	for (let WeekCounter = 0; WeekCounter < 7; WeekCounter++){
		let row = document.createElement("tr");
		for (let DayCounter = 0; DayCounter < 7; DayCounter++){
			// Create table cell. But, it has to contain a Time tag so I can have a machine readable datetime attribute.
			let cell = document.createElement('td');
			let label = document.createElement("time");
			label.innerText = DateIndex.getDate();
			label.dateTime = DateIndex.toDateString();
			cell.appendChild(label);
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
			if ((label.dateTime == new Date().toDateString())){
				cell.classList.add("Today");
			}
			row.appendChild(cell);
			// increment date
			DateIndex.setDate(DateIndex.getDate() +1);
		}
		CalendarTable.appendChild(row);
	}
}