const dailyButton = document.getElementById('daily-button');
const weeklyButton = document.getElementById('weekly-button');
const monthlyButton = document.getElementById('monthly-button');
const dynamicDataWeek = document.querySelectorAll('.weekly');
const dynamicDataDay = document.querySelectorAll('.daily');
const dynamicDataMonth = document.querySelectorAll('.monthly');

weeklyButton.addEventListener('click', function() {
    weeklyButton.classList.add('active');
    monthlyButton.classList.remove('active');
    dailyButton.classList.remove('active');
    dynamicDataDay.forEach(element => {
        element.classList.add('hidden');
    });
    // For each element is used because the dynamic data const is a nodelist of elements
    dynamicDataMonth.forEach(element => {
        element.classList.add('hidden');
    });
    dynamicDataWeek.forEach(element => {
        element.classList.remove('hidden');
    });
});
dailyButton.addEventListener('click', function() {
    dailyButton.classList.add('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.remove('active');
    dynamicDataWeek.forEach(element => {
        element.classList.add('hidden');
    });
    dynamicDataMonth.forEach(element => {
        element.classList.add('hidden');
    });
    dynamicDataDay.forEach(element => {
        element.classList.remove('hidden');
    });
});
monthlyButton.addEventListener('click', function() {
    monthlyButton.classList.add('active');
    dailyButton.classList.remove('active');
    weeklyButton.classList.remove('active');
    dynamicDataDay.forEach(element => {
        element.classList.add('hidden');
    });
    dynamicDataWeek.forEach(element => {
        element.classList.add('hidden');
    });
    dynamicDataMonth.forEach(element => {
        element.classList.remove('hidden');
    });
});

fetch('/data.json')
.then(res => console.log(res))