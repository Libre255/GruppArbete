//          '''[[[[[[[[[[[[[General TIPS]]]]]]]]]]]]]
// #Everything to the right of the equals sign, is evaluated first!
// #In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote. \n = new Line \r = carriage return \t = tab \b backspace \f form feed
// #You cant change a single letter inside a string with for exampel [0], you have to change the hole string inde order to change 
// #You can also get the last object of an array with [nameVariable.lenght-1]
// #Remember Javascript starts with 0
// #Mutable array = can be changed after being asign
// #Append = insert 
// #Note that property names with spaces in them must be in quotes
// #Index = the number position of an array or object. It always start counting from 0 
// #${} with backticks are used to insert something that is not a string or number inside a string "THis is a string because this loop ${i}"
// #When you use a function inside an Object you only need to writ the name of the function and the (){} = Name(){}
// #syncron = follwo the law order = 1,2,4,5,6,7
// #asyncrono = "run JavaScript in the BG" = if some code needs to wait for some command, keep running other codes meanwhile. 


// +++++++++++++++++++++++ Primitives/Values Types ++++++++++++++++++++++++++++++
//we are going to create a character
let name = "Dr Vein", lastName = "Hellz"; //string
let age = "9000"; //number
let soul = false; //boolean
let hiddenPower = undefined; //undefind
let CoolCar = null; //null
let abilites = ["Fire", "Thunder", "mindReader"]; //Array | Can insert any of the above
abilites[1] = "ice"; //To select a object inside a array write [number of the object] you can also change the object value
let DrVeinStats = { // Object | You can insert any of the stuff above to
    range:100, 
    damage:500,
    defens:300,
    speed:"undefine"
};

//you  can  inster a new  string inside a string with += like this:
let RandomString = ""
RandomString += "potato" + 23+ ["kappa", 0];

// *************************** OPERATOS ****************************************************
let car1 = "Raz";
let car2 = "Xen";
let AutoCar = car1+car2; // ( + - * / = ) All are called Opertaos 
// 1 == "1"  (== to Check if the figures look the same) In this case its True
// 3 === "3" (=== to Check if the value and type are the same) In this Case its false, since we have a string and a nummer
// car1 = Raz && car2 = Xen (&& to Check if both statments are true) In this case: True 
// car1 = Raz || car2 = Pol (|| to Check if one statment is true) In This case: true (returns if 1 is true)
// ! converts the element to the opposite Boolean. If element is true !element becomes false
// Tip: everything to the right of the equals sign is evaluated first
    //  you can use operators to string as well and other stuff
let Evo01 = 1;
Evo01 = Evo01 + 5; //Returns: 6
Evo01 += 5 ; // also Returns 6 (Because += is equal as the code above, same goes for -=, *= /= etc...) 
// ++++++++++++++++++++++++ Falsy & Truthy ++++++++++++++++++++++++++++++++++
let Falsy = [undefined, null, 0, false, "", NaN]; //anything that is not inside Falsy IS Truthy
//+++++++++++++++++++++++++++ Remainder = % ++++++++++++++++++++++++++++++++++
/* Exempel:
5 % 2 = 1 because 
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder) */

//++++++++++++++++++++++ Math "equations" ++++++++++++++++
math.floor() = //rounds up
math.random() = //gives a random number between 0 and 1 : exempel 0.1,0.5,0.32
parseInt() = //method converts a string into an integer (a whole number).
parseFloat() = //method converts a string into a point number (a number with decimal points). 
Number() = //method converts a string to a number.


//  **************** .Properties & Methods() ********************************************
// .Properties = give you detail of the element | Method() = Give you a function for the elemnt
let Sayaying = ["Yellow Hair", "Blue Eyes", "OverPower"]; 
console.log(Sayaying.length); // Properties always starts with a dot exempel .length;

let GreenMonkey = "Has Green Power" // The element we want to use
let changeWords = /Green/gi; //We select the word we want to change/edit with /Word/gi;
console.log(GreenMonkey.replace(changeWords, "Gold Hair")); 
//We use the method replace() were we insert the edit + NewWord. Methods Always have () in the End.
//You Can find all the .Properties and Methods() aviliable inside your bookMark Javascript!

// ++++++++++++++++++++++++ Strings and Numbers Controll with methods/CallBacks ++++++++++++++++++++++++++++++
let fullName = "Brian Gabriel Bartha Veliz";
                //Split()
let splitMyName =  fullName.split("Gabriel"); //split = takes away//grabs a word (makes a copy)
// And makes my fullName into an array with 2 parts ["Brian", " Bartha Veliz"] (this info is stored in the SplitVariable not the fullName!)
                //.lenght //how many letters there is in the string (counting from 0)
let nameLenght = fullName.length; 
                //toUpperCase() //Make everything UpperCase
let nameUC = fullName.toUpperCase(); 
                //IndexOf()wich number does "G"abriel Start (If letters where numbers)
let indexOf = fullName.indexOf("Brian Gabriel"); // = number 7
                //substring() = same as indexOf but instead of getting the number you get the string between ("this number", "and this") 
let substring = fullName.substring(6,13); // = Gabriel 
let mixSubIndex = fullName.substring(indexOf); // = gives you only the words after the index number starts
                //chartAt() =  get the first letter of a certain string/Number
let mixChartAtIndex = fullName.charAt(indexOf);
                //replace() //replace("theString that u want to replace", "The new string")
let replace = fullName.replace("Gabriel", "Dr");  // the new info only applies to the new variable "replace" in this case
                //concat()//combine to strings with a method! :D
    let nameTest = " Brian Gabriel ";
    let lastN =  " Bartha Veliz " //let sum = name + lastN is also posible
let combine =  nameTest.concat(lastN);  
                //trim() trim is used to take a way unNeeded spaces, you can use trimStart/End specific the place of the space 
