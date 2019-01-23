// var myHeading = document.querySelector('h1')
// myHeading.innerHTML = "Hello world!"
// alert('hello!')

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     alert("Don't touch me! I will change to another browser!")
//     var mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/firefox-icon.png') {
//         myImage.setAttribute('src', 'images/firefox2.png');
//         myHeading.innerHTML = "Hello my friend " + "Chrome";
//     }
//     else {
//         myImage.setAttribute('src', 'images/firefox-icon.png');
//         myHeading.innerHTML = "Hello my friend " + "Firefox";
//     }
// };
// var myButton = document.getElementById('button');
// var myButton_freak = document.getElementById('button_freak');

// var bg = "배경 바꾸기";
// var bg_arr = ["R", "G", "B"];
// var cl_arr = ["red", "green", "blue"];
// var id;
// var option;
//
// id = bg + bg_arr[0];
// var myButton_bg_1 = document.getElementById(id);
// myButton_bg_1.style.color = cl_arr[0];
//
// id = bg + bg_arr[1];
// var myButton_bg_2 = document.getElementById(id);
// myButton_bg_2.style.color = cl_arr[1];
//
// id = bg + bg_arr[2];
// var myButton_bg_3 = document.getElementById(id);
// myButton_bg_3.style.color = cl_arr[2];
//
// myButton_bg_1.onclick = function () {
//     option = 'rgb(255, 0, 0)';
//     document.body.style.backgroundColor = option
// }
//
// myButton_bg_2.onclick = function () {
//     option = 'rgb(0, 255, 0)';
//     document.body.style.backgroundColor = option
// }
//
// myButton_bg_3.onclick = function () {
//     option = 'rgb(0, 0, 255)';
//     document.body.style.backgroundColor = option
// }

// function Blinking() {
//     var l = 0
//     while(1) {
//         if (l === 0) {
//             document.body.style.backgroundColor = 'rgb(255, 0, 0)';
//             l = 1
//         }
//         else {
//             document.body.style.backgroundColor = 'rgb(255, 255, 255)';
//             l = 0
//         }
//     }
// }
var calcomflag = 0;
var Rect = document.getElementById('rect');
var Total = document.getElementById('total');
var myHeading = document.querySelector('h1');
// var myBlinking = document.getElementById('Foo');

// setInterval(function () {
//     myBlinking.style.display = (myBlinking.style.display === 'none' ? '' : 'none');
// }, 1000);
var num0 = document.getElementById('0');
var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');
var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');

var but_clr = document.getElementById('clear')
var but_plus = document.getElementById('+');
var but_minus = document.getElementById('-');
var but_times = document.getElementById('*');
var but_devide = document.getElementById('/');
var but_cal = document.getElementById('cal');

var final = document.getElementById('result');

var num_List = [];
var op_List = [];

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 96) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }

        Rect.innerText = Rect.innerText + '0';
        Total.innerText = Total.innerText + '0';
    }
    else if(event.keyCode == 97) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '1';
        Total.innerText = Total.innerText + '1';
    }
    else if(event.keyCode == 98) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '2';
        Total.innerText = Total.innerText + '2';
    }
    else if(event.keyCode == 99) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '3';
        Total.innerText = Total.innerText + '3';
    }
    else if(event.keyCode == 100) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '4';
        Total.innerText = Total.innerText + '4';
    }
    else if(event.keyCode == 101) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '5';
        Total.innerText = Total.innerText + '5';
    }
    else if(event.keyCode == 102) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '6';
        Total.innerText = Total.innerText + '6';
    }
    else if(event.keyCode == 103) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '7';
        Total.innerText = Total.innerText + '7';
    }
    else if(event.keyCode == 104) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '8';
        Total.innerText = Total.innerText + '8';
    }
    else if(event.keyCode == 105) {
        if (calcomflag === 1) {
            Rect.innerText = "";
            calcomflag = 0;
        }
        Rect.innerText = Rect.innerText + '9';
        Total.innerText = Total.innerText + '9';
    }

    else if(event.keyCode == 107) {
        num_List.push(Rect.innerText);
        op_List.push("+");
        Total.innerText = Total.innerText + '+';
        Rect.innerText = "";
    }
    else if(event.keyCode == 109) {
        num_List.push(Rect.innerText);
        op_List.push("-");
        Total.innerText = Total.innerText + '-';
        Rect.innerText = "";
    }
    else if(event.keyCode == 106) {
        num_List.push(Rect.innerText);
        op_List.push("*");
        Total.innerText = Total.innerText + '*';
        Rect.innerText = "";
    }
    else if(event.keyCode == 111) {
        num_List.push(Rect.innerText);
        op_List.push("/");
        Total.innerText = Total.innerText + '/';
        Rect.innerText = "";
    }
    else if(event.keyCode == 46) {
        Rect.innerText = "";
        Total.innerText = "";
        num_List = [];
        op_List = [];
    }
    else if(event.keyCode == 13) {
        num_List.push(Rect.innerText);

        var result = parseInt(num_List[0]);
        var z;
        for (z=0;z<op_List.length;z++) {
            if (op_List[z] === "+") {
                result = result + parseInt(num_List[z+1]);
            }
            else if (op_List[z] === "-") {
                result = result - parseInt(num_List[z+1]);
            }
            else if (op_List[z] === "*") {
                result = result * parseInt(num_List[z+1]);
            }
            else if (op_List[z] === "/") {
                result = result / parseInt(num_List[z+1]);
            }
        }
        Rect.innerText = result;
        Total.innerText = Total.innerText + " = " + result + " \n- - - - - - - - - - - - - - - - - - - -\n";
        final.innerHTML = "결과값 : " + result;
        num_List = [];
        op_List = [];
        calcomflag = 1;
    }
});

