function GetAllData(){
	//alert('Data fetched');
	var items = localStorage.getItem('ToDo');
	return items ? JSON.parse(items) : [];
}
function SetAllData(value){
	//alert('Data Saved');
	localStorage.setItem('ToDo', JSON.stringify(value));
}

function ResetAllData(value){
	//alert('Data Saved');
	localStorage.clear('ToDo');
}