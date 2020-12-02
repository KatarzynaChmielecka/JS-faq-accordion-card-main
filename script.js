// let accordions = document.querySelectorAll("button.accordion");

// for (let i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener('click', function () {

//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     })
// }

// let accordions = document.querySelectorAll("button.accordion");

// for (let i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener('click', function () {

//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("active");
//     })
// }



function initAccordion(accordionElem) {
    //when panel is clicked, handlePanelClick is called.          
    function handlePanelClick(event) {
        showPanel(event.currentTarget);
    }
    //Hide currentPanel and show new panel.  
    function showPanel(panel) {
        //Hide current one. First time it will be null. 
        let expandedPanel = accordionElem.querySelector(".active");

        if (expandedPanel) {
            expandedPanel.classList.remove("active");
        }
        //Show new one
        // panel.classList.add("active");
        panel.nextElementSibling.classList.add("active");

    }
    var allPanelElems = accordionElem.querySelectorAll(".accordion");
    for (let i = 0; i < allPanelElems.length; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick)
    }
    //By Default Show first panel //     /* showPanel(allPanelElems[0]) */

}
initAccordion(document.querySelector(".wrapper-content"));