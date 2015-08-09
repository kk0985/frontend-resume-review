var name = "Kris Klingberg"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = "678-427-1056"
var formattedmobile = HTMLmobile.replace("%data%", mobile);

var email = "kris.klingberg@gmail.com"
var formattedemail = HTMLemail.replace("%data%", email);

var github = "kk0985"
var formattedgithub = HTMLgithub.replace("%data%", github);

var twitter = "@kkling01"
var formattedtwitter = HTMLtwitter.replace("%data%", twitter);

var locale = "Atlanta"
var formattedlocation = HTMLlocation.replace("%data%", locale);

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);


var pic = "images/me.jpg"
var formattedbioPic = HTMLbioPic.replace("%data%", pic);

var message = "Hello World!"
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", message);

$("#header").append(formattedbiopic);
$("#header").append(formattedwelcomemessage);