let trim =  nameTest.trim()
                //Number.isInteger() to check if the number is posible to be divided (If its a odd number)(without comas)/ are helhet
let mySifra = 10;
let mySifra2 = 1.3; 
// console.log(Number.isInteger(mySifra2)); use as this or via a place holder
                //Number.isNaN() to determine if it's Not A Number(Wich means  if you input a number or string it will turn false since string can be converted into 1 and 0) 
let sifraTest = "asd";
//console.log(Number.isNaN("water")); // = false
                //parseFloat() = coverts a string into a number (also lets you get decimals) 
console.log(parseFloat("0031asd23")); // As you can see the parseFloat only reads the first numbers and ignores the rest because they are not numbers (Only works if the numbers comes first in the string!)
                //parseInt() = converts a string number into a number!
console.log(parseInt("0023asd")); //result = 23 parseInt() rounds the number so there is no decimals
                //toFixed() // converts string into numbers (also rounds/delets the decimals)             
let n1 = 23.12312412 
console.log(n1.toFixed(3)); //also decide how many decimals you want to display inside the () in this case 2
                //toPrecision() = same a toFixed but this method makes extras 00  or delets decimals in order to fullfill your  number 
let n2 = 12.12;
//console.log(n2.toPrecision(5)); // as  you can see it adds a extra 0 in the end because you wanted 5 numbers

// ++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++
//Insert Arrays into arrays is possible
var myArray = [["Potato", 69],["Hoola q ase", 10]];
//in Order to call an  array do as follwo!
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

// +++++++++++++++++++++++ Control Arrays with methods/Call backs ++++++++++++++++++++++++++++++++++++
let myPowers = ["Water", "Fire", "Earth", "Wind", "Mindfulness"];
//++++++++++++++.Shift()/unShift() // start of array Config
let shiftTest = myPowers.shift(); // = take away the first item inside the array
let unShiftTest = myPowers.unshift("Coconut"); // add a first item inside the array
//++++++++++++++.Pop()/.push() //End of array config 
let popTest = myPowers.pop() // = take away the last item inside the array!
let pushTest = myPowers.push("Melons") // = add a last item inside the array!
//++++++++++++++.slice() / .splice() = we use index inside ()
let myPowers2 = ["Water", "Fire", "Earth", "Wind", "Mindfulness"]; 
let sliceTest = myPowers2.slice(2, 4); // = copies and cuts away the first 2 elements and above 4 (saves what is between 2,4)
let spliceTest = myPowers2.splice(3, 1, "Kappa");// = removes or adds from the original array.
//    splice explication  (Position Nr, 1 or 0, new item, item 2 etc..) 1 to remove & 0 to add
//++++++++++++++.includes() = wheter the arrays has the following instructions
let powa = myPowers2.includes("Water");
//++++++++++++++.find() / .findIndex()
let myWorkers = [   
      {name: "John", occupation: "driver"},   //1 Array with 3 objects
      {name: "Erick", occupation: "teacher"},  // you have a list of workers
      {name: "Vent", occupation: "Footboll player"}
]
function searchThis(asd){ // the placeHolder name in this function doesnt matter.
      return asd.name === "Vent"; // you create a function that search if the name == "vent"
};         // then you use the find(to activate the function)  
let iFound = myWorkers.findIndex(searchThis)  // find() = gives you the elements findIndex() = gives you the nr/place of the element
//++++++++++++++.sort()  = makes everything in order as follwo; Numbers, Strings, Objects, Arrays
let myPowa = [3,2,"Nine",["asd"],6,{kappa:"lol"},7,"@"]; 
//++++++++++++++.toString() = Makes everything inside the array into a string!
//++++++++++++++.concat() 
let ttt = ["asd"], rrr = ["qwe"], fff = ["zxc"];
let concatMe = ttt + rrr + fff; // Using "+" converts the arrays into strings
console.log(ttt.concat(rrr,fff)); // this adds both arrays into one.
//++++++++++++++.filter() a callback function is needed
let myPowa2 = ["123","321","1234","4321","21","12"];// filter returns a element with the specific intruction that is giving in the function.
let filterTest = myPowa2.filter(asd => asd.length == 2);// in this case all elements with the lenght of 2, 
//++++++++++++++.forEach() is a loop and needs a callback a.k.a function use arrow function for shorcut
let theDays = ["Mon","Tis", "Ons", "tors", "Fre", "Lör", "Sön"];
let forEachLoop = theDays.forEach((day, index)=>{ // (items, index, array, thisArg) the place holder for the element can be name anything! we used arrow function to activate the forEachloop
      console.log(`the day: ${day} has the following index:${index+1} `);}); //adding +1 so it start counting from 1 instead of 0
//Its going to loop equal as many elements there are inside the array. 
//For each loop its going to use one element from the array
// in order to use ${placeholders} inside a string use backticks ``
//+++++++++++++.reduce() = sum everything inside the array
let over9000 = [{price:1,price:2,price:3,price:4,price:5,price:6,price:7}] // reduce is a loop that loops each number inside the array into a box (sum)
let reduceTest = over9000.reduce((sum, calcThisArray) => {return sum + calcThisArray.price},0); // we add a second parameter inside the reduce to define the variable  sum into 0 = let sum = 0;
// we create a variable called sum and select the array numbers by adding another placeholder named calcThisArray = over9000.
//++++++++++++++.map() take one array and covert into a new array inside a new variable
let mapTest = over9000.map(ArrayNames => ArrayNames.name );// give us all the names inside the original array and store it inside the new variable (new array)
//++++++++++++++.every() = boolean tests whether all elements in the array pass the test implemented by the provided function
let everyTest = over9000.every(controlArray => controlArray <= 15); // we make a function to control if every number is less or equal than 15
//++++++++++++++.some() = boolean tests whether at least one element in the array passes the test implemented by the provided function = ||
let someTest = over9000.some(item => item % 2 === 0);// checks whether at least one element is even

