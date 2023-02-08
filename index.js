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
    if (ppl <= 1 || ppl > 5) {
        document.getElementById("warning1").style.display = "flex";
    }
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
    if (isNaN(money1) || money1 < 0) { money1 = 0 };
    var money2 = parseInt(document.getElementById("money-input2").value);
    if (isNaN(money2) || money2 < 0) { money2 = 0 };
    var money3 = parseInt(document.getElementById("money-input3").value);
    if (isNaN(money3) || money3 < 0) { money3 = 0 };
    var money4 = parseInt(document.getElementById("money-input4").value);
    if (isNaN(money4) || money4 < 0) { money4 = 0 };
    var money5 = parseInt(document.getElementById("money-input5").value);
    if (isNaN(money5) || money5 < 0) { money5 = 0 };

    if (count == 2) {

        if (name1.length > 1 && name2.length > 1) {

            document.getElementById("warning").style.display = "none";
            document.getElementById("warning2").style.display = "none";

            var mid = ((money1 + money2) / 2);
            if (mid > money1) {
                let ans = mid - money1;
                if (ans % 1 !== 0) {
                    ans = ans.toFixed(2);
                }
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display = "none";
                document.getElementById("result").style.display = "flex";

                document.getElementById("who").innerHTML = name1;
                document.getElementById("owes").innerHTML = ans;
                document.getElementById("whom").innerHTML = name2;
            }
            else if(money2 < mid){
                let ans = mid - money2;
                if (ans % 1 !== 0) {
                    ans = ans.toFixed(2);
                }
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display = "none";
                document.getElementById("result").style.display = "flex";

                document.getElementById("who").innerHTML = name2;
                document.getElementById("owes").innerHTML = ans;
                document.getElementById("whom").innerHTML = name1;
            }
            else{
                document.getElementById("solution").style.display = "flex";
                document.getElementById("result").style.display = "none";
                document.getElementById("result2").style.display = "none";

                document.getElementById("equal").style.display = "flex";
                document.getElementById("equal").innerHTML = "Both Have Contributed Equally";
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

            if(max == 0){
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display="none";
                document.getElementById("result").style.display = "none";
                document.getElementById("result2").style.display = "none";
                document.getElementById("result3").style.display = "none";
                document.getElementById("result4").style.display = "none";

                document.getElementById("equal").style.display = "flex";
                document.getElementById("equal").innerHTML = "All Are Contributed Equally";
            }
            else if (max > 1) {
                if (money1 < mid) {
                    let ans1 = money2 - mid;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = money3 - mid;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 + " >";
                    document.getElementById("whom").innerHTML = name2;

                    document.getElementById("who2").innerHTML = name1;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name3;
                }
                else if (money2 < mid) {
                    let ans1 = money1 - mid;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = money3 - mid;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name2;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name1;

                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name3;
                }
                else {
                    let ans1 = money1 - mid;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = money2 - mid;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name3;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name1;

                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name2;
                }
            }
            else {
                if (money1 > mid) {
                    let ans1 = mid - money2;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name2;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name1;

                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name1;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name2;
                    
                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name2;
                }
                else {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display = "none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name3;

                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name3;
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
            if(max == 0){
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display="none";
                document.getElementById("result").style.display = "none";
                document.getElementById("result2").style.display = "none";
                document.getElementById("result3").style.display = "none";
                document.getElementById("result4").style.display = "none";

                document.getElementById("equal").style.display = "flex";
                document.getElementById("equal").innerHTML = "All Are Contributed Equally";
            }
            else if (max > 1) {
                if (max > 2) {
                    if (money1 < mid) {
                        let ans1 = money2 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = money3 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }
                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";

                        document.getElementById("who").innerHTML = name1;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name2;
                      
                        document.getElementById("who2").innerHTML = name1;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name3;
                        
                        document.getElementById("who3").innerHTML = name1;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                    }
                    else if (money2 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = money3 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }
                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";

                        document.getElementById("who").innerHTML = name2;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;

                        document.getElementById("who2").innerHTML = name2;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name3;
                   
                        document.getElementById("who3").innerHTML = name2;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                    }
                    else if (money3 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = money2 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }
                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";

                        document.getElementById("who").innerHTML = name3;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;
                       
                        document.getElementById("who2").innerHTML = name3;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name2;
                      
                        document.getElementById("who3").innerHTML = name3;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                    }
                    else {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = money2 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }
                        let ans3 = money3 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";

                        document.getElementById("who").innerHTML = name4;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;
                       
                        document.getElementById("who2").innerHTML = name4;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name2;
                       
                        document.getElementById("who3").innerHTML = name4;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name3;
                    }
                }
                else {
                    if (money1 < mid && money2 < mid) {
                        let ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money2;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money3 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                           
                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name4;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name4;
                          
                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name3;
                        }
                    }
                    else if (money1 < mid && money3 < mid) {
                        let ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money2 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            
                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name4;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name4;
                          
                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name2;
                        }
                    }
                    else if (money1 < mid && money4 < mid) {
                        let ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money2 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                           
                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name3;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                            
                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name2;
                        }
                    }
                    else if (money2 < mid && money3 < mid) {
                        let ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                           
                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name4;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name4;

                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name1;
                        }
                    }
                    else if (money2 < mid && money4 < mid) {
                        let ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;

                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name3;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                           
                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name1;
                        }
                    }
                    else if (money3 < mid && money4 < mid) {
                        let ans1 = mid - money3;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }
                        let ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        if (ans1 == (money1 - mid)) {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            
                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name2;
                        }
                        else {
                            document.getElementById("solution").style.display = "flex";
                            document.getElementById("equal").style.display="none";
                            document.getElementById("result").style.display = "flex";
                            document.getElementById("result2").style.display = "flex";

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            
                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans2 ;
                            document.getElementById("whom2").innerHTML = name1;
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
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";

                    document.getElementById("who").innerHTML = name2;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name1;
                   
                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name1;
                  
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name1;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name2;
             
                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name2;
                    
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name2;
                }
                else if (money3 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name3;
            
                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name3;
                    
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name3;
                }
                else if (money4 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }
                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }
                    let ans3 = mid - money3;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name4;
                 
                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name4;
              
                    document.getElementById("who3").innerHTML = name3;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name4;
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
            if(max == 0){
                document.getElementById("solution").style.display = "flex";
                document.getElementById("equal").style.display="none";
                document.getElementById("result").style.display = "none";
                document.getElementById("result2").style.display = "none";
                document.getElementById("result3").style.display = "none";
                document.getElementById("result4").style.display = "none";

                document.getElementById("equal").style.display = "flex";
                document.getElementById("equal").innerHTML = "All Are Contributed Equally";
            }
            else if (max == 1) {
                if (money1 > mid) {
                    let ans1 = mid - money2;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }

                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }

                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }

                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";

                    document.getElementById("who").innerHTML = name2;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name1;
                 
                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name1;
                    
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name1;
                   
                    document.getElementById("who4").innerHTML = name5;
                    document.getElementById("owes4").innerHTML = ans4 ;
                    document.getElementById("whom4").innerHTML = name1;
                }
                else if (money2 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }

                    let ans2 = mid - money3;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }

                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }

                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name2;
                   
                    document.getElementById("who2").innerHTML = name3;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name2;
               
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name2;
                   
                    document.getElementById("who4").innerHTML = name5;
                    document.getElementById("owes4").innerHTML = ans4 ;
                    document.getElementById("whom4").innerHTML = name2;
                }
                else if (money3 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }

                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }

                    let ans3 = mid - money4;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }

                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name3;
                   
                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name3;
                    
                    document.getElementById("who3").innerHTML = name4;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name3;
                    
                    document.getElementById("who4").innerHTML = name5;
                    document.getElementById("owes4").innerHTML = ans4 ;
                    document.getElementById("whom4").innerHTML = name3;
                }
                else if (money4 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }

                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }

                    let ans3 = mid - money3;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }

                    let ans4 = mid - money5;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name4;
                   
                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name4;
                
                    document.getElementById("who3").innerHTML = name3;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name4;
                 
                    document.getElementById("who4").innerHTML = name5;
                    document.getElementById("owes4").innerHTML = ans4 ;
                    document.getElementById("whom4").innerHTML = name4;
                }
                else if (money5 > mid) {
                    let ans1 = mid - money1;
                    if (ans1 % 1 !== 0) {
                        ans1 = ans1.toFixed(2);
                    }

                    let ans2 = mid - money2;
                    if (ans2 % 1 !== 0) {
                        ans2 = ans2.toFixed(2);
                    }

                    let ans3 = mid - money3;
                    if (ans3 % 1 !== 0) {
                        ans3 = ans3.toFixed(2);
                    }

                    let ans4 = mid - money4;
                    document.getElementById("solution").style.display = "flex";
                    document.getElementById("equal").style.display="none";
                    document.getElementById("result").style.display = "flex";
                    document.getElementById("result2").style.display = "flex";
                    document.getElementById("result3").style.display = "flex";
                    document.getElementById("result4").style.display = "flex";

                    document.getElementById("who").innerHTML = name1;
                    document.getElementById("owes").innerHTML = ans1 ;
                    document.getElementById("whom").innerHTML = name5;
                   
                    document.getElementById("who2").innerHTML = name2;
                    document.getElementById("owes2").innerHTML = ans2 ;
                    document.getElementById("whom2").innerHTML = name5;
                    
                    document.getElementById("who3").innerHTML = name1;
                    document.getElementById("owes3").innerHTML = ans3 ;
                    document.getElementById("whom3").innerHTML = name5;
                    
                    document.getElementById("who4").innerHTML = name4;
                    document.getElementById("owes4").innerHTML = ans4 ;
                    document.getElementById("whom4").innerHTML = name5;
                }
            }
            else if (max > 1) {
                if (max == 4) {
                    if (money1 < mid) {
                        let ans1 = money2 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        let ans2 = money3 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        document.getElementById("who").innerHTML = name1;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name2;

                        document.getElementById("who2").innerHTML = name1;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name3;
                      
                        document.getElementById("who3").innerHTML = name1;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                       
                        document.getElementById("who4").innerHTML = name1;
                        document.getElementById("owes4").innerHTML = ans4 ;
                        document.getElementById("whom4").innerHTML = name5;
                    }
                    else if (money2 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        let ans2 = money3 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        document.getElementById("who").innerHTML = name2;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;

                        document.getElementById("who2").innerHTML = name2;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name3;
                    
                        document.getElementById("who3").innerHTML = name2;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                        
                        document.getElementById("who4").innerHTML = name2;
                        document.getElementById("owes4").innerHTML = ans4 ;
                        document.getElementById("whom4").innerHTML = name5;
                    }
                    else if (money3 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        let ans2 = money2 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        let ans3 = money4 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        document.getElementById("who").innerHTML = name3;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name2;

                        document.getElementById("who2").innerHTML = name3;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name2;
                    
                        document.getElementById("who3").innerHTML = name3;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name4;
                        
                        document.getElementById("who4").innerHTML = name3;
                        document.getElementById("owes4").innerHTML = ans4 ;
                        document.getElementById("whom4").innerHTML = name5;
                    }
                    else if (money4 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        let ans2 = money2 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        let ans3 = money3 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        let ans4 = money5 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        document.getElementById("who").innerHTML = name4;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;

                        document.getElementById("who2").innerHTML = name4;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name2;
                       
                        document.getElementById("who3").innerHTML = name4;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name3;
                      
                        document.getElementById("who4").innerHTML = name4;
                        document.getElementById("owes4").innerHTML = ans4 ;
                        document.getElementById("whom4").innerHTML = name5;
                    }
                    else if (money5 < mid) {
                        let ans1 = money1 - mid;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        let ans2 = money2 - mid;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        let ans3 = money3 - mid;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        let ans4 = money4 - mid;
                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        document.getElementById("who").innerHTML = name5;
                        document.getElementById("owes").innerHTML = ans1 ;
                        document.getElementById("whom").innerHTML = name1;

                        document.getElementById("who2").innerHTML = name5;
                        document.getElementById("owes2").innerHTML = ans2 ;
                        document.getElementById("whom2").innerHTML = name2;
                     
                        document.getElementById("who3").innerHTML = name5;
                        document.getElementById("owes3").innerHTML = ans3 ;
                        document.getElementById("whom3").innerHTML = name3;
                       
                        document.getElementById("who4").innerHTML = name5;
                        document.getElementById("owes4").innerHTML = ans4 ;
                        document.getElementById("whom4").innerHTML = name4;
                    }
                }
                else if (max == 2) {
                    if (money1 > mid && money2 > mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money2 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money3;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) {
                                diff1 = diff1.toFixed(2);
                            }
                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name1;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                    
                                    document.getElementById("who3").innerHTML = name4;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name2;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                              
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name2;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name1;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }
                               
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name1;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                               
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name2;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name2;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                             
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name2;
                            }
                            else {
                               
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name2;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name2;
                            }

                        }
                    }
                    else if (money1 > mid && money3 > mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name1;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                              
                                    document.getElementById("who3").innerHTML = name4;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name3;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                    
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name3;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name1;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name1;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                             
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name3;
                            }
                        }
                        else {
                           
                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                              
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name3;
                            }
                            else {

                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name3;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name3;
                            }

                        }
                    }
                    else if (money1 > mid && money4 > mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name1;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                   
                                    document.getElementById("who3").innerHTML = name3;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name4;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                  
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name4;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name1;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name1;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                            
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                               
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                            }
                            else {

                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }

                        }
                    }
                    else if (money1 > mid && money5 > mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money5 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money4;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name1;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 % 1 !== 0) {
                                    ans2 = ans2.toFixed(2);
                                }
                                if (ans2 <= diff2) {
                                
                                    document.getElementById("who3").innerHTML = name3;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name5;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                  
                                    document.getElementById("who4").innerHTML = name4;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name5;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name1;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name1;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                                
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name5;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                               
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                            }
                            else {
                               
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                                
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }

                        }
                    }
                    else if (money2 > mid && money3 > mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }
                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name2;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                   
                                    document.getElementById("who3").innerHTML = name4;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name3;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name3;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name4;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name2;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name2;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                              
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name3;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                              
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name3;
                            }
                            else {
                             
                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name3;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                                
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name3;
                            }

                        }
                    }
                    else if (money2 > mid && money4 > mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name2;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                              
                                    document.getElementById("who3").innerHTML = name3;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name4;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                  
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name4;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name2;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name2;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                                
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                              
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                            }
                            else {
                                
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }

                        }
                    }
                    else if (money2 > mid && money5 > mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money5 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money4;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name2;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                  
                                    document.getElementById("who3").innerHTML = name3;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name5;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                   
                                    document.getElementById("who4").innerHTML = name4;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name5;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name3;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name2;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name2;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name5;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                               
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                            }
                            else {
                               
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }

                        }
                    }
                    else if (money3 > mid && money4 > mid) {
                        var diff1 = money3 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money2;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money5;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name3;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                 
                                    document.getElementById("who3").innerHTML = name2;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name4;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                    
                                    document.getElementById("who4").innerHTML = name5;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name4;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name3;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name5;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name3;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                            
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name3;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                            
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                            }
                            else {
                              
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name4;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name5;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name4;
                            }

                        }
                    }
                    else if (money3 > mid && money5 > mid) {
                        var diff1 = money3 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money5 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money2;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money4;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name3;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                    
                                    document.getElementById("who3").innerHTML = name2;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name5;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                    
                                    document.getElementById("who4").innerHTML = name4;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name5;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name3;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                document.getElementById("who3").innerHTML = name4;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name3;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }

                              
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name3;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name5;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                            
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                            }
                            else {
                               
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                               
                                document.getElementById("who4").innerHTML = name4;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }

                        }
                    }
                    else if (money4 > mid && money5 > mid) {
                        var diff1 = money4 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money5 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money2;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        var ans3 = mid - money3;
                        if (ans3 % 1 !== 0) {
                            ans3 = ans3.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (ans1 <= diff1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name4;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            if (diff1 < ans2) {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = diff1 ;
                                document.getElementById("whom2").innerHTML = name4;
                                ans2 = ans2 - diff1;
                                if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                                if (ans2 <= diff2) {
                                   
                                    document.getElementById("who3").innerHTML = name2;
                                    document.getElementById("owes3").innerHTML = ans2 ;
                                    document.getElementById("whom3").innerHTML = name5;
                                    diff2 = diff2 - ans2;
                                    if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                                   
                                    document.getElementById("who4").innerHTML = name3;
                                    document.getElementById("owes4").innerHTML = ans3 ;
                                    document.getElementById("whom4").innerHTML = name5;
                                }
                            }
                            else {

                                document.getElementById("who2").innerHTML = name2;
                                document.getElementById("owes2").innerHTML = ans2 ;
                                document.getElementById("whom2").innerHTML = name4;
                                diff1 = diff1 - ans2;
                                if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                                
                                document.getElementById("who3").innerHTML = name3;
                                document.getElementById("owes3").innerHTML = diff1 ;
                                document.getElementById("whom3").innerHTML = name4;
                                ans3 = ans3 - diff1;
                                if (ans3 % 1 !== 0) { ans3 = ans3.toFixed(2); }
                              
                                document.getElementById("who4").innerHTML = name3;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }
                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name4;
                            ans1 = ans1 - diff1;
                            if (ans1 % 1 !== 0) { ans1 = ans1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name5;
                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                            if (diff2 == ans2) {
                                
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                            }
                            else {
                            
                                document.getElementById("who3").innerHTML = name2;
                                document.getElementById("owes3").innerHTML = ans2 ;
                                document.getElementById("whom3").innerHTML = name5;
                                diff2 = diff2 - ans2;
                                if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }
                              
                                document.getElementById("who4").innerHTML = name3;
                                document.getElementById("owes4").innerHTML = ans3 ;
                                document.getElementById("whom4").innerHTML = name5;
                            }

                        }
                    }

                }
                else if (max == 3) {
                    if (money1 < mid && money2 < mid) {
                        var diff1 = money3 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money2;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name3;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                            
                            document.getElementById("who3").innerHTML = name2;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            document.getElementById("who4").innerHTML = name2;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name3;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name3;
                            
                            document.getElementById("who3").innerHTML = name2;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;


                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            document.getElementById("who4").innerHTML = name2;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money1 < mid && money3 < mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                           
                            document.getElementById("who3").innerHTML = name3;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name3;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name2;
                            
                            document.getElementById("who3").innerHTML = name3;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name3;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money1 < mid && money4 < mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                            
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                           
                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name2;
                          
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money1 < mid && money5 < mid) {
                        var diff1 = money2 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money1;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money5;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name2;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name1;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                            
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;

                        }
                        else {

                            document.getElementById("who").innerHTML = name1;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name2;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name5;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name2;
                            
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                          
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;
                        }
                    }
                    else if (money2 < mid && money3 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money4 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money3;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name4;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                           
                            document.getElementById("who3").innerHTML = name3;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                           
                            document.getElementById("who4").innerHTML = name3;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;
                          
                            document.getElementById("who3").innerHTML = name3;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name4;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name3;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money2 < mid && money4 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;
                           
                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                        
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;
                            
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money2 < mid && money5 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money3 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money2;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money5;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name2;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name3;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                           
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                          
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;

                        }
                        else {

                            document.getElementById("who").innerHTML = name2;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name5;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;
                           
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name3;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                          
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;
                        }
                    }
                    else if (money3 < mid && money4 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money2 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money3;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money4;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name2;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                            
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;

                        }
                        else {

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }


                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;
                           
                            document.getElementById("who3").innerHTML = name4;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                           
                            document.getElementById("who4").innerHTML = name4;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name5;
                        }
                    }
                    else if (money3 < mid && money5 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money2 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money3;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money5;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {
                           
                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name3;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name2;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                          
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                           
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;

                        }
                        else {

                            document.getElementById("who").innerHTML = name3;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            document.getElementById("who2").innerHTML = name5;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;

                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                            
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name4;
                        }
                    }
                    else if (money4 < mid && money5 < mid) {
                        var diff1 = money1 - mid;
                        if (diff1 % 1 !== 0) {
                            diff1 = diff1.toFixed(2);
                        }

                        var diff2 = money2 - mid;
                        if (diff2 % 1 !== 0) {
                            diff2 = diff2.toFixed(2);
                        }

                        var ans1 = mid - money4;
                        if (ans1 % 1 !== 0) {
                            ans1 = ans1.toFixed(2);
                        }

                        var ans2 = mid - money5;
                        if (ans2 % 1 !== 0) {
                            ans2 = ans2.toFixed(2);
                        }

                        document.getElementById("solution").style.display = "flex";
                        document.getElementById("equal").style.display="none";
                        document.getElementById("result").style.display = "flex";
                        document.getElementById("result2").style.display = "flex";
                        document.getElementById("result3").style.display = "flex";
                        document.getElementById("result4").style.display = "flex";

                        if (diff1 <= ans1) {

                            document.getElementById("who").innerHTML = name4;
                            document.getElementById("owes").innerHTML = diff1 ;
                            document.getElementById("whom").innerHTML = name1;

                            ans1 = ans1 - diff1;

                            document.getElementById("who2").innerHTML = name4;
                            document.getElementById("owes2").innerHTML = ans1 ;
                            document.getElementById("whom2").innerHTML = name2;

                            diff2 = diff2 - ans1;
                            if (diff2 % 1 !== 0) { diff2 = diff2.toFixed(2); }

                         
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                          
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name3;

                        }
                        else {

                            document.getElementById("who").innerHTML = name4;
                            document.getElementById("owes").innerHTML = ans1 ;
                            document.getElementById("whom").innerHTML = name1;
                            diff1 = diff1 - ans1;
                            if (diff1 % 1 !== 0) { diff1 = diff1.toFixed(2); }

                            document.getElementById("who2").innerHTML = name5;
                            document.getElementById("owes2").innerHTML = diff1 ;
                            document.getElementById("whom2").innerHTML = name1;
                      
                            document.getElementById("who3").innerHTML = name5;
                            document.getElementById("owes3").innerHTML = diff2 ;
                            document.getElementById("whom3").innerHTML = name2;

                            ans2 = ans2 - diff2;
                            if (ans2 % 1 !== 0) { ans2 = ans2.toFixed(2); }

                           
                            document.getElementById("who4").innerHTML = name5;
                            document.getElementById("owes4").innerHTML = ans2 ;
                            document.getElementById("whom4").innerHTML = name3;
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

    if (isNaN(money) || money < 0) {
        document.getElementById("rs-span1").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span1").innerHTML = money;
    }
    let money2 = document.getElementById("money-input2").value;

    if (isNaN(money2) || money2 < 0) {
        document.getElementById("rs-span2").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span2").innerHTML = money2;
    }
    let money3 = document.getElementById("money-input3").value;

    if (isNaN(money3) || money3 < 0) {
        document.getElementById("rs-span3").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span3").innerHTML = money3;
    }
    let money4 = document.getElementById("money-input4").value;

    if (isNaN(money4) || money4 < 0) {
        document.getElementById("rs-span4").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span4").innerHTML = money4;
    }
    let money5 = document.getElementById("money-input5").value;

    if (isNaN(money5) || money5 < 0) {
        document.getElementById("rs-span5").innerHTML = "0";
    }
    else {
        document.getElementById("rs-span5").innerHTML = money5;
    }
}