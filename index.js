var count = 0;
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
        count = 2;
    }
    if (ppl == 3) {
        document.getElementById("start").style.display = "none";
        document.getElementById("bill1").style.display = "flex";
        document.getElementById("bill2").style.display = "flex";
        document.getElementById("bill3").style.display = "flex";
        document.getElementById("calculate").style.display = "flex";
        count = 3;
    }
}
let calci = () => {

    if (count == 2) {
        var name1 = document.getElementById("name-input1").value;
        var name2 = document.getElementById("name-input2").value;
        if (name1.length > 1 && name2.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";

            var money1 = parseInt(document.getElementById("money-input1").value);
            if (isNaN(money1)) { money1 = 0 };
            var money2 = parseInt(document.getElementById("money-input2").value);
            if (isNaN(money2)) { money2 = 0 };
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
        else {
            if (name1.length <= 1) {
                document.getElementById("warning").style.display = "block";
                document.getElementById("warning").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning").style.display = "none";
            }
            if (name2.length <= 1) {
                document.getElementById("warning2").style.display = "block";
                document.getElementById("warning2").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning2").style.display = "none";
            }
        }

    }
    else if (count == 3) {
        var name1 = document.getElementById("name-input1").value;
        var name2 = document.getElementById("name-input2").value;
        var name3 = document.getElementById("name-input3").value;

        if (name1.length > 1 && name2.length > 1 && name3.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";
            document.getElementById("warning3").style.display = "none";

            var money1 = parseInt(document.getElementById("money-input1").value);
            if (isNaN(money1)) { money1 = 0 };
            var money2 = parseInt(document.getElementById("money-input2").value);
            if (isNaN(money2)) { money2 = 0 };
            var money3 = parseInt(document.getElementById("money-input3").value);
            if (isNaN(money3)) { money3 = 0 };

            var mid = (money1 + money2 + money3) / 3;

            const mArr = [money1, money2, money3];
            var max = 0;
            for (let i = 0; i < mArr.length; i++) {
                if (mid < mArr[i]) {
                    max++;
                }
            }

            if (max > 1) {
                if (money1 < mid) {
                    let ans1 = money2 - mid;
                    let ans2 = money3 - mid;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name1} will give ${ans2} to ${name3}`;
                }
                else if (money2 < mid) {
                    let ans1 = money1 - mid;
                    let ans2 = money3 - mid;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                }
                else {
                    let ans1 = money1 - mid;
                    let ans2 = money2 - mid;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                }
            }
            else{
                if(money1 > mid){
                    let ans1 = mid - money2;
                    let ans2 = mid - money3;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                }
                else if(money2 > mid){
                    let ans1 = mid - money1;
                    let ans2 = mid - money3;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                }
                else{
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                }
            }

        }
        else {
            if (name1.length <= 1) {
                document.getElementById("warning").style.display = "block";
                document.getElementById("warning").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning").style.display = "none";
            }
            if (name2.length <= 1) {
                document.getElementById("warning2").style.display = "block";
                document.getElementById("warning2").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning2").style.display = "none";
            }
            if (name3.length <= 1) {
                document.getElementById("warning3").style.display = "block";
                document.getElementById("warning3").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning3").style.display = "none";
            }

        }

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
        document.getElementById("rs-span3").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span3").innerHTML = money3;
    }
    let money4 = document.getElementById("money-input4").value;

    if (isNaN(money4)) {
        document.getElementById("rs-span4").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span4").innerHTML = money4;
    }
    let money5 = document.getElementById("money-input2").value;

    if (isNaN(money5)) {
        document.getElementById("rs-span5").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span5").innerHTML = money5;
    }
}