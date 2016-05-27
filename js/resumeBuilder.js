
/**
 * bio info
 */

  //header display


//display bio
function displayBio() {
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

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  //for (contact in bio.contacts) {
    //formatting contact info from helper.js
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    //append contact info
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);


      //append internationalize button
      $('#main').append(internationalizeButton);
  //}
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

  //Work Display
function displayWork() {
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

  work.jobs.forEach(function(job) {
    //create new div for work exp
    $("#workExperience").append(HTMLworkStart);
    //concat employer / title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = (formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    //append dates
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    //append description
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  });

}
//call function to display employment information
displayWork();
/*function locationizer(work) {
  var locationArray = [];
  work.jobs.forEach(function(job){
    var newLocation = new job.location;
    locationArray.push(newLocation);

  });
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

  //project display
projects.display = function() {
  var projects = {
      "projects": [{
        "title": "Portfolio",
        "dates": "January 2016",
        "description": "Portfolio Showcasing Previous Work",
        "images": "images/fry.jpg"
      }, {
        "title": "Online Resume",
        "dates": "February 2016",
        "description": "Online Resume",
        "images": "images/fry.jpg"
      }]
    }
    projects.projects.forEach(function(project) {
      //create new div for work exp
      $("#projects").append(HTMLprojectStart);
      //format data
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.images);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    });

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



   //project display
 education.display = function() {
   var education = {
     "schools": [{
       "name": "Metropolitan State University of Denver",
       "degree": "Bachelor",
       "dates": "In Progress",
       "location": "Denver, Colorado",
       "major": ["Computer Science"],
       "url": "www.msudenver.edu"
     }, {
       "name": "Front-End Web Development NanoDegree",
       "degree": "Udacity",
       "dates": "In Progress",
       "location": "Denver, Colorado",
       "major": ["Web Development"],
       "url": "https://profiles.udacity.com/u/dustinlongenecker"
     }, {
       "name": "iOS Application Development NanoDegree",
       "degree": "Udacity",
       "dates": "In Progress",
       "location": "Denver, Colorado",
       "major": ["Web Development"],
       "url": "https://profiles.udacity.com/u/dustinlongenecker"
     }],
     "onlineCourses": [{
       "title": "Introduction to HTML & CSS",
       "school": "Udacity",
       "date": "January 2016",
       "url": "https://udacity.com/u/dustinlongenecker"
     }]
   }
  education.schools.forEach(function(school){
       //create new div for work exp
       $("#education").append(HTMLschoolStart);
       //format data
       var formattedName = HTMLschoolName.replace("%data%", school.name);
       var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
       var formattedName = formattedName.replace("#", school.url);
       var formattedNameDegree =(formattedName + formattedDegree);
       var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
       var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

       var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
       $(".education-entry:last").append(formattedMajor);

       $(".education-entry:last").append(formattedNameDegree);
       $(".education-entry:last").append(formattedDates);
       $(".education-entry:last").append(formattedLocation);

     });
     if (education.onlineCourses.length > 0) {
         $("#education").append(HTMLonlineClasses);

         for (c in education.onlineCourses) {
             var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
             var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
             var formattedSchoolTitle = (formattedOnlineTitle + formattedOnlineSchool);
             $(".online-entry:last").append(formattedSchoolTitle);
             var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].date);
             $(".online-entry:last").append(formattedOnlineDates);
             var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);
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
