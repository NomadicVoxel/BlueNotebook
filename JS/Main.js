import * as DateToString from "./DateToString.JS";
import * as Calendar from "./Calendar.JS";

let Today = new Date();
let WorkingFile = Today;

function init(WorkingFile){
	if(WorkingFile.type != "string"){
		Calendar.Generate(WorkingFile.toISOString());
	} else{Calendar.Generate(Today);}

}

init(WorkingFile);