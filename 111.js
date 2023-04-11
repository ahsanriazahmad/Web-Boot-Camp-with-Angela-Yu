var name = prompt("what is your name");
var nameLength = name.length;
var upperName = name.slice(0,1).toUpperCase() + name.slice(1,nameLength).toLowerCase();
alert("Hello " + upperName)