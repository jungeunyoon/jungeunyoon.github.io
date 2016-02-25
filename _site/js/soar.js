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

function setLetter(letterDivID, delayTime) {
  /* assigns final letter depending on letter position and calls helper functions to display them
   */
  switch (letterDivID) {
    case '01':
      setSpecialLetter(letterDivID, 'H', delayTime);
      break;
    case '02':
      setSpecialLetter(letterDivID, 'E', delayTime);
      break;
    case '03':
      setSpecialLetter(letterDivID, 'L', delayTime);
      break;
    case '04':
      setSpecialLetter(letterDivID, 'L', delayTime);
      break;
    case '05':
      setSpecialLetter(letterDivID, '0', delayTime);
      break;
    case '08':
      setSpecialLetter(letterDivID, 'I', delayTime);
      break;
    case '09':
      setSpecialLetter(letterDivID, 'M', delayTime);
      break;
    case '12':
      setSpecialLetter(letterDivID, 'J', delayTime);
      break;
    case '13':
      setSpecialLetter(letterDivID, 'U', delayTime);
      break;
    case '14':
      setSpecialLetter(letterDivID, 'N', delayTime);
      break;
    case '15':
      setSpecialLetter(letterDivID, 'G', delayTime);
      break;
    default:
      setRandomLetter(letterDivID, delayTime);
      break;
  }
}

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