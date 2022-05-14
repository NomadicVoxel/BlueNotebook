export function Generate(date) {
	// Clear the calendar
	const DateList = document.querySelector(".calendar ul:last-of-type");
	DateList.innerHTML = "";
	// Then find the starting date
	let WorkingDate = new Date(date);
	WorkingDate.setDate(1);
	WorkingDate.setDate(-WorkingDate.getDay() - 7);

	// We're going to want to label which month the date is associated with.
	let whichMonth = "LastMonth";
	// We'll generate 7 weeks, including a whole week of the previous and next month at least.
	for (let i = 0; i < 49; i++) {
		let cell = document.createElement('li');
		cell.innerText = WorkingDate.getDate();
		WorkingDate.setDate(WorkingDate.getDate() + 1);
		// Highlight this month
		if (WorkingDate.getDate() == 1) {
			console.log("Looking at " + WorkingDate.getDate());
			if (whichMonth == "LastMonth") {
				console.log("Transitioning to ThisMonth.");
				whichMonth = "ThisMonth";
			} else {
				console.log("Transitioning to NextMonth");
				whichMonth = "NextMonth";
			}
		}
		cell.classList.add(whichMonth);
		// Color today's tile
		if ((WorkingDate.getDate() === new Date().getDate()) & (whichMonth == "ThisMonth")) {
			cell.classList.add("Today");
		}
		DateList.appendChild(cell);
	}
}
