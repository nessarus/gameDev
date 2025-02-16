//reset form
function restform() {
    document.getElementById("myForm").reset();
}

//date last modified
function dateLastModified() {
    var dateThis = "Last Modified: " + document.lastModified.split(" ")[0];
    document.getElementById("last_date").innerHTML = dateThis;
}

//dynamic time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dynamic_time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
