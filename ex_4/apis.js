let country = [];
$(document).ready(function(){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        type: "GET",
        success: function(res){
            console.log(res);
            country = res;
            createCountry();
        },
        error: function(res){
            console.log(res);
        }
    })
})
function createCountry(){
    $(document).ready(function(){
        for(let i = 0; i < country.length; i++){
            $("#countryDropdown").append(`<a href = '#' id = '${country[i].alpha2Code}' style = 'text-decoration: none;width:600px background-color: white' onclick = 'update(this.id)'>` + country[i].name+ `</a>` + '<br>');
        }
        
    })
}
function hello(){
    $(document).ready(function(){
        $("#countryDropdown").toggle();
    })
}

function update(id){
    let a = {};
for(let i = 0; i< country.length;i++){
    if(id === country[i].alpha2Code){
        a = country[i];
        console.log(a);
    }
}
    $(document).ready(function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q="+ a.capital+"&appid=21c92ca83c00d399486af8ea22fa336a",
            type: "GET",
            success: function(res){
                console.log(res);
                $('#windSpeed').html("Wind Speed: " + res.wind.speed);
                $('#temprature').html("temprature: " + res.main.temp);
                $('#humidity').html("Humidity: " + res.main.humidity);
                $('#visibility').html("Visibility: " +res.visibility);
                $('#icon1').attr('src','http://openweathermap.org/img/wn/'+res.weather[0].icon+'@2x.png')
            },
            error: function(res){
                console.log(res);
            }
        })
        s = a.alpha2Code.toLowerCase();
        $('#flag').attr('src', 'http://www.geonames.org/flags/x/'+s+'.gif')
        $('#NativeName').html('Native Name: ' + a.nativeName);
        $('#Capital').html('Capital: ' + a.capital);
        $('#Regin').html('Region: ' + a.region);
        $('#Population').html('Population: ' + a.population);
        $('#Languages').html('Languages: ' + a.languages[0].name);
        $('#TimeZone').html('Time Zone: ' + a.timezones[0]);
        $('#calling').html(a.callingCodes[0]);
        $('#kk').html(a.name);
        myLatLng = {lat: (a.latlng[0]), lng: (a.latlng[1])},
        map = new google.maps.Map($('#map')[0], {
            center: myLatLng,
            zoom: 4
        })
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "your indented location"
        });

    })
    
}