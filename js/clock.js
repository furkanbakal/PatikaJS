let nameSurname = 'Furkan Bakal';

function showTime() {
    const date = new Date();

    let dateElem = document.getElementById('myClock');
    dateElem.innerHTML = `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}:${date.getHours()}:${date.getSeconds()}`;

    setTimeout(showTime, 1000)
}

let elem = document.getElementById('myName');
elem.innerHTML = nameSurname;

showTime()