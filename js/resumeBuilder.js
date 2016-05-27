
/**
 * bio info
 */
 var bio = {
    "name": "DLL",
    "role": "Web Developer",
    "contacts": {
      "mobile": "xxx-xxx-xxxx",
      "email": "email.com",
      "github": "https://github.com/dustin-longenecker",
      "twitter": "twitter",
      "location": "Denver, CO"
    },
    "welcomeMessage": "This is my welcome message!",
    "skills": ["HTML&CSS", "JavaScript", "JQuery", "JSON", "Bootstrap"],
    "biopic": "images/fry.jpg"
    
  }
  //header display


//display bio
function displayBio() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  for (contact in bio.contacts) {
    //formatting contact info from helper.js
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.contacts.biopic);

    //append contact info
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedBioPic);

    //inName
    function inName(name) {

      name = name.trim().split(" ");
      console.log(name);
      name[1] = name[1].toUpperCase();
      name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

      return name[0] + " " + name[1];
    }
      //append internationalize button
      $('#main').append(internationalizeButton);
  }
  $("#skillsdiv").append(HTMLskillsStart);
  for (var i = 0, l = bio.skills.length; i < l; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#skillsdiv").append(formattedMsg);
}
//skills display


//call function to display bio info
displayBio();
/**
 *end bio info
  end bio display
*/

/**
 *Work Information
 */
var work = {
    //jobs array within work Object
    "jobs": [{
      "employer": "Udacity",
      "title": "Entry-Level Front-End Web Developer",
      "location": "denver, co",
      "dates": "Current",
      "description": "Actively seeking employment in related technology field!"
    }]
  }
  //Work Display
function displayWork() {
  for (job in work.jobs) {
    //create new div for work exp
    $("#workExperience").append(HTMLworkStart);
    //concat employer / title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = (formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedEmployerTitle);
    //append dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    //append description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }

}
//call function to display employment information
displayWork();
/**function locationizer(work) {
  var locationArray = [];
  for(job in work.jobs){
    var newLocation = new work.jobs[job].location;
    locationArray.push(newLocation);

  }
  return locationArray;
}
console.log(locationizer(work));
/**
 *end work information
  end work display
*/

/**
 *project Information
 */
var projects = {
    "projects": [{
      "title": "Portfolio",
      "dates": "January 2016",
      "description": "Portfolio Showcasing Previous Work",
      "images": "none"
    }, {
      "title": "Online Resume",
      "dates": "February 2016",
      "description": "Online Resume",
      "images": "none"
    }]
  }
  //project display
projects.display = function() {
    for (i in projects.projects) {
      //create new div for work exp
      $("#projects").append(HTMLprojectStart);
      //format data
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    }

  };
  //call function to display project information
projects.display();
/**
 *end project information
  end project display
*/

/**
 *schools information
 */

 var education = {
   "schools": [{
     "name": "Metropolitan State University of Denver",
     "degree": "Bachelor",
     "dates": "In Progress",
     "location": "Denver, Colorado",
     "major": "Computer Science",
     "url": "www.msudenver.edu"
   }, {
     "name": "Front-End Web Development NanoDegree",
     "degree": "Udacity",
     "dates": "In Progress",
     "location": "Denver, Colorado",
     "major": "Web Development"
   }, {
     "name": "iOS Application Development NanoDegree",
     "degree": "Udacity",
     "dates": "In Progress",
     "location": "Denver, Colorado",
     "major": "Web Development"
   }],
   "online": [{
     "title": "Introduction to HTML & CSS",
     "school": "Udacity",
     "dates": "January 2016",
     "url": "https://udacity.com/u/dustinlongenecker"
   }]
 }

   //project display
 education.display = function() {
     for (s in education.schools) {
       //create new div for work exp
       $("#education").append(HTMLschoolStart);
       //format data
       var formattedName = HTMLschoolName.replace("%data%", education.schools[s].name);
       var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
       var formattedNameDegree =(formattedName + formattedDegree);
       var formattedDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
       var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
       var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].major);
       $(".education-entry:last").append(formattedNameDegree);
       $(".education-entry:last").append(formattedDates);
       $(".education-entry:last").append(formattedLocation);
       $(".education-entry:last").append(formattedMajor);
     }
     if (education.online.length > 0) {
         $("#education").append(HTMLonlineClasses);

         for (c in education.online) {
             var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[c].title);
             var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[c].school);
             var formattedSchoolTitle = (formattedOnlineTitle + formattedOnlineSchool);
             $(".online-entry:last").append(formattedSchoolTitle);
             var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[c].dates);
             $(".online-entry:last").append(formattedOnlineDates);
             var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[c].url);
             $(".online-entry:last").append(formattedOnlineURL);
         }
     }
   };
   //call function to display project information
 education.display();



/**
 *end schools information
  end schools display
  end online classes display
*/



$("#mapDiv").append(googleMap);



/** begin function list **/
//locationizer





/** end function list **/
