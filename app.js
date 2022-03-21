
var compscore = 0;
var usescore = 0;

do {

  var compcount = 0;
  var usecount = 0;

  // computer numbers

  do{
    var compnum = Math.floor(Math.random() * 10) + 1
    compcount = compcount + compnum;
    alert(`Computer new number is ${compnum}. New total is ${compcount}.`)
    console.log(`This is computer total ${compcount}`)


  }while(compcount < 17)

  // if computer runs over 20

  if (compcount > 20){
    console.log(`The computer got over 20. You won.`)
    usescore++

  } else {
 


    do{
      var usenum = Math.floor(Math.random() * 10) + 1
      usecount = usecount + usenum;
      var askuser = prompt(`Last number was ${usenum}. Your current total is ${usecount}. Press Enter for another number. Press n to stop`)
      console.log(`This is user total ${usecount}`)


    }while ((usecount < 21) && (askuser != "n"))

    console.log(usecount)

    if (usecount > 21){
      console.log(`You got over 20. The computer won.`)
      compscore++;
    }
    else if ((usecount > compcount) && (compcount <= 20) && (usecount <= 20)){
      console.log(`You got closer to 21. You win.`)
      usescore++
    }

    else if ((compcount > usecount) && (compcount <= 20) && (usecount <= 20)){
      console.log(`Computer got closer to 21. You lost.`)
      compscore++
    }

}

var play = prompt(`You have a score of ${usescore} and the computer has a score of ${compscore}. Do you want to continue playing?`)

} while (play != `n`)



(user > computer) && (computer <= 20) && (user <= 20)     computer > user       computer == user
