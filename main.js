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
    fetch('/data.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const dynamicDataWeek = document.querySelectorAll('.dynamic-data-flex.weekly');
    dynamicDataWeek.forEach((element, index) => {
        const mainDataBig = element.querySelector('.main-data-big');
        const pastDataMuted = element.querySelector('.past-data-muted');
        const current = data[index].timeframes.weekly.current;
        const previous = data[index].timeframes.weekly.previous;

        mainDataBig.textContent = `${current}hrs`; // Set current data
        pastDataMuted.textContent = `Last Week - ${previous}hrs`; // Set previous data
    });
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
    fetch('/data.json')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          const dynamicDataDay = document.querySelectorAll('.dynamic-data-flex.daily');
          dynamicDataDay.forEach((element, index) => {
              const mainDataBig = element.querySelector('.main-data-big');
              const pastDataMuted = element.querySelector('.past-data-muted');
              const current = data[index].timeframes.daily.current;
              const previous = data[index].timeframes.daily.previous;

              mainDataBig.textContent = `${current}hrs`; // Set current data
              pastDataMuted.textContent = `Yesterday - ${previous}hrs`; // Set previous data
          });
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
fetch('/data.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const dynamicDataMonth = document.querySelectorAll('.dynamic-data-flex.monthly');
    dynamicDataMonth.forEach((element, index) => {
        const mainDataBig = element.querySelector('.main-data-big');
        const pastDataMuted = element.querySelector('.past-data-muted');
        const current = data[index].timeframes.monthly.current;
        const previous = data[index].timeframes.monthly.previous;

        mainDataBig.textContent = `${current}hrs`; // Set current data
        pastDataMuted.textContent = `Last Month - ${previous}hrs`; // Set previous data
    });
});
});