function getAPIData() {

    var name = document.getElementById("search").value
    if (!name)
        name = "bharat"
    var request = new XMLHttpRequest();
    request.open("get", "https://restcountries.com/v3.1/name/" + name) //request genrrate
    request.send() //request send

    request.addEventListener("load", () => {
        // var data = JSON.parse(request.responseText)
        // data = data[0]

        var [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("maps").href = data.maps.googleMaps
        document.getElementById("startsOfWeek").innerHTML = data.startOfWeek

    })
}
getAPIData() 