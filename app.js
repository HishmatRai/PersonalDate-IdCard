
var div = document.getElementById("div1");
var h1 =document.createElement("h1");
var pdetals = document.createTextNode("Personal Deatils");
h1.appendChild(pdetals);
div.appendChild(h1);


//name
var p = document.createElement("p");
p.setAttribute("style","background:black;color:white")
var text = document.createTextNode("Name :");
var inpu = document.createElement("input");
inpu.setAttribute("size","30px");
inpu.setAttribute("id","inpu");
p.appendChild(text);
p.appendChild(inpu);
div.appendChild(p);

// last name
var p1 = document.createElement("p");
p1.setAttribute("style","background:black;color:white")
var text1 = document.createTextNode("lastName :");
var inpu1 = document.createElement("input");
inpu1.setAttribute("size","30px");
inpu1.setAttribute("id","inpu1");
p1.appendChild(text1);
p1.appendChild(inpu1);
div.appendChild(p1);

//roll no

var p2 = document.createElement("p");
p2.setAttribute("style","background:black;color:white")
var text2 = document.createTextNode("RollNo :");
var inpu2 = document.createElement("input");
inpu2.setAttribute("size","30px");
inpu2.setAttribute("id","inpu2");
p2.appendChild(text2);
p2.appendChild(inpu2);
div.appendChild(p2);

//contact

var p3 = document.createElement("p");
p3.setAttribute("style","background:black;color:white")
var text3 = document.createTextNode("Contact :");
var inpu3 = document.createElement("input");
inpu3.setAttribute("size","30px");
inpu3.setAttribute("id","inpu3");
p3.appendChild(text3);
p3.appendChild(inpu3);
div.appendChild(p3);

//School


var p4 = document.createElement("p");
p4.setAttribute("style","background:black;color:white")
var text4 = document.createTextNode("School :");
var inpu4 = document.createElement("input");
inpu4.setAttribute("size","30px");
inpu4.setAttribute("id","inpu4");
p4.appendChild(text4);
p4.appendChild(inpu4);
div.appendChild(p4);


//prompt

var pro1 = prompt("Enter your name");
var pro2 = prompt("Enter your last name");
var pro3 = prompt("Enter your roll no");
var pro4 = prompt("Enter your contact");
var pro5 = prompt("Enter your school");

//object
var obj = {
    name:pro1,
    lastName:pro2,
    RollNo:pro3,
    Contact:pro4,
    School:pro5,
}
document.getElementById("inpu").value = obj.name;
document.getElementById("inpu1").value = obj.lastName;
document.getElementById("inpu2").value = obj.RollNo;
document.getElementById("inpu3").value = obj.Contact;
document.getElementById("inpu4").value = obj.School;

var newdiv = document.createElement("div");
var newp = document.createElement("p");
var newobj = {
    
}

