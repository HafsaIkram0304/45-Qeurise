"use strict";
function describe_city(city, country = "Pkistan") {
    return `${city} is in ${country}`;
}
console.log(describe_city("Karachi", "Pakistan"));
console.log(describe_city("Tokyo", "Japan"));
console.log(describe_city("Berlin", "Germany"));