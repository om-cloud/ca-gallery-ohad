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
        'img/portfolio/02-thumbnail.jpg', ["VanillaJS", "jQuery", "CSS", "HTML"])

        , _createProject('Minesweeper', 'Minesweeper With Extras', 
        'https://om-cloud.github.io/mines/',1595485420434, 'img/portfolio/03-full.jpg',
        'img/portfolio/03-thumbnail.jpg',["VanillaJS", "CSS", "HTML"])

        , _createProject('Past College', 'Courses Registration System', 
        'https://the-college-app-3b2df.firebaseapp.com/',1589955820567, 'img/portfolio/04-full.jpg',
        'img/portfolio/04-thumbnail.jpg',["TypeScript", "Angular","CSS", "HTML", "FireBase", "Admin:lucian.freud@gmail.com password 242424"], )

        , _createProject('Pop Ballons', 'Colorful Pop Ballons Challenge', 
        'https://om-cloud.github.io/pop-balloons/',1595415420434, 'img/portfolio/05-full.jpg',
        'img/portfolio/05-thumbnail.jpg',["VanillaJS", "CSS", "HTML"])

        , _createProject('Movies Archive', 'Sorted And Filtered Archive', 
        'https://my-movies-1f9a9.firebaseapp.com/',1589955424567, 'img/portfolio/06-full.jpg',
        'img/portfolio/06-thumbnail.jpg',["TypeScript", "CSS", "HTML, Angular, Firebase"])

        , _createProject('Calculator', 'Pixel Perfect Existing Calculator', 
        'https://calculator-88959.firebaseapp.com/',1589953424367, 'img/portfolio/07-full.jpg',
        'img/portfolio/07-thumbnail.jpg',["TypeScript", "CSS", "HTML, Angular, Firebase"])

        , _createProject('Meme Generator', 'Pixel Perfect Meme Generator', 
        'https://om-cloud.github.io/meme-generator/',1589953489767, 'img/portfolio/08-full.jpg',
        'img/portfolio/08-thumbnail.jpg',["JavaScript", "CSS", "HTML"])
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

function _createProject(name, description, projecturl, timeStamp, imgurl, thumbnail, labels) {
    var project = {
        randomId: makeId(),
        projectName: name,
        projectDescription: description,
        projectUrl: projecturl,
        publishedAt: timeStamp,
        imgUrl:imgurl,
        projectThumbnailUrl:thumbnail,
        labels:labels,
        //extraContent:extraContent
    }
    return project
}
