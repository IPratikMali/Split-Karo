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
    if (ppl == 4) {
        document.getElementById("start").style.display = "none";
        document.getElementById("bill1").style.display = "flex";
        document.getElementById("bill2").style.display = "flex";
        document.getElementById("bill3").style.display = "flex";
        document.getElementById("bill4").style.display = "flex";
        document.getElementById("calculate").style.display = "flex";
        count = 4;
    }
    if (ppl == 5) {
        document.getElementById("start").style.display = "none";
        document.getElementById("bill1").style.display = "flex";
        document.getElementById("bill2").style.display = "flex";
        document.getElementById("bill3").style.display = "flex";
        document.getElementById("bill4").style.display = "flex";
        document.getElementById("bill5").style.display = "flex";
        document.getElementById("calculate").style.display = "flex";
        count = 5;
    }
}
let calci = () => {

    var name1 = document.getElementById("name-input1").value;
    var name2 = document.getElementById("name-input2").value;
    var name3 = document.getElementById("name-input3").value;
    var name4 = document.getElementById("name-input4").value;
    var name5 = document.getElementById("name-input5").value;

    var money1 = parseInt(document.getElementById("money-input1").value);
    if (isNaN(money1)) { money1 = 0 };
    var money2 = parseInt(document.getElementById("money-input2").value);
    if (isNaN(money2)) { money2 = 0 };
    var money3 = parseInt(document.getElementById("money-input3").value);
    if (isNaN(money3)) { money3 = 0 };
    var money4 = parseInt(document.getElementById("money-input4").value);
    if (isNaN(money4)) { money4 = 0 };
    var money5 = parseInt(document.getElementById("money-input5").value);
    if (isNaN(money5)) { money5 = 0 };

    if (count == 2) {

        if (name1.length > 1 && name2.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";

            var mid = ((money1 + money2) / 2);
            if (mid > money1) {
                let ans = mid - money1;
                document.getElementById("solution").style.display = "flex";
                document.getElementById("result").style.display = "flex";
                document.getElementById("result").innerHTML = `${name1} will give ${ans} to ${name2}`;
            }
            else {
                let ans = mid - money2;
                document.getElementById("solution").style.display = "flex";
                document.getElementById("result").style.display = "flex";
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

        if (name1.length > 1 && name2.length > 1 && name3.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";
            document.getElementById("warning3").style.display = "none";



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
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name1} will give ${ans2} to ${name3}`;
                }
                else if (money2 < mid) {
                    let ans1 = money1 - mid;
                    let ans2 = money3 - mid;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                }
                else {
                    let ans1 = money1 - mid;
                    let ans2 = money2 - mid;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                }
            }
            else {
                if (money1 > mid) {
                    let ans1 = mid - money2;
                    let ans2 = mid - money3;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money3;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                }
                else {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
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
    else if (count == 4) {
        if (name1.length > 1 && name2.length > 1 && name3.length > 1 && name4.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";
            document.getElementById("warning3").style.display = "none";
            document.getElementById("warning4").style.display = "none";



            var mid = (money1 + money2 + money3 + money4) / 4;

            const mArr = [money1, money2, money3, money4];
            var max = 0;
            for (let i = 0; i < mArr.length; i++) {
                if (mid < mArr[i]) {
                    max++;
                }
            }

            if (max > 1) {
                if (max > 2) {
                    if (money1 < mid) {
                        let ans1 = money2 - mid;
                        let ans2 = money3 - mid;
                        let ans3 = money4 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                        document.getElementById("result2").innerHTML = `${name1} will give ${ans2} to ${name3}`;
                        document.getElementById("result3").innerHTML = `${name1} will give ${ans3} to ${name4}`;
                    }
                    else if (money2 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money3 - mid;
                        let ans3 = money4 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                        document.getElementById("result3").innerHTML = `${name2} will give ${ans3} to ${name4}`;
                    }
                    else if (money3 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money2 - mid;
                        let ans3 = money4 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                        document.getElementById("result3").innerHTML = `${name3} will give ${ans3} to ${name4}`;
                    }
                    else {
                        let ans1 = money1 - mid;
                        let ans2 = money2 - mid;
                        let ans3 = money3 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name4} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                        document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name3}`;
                    }
                }
                else {
                    if (money1 < mid && money2 < mid) {
                        let ans1 = mid - money1;
                        let ans2 = mid - money2;

                        if (ans1 == (money3 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                            document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name4}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name4}`;
                            document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                        }
                    }
                    else if (money1 < mid && money3 < mid) {
                        let ans1 = mid - money1;
                        let ans2 = mid - money3;

                        if (ans1 == (money2 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name4}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name4}`;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                        }
                    }
                    else if (money1 < mid && money4 < mid) {
                        let ans1 = mid - money1;
                        let ans2 = mid - money4;

                        if (ans1 == (money2 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name3}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                        }
                    }
                    else if (money2 < mid && money3 < mid) {
                        let ans1 = mid - money2;
                        let ans2 = mid - money3;

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name4}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name4}`;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                        }
                    }
                    else if (money2 < mid && money4 < mid) {
                        let ans1 = mid - money2;
                        let ans2 = mid - money4;

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name3}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name3}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name1}`;
                        }
                    }
                    else if (money3 < mid && money4 < mid) {
                        let ans1 = mid - money3;
                        let ans2 = mid - money4;

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";
                            document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name2}`;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name1}`;
                        }
                    }
                }
            }
            else if (max == 0) {
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display = "flex";
                document.getElementById("equal").innerHTML = "All Have Contributed Equally";
            }
            else {
                if (money1 > mid) {
                    let ans1 = mid - money2;
                    let ans2 = mid - money3;
                    let ans3 = mid - money4;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name1}`;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money3;
                    let ans3 = mid - money4;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name2}`;
                }
                else if (money3 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    let ans3 = mid - money4;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name3}`;
                }
                else if (money4 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    let ans3 = mid - money3;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name4}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name4}`;
                    document.getElementById("result3").innerHTML = `${name3} will give ${ans3} to ${name4}`;
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
            if (name4.length <= 1) {
                document.getElementById("warning4").style.display = "block";
                document.getElementById("warning4").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning4").style.display = "none";
            }

        }
    }
    else if (count == 5) {
        if (name1.length > 1 && name2.length > 1 && name3.length > 1 && name4.length > 1 && name5.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";
            document.getElementById("warning3").style.display = "none";
            document.getElementById("warning4").style.display = "none";
            document.getElementById("warning5").style.display = "none";

            var mid = (money1 + money2 + money3 + money4 + money5) / 5;

            const mArr = [money1, money2, money3, money4, money5];
            var max = 0;
            for (let i = 0; i < mArr.length; i++) {
                if (mid < mArr[i]) {
                    max++;
                }
            }

            if (max == 1) {
                if (money1 > mid) {
                    let ans1 = mid - money2;
                    let ans2 = mid - money3;
                    let ans3 = mid - money4;
                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name1}`;
                    document.getElementById("result4").innerHTML = `${name5} will give ${ans4} to ${name1}`;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money3;
                    let ans3 = mid - money4;
                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                    document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name2}`;
                    document.getElementById("result4").innerHTML = `${name5} will give ${ans4} to ${name2}`;
                }
                else if (money3 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    let ans3 = mid - money4;
                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                    document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name3}`;
                    document.getElementById("result4").innerHTML = `${name5} will give ${ans4} to ${name3}`;
                }
                else if (money4 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    let ans3 = mid - money3;
                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name4}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name4}`;
                    document.getElementById("result3").innerHTML = `${name3} will give ${ans3} to ${name4}`;
                    document.getElementById("result4").innerHTML = `${name5} will give ${ans4} to ${name4}`;
                }
                else if (money5 > mid) {
                    let ans1 = mid - money1;
                    let ans2 = mid - money2;
                    let ans3 = mid - money3;
                    let ans4 = mid - money4;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";
                    document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name5}`;
                    document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name5}`;
                    document.getElementById("result3").innerHTML = `${name3} will give ${ans3} to ${name5}`;
                    document.getElementById("result4").innerHTML = `${name4} will give ${ans4} to ${name5}`;
                }
            }
            else if (max > 1) {
                if (max == 4) {
                    if (money1 < mid) {
                        let ans1 = money2 - mid;
                        let ans2 = money3 - mid;
                        let ans3 = money4 - mid;
                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                        document.getElementById("result2").innerHTML = `${name1} will give ${ans2} to ${name3}`;
                        document.getElementById("result3").innerHTML = `${name1} will give ${ans3} to ${name4}`;
                        document.getElementById("result4").innerHTML = `${name1} will give ${ans4} to ${name5}`;
                    }
                    else if (money2 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money3 - mid;
                        let ans3 = money4 - mid;
                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                        document.getElementById("result3").innerHTML = `${name2} will give ${ans3} to ${name4}`;
                        document.getElementById("result4").innerHTML = `${name2} will give ${ans4} to ${name5}`;
                    }
                    else if (money3 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money2 - mid;
                        let ans3 = money4 - mid;
                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                        document.getElementById("result3").innerHTML = `${name3} will give ${ans3} to ${name4}`;
                        document.getElementById("result4").innerHTML = `${name3} will give ${ans4} to ${name5}`;
                    }
                    else if (money4 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money2 - mid;
                        let ans3 = money3 - mid;
                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name4} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                        document.getElementById("result3").innerHTML = `${name4} will give ${ans3} to ${name3}`;
                        document.getElementById("result4").innerHTML = `${name4} will give ${ans4} to ${name5}`;
                    }
                    else if (money5 < mid) {
                        let ans1 = money1 - mid;
                        let ans2 = money2 - mid;
                        let ans3 = money3 - mid;
                        let ans4 = money4 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";
                        document.getElementById("result").innerHTML = `${name5} will give ${ans1} to ${name1}`;
                        document.getElementById("result2").innerHTML = `${name5} will give ${ans2} to ${name2}`;
                        document.getElementById("result3").innerHTML = `${name5} will give ${ans3} to ${name3}`;
                        document.getElementById("result4").innerHTML = `${name5} will give ${ans4} to ${name4}`;
                    }
                }
                else if (max == 2) {
                    if (money1 > mid && money2 > mid) {
                        var diff1 = money1 - mid;
                        var diff2 = money2 - mid;
                        var ans1 = mid - money3;
                        var ans2 = mid - money4;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name1}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name2}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name1}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name2}`;
                            }
                        }
                    }
                    else if (money1 > mid && money3 > mid) {
                        var diff1 = money1 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money4;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name1}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name4} will give ${ans2} to ${name3}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name3}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name1}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name3}`;
                            }
                        }
                    }
                    else if (money1 > mid && money4 > mid) {
                        var diff1 = money1 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money3;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name1}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name3} will give ${ans2} to ${name4}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                            }
                        }
                    }
                    else if (money1 > mid && money5 > mid) {
                        var diff1 = money1 - mid;
                        var diff2 = money5 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money3;
                        var ans3 = mid - money4;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name1}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name3} will give ${ans2} to ${name5}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name1}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name4} will give ${diff1} to ${name1}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                            }
                        }
                    }
                    else if (money2 > mid && money3 > mid) {
                        var diff1 = money2 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money4;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name2}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name4} will give ${ans2} to ${name3}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name3}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name4} will give ${ans2} to ${name2}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name2}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name3}`;
                            }
                        }
                    }
                    else if (money2 > mid && money4 > mid) {
                        var diff1 = money2 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money3;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name2}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name4}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name2}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                            }
                        }
                    }
                    else if (money2 > mid && money5 > mid) {
                        var diff1 = money2 - mid;
                        var diff2 = money5 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money3;
                        var ans3 = mid - money4;;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name2}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name5}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name3} will give ${ans2} to ${name2}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name4} will give ${diff1} to ${name2}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                            }
                        }
                    }
                    else if (money3 > mid && money4 > mid) {
                        var diff1 = money3 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money2;
                        var ans3 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name2} will give ${diff1} to ${name3}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name2} will give ${ans2} to ${name4}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name5} will give ${diff1} to ${name3}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name5} will give ${ans3} to ${name4}`;
                            }
                        }
                    }
                    else if (money3 > mid && money5 > mid) {
                        var diff1 = money3 - mid;
                        var diff2 = money5 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money2;
                        var ans3 = mid - money4;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name2} will give ${diff1} to ${name3}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name2} will give ${ans2} to ${name5}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name3}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name4} will give ${diff1} to ${name3}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name4} will give ${ans3} to ${name5}`;
                            }
                        }
                    }
                    else if (money4 > mid && money5 > mid) {
                        var diff1 = money4 - mid;
                        var diff2 = money5 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money2;
                        var ans3 = mid - money3;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name4}`;
                            diff1 = diff1 - ans1;
                            if (diff1 < ans2) {
                                document.getElementById("result2").innerHTML = `${name2} will give ${diff1} to ${name4}`;
                                ans2 = ans2 - diff1;
                                if (ans2 <= diff2) {
                                    document.getElementById("result3").innerHTML = `${name2} will give ${ans2} to ${name5}`;
                                    diff2 = diff2 - ans2;
                                    document.getElementById("result4").innerHTML = `${name3} will give ${ans3} to ${name5}`;
                                }
                            }
                            else {
                                document.getElementById("result2").innerHTML = `${name2} will give ${ans2} to ${name4}`;
                                diff1 = diff1 - ans2;
                                document.getElementById("result3").innerHTML = `${name3} will give ${diff1} to ${name4}`;
                                ans3 = ans3 - diff1;
                                document.getElementById("result4").innerHTML = `${name3} will give ${ans3} to ${name5}`;
                            }
                        }
                    }

                }
                else if (max == 3) {
                    if (money1 < mid && money2 < mid) {
                        var diff1 = money3 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money2;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${diff1} to ${name3}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name1} will give ${ans1} to ${name4}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name2} will give ${diff2} to ${name4}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name2} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name3}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name2} will give ${diff1} to ${name3}`;
                            document.getElementById("resul3").innerHTML = `${name2} will give ${diff2} to ${name4}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name2} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money1 < mid && money3 < mid){
                        var diff1 = money2 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money3;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${diff1} to ${name2}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name1} will give ${ans1} to ${name4}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name3} will give ${diff2} to ${name4}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name2}`;
                            document.getElementById("resul3").innerHTML = `${name3} will give ${diff2} to ${name4}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money1 < mid && money4 < mid){
                        var diff1 = money2 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money4;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${diff1} to ${name2}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name1} will give ${ans1} to ${name3}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name4} will give ${diff2} to ${name3}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name2}`;
                            document.getElementById("resul3").innerHTML = `${name4} will give ${diff2} to ${name3}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money1 < mid && money5 < mid){
                        var diff1 = money2 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money1;
                        var ans2 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name1} will give ${diff1} to ${name2}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name1} will give ${ans1} to ${name3}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name5} will give ${diff2} to ${name3}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name1} will give ${ans1} to ${name2}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name5} will give ${diff1} to ${name2}`;
                            document.getElementById("resul3").innerHTML = `${name5} will give ${diff2} to ${name3}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;
                        }
                    }
                    else if(money2 < mid && money3 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money4 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money3;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name2} will give ${ans1} to ${name4}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name3} will give ${diff2} to ${name4}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name3} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name3} will give ${diff2} to ${name4}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name3} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money2 < mid && money4 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money4;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name2} will give ${ans1} to ${name3}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name4} will give ${diff2} to ${name3}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name4} will give ${diff2} to ${name3}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money2 < mid && money5 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money3 - mid;
                        var ans1 = mid - money2;
                        var ans2 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name2} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name2} will give ${ans1} to ${name3}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name5} will give ${diff2} to ${name3}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name2} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name5} will give ${diff2} to ${name3}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;
                        }
                    }
                    else if(money3 < mid && money4 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money2 - mid;
                        var ans1 = mid - money3;
                        var ans2 = mid - money4;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name3} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans1} to ${name2}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name4} will give ${diff2} to ${name2}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name4} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name4} will give ${diff2} to ${name2}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name4} will give ${ans2} to ${name5}`;
                        }
                    }
                    else if(money3 < mid && money5 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money2 - mid;
                        var ans1 = mid - money3;
                        var ans2 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name3} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name3} will give ${ans1} to ${name2}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name5} will give ${diff2} to ${name2}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name3} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name5} will give ${diff2} to ${name2}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name4}`;
                        }
                    }
                    else if(money4 < mid && money5 < mid){
                        var diff1 = money1 - mid;
                        var diff2 = money2 - mid;
                        var ans1 = mid - money4;
                        var ans2 = mid - money5;

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                            document.getElementById("result").innerHTML = `${name4} will give ${diff1} to ${name1}`;

                            ans1 = ans1 - diff1;
                            document.getElementById("result2").innerHTML = `${name4} will give ${ans1} to ${name2}`;

                            diff2 = diff2 - ans1;
                            document.getElementById("result3").innerHTML = `${name5} will give ${diff2} to ${name2}`;

                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name3}`;

                        }
                        else {
                            document.getElementById("result").innerHTML = `${name4} will give ${ans1} to ${name1}`;
                            diff1 = diff1 - ans1;
                            document.getElementById("result2").innerHTML = `${name5} will give ${diff1} to ${name1}`;
                            document.getElementById("resul3").innerHTML = `${name5} will give ${diff2} to ${name2}`;
                            
                            ans2 = ans2 - diff2;
                            document.getElementById("result4").innerHTML = `${name5} will give ${ans2} to ${name3}`;
                        }
                    }
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
            if (name4.length <= 1) {
                document.getElementById("warning4").style.display = "block";
                document.getElementById("warning4").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning4").style.display = "none";
            }
            if (name5.length <= 1) {
                document.getElementById("warning5").style.display = "block";
                document.getElementById("warning5").innerHTML = "Enter valid name";
            }
            else {
                document.getElementById("warning5").style.display = "none";
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
    let money5 = document.getElementById("money-input5").value;

    if (isNaN(money5)) {
        document.getElementById("rs-span5").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span5").innerHTML = money5;
    }
}