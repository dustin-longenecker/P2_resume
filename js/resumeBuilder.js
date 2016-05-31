/**
 * bio info
 */

//header display


//display bio
var bio = {
    "name": "DLL",
    "role": "Web Developer",
    "contacts": {
        "mobile": "303-518-3555",
        "email": "dustin-longenecker@outlook.com",
        "github": "https://github.com/dustin-longenecker",
        "twitter": "twitter",
        "location": "Denver, CO"
    },
    "welcomeMessage": "Enthusiastic developer interested in aquiring further knowledge, practice, and creativity with web technologies!",
    "skills": ["HTML&CSS", "JavaScript", "JQuery", "JSON", "AJAX", "Bootstrap", "RubyOnRails", "Wordpress", "PHP", "Sinatra", "ActiveRecord", "SQL/PostgreSQL/mySQL"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
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
        $("#header").prepend(formattedBioPic);
        //append internationalize button
        $('#main').append(internationalizeButton);

        $("#skillsdiv").append(HTMLskillsStart);
        for (var i = 0, l = bio.skills.length; i < l; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#skillsdiv").append(formattedMsg);
    }
};

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
        "location": "Denver, Co",
        "dates": "Current",
        "description": "Actively seeking employment in related technology field!"
    }],
    "display": function() {
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
};


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
        "images": ["images/fry.jpg"]
    }, {
        "title": "Online Resume",
        "dates": "February 2016",
        "description": "Online Resume",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "title": "Arcade Game",
        "dates": "June 2016",
        "description": "Replica Frogger-Like game created using HTML-CSS, HTML5, XML, JavaScript.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "title": "Web Optimization",
        "dates": "June 2016",
        "description": "Online Resume",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "title": "Online Resume",
        "dates": "February 2016",
        "description": "Online Resume",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }],
    "display": function() {

        projects.projects.forEach(function(project) {
            //create new div for work exp
            $("#projects").append(HTMLprojectStart);
            //format data
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

        });

    }
};
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
        "majors": ["Computer Science"],
        "url": "www.msudenver.edu"
    }, {
        "name": "Udacity",
        "degree": "NanoDegree",
        "dates": "January 2016 - June 2016",
        "location": "Denver, Colorado",
        "majors": ["Front-End Web Development"],
        "url": "https://profiles.udacity.com/u/dustinlongenecker"
    }, {
        "name": "SkillCrush",
        "degree": "Blueprint",
        "dates": "May 2016 - July 2016",
        "location": "Denver, Colorado",
        "majors": ["Ruby On Rails"],
        "url": "https://profiles.udacity.com/u/dustinlongenecker"
    }, {
        "name": "SkillCrush",
        "degree": "Blueprint",
        "dates": "May 2016 - July 2016",
        "location": "Denver, Colorado",
        "majors": ["Wordpress Apprenticeship"],
        "url": "https://profiles.udacity.com/u/dustinlongenecker"
    }],
    "onlineCourses": [{
        "title": "Ruby,HTML,CSS,JavaScript,Git",
        "school": "CodeCademy",
        "date": "July 2015 - June 2016",
        "url": "https://codecademy.com/u/dustinlongenecker"
    }, {
        "title": "Git, GitHub, & The Command Line",
        "school": "SkillCrush",
        "date": "May 2016",
        "url": "https://skillcrush.com/u/dustinlongenecker"
    }, {
        "title": "Resume Builder & Cover Letter",
        "school": "Udacity",
        "date": "June 2016",
        "url": "https://udacity.com/u/dustinlongenecker"
    }, {
        "title": "LinkedIn & GitHub Profile",
        "school": "Udacity",
        "date": "June 2016",
        "url": "https://udacity.com/u/dustinlongenecker"
    }],
    "display": function() {

        education.schools.forEach(function(school) {
            //create new div for work exp
            $("#education").append(HTMLschoolStart);
            //format data
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedName = formattedName.replace("#", school.url);
            var formattedNameDegree = (formattedName + formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);

        });

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            for (var c in education.onlineCourses) {
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
    }
};

/**
 *end schools information
  end schools display
  end online classes display
*/
bio.display();
projects.display();
work.display();
education.display();


$("#mapDiv").append(googleMap);



/** begin function list **/
//locationizer





/** end function list **/
