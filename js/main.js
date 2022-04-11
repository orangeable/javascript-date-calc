var date1 = new Date("2022-03-12 12:30:00");
var date2 = new Date("2022-04-11 11:05:30");

function calcDates(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);

    var one_second = 1000;
    var one_minute = 1000 * 60;
    var one_hour   = 1000 * 60 * 60;
    var one_day    = 1000 * 60 * 60 * 24;
    var one_week   = 1000 * 60 * 60 * 24 * 7;

    var result = {
        seconds: Math.round((date2 - date1) / one_second),
        minutes: Math.round((date2 - date1) / one_minute),
        hours:   Math.round((date2 - date1) / one_hour),
        days:    Math.round((date2 - date1) / one_day),
        weeks:   Math.round((date2 - date1) / one_week),
        months:  ((date2.getFullYear() - date1.getFullYear()) * 12) + (date2.getMonth() - date1.getMonth()),
        years:   date2.getFullYear() - date1.getFullYear()
    };

    return result;
}

var diff = calcDates("2022-03-12 12:30:00", "2022-04-11 11:05:30");

console.log(diff);
