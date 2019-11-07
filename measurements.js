var newGeojson;
var map;
var LevelDownstream;
var LevelDownstreamValue;
var measureWords = ["Nivå", "Nivå nedströms", "Tappning", "Flöde", "Nederbörd"]
var measureResults = []

//Hämtar data med följande anrop: MeasureSites/{APPID}/{MEASURESITECODE}
fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/abc1cff9-4ac5-4bb0-b2ea-faa252240b0f?format=Json")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        res = myJson;
        render()
        timeData = new Date()
        console.log(timeData)
    });

//Få access till kartan från mapbox
mapboxgl.accessToken =
    'pk.eyJ1IjoiZGltZGltZGV2IiwiYSI6ImNrMmthN2M0NTFlc3AzaG50cmRrdW50cGQifQ.eDajFzRCMerDz3g0qnJBHw';

//Renderfunktion för att ladda kartan
function render() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [11.96679, 57.70716],
        zoom: 9
    });

    var geojson = {
        type: 'FeatureCollection',
        features: []
    }; {
        createStations()
    };

    //Funktion för att flytta datan från API:iet till kartan
    function createStations() {
        res.forEach(function (station) {
            geojson.features.push(station)
        })
        newGeojson = geojson
        placeMarkers()
    }

}

//Funktion för att placera ut mätstationerna på kartan
function placeMarkers() {
    newGeojson.features.forEach(function (marker, index) {

        var el = document.createElement('div');
        el.className = 'marker';

        //If Sats för att avgöra om mätstationen har Mätvärdet.
        //1. Om stationen har measureWord från measureWords arrayen. och värdet är undefined pusha in resultatet + saknas.
        //2. Om stationen har measureWord från measureWords arrayen. och värdet är annat än undefined pusha in resultat + currentvalue från resutlatet.
        //3. Om stationen saknar measureWord från measureWords arrayen, pusha resultatet + saknas.
        measureResults = []
        measureWords.forEach(function (measurements) {
            var MeasureParameters = newGeojson.features[index].MeasureParameters.filter(item => item.Description === measurements);
            if (MeasureParameters.length > 0) {
                if (MeasureParameters[0].CurrentValue === undefined) {
                    measureResults.push(MeasureParameters[0].Description + " = Saknas Data")
                } else {
                    measureResults.push(MeasureParameters[0].Description + " = " + MeasureParameters[0].CurrentValue);
                }
            } else {
                measureResults.push(measurements + " = Saknas Data")
            };
        });
        var cord = [newGeojson.features[index].Long, newGeojson.features[index].Lat]
        new mapboxgl.Marker(el)
            .setLngLat(cord)
            .setPopup(new mapboxgl.Popup({
                    offset: 25
                })
                .setHTML('<h3>' + marker.Description +
                    '</h3><p>' + measureResults[0] +
                    '</p><p>' + measureResults[1] +
                    '</p><p>' + measureResults[2] +
                    '</p><p>' + measureResults[3] +
                    '</p><p>' + measureResults[4] +
                    '</p></p>'))
            .addTo(map);
    });
}