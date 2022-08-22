function GetTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    (h < 10) ? document.getElementById("hour").innerText = "0" + h : document.getElementById("hour").innerText = h;
    (m < 10) ? document.getElementById("minute").innerText = m : document.getElementById("minute").innerText = m;
    (s < 10) ? document.getElementById("second").innerText = s : document.getElementById("second").innerText = s;
    document.getElementById("dates").innerText = day + " / " + month + " / " + year;


}

setInterval(function () { GetTime(); }, 1000);