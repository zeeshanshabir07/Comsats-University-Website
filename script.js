// Create a new Date object
const today = new Date();

// Get the day of the month
const day = today.getDate();

// Get the month (0-indexed, so add 1 to get the current month)
const month = today.getMonth() + 1;

// Get the full year
const year = today.getFullYear();

// Format the date as "day/month/year"
const formattedDate = `${day}/${month}/${year}`;

// Select the element with ID "date-1"
const dateElement = document.getElementById('date-1');

// Append the formatted date to the element's inner HTML
dateElement.textContent = formattedDate;
