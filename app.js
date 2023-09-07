let button = document.querySelector("button");
let input = document.querySelector("input");
let display = document.querySelector(".display");

button.addEventListener('click', () => {
    let countryName = input.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);

    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data[0]);
            console.log(data[0].capital);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common)

            // Assuming you have latitude and longitude coordinates for the country
            let latitude = 22.5726;
            let longitude = 88.3639;
            let mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774fb344a38f%3A0xbffa68b4de9f65b2!2sIndia!5e0!3m2!1sen!2sus!4v1625940907052!5m2!1sen!2sus`;

            display.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img">
                <h1 class="name">${data[0].name.common} </h1>
                <h1 class="captial">captial:${data[0].capital}</h1>
                <div class="map-container">


                    <iframe 
                        width="100%" 
                        height="300" 
                        frameborder="0" 
                        style="border:0" 
                        src="${mapUrl}">
                    </iframe>
                </div>


            `;
        });
});
