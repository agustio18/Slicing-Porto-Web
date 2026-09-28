
const tombolCV = document.querySelector("#home button");

tombolCV.addEventListener("click", function() {
    window.open("2025_CV_Agustio Indra.pdf", "_blank");
});



const skills = document.querySelectorAll("#skills li");

skills.forEach(function(skill) {

    skill.addEventListener("click", function() {
        skill.classList.toggle("active");
    });

});
