
//creare for
for (i = 0; i < 21; i++) {
  //verificare numar par sau impar
  if (i % 2 === 0) {
    //declarare numar par
    console.log(i + " este numar par");
  } else {
    //altfel nuamr impar
    console.log(+" este nuamr impar");
  }
}

//creare variabila pentru verificare
var i = 0;
//creare while cu statement
while (i < 21) {
  //creare verificare par
  if (i % 2 === 0) {
    console.log(i + " este numar par");
    i++;
  } else {
    console.log(i + " este numar impar");
    i++;
  }
}

//exercitiul 2 partea 1
//creare for
for (i = 0; i < 11; i++) {
  //creare multiplicator
  var sumNumere = i * 9;
  console.log(i + "*9=" + sumNumere);
}

//while statement
//declarare variabile folosite
var multiplicator;
var number = 0;
while (number < 11) {
  //realizarea inmultirii
  multiplicator = i * 9;
  //exprimarea acesteia
  console.log(i + "*9=" + multiplicator);
  i++;
}

//exercitiul 3

//creare for pentru numerele de inmultit
for (var i = 1; i < 11; i++) {
  //creare for pentru numere cu care se inmulteste
  for (var j = 0; j < 11; j++) {
    //creare variabila pentru stocarea inmultirii
    var multiplyResult = i * j;
    //afisare rezultate
    console.log(i + "*" + j + "=" + multiplyResult) + "/n";
  }
}

//exercitiul 4
for (i = 1; i < 11; i++) {
  switch (true) {
    //accesam calificativul si gradatia
    case i <= 3:
      {
        console.log("Calificatul corespunzator punctajului " + i + " este E");
      }
      break;
    case i <= 6:
      {
        console.log("Calificatul corespunzator punctajului " + i + " este D");
      }
      break;
    case i <= 8:
      {
        console.log("Calificatul corespunzator punctajului " + i + " este B");
      }
      break;
    case i == 9:
      {
        console.log("Calificatul corespunzator punctajului " + i + " este A");
      }
      break;
    case i == 10:
      {
        console.log("Calificatul corespunzator punctajului " + i + " este A+");
      }
      break;

    default: {
      console.log("Intoduceti un calificativ");
    }
  }
}
