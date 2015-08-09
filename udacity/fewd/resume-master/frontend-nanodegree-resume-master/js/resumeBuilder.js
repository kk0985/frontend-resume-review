var name = "Kris Klingberg"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["MS Office", "JS", "teaching", "sales"];

var bio - {
	"name" : "Kris Klingberg",
	"age" : 53,
	"skills" : skills
};

$("#main").append(bio.name);


