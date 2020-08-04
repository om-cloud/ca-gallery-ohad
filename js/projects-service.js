'use-script'

var gProjects;

_createProjects();

function _createProjects() {

    gProjects = [
        _createProject('Checkers', 'English Checkers For Two Players', 
        'https://om-cloud.github.io/englishcheckers/', 1587168065440, 'img/portfolio/01-full.jpg',
        'img/portfolio/01-thumbnail.jpg',["VanillaJS", "CSS", "HTML"])

        , _createProject('Book Shop', "'Booking Book' Admin Page", 
        'https://om-cloud.github.io/book-shop/', 1596412812513,'img/portfolio/02-full.jpg',
        'img/portfolio/02-thumbnail.jpg', ["VanillaJS", "CSS", "HTML"])

        , _createProject('Minesweeper', 'Minesweeper With Extras', 
        'https://om-cloud.github.io/mines/',1595485420434, 'img/portfolio/03-full.jpg',
        'img/portfolio/03-thumbnail.jpg',["VanillaJS", "CSS", "HTML"])

        , _createProject('The Past College App', 'Courses Registration System', 
        'https://the-college-app-3b2df.firebaseapp.com/',1589955820567, 'img/portfolio/04-full.jpg',
        'img/portfolio/04-thumbnail.jpg',["TypeScript", "Angular","CSS", "HTML", "FireBase"],  
       ["login as student:   kora.matalon@gmail.com    password 242424", 
        "login as lecturer:  ohad.matalon@gmail.com    password 242424", 
        "login as admin:     lucian.freud@gmail.com    password 242424"])
    ]
}


function removeProject(randomId) {
    var idx = gprojects.findIndex((project) => {
        return randomId === project.randomId
    })
    gprojects.splice(idx, 1);
}

function findProjectByrandomId(randomId) {
    return gProjects.find(project => project.randomId === randomId)
}

function _createProject(name, description, projecturl, timeStamp, imgurl, thumbnail, labels, extraContent) {
    var project = {
        randomId: makeId(),
        projectName: name,
        projectDescription: description,
        projectUrl: projecturl,
        publishedAt: timeStamp,
        imgUrl:imgurl,
        projectThumbnailUrl:thumbnail,
        labels:labels,
        extraContent:extraContent
    }
    return project
}