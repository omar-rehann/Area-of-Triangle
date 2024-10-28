let input1 = document.querySelector(".continer .frist .one");
let input2 = document.querySelector(".continer .frist .two");
let input3 = document.querySelector(".continer .frist .three");
let onespan = document.querySelector(".get");
let final = document.querySelector(".data");

onespan.onclick = function() {
    let val1 = input1.value;
    let val2 = input2.value;
    let val3 = input3.value;

    if (val1 === "" || val2 === "" || val3 === "") {
        final.textContent = "Please enter values in all fields.";
        final.style.backgroundColor = "red";
    } else if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        final.textContent = "Please enter numbers, not strings.";
        final.style.backgroundColor = "red";
    } else {
        let numberone = parseFloat(val1);
        let numbertwo = parseFloat(val2);
        let numberthree = parseFloat(val3);

        let semi = (numberone + numbertwo + numberthree) / 2;
        let area = Math.sqrt(semi * (semi - numberone) * (semi - numbertwo) * (semi - numberthree));

        final.textContent = `The Result Area of Triangle: ${area.toFixed(2)}`;
        final.style.backgroundColor = "green";
    }
};