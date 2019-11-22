

function initApp () {
//show current date//
    const dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
//You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.//
    
//Clicking on the save button will store the time and user input in `localStorage`//

    //9am//
    function initInput9() {
        const buttonEl = document.getElementById("button9");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input9").value;
            const dataStr = localStorage.getItem("input9") || "[]";
            if(!dataStr){
            dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input9", JSON.stringify(data));
        });
    }
    initInput9();

    function initOutput9() {
        const outputEl = document.getElementById("output9");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input9") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput9();

    //10am//
    function initInput10() {
        const buttonEl = document.getElementById("button10");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input10").value;
            const dataStr = localStorage.getItem("input10") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input10", JSON.stringify(data));
        });
    }
    initInput10();

    function initOutput10() {
        const outputEl = document.getElementById("output10");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input10") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput10();

    //11am//
    function initInput11() {
        const buttonEl = document.getElementById("button11");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input11").value;
            const dataStr = localStorage.getItem("input11") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input11", JSON.stringify(data));
        });
    }
    initInput11();

    function initOutput11() {
        const outputEl = document.getElementById("output11");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input11") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput11();

    //12pm//
    function initInput12() {
        const buttonEl = document.getElementById("button12");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input12").value;
            const dataStr = localStorage.getItem("input12") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input12", JSON.stringify(data));
        });
    }
    initInput12();

    function initOutput12() {
        const outputEl = document.getElementById("output12");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input12") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput12();

    //1pm//
    function initInput1() {
        const buttonEl = document.getElementById("button1");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input1").value;
            const dataStr = localStorage.getItem("input1") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input1", JSON.stringify(data));
        });
    }
    initInput1();

    function initOutput1() {
        const outputEl = document.getElementById("output1");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input1") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput1();

    //2pm//
    function initInput2() {
        const buttonEl = document.getElementById("button2");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input2").value;
            const dataStr = localStorage.getItem("input2") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input2", JSON.stringify(data));
        });
    }
    initInput2();

    function initOutput2() {
        const outputEl = document.getElementById("output2");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input2") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput2();


    //3pm//
    function initInput3() {
        const buttonEl = document.getElementById("button3");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input3").value;
            const dataStr = localStorage.getItem("input3") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input3", JSON.stringify(data));
        });
    }
    initInput3();

    function initOutput3() {
        const outputEl = document.getElementById("output3");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input3") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput3();

    //4pm//
    function initInput4() {
        const buttonEl = document.getElementById("button4");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input4").value;
            const dataStr = localStorage.getItem("input4") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input4", JSON.stringify(data));
        });
    }
    initInput4();

    function initOutput4() {
        const outputEl = document.getElementById("output4");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input4") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput4();

    //5pm//
    function initInput5() {
        const buttonEl = document.getElementById("button5");
        buttonEl.addEventListener("click", function () {
            const input = document.getElementById("input5").value;
            const dataStr = localStorage.getItem("input5") || "[]";
            if (!dataStr) {
                dataStr = '[]'
            }
            const data = JSON.parse(dataStr);
            data.push(input);
            localStorage.setItem("input5", JSON.stringify(data));
        });
    }
    initInput5();

    function initOutput5() {
        const outputEl = document.getElementById("output5");
        setInterval(function () {
            outputEl.innerHTML = "";
            const dataStr = localStorage.getItem("input5") || "[]";
            const data = JSON.parse(dataStr);
            data.forEach(function (output) {
                const h1El = document.createElement("p");
                h1El.innerHTML = output;
                outputEl.append(h1El);
            });
        }, 100);
    }
    initOutput5();



}


initApp();