num0.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }

    Rect.innerText = Rect.innerText + '0';
    Total.innerText = Total.innerText + '0';

};
num1.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '1';
    Total.innerText = Total.innerText + '1';
};
num2.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '2';
    Total.innerText = Total.innerText + '2';

};
num3.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '3';
    Total.innerText = Total.innerText + '3';

};
num4.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '4';
    Total.innerText = Total.innerText + '4';

};
num5.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '5';
    Total.innerText = Total.innerText + '5';

};
num6.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '6';
    Total.innerText = Total.innerText + '6';

};
num7.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '7';
    Total.innerText = Total.innerText + '7';

};
num8.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '8';
    Total.innerText = Total.innerText + '8';

};
num9.onclick = function() {
    if (calcomflag === 1) {
        Rect.innerText = "";
        calcomflag = 0;
    }
    Rect.innerText = Rect.innerText + '9';
    Total.innerText = Total.innerText + '9';

};

but_clr.onclick = function () {
    Rect.innerText = "";
    Total.innerText = "";
    num_List = [];
    op_List = [];
};

but_plus.onclick = function () {
    num_List.push(Rect.innerText);
    op_List.push("+");
    Total.innerText = Total.innerText + '+';
    Rect.innerText = "";
};
but_minus.onclick = function () {
    num_List.push(Rect.innerText);
    op_List.push("-");
    Total.innerText = Total.innerText + '-';
    Rect.innerText = "";
};
but_times.onclick = function () {
    num_List.push(Rect.innerText);
    op_List.push("*");
    Total.innerText = Total.innerText + '*';
    Rect.innerText = "";
};
but_devide.onclick = function () {
    num_List.push(Rect.innerText);
    op_List.push("/");
    Total.innerText = Total.innerText + '/';
    Rect.innerText = "";
};

but_cal.onclick = function () {
    num_List.push(Rect.innerText);

    var result = parseInt(num_List[0]);
    var z;
    for (z=0;z<op_List.length;z++) {
        if (op_List[z] === "+") {
            result = result + parseInt(num_List[z+1]);
        }
        else if (op_List[z] === "-") {
            result = result - parseInt(num_List[z+1]);
        }
        else if (op_List[z] === "*") {
            result = result * parseInt(num_List[z+1]);
        }
        else if (op_List[z] === "/") {
            result = result / parseInt(num_List[z+1]);
        }
    }
    Rect.innerText = result;
    Total.innerText = Total.innerText + " = " + result + " \n- - - - - - - - - - - - - - - - - - - -\n";
    final.innerHTML = "결과값 : " + result;
    num_List = [];
    op_List = [];
    calcomflag = 1;
};

// function numclick(num) {
//     var ns = num.toString();
//     var bs = "num" + ns;
//     bs.onclick = function() {
//         Rect.innerText = Rect.innerText + ns;
//     }
// }
//
// for(i=0;i<=9;i++) {
//     numclick(i);
// }
// ButtonA.onclick = function () {
//
//     getNum('A', HeadA);
// };
// ButtonB.onclick = function () {
//     getNum('B', HeadB);
// };
//
// ButtonC.onclick = function () {
//     var numA = localStorage.getItem('nameA');
//     var numB = localStorage.getItem('nameB');
//     var numC = parseInt(numA) + parseInt(numB);
//     Headresult.innerHTML = "결과값 : " + numC
// };
//
// function getNum(Rect) {
//     var num = prompt('Please enter your num', "0");
//     localStorage.setItem('name' + uid, num);
//     myHeading.innerHTML = "숫자 " + uid + " : " + num;
// }


// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = "Hello my friend " + myName;
// }
//
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.innerHTML = "Hello my friend " + storedName;
// }
//
// myButton_freak.onclick = function() {
//     var a = "ㅇ";
//     var a_arr = [];
//     a_arr.push(a);
//     var inc = "ㅇ";
//     i = 0;
//     while (1) {
//         if (i === a_arr.length - 1) {
//             alert(a_arr[i]);
//             inc = a_arr[i] + "ㅇ";
//             a_arr.push(inc);
//         }
//         i++;
//     }
// };
//
// myButton.onclick = function() {
//     setUserName();
// };

// Blinking()