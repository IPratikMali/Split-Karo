let minuscount = () => {
    var ppl = document.getElementById("ppl-count").value;
    if (ppl > 0) {
        ppl--;
    }
    document.getElementById("ppl-count").value = ppl;
}
let pluscount = () => {
    var ppl = document.getElementById("ppl-count").value;
    if (ppl < 5) {
        ppl++;
    }
    document.getElementById("ppl-count").value = ppl;
}
let submit = () => {
    var ppl = document.getElementById("ppl-count").value;
    if (ppl == 2) {
        document.getElementById("start").style.display = "none";
        document.getElementById("bill1").style.display = "block";
        document.getElementById("bill2").style.display = "block";
        document.getElementById("calculate").style.display = "flex";
    }
}
let calci = () => {

    var name1 = document.getElementById("name-input1").value;
    var name2 = document.getElementById("name-input2").value;
    var money1 = parseInt(document.getElementById("money-input1").value);
    if(isNaN(money1)) {money1 = 0};
    var money2 = parseInt(document.getElementById("money-input2").value);
    if(isNaN(money2)) {money1 = 0};
    var mid = ((money1 + money2) / 2);
    if (mid > money1) {
        let ans = mid - money1;
        document.getElementById("solution").style.display = "flex";
        document.getElementById("result").innerHTML = `${name1} will give ${ans} to ${name2}`;
    }
    else {
        let ans = mid - money2;
        document.getElementById("solution").style.display = "flex";
        document.getElementById("result").innerHTML = `${name2} will give ${ans} to ${name1}`;
    }
}

let getvalue = () => {
    let money = document.getElementById("money-input1").value;

    if (isNaN(money)) {
        document.getElementById("rs-span1").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span1").innerHTML = money;
    }
    let money2 = document.getElementById("money-input2").value;

    if (isNaN(money2)) {
        document.getElementById("rs-span2").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span2").innerHTML = money2;
    }
    let money3 = document.getElementById("money-input3").value;

    if (isNaN(money3)) {
        document.getElementById("rs-span2").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span2").innerHTML = money3;
    }
    let money4 = document.getElementById("money-input4").value;

    if (isNaN(money4)) {
        document.getElementById("rs-span2").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span2").innerHTML = money4;
    }
    let money5 = document.getElementById("money-input2").value;

    if (isNaN(money5)) {
        document.getElementById("rs-span2").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span2").innerHTML = money5;
    }
}