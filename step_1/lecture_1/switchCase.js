function whichWeekDay(day) {
    if (isNaN(day) || day < 1 || day > 7) {
        console.log("Invalid");
        return;
    }

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    console.log(days[day - 1]);
}
