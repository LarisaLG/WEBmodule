console.log('And we\'re off');


try {
// try to execute this code
var someVar; 


} catch (err) {
// if there is an exception, run this code
document.getElementById("error_details").innerHTML = 'There should be a paragraph';

} finally {
// this code always gets executed
//document.getElementById("error_details").innerHTML = "finally ";
alert("Finally!");
}