// ************************** Objects{} ********************************************************
//Objects consist of Keys and Values = {KeyName:value}. I call them "mini Variables" because they have the same effect
//To creat an object use the symbol {and insert Key:value here}

let Robot = { //we can use objects inside almost anywhere, in this exampel we created an object inside a variable.
  name: "iRob", // Key:Value
  MadeIn: "China", //The Key is just a name. Use w/e name you want.
  Status: "Offline" // The Value can also be used as a placeholder like in the Constrution functions
};
Robot.color = "red" // if you want to add a new properti just write as if you would access it
delete Robot.MadeIn; // if you want to delet a propertie
// There is 2 ways to access an object (Dot notation) &(Bracket notation)
Robot.name; // to access an object use dot (only when you know the name)
let robotTN = "changesEverySecond"; //let say that the name changes everytime
Robot[robotTN] = "Carlos" //use bracket notation to acces the unknow name by inserting the variable instead of the key (since the variable can change easily)
console.log(robotInfo);
// +++++++++++++++++++++++ copy multiple object properties inside a new object++++++++++++
const {name:{kappa:{shoes}}, status} = Robot() // if robot where a method with a returning objects 
// OR 
const a = {
  string: 'string',
  number: 123,
  bool: false,
}
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);

// ++++++++++++++++++++++++ copy objects into arrays +++++++++++++++++++++++
let kapo = Object.entries(livsmedelprodukt).slice(0).map(entry => entry[1]);
// use the method Object entries(Insert Objectname).slice(between wich index you want to slice. If u want all use 0)
//         to creat a new array with the following slice .map(entry => entry[0 if you want the keys and 1 if you want the values])
// you can also use array.from(ObjectName).forEach()
// ++++++++++++++++++++++++ "This" ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "this" alone = windows = an object that has all the functions in javascript stored inside
let Pedro = {
    name: "Pedro", //<-- are properties
    age:24, 
    pets:["Dog","cat","Snake"],
    sayName: function(){ //<--- are methods()
      console.log(this);  // ===  Pedro Object { name: "Pedro", age: 24, pets: […], sayName()}
      //when we use "this" word inside an object it refers to scope of the Pedro Object{} ^
    }
}
// ++++++++++++++++++++++++++ Object Construction Functions +++++++++++++++++++++++++++++++++++++++++
// C.F = "formulas with blank spaces". Basicly you make a function that works as an object body.
// You creat key : values just like a normal Object but instead of inserting the actual value you use placeholders
function Vegeta (hair, fitness, strenght)/*create PlaceHolders so we can access the object*/ {
  this.head = hair, //We inser "this." to implify that we are creating object Key : Values
  this.body = fitness, //object.key = value 
  this.power = strenght; //(In this case the value = placeholders)
  this.updatePower = ()=>{ // we can insert anything inside as a value since they are placeholders only and not actual value. In this Exemepel we introduced a anonymous function
    return ++this.power; // <-- this means that we are going to add(++) 1 to the value  strenght(placeholder)
  };
};
//Use Construction functions when you want to use the same object structure for differents elements
let Sayaying01 = new Vegeta("yellow", "Muscular", 5000); //we create a new "box" so we can insert the new information
// important to write "new" because other wise its going to overwrite the main function
// we fill the placeholders with real inforamtion. Now we can creat many Sayayings with the same object structure(Head,Body,Power) and add new properties/info.
let Sayaying99 = new Vegeta("Red", "Fast", 1999); 
console.log(Sayaying01); // then we display the box with information.

// ++++++++++++++++ object Mix .call()++++++++++++++
let obj1 = {n:30}
function Product(name, price) {
       this.name = name;
       this.price = price;
     }
function Food(name, price,experies) {
Product.call(this, name, price); //when you call a function you first write the name of the function.call()
// first parameter is for select the name or the object inside the function
// Since we already are inside the function we are just using the firs parameter to tell it that we are selecting the object inside the function
food.call(obj1)// in this case we are selecting by the objectName
this.experies = experies;
this.category = "Food";
}
let TypeOfFood = new Food("Apple", 99, 09);
// ++++++++++++++++ Object mix .apply() +++++++++++++++++++++++++++
let test1 = {power: 10};
let test22 = [20,30];
function gunz(a, b){
       return this.power + a + b // instead of declaring a + b in the () below we simply creat an array that will have the arguments
};              //.apply(test1, 20, 30) this is what it look below v since the array already has the arguments that we want to use!
let test33 = gunz.apply(test1, test22); // apply acceps and array as a second argument 
// ++++++++++++++++ Object function mix .bind() ++++++++++++++++++++++++++++++
let test44 = gunz.bind(test1); // bind conbiens the function and object into a new function with both propeties and parameters together!
/*function bind (a + b){  like this!  
       this.power = 10;
       return this.power + a + b
}*/ 

// +++++++++++++++++++++++++++ Object Factory Functions ++++++++++++++++++++++++++++++++++++++++++++
// F.F = Same effect as C.F but different structure
function Goku (hair, fitness, strenght){ // same as befor we create a function and add a object with keys:placeholders
   return{ //instead of definding a the object with this. we creat a normal object but after the return { key:placeholder}
     head:hair, //Since this is a normal object we use ":" to separate Key and values instead of =
     body:fitness,
     power: strenght,
     PowerUpgrade:()=>{
       return ++strenght;//in F.C we used the key but in F.F we use the value/placeholder to call an object element
     }
   };
};
let MonkeyMain01 = new Goku("Red", "Fast", 99999); 
console.log(MonkeyMain01.PowerUpgrade()); //we activated the function inside the object.
//+++++++++++++++++++++++++++ Object.creat() +++++++++++++++++++++++++++++++++++++++++++++++
let mobil= {
  madein: "china",
  year:2323
};
let myPhone = Object.create(mobil); // we create a prototype copy of the hole object of let mobil and insert inside myPhone
//now we can use myPhone as a normal object
myPhone.age = 23; // if it doesnt have the propertie (age) its going to create one (Only for the myPhone)
myPhone.madin ="France";
//+++++++++++++++++++++++++Prototypes explaning
let food = {
  init: function(type){
         this.type = type;
  },
  eat: function(){
         console.log(`you eat my ${this.type}`);}
  }
  const waffle = Object.create(food);
  //waffle.init("waffle") //we are using the structure(a.k.a prototype) of the food object
  food.type = "Apple" // if we dont define a structure its going to go back to food object and see if there is an property 
  //in this case we just added a property apple = type 
  waffle.eat() // = you eat my Apple
