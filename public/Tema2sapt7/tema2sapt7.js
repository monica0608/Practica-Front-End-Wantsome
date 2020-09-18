//exercitiul 1 partea a2a
//crearea functiei de protejare
function protectEmail(email){
    //cautarea pozitiei lui @
      var toWhere=email.search("@");
    //variabila ce primeste textul de la @ spre final
    var splited1=email.slice(toWhere);
    //creare variabila ce primeste primele 4 caractere din email
    var splited2=email.slice(0,4);
    //afisare rezultat final
    console.log(splited2+"..."+splited1);
  }
  console.log(protectEmail("exemplu.nustiu@yahoo.com"));

  //exercitiul 3 partea a2 a
  //creare functie schimbare de litere
  function changeValue(string){
    //creare variabila ce primeste fiecare valoare a stringului
    var characterCount=string.split("");
    //creare variabila pentru inversarea caracterelor
    var reverseString=[];
    //parcurgerea array-ului obtinut
    for(var i=0;i<characterCount.length;i++){
        //creare variabila de comparare
      var comparison=characterCount[i];
      //crearea compararii
        if(comparison===comparison.toUpperCase()){
            //daca este adevarat va deveni lower
             reverseString=reverseString.concat(comparison.toLowerCase());
        }
        else{
            //daca nu va fi upper
            reverseString=reverseString.concat(comparison.toUpperCase());
        }
    }
    //reinitierea stringului si expunerea acestuia
    return reverseString.join("");
  }
  console.log(changeValue("XXxYyZzz"));

  //exercitiul 4 partea a2a

  //creare functie
  function multiplierString(myString,numberOfTimes){
      //creare variabila pentru concatenare
    var concatString="";
    //initiere numerica
       for (var i=0;i<numberOfTimes;i++){
           //concatenarea de stringuri
       concatString=concatString+myString;
       }
       //afisarea rezultatului
    return concatString;
   }
 console.log(multiplierString("Hello",3));

 //exercitiul 6 partea a2a

 //creare functie de introducere a datelor
 function arraySeparator(newArray){
  //creare variabila  pentru array-ul final
  var arrayFinalCount=[];
   //creare separator de array-uri
  for(i=0;i<newArray.length;i++){
       //creare variabila de stocare a array-urilor mai mici
       var arraySeparatorIn=newArray[i];
    //creare variabila de max;
    var maximum=arraySeparatorIn[0];
    //creare contorizator in arra-ul mic pentru aflarea celui mai mare numar
    for(j=0;j<arraySeparatorIn.length;j++){
      //compararea numerelor din array
      if(maximum<arraySeparatorIn[j]){
        maximum=arraySeparatorIn[j];
      }
    }
    //introducerea celei mai mari valori in array-ul final
    arrayFinalCount=arrayFinalCount.concat(maximum);
 }
 //returnarea array-ului final cu cele mai mari numere
  return arrayFinalCount;
}
 console.log(arraySeparator([[1,2,3,5],[6,1,8,7,4],[2,9,95,5]]));

 //exercitiul 7 partea a2a

 //creare functie
 function reverseString(string){
   //creare variabila pentru array-ul final pentru concatenare
  var concatReverseString=[];
  //creare variabila pentru desfacerea propozitiei pentru inversare
  var stringToArray;
  //contorizare string
  for(j=0;j<string.length;j++){
    //desfacerea stringului in array
        stringToArray=string.split("");
        //concaternarea inversa a array-ului
    concatReverseString.unshift(stringToArray[j]);
  }
  //returnarea stringului inversat
  return concatReverseString.join("");
}
console.log(reverseString("me miself and i"));

//exercitiul 8 partea a2 a

//creare functie pentru factorial
function factorialNumber(numberToFactorize){
  //creare variabila pentru numarul final
  var finalFactorialValue=1;
  //creare conditii pentur factorial
  if (numberToFactorize < 0){
    return -1;
  }
  else if(numberToFactorize===0){
    return 1;
  }
  else{
  //creare variabila ce control
 var i=1;
 //parcurgere a numarului
    while(i<=numberToFactorize){
      //incrementare cu fiecare parcurgere
      finalFactorialValue*=i;
      i++;
    }
    return "factorialul numarului "+ numberToFactorize+" este "+finalFactorialValue;
  }
}
console.log(factorialNumber(9));

//exercitiul 9 partea a2a
//crearea functieri
function stringContaintEnd(variable1,variable2){
  //deducerea limitelor si compararea aacestora
    var lenghtString2=variable2.length;
    //deducere diferenta dintre stringuri
     var lenghtForCompare=variable1.length-lenghtString2;
     //compararea finalului primei variabile cu a 2a variabila
    if(variable1.slice(lenghtForCompare)==variable2){
      
      return "contine al 2 lea string la final";
    }
    else{
      return "Nu contine !";
    }
   }
   console.log(stringContaintEnd("me and myself","myself"));
   console.log(stringContaintEnd("nobody loves me","me"));

   //exercitiul 10 partea a2a
//creare functie
   function statementTrue(arrayToSee,Statement){
     //incepere contorizare
    for(i=0;i<arrayToSee.length;i++){
      //verificare pentru statement
      if(arrayToSee[i]===Statement){
        //daca exista se returneaza statementul
        return arrayToSee[i];
      }
    }
    return "not true";
  }
  console.log(statementTrue(["mere","pere","ananas"],"ananas"));
  console.log(statementTrue(["masina","avioane","case"],"navem"));
  console.log(statementTrue(["minodor","mihai","bocanet"],"minodor"));

  //exercitiul 12 partea a 2a
//declarare functie
  function valueArray(arrayToParame,Param){
    //creare variabila pentru contorizare array
    var arrayToParameCount=[];
    for(i=0;i<arrayToParame.length;i++){
      //statementul in care daca e la fel se opreste contorizarea
      if(arrayToParame[i]===Param){
        return arrayToParameCount;
      }
      else{
        //daca nu se continua contorizarea
        arrayToParameCount.push(arrayToParame[i]);
      }
    }
  }
  console.log(valueArray([3,1,4,5,3,35425,5234,5436,777],777));

  //exercitiul 13 partea a2a
  //declarare functie
  function eliminateNull(specification){
    //creare variabila pentru array fara efecte nule
    var finalArrayNull=[];
    //initiere contorizator
    for( var i=0;i<specification.length;i++){
      //verificare de efecte nule
      if(specification[i]){
         finalArrayNull.push(specification[i])
      }
    }
    return finalArrayNull;
  }
  console.log(eliminateNull([undefined,"","2",null,NaN,2,1,"ve",0]));

  //exercitiul 14 partea a 2 a
  //declarare functie
  function repeatString(stringToRepeat,nrOfTimes){
    //declarare variabila pentru contorizarea repetarilor
    var repeatStringNrTimes="";
    //initierea contorizarii
    for(i=0;i<nrOfTimes;i++){
      //atribuirea de string la fiecare contorizare
      repeatStringNrTimes=repeatStringNrTimes.concat(stringToRepeat+" ");
    }
    //returnarea contorizarii plus numarul de cate ori a fost contorizata
      return [repeatStringNrTimes,nrOfTimes];
  }
  console.log(repeatString("i see you",5));