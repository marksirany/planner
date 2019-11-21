//show current date//
//You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.//

   


//Clicking on the save button will store the time and user input in `localStorage`//

const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function initInput() {
    const buttonEl = document.querySelector("#button");
    buttonEl.addEventListener("click", function () {
        const input = document.getElementById("input").value;
        const dataStr = localStorage.getItem("input") || "[]";
        if(!dataStr){
          dataStr = '[]'
        }
        const data = JSON.parse(dataStr);
        data.push(input);
        localStorage.setItem("input", JSON.stringify(data));
    });
}
initInput();

function initOutput() {
    const outputEl = document.getElementById("output");
    setInterval(function () {
        outputEl.innerHTML = "";
        const dataStr = localStorage.getItem("input") || "[]";
        const data = JSON.parse(dataStr);
        data.forEach(function (output) {
            const h1El = document.createElement("p");
            h1El.innerHTML = output;
            outputEl.append(h1El);
        });
    }, 100);
}
initOutput();








//each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day//