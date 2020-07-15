var string =["jepan", "sahil","ruji","shneha", "andikru","indi","Jepu", "jayir", "Jalsa"];


for(i=0; i< string.length ; i++){
var b= string[i];
var n =b.startsWith("j");
var m = b.startsWith("J")
if ( n==true || m == true ) {
	console.log("Goodbye "+ string[i]);

}

else{
	console.log("Hello " + string[i]);
}

}
