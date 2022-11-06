let Name = prompt("Kullanıcı adınızı giriniz: ")
let MyName = document.querySelector("#myName")

MyName.innerHTML = `${Name}`;

function showTime () {
    const today = new Date ();
    let hours = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime (second);
    document.getElementById('myClock').innerHTML = `${hours}:${minute}:${second}`;
    setInterval(showTime, 1000);

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()