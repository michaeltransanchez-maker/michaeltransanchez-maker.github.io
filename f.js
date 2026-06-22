document.addEventListener("DOMContentLoaded", () => {
    const h6 = document.querySelector(".section1-text h6");
    const h1 = document.querySelector(".section1-text h1");

    const text6 = "Welcome! I'm";
    const text1 = "Michael, Sanchez";

    h6.textContent = "";
    h1.textContent = "";

    let i = 0;

    function typeH6() {
        if (i < text6.length) {
            h6.textContent += text6[i];
            i++;
            setTimeout(typeH6, 80);
        } else {
            i = 0;
            setTimeout(typeH1, 300);
        }
    }

    function typeH1() {
        if (i < text1.length) {
            h1.innerHTML = text1.slice(0, i + 1).replace(",", ",<br>");
            i++;
            setTimeout(typeH1, 80);
        }
    }

    typeH6();
});