var elUserName=document.getElementById('username'); //get username element
elUserName.onblur=checkUsername; // When it loses focus call checkuserName()
function checkUsername(){
	var Msg=document.getElementById('username'); //get username element
	
	if (this.value.length<5){  // If username shorter than assigned value
		
		document.getElementById('feedback').innerHTML='Name is too short!!!';  // Set msg
		}else{
			document.getElementById('feedback').innerHTML='Well done, Student'; // Set another msg
		
	}
}