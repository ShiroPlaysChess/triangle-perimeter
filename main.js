document.getElementById("Calculate1").addEventListener("click", calculate);

function calculate() {

    let number1 = +document.getElementById("Vetex-xA").value;
    let number2 = +document.getElementById("Vetex-yA").value;
    let number3 = +document.getElementById("Vetex-xB").value;
    let number4 = +document.getElementById("Vetex-yB").value;
    let number5 = +document.getElementById("Vetex-xC").value;
    let number6 = +document.getElementById("Vetex-yC").value;

    let aB = Math.sqrt((number3 - number1) ** 2 + (number4 - number2) ** 2)
    let aC = Math.sqrt((number5 - number1) ** 2 + (number6 - number2) ** 2)
    let bC = Math.sqrt((number3 - number5) ** 2 + (number4 - number6) ** 2)
    let aBC = aB + aC + bC

    let AB = `${aB}`;
    let AC = `${aC}`;
    let BC = `${bC}`;
    let ABC = `${aBC}`;

    document.getElementById("AB").innerHTML = AB;
    document.getElementById("AC").innerHTML = AC;
    document.getElementById("BC").innerHTML = BC;
    document.getElementById("Perimeter-ABC").innerHTML = ABC;
}