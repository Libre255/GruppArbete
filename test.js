let LandvetterTnV = []
let results = []


 let Codes = ["Level", "LevelDownstream","Tapping", "RainFall"]
    
 let Level = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[0]}?format=Json` 
 let LevelDowstream = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[1]}?format=Json`
 let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[2]}?format=Json`  
 let RainFall = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[3]}?format=Json` 
 let url = [Level, LevelDowstream, Tapping, RainFall]
 let testa = []
 url.forEach((url, i)=>{
     LandvetterTnV.push(
         fetch(url).then(
             (res)=>{
                 results[i] = res.json().then(data => new testa.push(data))
             }
         )
     )
 })

 console.log(testa);

 /*
var list = [];
var urls = ['1.html', '2.html', '3.html'];
var results = [];

urls.forEach(function(url, i) { // (1)
  list.push( // (2)
    fetch(url).then(function(res){
      results[i] = res.blob(); // (3)
    })
  );
}); */
