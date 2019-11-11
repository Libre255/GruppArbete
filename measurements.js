document.addEventListener("DOMContentLoaded", (e) => {
    var reloadButton = document.getElementById("reloadData")
    reloadButton.addEventListener('click', function() {
        refreshTime()
    });
    });

var timeData = new Date().toLocaleDateString()
var newGeojson;
var map;
var LevelDownstream;
var LevelDownstreamValue;
var measureWords = ["Nivå", "Nivå nedströms", "Tappning", "Flöde", "Nederbörd"]
var measureResults = []
var dates = []
var newDates = []
var dateValues = []

//Hämtar data med följande anrop: MeasureSites/{APPID}/{MEASURESITECODE}
fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/abc1cff9-4ac5-4bb0-b2ea-faa252240b0f?format=Json")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        res = myJson;
        refreshTime()
        render()
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


//HISTORISK DATA
//Hämta historisk data enligt inputvärden
function getDate() {
    fetch("http://data.goteborg.se/RiverService/v1.1/Measurements/abc1cff9-4ac5-4bb0-b2ea-faa252240b0f/Agnesberg/Level/2019-10-30/2019-11-04?format=Json")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            hist = myJson;
            console.log(hist)
            findBrakets()
            reCount()
            renderDates()
        });
}


// //Hitta brackets för att plocka ur timestamp
function findBrakets() {
    hist.forEach(function (bracket, index) {
        firstBracket = bracket.TimeStamp.indexOf("(");
        secondBracket = bracket.TimeStamp.indexOf(")");
        dateValues.push(hist[index].Value)
        dates.push(hist[index].TimeStamp.slice(firstBracket + 1, secondBracket))
    });
}

//Använd timestamp för att få ut ett nytt datum
function reCount() {
    dates.forEach(function (date) {
        newDates.push(new Date(parseInt(date)))
    })
}

//Tryck ut datum på sidan
function renderDates() {
    newDates.forEach(function (date, index) {
        var histContainer = document.getElementById("historic-data")
        var newP = document.createElement("p")
        newP.innerText = (date.toLocaleDateString() + " värde = " + dateValues[index])
        histContainer.appendChild(newP)
    });
}
//HISTORISK DATA by Tony Montana
let formOfDate = document.getElementById("submitDate");
let ListDatesAndValues = document.querySelector(".listOfMeasurments");

formOfDate.addEventListener("submit", historiskData); 
async function historiskData(e){   
    e.preventDefault()
    try{
     let startDate = document.getElementById("startDate").value
     let endDate = document.getElementById("endDate").value
     let station = document.getElementById("station").value
     let measurmentType = document.getElementById("measureParameters").value
     let getData = await fetch(`http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/${station}/${measurmentType}/${startDate}/${endDate}?format=Json`)
     let Data = await getData.json()
     //Adding Title To each List according to the measurment Type & Error Handling if Measurment Not Found ^_^/
      if(Data.length == 0){
        alert("Data Not Found")
      }else{
        ListDatesAndValues.innerHTML +=`<span id="titleType">${measurmentType} of ${station}</span>`
      }  
     //Adjusting Data and Inserting into DOM 
        Data.forEach(element => {
            //Get and Convert Date into Something readble xD
            let onlyDateCode = element.TimeStamp
            let dateString = onlyDateCode.substring(
                onlyDateCode.lastIndexOf("(") + 1,
                onlyDateCode.lastIndexOf(")")
                ); 
            let converIntoNr = parseFloat(dateString);
            let toStringDate = new Date(converIntoNr).toString();
            let actualDate = toStringDate.slice(0,16);
            //Get Values
            let Values = element.Value;
            //Imerge into HTML :D
            ListDatesAndValues.innerHTML += `
            <li>${actualDate} - Value <span>${Values}</span></li>
            `
            
        });
        //Reset Button ::D
        document.getElementById("resetBtn").onclick = (e)=>{
            e.preventDefault()
            ListDatesAndValues.innerHTML = ""
        }
        
    }catch(error){
        alert("Insert Date")
     }
    
}

function refreshTime() {
    var mapen = document.getElementById("refresh")
    var mapLoaded = document.createElement("p")
    mapen.innerHTML = ""
    mapLoaded.innerHTML = "Sidan laddades " +timeData +" "+new Date().toLocaleTimeString()
    mapen.append(mapLoaded)
}