//++++++++++++++++++++++++++ Set / Get (to creat mini struktures like object contructor/factory)+++++++++++++++
// Get => acces  properties - Set => change or mutate them
let personOP = {
  firstName: "John",
  lastName: "Carlsson",
  get fullName(){
    return `My name is ${personOP.firstName} and my last name is ${personOP.lastName}`
    // get is used to reuse the properties inside the object into a method/function. So when the function is called both the function and properties will be console
  },
  set fullNameSplit(value){ //Set = lets you access the values and change the properties with a method/function
   const partsName = value.split(" ")
   this.firstName = partsName[0]; 
   this.lastName = partsName[1];
  } //Set method = certain rules that needs to be make befor changing the propeties
};
personOP.fullNameSplit = "Erik Johansson"
// ++++++++++++++++++++++++ Mutate Object ++++++++++++++++++++++++++++++++++++++++++++++++++
// Mutate Object just means that you can define an object outside the {}
let textObject = {}; // we created an empty object
textObject["brocoli"] = "healthy"; // we called the empty object by using the variable name
// then added the key inside [] and the value after the = 
// In this case we must define the type of key we are using. Wich means we can use variables inside as a key or maybe other stuff to... more info needed
console.log(textObject);

// +++++++++++++++++++++++++++++ Hosting +++++++++++++++++++++++++++++++++++++++++++++

 /*console.log(food); | The console.log always reads from top to bottom
   let food = "pizza"; | This wont work because the console.log only reads the stuff that's above*/

console.log(miMenu()); //A function can be called above or below the console.log. ()=>{} Doesnt Work!
function miMenu(){ // you could say that a function is "Global"
     let pizza = "pizza";
     let condimento = "peperoni";
     return pizza, condimento; // it will only return the last value (in this case chau)
   };
// In order to prevent a function to be "Global" you have to use a nameless function and insert it inside a variable.
//console.log(Menu2); | This wont work
let Menu2 = function (){ // As mention above, the console only register variables that are writen above.
    let beber = "Agua"; 
     return beber; //The DOM reads the variables first then functions etcs
}; // This means, since the function is inside a variable its going to be run earliest in the code = Faster website

// **************************** SCOPE *******************************************************
let Typo0 = "Margaritta" //This is on Global Scope = can be called from anywhere

function MiPizzeria (){
     let Typo1 = "Hawaii";  //This is a Local Scope = Can only be used inside the walls {brackets}
     let Typo2 = "KebabPizza";
}// Scope = Depending on the placement of the variable it is aviliable.

// ************************* If(){}/elseif(){}/Else{} *************************************************
if (car1 === "Rasz" && car2 === "Xen"){//If statment inside (Here is true)
 alert ("this is true")                //True = Then run statment inside {Here}
} else if( Typo0 === "Margaritta"){//If above statment not True try, Else If statment inside (Here is true) 
   console.log("This order is right") //True = Then run statment inside {Here}
} else { //If nothing is true then run: Else {this code}
   let naruto = document.querySelector(".naruto");
   naruto.style.width = "90%";
};
// ++++++++++++++++++++++++++++++ ShortCut for If/Else +++++++++++++++++
car1 === "Raz" || car2 === "Xn" ? console.log("We got at least one Car!") : console.log("We got no cars");
// ^-- If Statment/Question ----^   ^----------- If true -----------^     ^--------- If not True --------^
let points = 110;
points > 100 ? "Gold Member" : "Silver Member";
// ++++++++++++ Switch(Just like If/else but to check Multiples statment)++++++++++
let GokuPower = 9000;//We want to check this variable value
switch(GokuPower){ //Insert what the code you want check its value
     case 9000: document.querySelector("#TruePower").style.display ="block";
       break; //(First Case) (its 9000?) : (if true display this)
     case 8000: console.log("My Power is not complete yet");
     // if GokuPower = 8000 : display this
       break; //break = to stop running code below if true statment is found
     case 512: console.log("Resting");
       break;
     default: alert("Power Not Found") //Default = if statment is not found
}

//      +++++++++++++++++++ Try/Catch/ Throw +++++++++++++++++++++++++++++
let Person = '{"Age":30}'; //Test subject, only info aviliable: Age, 30.
try{ //we are going to try to find the Subject name
  let Pname= JSON.parse(Person);
  if(!Pname.name)/*Does Person have  name?*/{
    throw new SyntaxError("The object has no name");//we Throw an Error since Person has no Name
  }
} catch(e){//Catch = what will we do if we have an error?
  console.log("Error has occured:" + e); //We are going to console this message (e = the Throw error Syntax)
} finally {  //lets you run a code regarless of the result above
  console.log("This text will show up regarless of the result");
}

