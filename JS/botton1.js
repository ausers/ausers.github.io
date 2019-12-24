function myFunction1() {
    var div1 = document.getElementById("myDIV1");
    if (div1.style.display === "none") {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }
    var x;
    for (var i = 1; i <= 4; i++) {
        if (i == 1) {
            continue;
        } else {
            x = document.getElementById("myDIV"+i);
            x.style.display = "none";
        }
    }
}

function myFunction2() {
    var div2 = document.getElementById("myDIV2");
    if (div2.style.display === "none") {
        div2.style.display = "block";
    } else {
        div2.style.display = "none";
    }
    var x;
    for (var i = 1; i <= 4; i++) {
        if (i == 2) {
            continue;
        } else {
            x = document.getElementById("myDIV"+i);
            x.style.display = "none";
        }
    }
}

function myFunction3() {
    var div3 = document.getElementById("myDIV3");
    if (div3.style.display === "none") {
        div3.style.display = "block";
    } else {
        div3.style.display = "none";
    }
    var x;
    for (var i = 1; i <= 4; i++) {
        if (i == 3) {
            continue;
        } else {
            x = document.getElementById("myDIV"+i);
            x.style.display = "none";
        }
    }
}

function myFunction4() {
    var div4 = document.getElementById("myDIV4");
    if (div4.style.display === "none") {
        div4.style.display = "block";
    } else {
        div4.style.display = "none";
    }
    var x;
    for (var i = 1; i <= 4; i++) {
        if (i == 4) {
            continue;
        } else {
            x = document.getElementById("myDIV"+i);
            x.style.display = "none";
        }
    }
}
