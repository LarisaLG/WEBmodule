



function checkUsername() {      // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element by Id
  if (this.value.length < 5) {                        
    elMsg.textContent = 'Username must be 5 characters or more';  
  } else {                                            
    elMsg.textContent = '';    // Clear message
  }
}

var elUsername = document.getElementById('username'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
