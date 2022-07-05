import * as DTS from "./DateToString.JS";
import * as Calendar from "./Calendar.JS";

let Today = new Date();
let WorkingFile = DTS.GetVerboseDate(Today);

function init(date){
	Calendar.Generate(date);
}

init(WorkingFile);
