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
        panel.nextElementSibling.classList.add("active");
    }

    const allPanelElems = accordionElem.querySelectorAll(".accordion");
    for (let i = 0; i < allPanelElems.length; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick)
    }

}
initAccordion(document.querySelector(".wrapper-content"));