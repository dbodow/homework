console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
    type: 'GET',
    success: (result) => {
      window.result = result;
      let weatherInfo = '';
      result.weather.forEach( (weatherData) =>
        // { console.log(Object.keys(weatherData)); }
        { Object.keys(weatherData).forEach( (datum) => {
          // console.log(datum);
          // console.log(weatherData[datum]);
          weatherInfo += `${datum} -- ${weatherData[datum]}; `;
        });
          weatherInfo += '\n';
        }
      );
      console.log(weatherInfo);
    }
  });

// Add another console log here, outside your AJAX request
console.log('This log is below the asynchronous code but will execute first!');
