
function myApplication() {
}

myApplication.prototype.setNote = function(note) {
	this.notes.push(note);
	SetAllData(this.notes);
}

myApplication.prototype.deleteNote = function(id) {
	var i = 0;
	for(let item of setup.notes){
		if(item.id == id) {
			setup.notes.splice(i,1);
			break;
		}
		i++;
	}
	SetAllData(this.notes);
}

myApplication.prototype.getAllNotes = function() {
	this.notes = GetAllData();
	return this.notes;
}





// Single level object
var toDoData = function(title, description, status) {
	this.id = Math.floor(1000 + Math.random() * 9000);
	this.title = title;
	this.description = description;
	this.status = status;
};

toDoData.prototype.save = function() {
	var check = 0;
	for (let item of setup.notes) {
		if(this.id == item.id){
			item.title = this.title;
			item.description = this.description;
			item.status = this.status;
			item.time = this.time;
			check = 1;
			SetAllData(setup.notes);
			break;
		}
	}
	if(check == 0){
		this.time = Date();
		setup.setNote(this);
	}
	
	// setup.getAllNotes();
}

// List of data
// var totalData = [];
var setup = new myApplication();

function init() {
	// totalData = GetAllData();
	setup.getAllNotes();
}

// function addData(data) {
// 	data.time = Date();
// 	console.log('Adding data: ' + JSON.stringify(data));
// 	totalData.push(data);
// 	storeData();
// }

function getDataByID(id) {
	for(let item of setup.notes){
		if(item.id == id) {
			return item;
		}
	}
	return null;
}


function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// function editData(data){
// 	for(let item of totalData){
// 		if(item.id == data.id)
// 		{
// 			item.title = data.title;
// 			item.description = data.description;
// 			item.time = Date();
// 			// item.status = data.status;
// 			break;
// 		}
// 	}
// 	storeData();
// }

// function deleteData(id) {
// 	var i = 0;
// 	for(let item of setup.notes){
// 		if(item.id == id) {
// 			setup.notes.splice(i,1);
// 			break;
// 		}
// 		i++;
// 	}
// 	storeData();
// }

// function getAllData() {
// 	console.log('Getting all data' + JSON.stringify(totalData));
// 	return totalData;
// }

// function storeData() {
// 	SetAllData(totalData);
// }