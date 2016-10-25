

function Hotel (name, rooms, booked){
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function() { 
   	return this.rooms - this.booked;
};
}


var quayHotel = new Hotel('Quay', 40, 25);

var parkHotel = new Hotel('Park', 120, 77);


var elName1=document.getElementById('hotel1');
elName1.textContent=quayHotel.name +" rooms : " + quayHotel.checkAvailability();

var elName2=document.getElementById('hotel2');
elName2.textContent=parkHotel.name +" rooms : " + parkHotel.checkAvailability();

