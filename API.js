$(document).ready(function() {
    const weatherInfoElement = $("#weather-info");
    const apiKey = "a9fed2e00635746dae30f54b4dd55102";
    const city = "Buenos Aires";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: "json",
        success: function(data) {
            
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherContent = `
                <h6> ${temperature}°C - ${humidity}%</h6>
            `;

            weatherInfoElement.html(weatherContent);
        },
        error: function() {
            weatherInfoElement.html("Sin informacion del clima.");
        }
    });
});
