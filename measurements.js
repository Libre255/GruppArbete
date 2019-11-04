fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/abc1cff9-4ac5-4bb0-b2ea-faa252240b0f?format=Json")
.then(function (response) {
return response.json();
})
.then(function (myJson) {
res = myJson;
console.log(res);
});
