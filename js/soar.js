/*!
 * Theme: Soar
 * By: Jung Eun Yoon
*/

var idName = '';
var delayNum = 0;
var elements = document.getElementsByClassName('letter');

for (var r = 0; r < 9; r++) {
  for (var c = 0; c < 10; c++) {
    idName = r.toString() + c.toString();
    setLetter(idName, delayNum * 1);
    delayNum++;
  }
}

// assigns final letter depending on letter position and calls helper functions to display them 
function setLetter(letterDivID, delayTime) {
  switch (letterDivID) {
    case '04':
      setSpecialLetter(letterDivID, 'H', delayTime);
      break;
    case '05':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
    case '06':
      setSpecialLetter(letterDivID, 'Y', delayTime);
      break;
    case '08':
      setSpecialLetter(letterDivID, 'I', delayTime);
      break;
    case '09':
      setSpecialLetter(letterDivID, 'M', delayTime);
      break;
    case '11':
      setSpecialLetter(letterDivID, 'J', delayTime);
      break;
    case '12':
      setSpecialLetter(letterDivID, 'A', delayTime);
      break;
    case '13':
      setSpecialLetter(letterDivID, 'I', delayTime);
      break;
    case '14':
      setSpecialLetter(letterDivID, 'M', delayTime);
      break;
    case '15':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
    case '25':
      setSpecialLetter(letterDivID, 'Y', delayTime);
      break;
    case '26':
      setSpecialLetter(letterDivID, 'O', delayTime);
      break;
    case '27':
      setSpecialLetter(letterDivID, 'O', delayTime);
      break;
     case '28':
      setSpecialLetter(letterDivID, 'N', delayTime);
      break;
      
      
    case '40':
      setSpecialLetter(letterDivID, 'P', delayTime);
      break;
    case '41':
      setSpecialLetter(letterDivID, 'R', delayTime);
      break;
    case '42':
      setSpecialLetter(letterDivID, 'O', delayTime);
      break;
    case '43':
      setSpecialLetter(letterDivID, 'G', delayTime);
      break;
    case '44':
      setSpecialLetter(letterDivID, 'R', delayTime);
      break;
    case '45':
      setSpecialLetter(letterDivID, 'A', delayTime);
      break;
    case '46':
      setSpecialLetter(letterDivID, 'M', delayTime);
      break;
     case '47':
      setSpecialLetter(letterDivID, 'M', delayTime);
      break;
        case '48':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
     case '49':
      setSpecialLetter(letterDivID, 'R', delayTime);
      break;

        
            case '52':
      setSpecialLetter(letterDivID, 'D', delayTime);
      break;
    case '53':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
    case '54':
      setSpecialLetter(letterDivID, 'S', delayTime);
      break;
    case '55':
      setSpecialLetter(letterDivID, 'I', delayTime);
      break;
    case '56':
      setSpecialLetter(letterDivID, 'G', delayTime);
      break;
     case '57':
      setSpecialLetter(letterDivID, 'N', delayTime);
      break;
        case '58':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
     case '59':
      setSpecialLetter(letterDivID, 'R', delayTime);
      
    default:
      setRandomLetter(letterDivID, delayTime);
      break;
  }
}

// displays random letter 
function setRandomLetter(letterDivID, delayTime) {
  var counter = 0;

  function changeText() {
    if (counter > delayTime) {
      clearInterval();
    } else {
      document.getElementById(letterDivID).innerText = randomLetter();
      counter++;
    }
  }
  setInterval(changeText, 150);
}

// displays pre-determined special letters to spell out message
function setSpecialLetter(letterDivID, specialLetter, delayTime) {

  var counter = 0;

  function changeText() {
    if (counter > delayTime) {
      document.getElementById(letterDivID).innerText = specialLetter;
      document.getElementById(letterDivID).style.color = '#FF6363';
      clearInterval();
    } else {
      document.getElementById(letterDivID).innerText = randomLetter();
      counter++;
    }
  }
  setInterval(changeText, 150);

}

// returns one random capital letter from A-Z
function randomLetter() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var string_length = 1;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}