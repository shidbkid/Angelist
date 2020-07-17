//Here is my piece of code. Hope you like it !!

var string =["jepan", "sahil","ruji","shneha", "andikru","indi","Jepu", "jayir", "Jalsa"];//Declaration of code

//a for loop to check whether a name starts with j oa not
for(i=0; i< string.length ; i++){
var b= string[i];//storing string[i] into  a variable
var n =b.startsWith("j");//checking if the names starts with 'j'
var m = b.startsWith("J")//checking if the names starts with 'J'
if ( n==true || m == true ) {//conditional statement to checkk if the above statements are true or not.
	console.log("Goodbye "+ string[i]);

}

else{
	console.log("Hello " + string[i]);
}

}
