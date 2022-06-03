const btnPort = document.querySelector("#button-port")
const btnSkill = document.querySelector("#button-skill")
const port = document.querySelector("#port-container")
const skill = document.querySelector("#skill-container")

function portSkill() {
    if (btnPort.classList.contains("port-dark-button")) {
        btnPort.classList.replace("port-dark-button", "port-gray-button");
        btnSkill.classList.replace("skill-gray-button", "skill-dark-button");
        port.classList.replace("portfolio-content-show", "portfolio-content-hide");
        skill.classList.replace("skill-content-hide", "skill-content-show");
      } else {
        btnPort.classList.replace("port-gray-button", "port-dark-button");
        btnSkill.classList.replace("skill-dark-button", "skill-gray-button");
        port.classList.replace("portfolio-content-hide", "portfolio-content-show");
        skill.classList.replace("skill-content-show", "skill-content-hide");
      }
}