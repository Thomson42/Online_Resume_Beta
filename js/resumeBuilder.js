// this is the start of the JSON and it's subsuquent functions to implement it.
var bio;
bio = {
    'name': 'Christopher Thomson',
    'role': 'Web Development and Political Assistance',
    'contacts': {
        'Email': 'Christopher.thomson42@gmail.com',
        'phone': '503-956-4825',
        'github': 'Thomson42',
        'location': 'Portland, Oregon'
    },
    'welcomeMessage': 'Hello Everyone! Glad to see you want to know more about me.',
    'skills': ['custum web desine', 'political analysis', 'political assistance', 'World builder'],
    'biopic': 'images/sweater.jpg'
};
var work;
work = {
    'jobs': [{
        'employer': 'Sunrun',
        'dates': 'Aug 2015-Nov 2015',
        'title': 'Field Advisor',
        'location': 'Portland, Oregon',
        'description': 'Starting in the evening I would begin a canvasing route to find potential customers for Sunrun whose homes met our quality standards. I would Schedule times for customers to meet with consultants for more accurate assessment of what options they had available.'

    }, {
        'employer': 'Brent Barton Campaign',
        'dates': 'May 2014-Nov 2014',
        'title': 'Deputy Field Director',
        'location': 'Oregon City, Oregon',
        'description': 'Starting in the summer I began a very indepth internship with Brent Barton during his 2014 campaign run for Oregon congressional house district 40. We won by a wide margin and I was glad to be an important part of his victory.'
    }, {
        'employer': 'Sears',
        'dates': 'Sep 2009-Dec 2009',
        'title': 'Package Pickup serviceman',
        'location': 'Happy Vally, Oregon',
        'description': 'My first job and my only experience in retail. I was a stock room guy who would be asked to perform a myriad of tasks to help keep the store efficient, and to assist customers who ordered online or need handling assistance.'
    }],
    'display': 'function taking no parameters'
};
var education;
education = {
    'schools': [{
        'name': 'University of Oregon',
        'degree': 'Batchelors of Science',
        'major': 'Political Science',
        'dates': '2011-2013',
        'location': 'Eugene, Oregon'
    }, {
        'name': 'Clacamas Comuinity College',
        'degree': 'Assoicates of the Arts Transfer degree',
        'major': 'Political Science',
        'dates': '2009-2011',
        'location': 'Oregon City, Oregon'
    }],
    'onlineCourses': [{
        'title': 'Web Developer Nano Degree',
        'school': 'Udacity',
        'dates': 'Jan 2016-Mar 2016',
        'url': ''

    }],
    'display': 'function taking no parameters'

};
var projects;
projects = {
    'projects': [{
        'title': 'Front Page',
        'dates': 'Jan, 15-Jan, 27',
        'description': 'My first website with limited functionality but good design.',
        'images': 'array with string urls',
        'display': 'function taking no parameters'
    }]
};

//From here we start makeing display functions by replaceing bits of the HTMLstring with our actual data

function displayBio() {
    'use strict';
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);
    
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').append(formattedRole);
    
    var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').prepend(formattedImage);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);
    for (var skill in bio.skills) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedSkill);
            }
    }
}
displayBio();

work.display = function() {
    'use strict';

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
            
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);
            
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};
work.display();

//here is a click log so we can track our clicks in the console this is useful for later but needs implimentation. 

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work) {
    var locationArray = [];

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            var newLocation = work.jobs[job].location;
            locationArray.push(newLocation);
        }
    }
    return locationArray;

}
projects.display = function() {
    'use strict';
    for (var project in projects.projects) {
        if (projects.projects.length > 0) {
            $('#projects').append(HTMLprojectStart);
            
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedProjectTitle);
            
            var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedProjectDates);
            
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedProjectDescription);
        }

        /*if(projects.projects[project].images.length > 0) {
        	for(image in projects.projects[project].images) { <------------------------------------------------------------RECREATES THE IMAGE TOO MANY TIMES
        		var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        		$('.project-entry:last').append(formattedProjectImage);
        	}
        }*/

    }
};
projects.display();

education.display = function() {
    'use strict';
    for (var school in education.schools) {
        if (education.schools.length > 0) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
            $('.education-entry:last').append(formattedSchoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            $('.education-entry:last').append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
            $('.education-entry:last').append(formattedSchoolMajor);

        }

        /*if(projects.projects[project].images.length > 0) {
        	for(image in projects.projects[project].images) { <----------------------------------------------------------RECREATES THE IMAGE TO MANY TIMES
        		var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        		$('.project-entry:last').append(formattedProjectImage);
        	}
        }*/

    }
};
education.display();
// Implements the map in helper.js
$('#mapDiv').append(googleMap);