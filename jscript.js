
var form = document.getElementById("pForm");


form.addEventListener("submit", function(event)
{   
    event.preventDefault();
    var date = new Date(form.completionD.value);
    var projectName = form.projectN.value;
    var projectDetails = form.projectD.value;
    
    

    
    var myList = document.getElementById("projectList");    
    let allProject = ["PROJECT NAME : "+projectName, "<br />","PROJECT DETAILS  : " + projectDetails,  "<br />","START DATE : " + date];
    localStorage.setItem("1", allProject); 

    
    var project = document.createElement("A");
    project.setAttribute("href" , "projects.html");
    project.setAttribute("class", "name");
    
    var projectN = document.createTextNode(projectName);
    project.appendChild(projectN);
    myList.appendChild(project);
    form.reset();
});


let secondForm = document.getElementById("experienceF");

secondForm.onsubmit = function(e)
{
    e.preventDefault();
    var experience= secondForm.work_type.value;
    var experienceD = secondForm.work_details.value;
  

    let allExperience = ["EXPERIENCE: " + experience, "<br />","ExperienceDetails: " + experienceD];
    localStorage.setItem("2", allExperience);
    var experienceSpace = document.getElementById("experienceId");
    

    var exper = document.createElement("A"); 
    exper.setAttribute("href", "experienceDetails.html");
    exper.setAttribute("class", "name");
   
    var insideDetails = document.createTextNode(experience);
    exper.appendChild(insideDetails);
    experienceSpace.appendChild(exper);
    secondForm.reset();
}

