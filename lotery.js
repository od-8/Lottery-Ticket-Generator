const button = document.getElementById('btn');
button.addEventListener('click', myFunction);
let limit;
let star;
let winner;
function myFunction () { 
    if (document.getElementById('select').value == "Euromillions") {
        limit = 6;
        star = 2;
        winner = [{
            aArray: [50,48,36,19,21,7],
            bArray: [15,6],
        }]
    } else if (document.getElementById('select').value == "Hotpicks") {
        limit = 5;
        star = 0;
        winner = [{
            aArray: [27,10,8,49,23],
        }]
    } else if (document.getElementById('select').value == "Thunderball") {
        limit = 4;
        star = 0;
        winner = [{
            aArray: [43,14,9,1],
        }]
    } else {
        limit = 3;
        star = 2;
        winner = [{
            aArray: [7,40,25],
            bArray: [16,11],
        }]
    } 
    let name = document.getElementById('input1').value;
    let aSet = new Set;   
    let bSet = new Set;
    while (aSet.size < limit) {
        aSet.add(Math.floor(Math.random() * 50) + 1);
    }
    while (bSet.size < star) {
        bSet.add(Math.floor(Math.random() * 30) + 1);
    }
    let aArray = Array.from(aSet);
    let bArray = Array.from(bSet);
    aArray.sort((a, b) => a - b);
    bArray.sort((a, b) => a - b);
    console.log(aArray + " " + bArray);
    if (document.getElementById('select').value && star >= 1) {
        document.getElementById('message').innerHTML = (aArray + " " + "⭐️ " + bArray + " ⭐️");
    } else if (document.getElementById('select') && star == 0) {
        document.getElementById('message').innerHTML = aArray;
    }
    if (document.getElementById('select').value && winner == true) {
        document.getElementById('congrats').innerHTML = ("Congratulations " + name + ", you are a winner.");
    } else {
        document.getElementById('congrats').innerHTML = ("Sorry " + name + ", your ticket is not a winner.");
    }
};