// ***************** LOOPS = Repeat a process or applied to multiples elements (use when you know when to stop)***********************************
let total = 0
for (let i = 0; i < 5; i++){ //  Start = 0 (0 <= 5) (add 1+ = i += 1)
//  Start      Stop   do after each; (i++ = i = i + 1);
// i = i + 1
// i = 1 + 1(Second loop); i = 2
// i = 2 + 1 (Thrid Loop): i = 3
// 3+1, 4+1, 5+1 and so on and so on
  console.log("Hello  World");
  total = total + i; //as we can see above total = 0 right now after first loop:
  // efter i has done 1 loop we will add i into the total 
  // next time it will loop the number 2 and then that number is going to add to the total, so 1 + 2 = 3 and so and so...
};
// ++++++++++++++++++ Label/break/Continue +++++++++++++++++++++++++++++
// Label is to give a loop a title so you can recall it later in the program = Pedro: statment
// break is to break the loop or ignore certain conditions 
// continue ignores the statment
let Kappa = 1
let pako = [1,2,3,4,5,6,7]
PedroLoops: // this is how you label anything in JAVASCRIPT!! WOhoo :DD:DD::D:D
if(Kappa === 1){
  Juan: // it becomes gray!! :D:D:DD:D:DD:DD
  for(let i = 0; i < pako.length; i++){
    console.log(pako[i]);
  }
}else if(pako[1] === 2){ // this statment will be ignored if continue is used
  continue;
}else if(pako[2] === 3){
  break Juan; //we will stop the loop named Juan ^ _^
}
// +++++++++++++++ Loop arrays +++++++++++++++++++++++++++++++++++++++
let kokpotatis = ["300g", "2Servings", "Lock"];
//        i < as long as the kokpotatis array in this case 3 = i < 3
for(let i = 0; i < kokpotatis.length; i++){// if you use i += 2 it will loop every other element  = only 1 and 3
  console.log(kokpotatis[i]);
}
// +++++++++++++++ Loop in Objects +++++++++++++++++++++++++++++++++++++++
let dunkey = {
  name = "Dunkey",
  age = 26,
  job = true
};
// for in Loop
for(var elem in dunkey){
  console.log(elem, data[elem]);
}
// ++++++++++++++++++++++++ While Loops (Use when you dont know when to stop looping) ++++++++++++++++++++++++++++++++++++++++++++
let randomStuff = [231, "han", false, true, undefined,["ben", 12], "hun"];
let num = 0; 
while(num < randomStuff.length){ // condition think it as if/else statment if(num < random)
  num++ // num = num + 1 = increment by 1 next:
  // num = 1 + 1 = num = 2
  // num = 2 + 1 = num = 3 and so and so on
  console.log(randomStuff[num]); // randomstuff[0] then [1] then [2] etc...
}
//      Reverse loop exempel: // lenght counts from 1 and Javascript starts from 0
let num = randomStuff.length - 1; //so in order to loop correctly we need to loop until 9 since the loop starts at 0
while(num >= 0){
  console.log(randomStuff[num]);
  num--
}
// ++++++++++++++++++++++++ Do While Loops +++++++++++++++++++++++++++
// it Opposite of while looops. It runs the code first then it checks the "IF" statment
let Powa = [ 23,231,123,"#sd", false];
let numOfPowa = Powa.length;
let n = 0;
do{
  for(let i = 0; i < 5; i++){ // Run this code first
    console.log(i);  
    n += i;
  }
}while(n < numOfPowa) // Then check if this condition is true. IF true run do{ condition again!} then check again while{condition};

// ************************ Functions(){} = action ********************************************
// parameter = placeholders and when you declare the placeholder its an argument
function Banana (tails, name )/*(create a "place" you want to add/change) PlaceHolder*/{
  let Story = `Donkey has ${tails} and hes name is ${name}`;
     //We want to display this      + space + add something
      return Story; // we always need to return inside a function if we want to save the result
};
let Color = "Color Green"; //We create something that we want to add to the function
console.log(Banana(Color)); //We add the variable inside (Here), now the variable is inside the function and the paragraph
// The Name of the placeHolder doesnt matter it just to give a direction to were to change.
// You can insert anything inside a function, even another Function

// ++++++++++ Named Functions
let thisName = ()=>{} //Arrow Function 
function AnotherName (){} //Normal Function
// Be aware that there are slightly differenses between the two.

// +++++++++ Anonymus Functions = has no Name
const Z = function(){ // the anonymous Function usally used inside a variable
  console.log("What B.M is this?")
} 
const Z = ()=>{};
Z();//to console a function write name();

// ++++++++++++++++++++++++ Immediately Invoked Function Expressions (IIFE) +++++++++++++++++++++++
// IIFE = make a function run Automatically by inserting it inside a function
 // we create first (Inside here we insert the function normaly){}
  function AutoExempel() {
     const goodMusic = "Boonie MayField";
    console.log(goodMusic);}
  // in order to run the function above we need to call it  with AutoExempel() 
  (function () { //when we insert it inside ()(); then it runs automaticly
    const goodMusic = "Boonie MayField";
    console.log(goodMusic);
    })(); 

// +++++++++++++++++++++++ DOM Manipulation ++++++++++++++++++++++++++++++
// ++++++++++++++++++ Selectors ++++++++++++++++++++++++++++++
let links = document.getElementsByClassName("aList"); // select all elements with the same class name(exempel multiples hrefs) inside a element(exempel div box) write the links class name
// all elements selected gets implemented inside an array and you can acces each element by acces like a normal array.
/*Exempel*/links[1].textContent = "Apple";// gives you the second item the just add w/e you want with dot notation links[1].exempel
let titel = document.getElementById("titleMain");//Selects an specific item by its #ID
let title = document.querySelector("#title"); //select any the section/element you want to change. Just like you would in css
// Exempel on how you can select with querySelector.
let divBoxes = document.querySelector(".items:nth-child(1)"); // can select anything just like you would in normal css
let links = document.querySelectorAll("aList") // works exactly like getElementsByClassName. But here you can insert by anything! Ids, class or tags!

//+++++++++++++++++ parentNode, sibling & children = Select the parent, sibling or children of an element
let title = document.querySelector("#title");
title.parentNode.style.backgroundColor = "Red" // changes the parent element of title to red BG 
title.children.style.backgroundColor = "Blue" // changes the children element of the selected element to blue BG
title.children[2].style.fontSize = "20px" // if you have multiple children elements and want to select one of them, call the element as you would in an array.
// another option to select a children are firstelementchild and lastelementchild
title.nextElementSibling.style.paddingTop = "10px" // to select a sibling element below
title.previousElementSibling.style.marginBottom ="100px" // to select the sibling on top
// node = can use array functions

