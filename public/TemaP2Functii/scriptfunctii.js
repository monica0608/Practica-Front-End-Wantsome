//seria 1 de exercitii
//exercitiul 1
var arrayLgt = [1, 2 , 3, 4, 5];
console.log(arrayLgt.length);

//exercitiul 5

var cars = ['BMW', 'Mercedes'];
cars.push("Opel","Dacia");
console.log(cars);


//exercitiul 6

cars.pop();
console.log(cars);
//exercitiul 7
cars.unshift("Ferarri");
console.log(cars);

//exercitiul 8 

cars.reverse();
console.log(cars);

//exercitiul 9
cars.splice(2,2,"Audi","Ferrari");
console.log(cars);

//exercitiul 10
var arrayNumbers = [1, 5, 20 ,30, 100];

//de la mic la mare

arrayNumbers.sort(
    function (a,b){
        return a-b;
    }
);
console.log(arrayNumbers);
//de la mare la mic
arrayNumbers.sort(
    function (a,b){
        return b-a;
    }
);
console.log(arrayNumbers);

//exercitiul 11
var fruitsArray = ["Apple", "Pech", "Pear", "Orange", "Water", "Papaya"];
function sortArray(sortVar){
    sortVar.sort();
    return sortVar;
}
console.log(sortArray(fruitsArray));


//exercitiul 4

//creare obiect
var myObject ={
    color: "red",
    style: "Retro",
    min:5,
    max:10
    };


//copiere
var copyObject =Object.assign({},myObject);
console.log(copyObject);


//adaugare proprietati

copyObject.nume = "Ioana";
copyObject.user = "Proprietar";
console.log(copyObject);


//"merge intre copie si noul obiect"
var myDress = { 
    buttons: 3,
    zipper: "Blue", 
    height: 11
}
var newObject = Object.assign(copyObject,myDress);
console.log(newObject);



//exercitiul 6
myObject = {
    name: "Evelina",
    surname: "Stefan",
    }
    var sortName=Object.values(myObject).sort();
console.log(sortName);

//exercitiul 7

//creare functie
function user(username,id,mark,acces){
    this.userName =username;
    this.idNumber =id;
    this.markGrade =mark;
    this.accesProtocol= acces;
  }

  //  variabile noi
  var user1 =new user("Ina",32,"admin","all");
  var user2 =new user("Lili",23,"guest","q1");
  var user3 =new user("Lala",10,"guest","q2")
  console.log(user1,user2,user3);

  //upercase variables
  function user(username,age,acces,area){
    this.userName =username.toUpperCase();
    this.idNumber =age;
     this.accesProtocol= acces.toUpperCase();
  }
  console.log(user1,user2,user3);


  //exercitiul 4

function taxes(salary) {
    var anualSalary = salary;
    if (anualSalary < 30000) {
      var taxaVenit = (anualSalary * 0) / 100;
      return (
        "Pentru un venit anual de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(anualSalary) +
        " veti palti o taxa de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(taxaVenit)
      );
    } else if (50000 < anualSalary && anualSalary < 100000) {
      taxaVenit = (anualSalary * 35) / 100;
      return (
        "Pentru un venit anual de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(anualSalary) +
        " veti plati o taxa de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(taxaVenit)
      );
    } else if (anualSalary > 100000) {
      taxaVenit = (anualSalary * 40) / 100;
      return (
        "Pentru un venit anual de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(anualSalary) +
        " veti plati o taxa de " +
        new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(taxaVenit)
      );
    } else {
      return "Nu se poate calcula taxa dumneavoastra!";
    }
  }
  console.log(taxes(120000));
  
  //exercitiul 5
  
  //prima varianta de functie
  
  function calificativ(points) {
    if (points < 30 || points == 30) {
      return "FF";
    } else if ((30 < points && points < 40) || points == 40) {
      return "DD";
    } else if ((40 < points && points < 50) || points == 50) {
      return "CD";
    } else if ((50 < points && points < 60) || points == 60) {
      return "CC";
    } else if ((60 < points && points < 70) || points == 70) {
      return "BC";
    } else if ((70 < points && points < 80) || points == 80) {
      return "BB";
    } else if ((80 < points && points < 90) || points == 90) {
      return "AB";
    } else {
      return "AA";
    }
  }
  console.log(calificativ(0));
  
  //a 2-a varianta de functie
  
  function calify(point) {
    switch (true) {
      case point <= 30: {
        return "FF";
      }
      case point <= 40: {
        return "DD";
      }
      case point <= 50: {
        return "CD";
      }
      case point <= 60: {
        return "CC";
      }
      case point <= 70: {
        return "BC";
      }
      case point <= 80: {
        return "BB";
      }
      case point <= 90: {
        return "AB";
      }
      case point > 90: {
        return "AA";
      }
    }
  }
  console.log(calify(41));
  
  // exercitiul 6
  
  function is_weekend(date){
    switch (new Date(date).getDay()) {
    case 0:
    case 6:
      return "weekend";   
    }
  }
  
  console.log(is_weekend('Nov 15, 2014'));
  console.log(is_weekend('Nov 16, 2014'));
  console.log(is_weekend('Nov 17, 2014'));
  
  //exercitii suplimentare p2 (exercitiul 1)
  //crearea  functiei
  function genderCheck(cnp){
    //initierea primei cifre din cnp
    var firstNumber= cnp.toString().split("")[0];
    //interogare daca e par pentru F
    if (firstNumber%2===0){
      return "Persoana verificata este de sexul F";
    }
    //interogare daca e impar si mai mic ca 9 pentru M
    else if (firstNumber%2===1 && firstNumber<9 ){
      return "Persoana verificata este de sexul M";
    }
    //altfel cetatean strain
    else{
      return "Cetatean strain";
    }
  }
  
  console.log(genderCheck(6321445));
  
  // p2 (exercitiul 2)
  
  function grade(calificativ){
    var califyNumber= Number(calificativ);  //transformam intrarile in number
    if(0<califyNumber && califyNumber<11){ //punem conditia de interval
      switch(true){ //accesamcalificativul si gradatia 
        case califyNumber<=3: {
          return "Calificatul corespunzator punctajului "+ califyNumber+ " este E";
        }
        case califyNumber<=6:{
          return "Calificatul corespunzator punctajului "+ califyNumber+ " este D";
        }
        case califyNumber<=8:{
          return "Calificatul corespunzator punctajului "+ califyNumber+ " este B";
        }
        case califyNumber==9:{
          return "Calificatul corespunzator punctajului "+ califyNumber+ " este A";
        }
        case califyNumber==10:{
          return "Calificatul corespunzator punctajului "+ califyNumber+ " este A+";
        }
      }
    }
    else{ //enuntam faptul ca numarul nu se incadreaza in interval
      return "introduceti un calificativ";
    }
  }
  console.log(grade(3))
  
  
  // exercitiul 4
  var cars = [
    {name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 },
  ];   
  (function sorty(){
    //creare de variabila in cazul adaugarii unor noi obiecte
    var sortedVar= cars;
    //sortarea variabilei in functie de salari
  sortedVar.sort(function (a, b){
    return a.salary-b.salary;
  }
            )})();
            //afisarea rezultatului sortat dupa variabila salary
  console.log(cars);