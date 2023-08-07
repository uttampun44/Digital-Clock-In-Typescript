"use strict";
let show_hours = document.querySelector('#hours');
let show_minutes = document.querySelector('#minutes');
let show_seconds = document.querySelector('#seconds');
let show_date = document.querySelector('#date');
// Error handling utility function for element selection
function getElementByID(id) {
    const element = document.querySelector(id);
    if (!element) {
        throw new Error("Element not found");
    }
    return element;
}
// show date function
const Calendar = () => {
    try {
        let date = new Date();
        const calendar = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-US', calendar);
        show_date.innerText = formattedDate.toLocaleString();
    }
    catch (error) {
        console.error("An Error Occured", error);
    }
};
const clock = () => {
    try {
        Calendar();
        // show watch function
        const watch = () => {
            try {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                show_hours.innerText = hours.toLocaleString();
                show_minutes.innerText = minutes.toLocaleString();
                show_seconds.innerText = seconds.toLocaleString();
            }
            catch (error) {
                console.log("An error occured", error);
            }
        };
        setInterval(watch, 100);
    }
    catch (error) {
        console.error(error);
    }
};
clock();
