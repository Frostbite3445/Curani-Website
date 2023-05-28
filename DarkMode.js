function DarkModeToggle() {
    var darkBody = document.body;
    var darkContent = document.getElementsByClassName("tabcontent-content");
    if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
        var darkInput = document.getElementsByClassName("form-control");
    }
    var mode = localStorage.getItem("someVarKey");
    if (mode == '1') {
        darkBody.classList.add("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.add("dark-mode-content");
        }
        if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].style.background = "#575757";
                darkInput[j].style.color = "white";
            }
        }
        mode = '0';
        localStorage.setItem("someVarKey", mode);
    }
    else {
        darkBody.classList.remove("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.remove("dark-mode-content");
        }
        if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].style.background = "";
                darkInput[j].style.color = "";
            }
        }
        mode = '1';
        localStorage.setItem("someVarKey", mode);
    }
}

function DarkModeCheck() {
    var darkBody = document.body;
    const darkToggle = document.getElementsByClassName("form-check-input")[0];
    var darkContent = document.getElementsByClassName("tabcontent-content");
    if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
        var darkInput = document.getElementsByClassName("form-control");
    }
    var mode = localStorage.getItem("someVarKey");
    if (mode == '0') {
        darkBody.classList.add("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.add("dark-mode-content");
        }
        if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].style.background = "#575757";
                darkInput[j].style.color = "white";
            }
        }
        mode = '0';
        darkToggle.setAttribute("checked", "");
        localStorage.setItem("someVarKey", mode);
    }
    else {
        darkBody.classList.remove("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.remove("dark-mode-content");
        }
        if (document.URL.indexOf('Enquiry.html') == document.URL.length - 12) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].style.background = "";
                darkInput[j].style.color = "";
            }
        }
        mode = '1';
        darkToggle.removeAttribute("checked");
        localStorage.setItem("someVarKey", mode);
    }
}
