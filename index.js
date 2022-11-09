const pi=3.14159;
let x=parseInt(prompt("introduce x: "))
var aux= pi/x
var t1=(Math.cos(x/2))**2
var t2=(Math.tan(x)+Math.sin(x))/(2*Math.tan(x))
if(t1==t2){
	document.write("<h3>La indentidad es correcta</h3>")
}else{
	document.write("<h3>La identidad no es correcta</h3>")
}