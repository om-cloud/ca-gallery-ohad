'use strict'
$(document).ready(onInit)

function onInit() {

    renderProjectsGrid()
}

function renderProjectsGrid() {
    var counter = 0;
    var arrayHtml = gProjects.map((project) => {
        counter++
        return `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderProjectModal('${counter}','${project.randomId}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${counter}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.projectThumbnailUrl}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.projectName}</h4>
          <p class="text-muted">${project.projectDescription}</p>
        </div>
      </div>`

    })
    $('.portfolio-grid').html(arrayHtml.join(''))
}

function renderProjectModal(counter, projectId) {
    document.querySelector('.portfolio-modal').id='portfolioModal'+counter;
    console.log(counter, projectId)
    var project = findProjectByrandomId(projectId)
    var date = new Date(project.publishedAt);
    var dateStr = date.toDateString();
    var labelsStr = project.labels.join(', ');
    var finalLabelsStr = labelsStr.substr(0,labelsStr.length)
    var strHtml = `
 <h2>${project.projectName}</h2>
 <p class="item-intro text-muted">${project.projectDescription}.</p>
 <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
 <ul class="list-inline">
   <li>Date Created: ${dateStr}</li>
   <li>Languages: ${finalLabelsStr}</li>
 </ul>
 <p>${project.extraContent[0]}</p>
 <p>${project.extraContent[1]}</p>
 <p>${project.extraContent[2]}</p>
 <button class="btn btn-success"  type="button" 
 onclick="window.open('${project.projectUrl}', '_blank'); return false;">
   <i class="fa fa-external-link" aria-hidden="true"></i>
     CHECK IT OUT !</button>
     <button class="btn btn-primary" data-dismiss="modal" type="button">
       <i class="fa fa-times"></i>
       Close Project</button>
       
 `
$('.modal-body').html(strHtml)
}

// function onOpenProjectLink(event){
//     $(document).ready(()=> {
//         $('.popup').click(function(event) {
//             window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
//             return false;
//         });
//       });
// }

// function sendMeEmail(){
//   var  valSubj=$('.subject').val()
//   var   valEmail=$('.email').val()
//   var   valMessageBody=$('.messgae-body').val();
//     $( document ).ready(function() {
//         Email.send({
//       Host : "smtp.yourisp.com",
//        To : 'ohad.matalon@gmail.com',
//        From : valEmail,
//        Subject :valSubj,
//        Body : valMessageBody
//     }).then( message => alert('message sent succesfuly'));}
// );}


function onFormSubmit(ev) {
  ev.preventDefault()
  var subject = $('.subject').val();
  var body = $('.message-body').val();
  var strHTML = `
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ohad.matalon@gmail.com&su=${subject}&body=${body}" target="blank">
        <button class="btn btn-primary" type="button" style="cursor:pointer">
        Submit 
        </button>
        </a>
        `
  var elForm = document.querySelector('form')
  elForm.innerHTML = strHTML;
}