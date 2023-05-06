function DarkModeToggle() {
    var darkBody = document.body;
    var darkContent = document.getElementsByClassName("tabcontent-content");
    if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
        var darkInput = document.getElementsByClassName("form-control");
    }
    var mode = localStorage.getItem("someVarKey");
    if (mode == '1') {
        darkBody.classList.add("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.add("dark-mode-content");
        }
        if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].classList.add("dark-mode-input");
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
        if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].classList.remove("dark-mode-input");
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
    if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
        var darkInput = document.getElementsByClassName("form-control");
    }
    var mode = localStorage.getItem("someVarKey");
    if (mode == '0') {
        darkBody.classList.add("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.add("dark-mode-content");
        }
        if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].classList.add("dark-mode-input");
            }
        }
        darkToggle.setAttribute("checked", "");
        localStorage.setItem("someVarKey", mode);
    }
    else {
        darkBody.classList.remove("dark-mode");
        for (let i = 0; i < darkContent.length; i++){
            darkContent[i].classList.remove("dark-mode-content");
        }
        if (document.URL.indexOf('Quote.html') == document.URL.length - 10) {
            for (let j = 0; j < darkInput.length; j++) {
                darkInput[j].classList.remove("dark-mode-input");
            }
        }
        darkToggle.removeAttribute("checked");
        localStorage.setItem("someVarKey", mode);
    }
}