// +++++++++++++++++++++ Changing content inside the element ++++++++++++++++++++++++++
let carboard = document.querySelector("#card") // = <h1>my Card Board</h1>
title.innerHTML = "Welcom to my Emperia"; //change the inside content the element. If you insert and <h3>Hej</h3> then it will creat a new element inside the element selected
title.outerHTML = "<h1> Welcom to my World </h1>"; //change the hole element selected
titel.innerText = "Ben" //Only displays/changes the text that is being display in the screen.
console.log(titel.textContent);// textContent displays all the information insde the element selected including the styles in css applied. for exempel it also displays the unseed changes.

// ++++++++++++++++++++++++ Content creation with JS +++++++++++++++++++++++++++++++++++++
let mainContent = document.querySelector("#infoMe"); //Select section where you want to insert content
let content = document.createElement("p"); //we created the element <p></p>
content.append("Name: Goku Power: over 9000!!!"); //insert content inside the element
content.setAttribute("style", "color:orange; width:20%;"); // set attributes to the new element
let text = document.createTextNode("Hola Mundo") // to creat text so you can later insert it inside a element (with append())
mainContent.append(content); //append = conbine section/element with the new element created
mainContent.insertBefore(text, content)//(the new element, the "befor" element)

// +++++++++++++++++++++++ control class/id names +++++++++++++++++
let infoMe = document.querySelector("#infoMe"); //select the section/element
infoMe.id = "inforMes"; // adds id to the element
infoMe.className = "infoAboutMe"; // adds class to the element
infoMe.classList.add("hello"); //add an extra class name 
infoMe.classList.remove("Hej");//removed class name n
infoMe.classList.toggle("Hej");// since the status of class "hej" was false when we toggle it it became true

// +++++++++++++++++++++++ Change Css with JS ++++++++++++++++++++++++++++++++++++++++++++
let mainTitle = document.querySelector("#MainTitle"); //select the element
mainTitle.style.textAlign = "center"; //add .style.nameOfcss = "value" inside strings
mainTitle.style.fontSize = "60px"; // if the nameOfCss has space then Just write with UpperCase after everyWord
//mainTitle.setAttribute("style", "color:red;");/ // you Can also use "setAttritube" to style. But it will over write the style above
let links = document.querySelectorAll("a"); //select all the elements of the same type
links[1].setAttribute("style", "color:green;"); // select only one elemet inside an array and set an attribute
links[0].setAttribute("style", "color:orange;");

// ++++++++++++++++ Style multiples elements with loops ++++++++++++++++++++
let links = document.getElementsByClassName("aList");

for(let i = 0; i < links.length; i++){
  links[i].style.backgroundColor = "Yellow";
}
// +++++++++++++++++++ DOM using everything above as exempel +++++++++++++++++
let body = document.querySelector("body");
let nr1Div = document.createElement("div");
body.append(nr1Div);
nr1Div.innerHTML = "<h1>Hello World</h1>";
nr1Div.setAttribute("style", "color:red;text-align:center;");
//nr1Div.setAttribute("style", "font-size:20px;");// if you insert a new setAttribute it will reset the previous style.
nr1Div.style.backgroundColor = "black";
nr1Div.id = "divNr1";
nr1Div.className = "divs";
nr1Div.classList.add("divBox1");
nr1Div.classList.remove("divBox1");
nr1Div.append("Batman"); // can also insert text via append! :O

// **************************** Events *****************************************************
// There are two was of inserting and event. One via Html and JS(exempel onclick() on html tag) and One via onlyn JS (creating and eventlistener).
// Via Html and JS: create an element inside html, insert onclick = "functionName()" (Or other event name)
// <button onclick = buttonClick()></button> then create the function.
function buttonClick(){
  console.log("Hello World"); // everytime the button is clicked it will display "Hello world" in the CLG
}
// Via Only JS: first we call the Html element to JS using querySelector or getElementByID
let buttonNr1 = document.getElementById("myMainButton");
buttonNr1.addEventListener("click", changNamer); //then we use the method addEventListnert and inser 2 arguments 
//                  (Type of event, Function name)  then we create a function that will run once the button is clicked
function changNamer(e){ //inside () we can insert what its call event parameters
  document.getElementById("titel").textContent = "Star Solutions";
  document.querySelector("#mainDiv").style.backgroundColor = "Red";
}
// Every time the User interacts with the browers an event is created. We can access those events and code what we want to happen when a event is made.
// and may have additional custom fields and/or functions used to get additional information about what happened.

let btnMain = document.querySelector("#btnTest"); //We selected where the event will take place
let MyMenu = document.querySelector(".nav-links"); //We select wich element will be modify when an event occures
let menuStatus = false; //we created an boolean to make it easier to know when the event is true/false

btnMain.onclick = menuToggle; //Everytime the button is clicked the function menuToggle will run.
//Remember to add the event in the button! onclick = "functionName()".

function menuToggle(){ // created a function in order to take action on the event
  if(menuStatus == false){  //the default statment is false, when someone clicks on it, it will be true
      MyMenu.style.display ="block";//then we will display the hidden element
      menuStatus = true;  // Select the current status of the menu
  } else if(menuStatus == true){ // Now we do the opposite if the element was on a true status
    MyMenu.style.display ="none"; // we Hide it
      menuStatus = false; //Select the current status of the menu = false
  }
}

