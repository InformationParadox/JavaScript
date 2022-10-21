const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const deadline = document.querySelector(".deadline");
  const giveaway = document.querySelector(".giveaway");
  const items = document.querySelectorAll(".deadline-format h4");
//   console.log(items)

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay =  tempDate.getDate();

let futureDate = new Date(2022,7, 24, 22, 31, 0);
// months are 0th index instead of 1 i.e december is 11 starting from jan [0]
// console.log(futureDate);

// every 10 days ma afai update hune..
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 0);

const year = futureDate.getFullYear();
const hour =  futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}
 ${year} ${hour}:${minutes}pm`;

 //future time in ms
 const futureTime = futureDate.getTime();
//  console.log(futureTime);

 function getRemainingTime() {
    const today = new Date().getTime();
    // console.log(today)
    const t = futureTime - today; // is in ms
    // console.log(t);
    
    // 1s = 1000ms
    // 1min = 60s
    // 1hour = 60 min
    //1day =24 hr

    // convert all the values in ms 
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    
    let hours = Math.floor((t % oneDay) / oneHour );
    // console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute );
    let seconds = Math.floor((t % oneMinute) / 1000 );
    
    //set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return `0${item}`;
        }

        else {
            return item;
        }
    }

    items.forEach(function(item ,index) {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> Sorry!!! This giveaway
        has expired </h4>`
    }
 }

 //countdown
let countdown = setInterval(getRemainingTime, 1000);

 getRemainingTime();

