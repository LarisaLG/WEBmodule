 //declare an object
var hotel = { 
	name: 'Quay',
	rooms: 40,
	booked: 25,
	gym:true,
	roomTypes: ['twin', 'double', 'suite'],
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var elName=document.getElementById('hotelName'); //get element by Id
elName.textContent=hotel.name; //assign value 

var elRooms=document.getElementById('rooms'); //get element by Id
elRooms.textContent=hotel.checkAvailability();//call function and get value 