// +++++++++++++++++++++++++++++++ addEventListerner ++++++++++++++++++++++++++++++++++++++++
// Basically we can use a.E.L to add multiple events to a single html element or use the same event formula to differents codes
// btnMain.addEventListener("click", SecondFunction) if we had a second function we could add the same click to it by just writing this line of code.
btnMain.addEventListener("click",//we added a.E.L now every time we click on the button
//we are going to call "btnMain.onclick = menuToggle" wich is going to activate the function menuToggle()  
// also when clicked the function below will run.
function(){
  let LLMain = document.querySelector("#TruePowerv2"); //Once clicked the follwo element will be selected
  //LLMain.style.display ="block"; // and changed to color green once event click takes action
  if(menuStatus == true){
     LLMain.style.display = "block";
     menuStatus == false;
  } else if(menuStatus == false){
     LLMain.style.display = "none";
     menuStatus == true;
  } // we basically added btnMain.onclick = menuToggle; and function menuToggle(){} together in on line code.
})  //that are the advantages of a.E.L
//in other words we are connecting the "click event"/Button to make differents results 

// ++++++++++++++++++++++ Types of Events +++++++++++++++++++++++++++++
let buttonNr2 = document.getElementById("divTest");
buttonNr2.addEventListener("mousemove", buttonEnter);
function buttonEnter(e){
  buttonNr2.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 90)`;
  // you can always style or change the elemt inside the function
  // the important thing is to define the event that you want to use
}
// how to display what you are writing inside a input somewhere else
let input = document.querySelector("#inputTest"); // first we select the input 
input.addEventListener("keydown", writeF); // use the event keydown
function writeF(e){
 document.getElementById("writeMe").innerHTML = `<h3>${e.target.value}</h3>`
// select the place where we want to "auto-write".create a new element = "writen down the new element with the event propertie"
console.log(e.cut);
}

// ++++++++++++++++++++++ Event aligation ++++++++++++++++++++++++
//Use event aligation for when you want to add events to multiples html elements
// call the parent of the list of elements you want to add event or use like this:
document.addEventListener('click',function(e){
  //once you selected the parent element above. match the className or something to the list of html element
  if(e.target && e.target.className == 'btn btn-danger btn-sm delete'){
     //once the target is clicked find if it matchs the class name  "btn btn-danger"
      e.target.parentElement.remove(); //then do this
      countCart.innerHTML -= 1;
   }
});

// check out the key events list in Mozilla in order
// important event keys:
//keydown, keyup, keypress, mousemove, mouseout, e.offsetY/X, 
// focus and blur = focus when you select something and blur when you stop selecting 
// cut and paste when someone cuts or paste the event cut/paste will be activated.
// input event = when someone starts typing the input event will be activated
// change event = for exempel when you change or select a new option this event will be activated
// submit event = when you submit something the event will be activated


// ++++++++++++++ Events properties +++++++++++++++++++++++++++
//Difference between HtmlCollection and Nodes is that node has more pre-made methods() 
let buttonNr1 = document.getElementById("button");
buttonNr1.addEventListener("click", buttonF); // you can use differents types of events, more on Mozila Document!
function buttonF(e){ //events have properties that you can use you manipulate the browser. These events can be accesed by inserting a parameter
  console.log(e); //console this to see all the properties
  console.log(e.type);
  console.log(e.offsetY); //to know the position when the button was clicked vertical, there is also a horizontal.
  console.log(e.altkey);// to see if the person pressed the button altkey and clicked on the button. this are another way of knowing the person way of browsing.
};

// ****************************** AJAX ****************************************
// AJAX = Request data from back-end and runs in the background without needing to refresh the page. 
// it request via an Object call "XHLHttpResquest()" wich is an Object constructor, that has properties and parameters that you can call and add.
// Exempel: like twitter, the feed of news updates automaticly or new messages get popen up without you needing to refresh the page.
// The user can also activate/Request AJAX with eventlisteners by click/pressing stuff.
// you can use libraries exempel Fetch API to make things more easier! :D

// ::::::::::::::::Exempel::::::::::::::::::::::
let myBtn = document.getElementById("myBtnRandom");

myBtn.addEventListener("click", myRandom);
function myRandom(e){
  //insert the XMLHttpRequest() in a variable for shortening typing.
  let xhr = new XMLHttpRequest(); // its an object that holds multiples functions & properties
  
  //You first select the file that you want to request from the server, with xhr.open() method
  xhr.open("GET", "randomText.txt", true); // open() automaticly uses readyState 4
//xhr.open(uses 3 arguments: Type, url, async||sync)

 //Then you creat a function to decide what to do with the requested file for exempel display it on the webb, update a amount etc.. using .onload propertie
 //By using .onload you automaticly checking if the readyState is 4
 xhr.onload = function(){ //once the function is created, check the file status. 
  if(this.status == 200){ //For exempel if the webbsite/file is offline/crashed/online. 
    //HTTP Statuses = the numbers represent webbsite status. 
    //200: "ok";
    //403: "forbidden"
    //404: "not found"
    document.getElementById("items").innerHTML = this.responseText; //responseText = select the text of from the file as a response
    //usually once you get the this.responseText you convert it into a normal JavaScript with JSON.parse()
    let objectStore =  JSON.parse(this.responseText);
    // then you use the objectStore as a normal javascript object :D
  }else if(this.status == 404){
      document.innerHTML = "not found"
    }
  console.log(xhr.readyState); // readyState = 4
  }
 
  //readyState Values = the status process of an XMLHttpRequest
  //0: request not initalized = open() not being used
  //1: server connection established = open() stablized 
  //2: request received = send() has been called and headers and status avibiliable
  //3: processing request = Downloading the file requested
  //4: request finished and response is ready = the operation is complete

  xhr.onprogress = function(){ 
  //onprogress uses readyStatment 3 = while the site is loading
  //for exempel use it when you want to add a "loading logo" while the user is waiting for the request
  };
  
  //.onerror = creat a function with a default setting when an ERROR occures
  xhr.onerror = function( ){ 
    console.log("Error 404"); //exempel clg "Error 404" when an error occures
  }

  //Then as final step we request the file that we want to archive with send()
  xhr.send()
};

// ++++++++++++++++++++ Exempel on how to use AJAX ++++++++++++++++
// get One user
let button  = document.getElementById("user");
button.addEventListener("click", myFunk);

function myFunk (){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "user.json", true); //"user.json" a file that contains json object

    xhr.onload = function (){
        if (this.status == 200){
            let getName = JSON.parse(this.responseText) // if you want to get a propertie you need to use json parse first in order to select something
           let output = `<lu>
           <li>ID:${getName.id} </li>
           <li>Name: ${getName.name}</li>
           <li>Email: ${getName.age} </li>
           </lu>`
           document.getElementById("userDiv").innerHTML = output;
        }
    }

    xhr.send();
};
//*************************** Promises Tutorial *************************** */
//A Promise is a funciton lets you have two situations a resolve("if everything went well") & reject("if Error occured") method, that you can insert anything. 
function findTheNumber2(number){
  return new Promise((resolve, reject)=>{ //Basicly 2 mini functions for succesful or failiour situations
  let findNr2 = 1 + number; //here we insert a normal function settings 
   //Then we check if the result is what we wanted with If/else statment
    if(findNr2 == 2){// inside the resolve () you can insert what to do if archiving the imagen went well. You can for exempel creat an function 
      //If it is the result that we wanted 
      resolve(()=>{ //we can reuse the result of the FindTheNumber Function and use to "resolve" another function or anything inside resolve() method
        console.log("this is true!")}); // you can have as many resolve or reject methods :D
    }else{
      reject(console.log("not true!"));// if the connection failed then you activate reject(clg= "didnt work arching imagen")
    }
  })
}
//Now you can reuse the result of resolve() or reject()
//Inside the parameters of the function inside .then() and .catch()
.then((resultOfResolveFunction)=>{ //always insert a function
  console.log(`Here is the result of Previous functions ${resultOfResolveFunction}
  and i want to add` +1 );
  //.then() method is used to control what to do after the Promise is finished
}) // you can add as many .then() methods as you want like a chain.
.catch((resultOfRejectFunction)=>{
  console.log(`If Error found because the result was: ${resultOfRejectFunction}`);
})// use catch to deal with erros.

// if you want to run multiples Promises at the same time use Promise.all(Inser Array here) 
Promise.all([MyPromis1 , MyPromis2, MyPromis3])
.then((TheResultOfEveryPromis)=>{
  console.log(`Here is the result of all the Promises: ${TheResultOfEveryPromis}`);
});
//Use Promis.race([insert array here]) if you want to run the .then(funciton) as soon as 1 promis is finished 
Promise.race([MyPromis1 , MyPromis2, MyPromis3])
.then((TheResultOfThePromisThatFinishedFirst)=>{
 console.log(`The first Promis that is finished loading first is : ${TheResultOfThePromisThatFinishedFirst}`);
}) // it only returns the result of the promis that finished first, also 1 single value. Ignores the rest of Promsies
/**************************** Async/Await Tutorial 'u' / */
//Async/Await = a more elegant to write promises; being by creating a async function
function mySecondFunction(word2){
  let SecondWord = `This is the ${word2}`
  return SecondWord
} 
// As you can see inside async function we change the order of myfunction() and mySecondFunction()
function myFunction(word){
  let theWord = `Hello ${word}`
  return theWord
}
//Basicly we creat a function to decide the order of other functions
async function doThisWork(){ //This is posible by inserting async 
  let returnResult = await myFunction('World') //We await the function to finish and store the return the "returnResult" variable
  console.log(returnResult); //result: Hello World
  console.log("the word has been printed");
  let returnResult2 = await mySecondFunction(returnResult); // we inser the result of myFunction inside this function via parameter
  console.log(returnResult2) //result: This is the Hello World
}

doThisWork();
//*************************** Fetch Tutorial :D ************************************/
// fetch is used to extract data from a server(Back-end) and use it our webbsite (front-end) in a async mode(Mening it will run in the background)
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url, {}) //inside fetch() we have 2 parameters: url, {POST configurations}. 
//Post is used to send data from front-end to back-end a.k.a server
.then((response) => { // we access the data by using the .thend() method and insert a function
    if(response.ok){//after reciving the data we check insert if/else statment to check if found an error
        console.log("Success");
        return response.json() // we first convert & return the income data into JSON format 
    }else{//if error found do the following:
        console.log("failed archive");
    }})
.then(data => console.log(data))//we access the JSON data(wich has been transformed into a normal JS object) by another .then() method 
//and insert another anonymous function. 
//Inside this function we can use the object as a normal JS object :)

//+++++++++++++++++++++++++ How to add an object inside the server with POST ++++++++++++++++
let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url, { //Insert a object to send data to the server 
  method: 'POST', // The type of method you want to use POST OR GET
  headers: {'Content-Type': 'application/json'}, //the type of content, we always send JSON format so just copy this 
  body: JSON.stringify({//First stringify then creat a normal object and insert the data that you want to send to the server
    name:"John",
    age:123
  }) // thats it, you have succesfully send data to the server! :D
})
.then(response => response.json())
.then(data => console.log(data))

// ************** GIT TUTORIAL! :D *******************************************
// git init = to innitialize git in your Folder/project so you can later archive it inside GitHub
// git clone ssh_url = to get a folder/project from github and archive it inside your computer
// git add = to start recording your changes 
// git commit = to produce the final version of your folder/project 
// git push = to insert your folder/projekt into github (works only if your folder is already connected to the github folder)
// git remote add origin SSH_url = to connect your GitHub with your current folder
// git pull =  if you and your friend are connected to the same GitHub folder and you want to update your folder 
//with the changes that you friend did use git pull


//Ideas :
//var cutOutOnlyDate = dateString.substring(
  //         dateString.lastIndexOf("(") + 1,
  //         dateString.lastIndexOf(")")
  //      )