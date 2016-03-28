/*!
 * Theme: 
 * By: Jung Eun Yoon
*/


/* 
SCALES AND ARPEGGIOS
Written By: Jaime J.E. Yoon
Inspiration: @Oudam Uy https://dribbble.com/shots/2416166-Simple-Keyboard
*/

$(document).ready(function() {

  // This controls the button for the mid-d note.

  // This variable calls the mid-d audio element in the HTML.
  var midDNote = document.getElementById('mid-dAudio');

  // This turns our <div id= "mid-d"> into a button that plays our audio file when the box is pressed.
  $('#mid-d').mousedown(function() {

    // This is a property that scrubs the audio file back to its start.
    midDNote.volume = 1;
    midDNote.currentTime = 0;

    // This plays the audio file.
    midDNote.play();
    alert("Hello! I am an alert box!!");
  });

  // This controls the button for the mid-e note.

  var midENote = document.getElementById('mid-eAudio');

  $('#mid-e').mousedown(function() {
    midENote.volume = 1;
    midENote.currentTime = 0;
    midENote.play();
  });

  // This controls the button for the f note.

  var midFNote = document.getElementById('mid-fAudio');

  $('#mid-f').mousedown(function() {
    midFNote.volume = 1;
    midFNote.currentTime = 0;
    midFNote.play();
  });

  // This controls the button for the g note.

  var midGNote = document.getElementById('mid-gAudio');

  $('#mid-g').mousedown(function() {
    midGNote.volume = 1;
    midGNote.currentTime = 0;
    midGNote.play();
  });

  // This controls the button for the a note.

  var midANote = document.getElementById('mid-aAudio');

  $('#mid-a').mousedown(function() {
    midANote.volume = 1;
    midANote.currentTime = 0;
    midANote.play();
  });

  // This controls the button for the b note.

  var midBNote = document.getElementById('mid-bAudio');

  $('#mid-b').mousedown(function() {
    midBNote.volume = 1;
    midBNote.currentTime = 0;
    midBNote.play();
  });

  // This controls the button for the c note.

  var highCNote = document.getElementById('high-cAudio');

  $('#high-c').mousedown(function() {
    highCNote.volume = 1;
    highCNote.currentTime = 0;
    highCNote.play();
  });

  // This controls the button for the d note.

  var highDNote = document.getElementById('high-dAudio');

  $('#high-d').mousedown(function() {
    highDNote.volume = 1;
    highDNote.currentTime = 0;
    highDNote.play();
  });

  // This controls the button for the e note.

  var highENote = document.getElementById('high-eAudio');

  $('#high-e').mousedown(function() {
    highENote.volume = 1;
    highENote.currentTime = 0;
    highENote.play();
  });

  // sharps

  var midDSharp = document.getElementById('mid-dsharpAudio');

  $('#mid-d-sharp').mousedown(function() {
    midDSharp.volume = 1;
    midDSharp.currentTime = 0;
    midDSharp.play();
  });

  var midFSharp = document.getElementById('mid-fsharpAudio');

  $('#mid-f-sharp').mousedown(function() {
    midFSharp.volume = 1;
    midFSharp.currentTime = 0;
    midFSharp.play();
  });

  var midGSharp = document.getElementById('mid-gsharpAudio');

  $('#mid-g-sharp').mousedown(function() {
    midGSharp.volume = 1;
    midGSharp.currentTime = 0;
    midGSharp.play();
  });

  var midASharp = document.getElementById('mid-asharpAudio');

  $('#mid-a-sharp').mousedown(function() {
    midASharp.volume = 1;
    midASharp.currentTime = 0;
    midASharp.play();
  });

  var highCSharp = document.getElementById('high-csharpAudio');

  $('#high-c-sharp').mousedown(function() {
    highCSharp.volume = 1;
    highCSharp.currentTime = 0;
    highCSharp.play();
  });

  var highDSharp = document.getElementById('high-dsharpAudio');

  $('#high-d-sharp').mousedown(function() {
    highDSharp.volume = 1;
    highDSharp.currentTime = 0;
    highDSharp.play();
  });

});

function playFurElise() {

  var highE = document.getElementById('high-eAudio');

  var highDsharp = document.getElementById('high-dsharpAudio');

  var midB = document.getElementById('mid-bAudio');

  var highD = document.getElementById('high-dAudio');

  var highC = document.getElementById('high-cAudio');

  var midA = document.getElementById('mid-aAudio');
  
    var midE = document.getElementById('mid-eAudio');

  setTimeout(function() {
    highE.volume = .6;
    highE.currentTime = 0;
    highE.play();
  }, 600)

  setTimeout(function() {
    highDsharp.volume = .6;
    highDsharp.currentTime = 0;
    highDsharp.play();
  }, 900)

  setTimeout(function() {
    highE.volume = .6;
    highE.currentTime = 0;
    highE.play();
  }, 1200)

  setTimeout(function() {
    highDsharp.volume = .9;
    highDsharp.currentTime = 0;
    highDsharp.play();
  }, 1500)

  setTimeout(function() {
    highE.volume = .9;
    highE.currentTime = 0;
    highE.play();
  }, 1800)

  setTimeout(function() {
    midB.volume = 1;
    midB.currentTime = 0;
    midB.play();
  }, 2100)

  setTimeout(function() {
    highD.volume = .9;
    highD.currentTime = 0;
    highD.play();
  }, 2400)

  setTimeout(function() {
    highC.volume = .5;
    highC.currentTime = 0;
    highC.play();
  }, 2700)

  setTimeout(function() {
    midA.volume = .5;
    midA.currentTime = 0;
    midA.play();
  }, 3000)
}



function playHedwigsTheme() {

  var highE = document.getElementById('high-eAudio');
  var highEDiv = document.getElementById( 'high-e' );

  var highDsharp = document.getElementById('high-dsharpAudio');

  var midB = document.getElementById('mid-bAudio');

  var highD = document.getElementById('high-dAudio');

  var highC = document.getElementById('high-cAudio');

  var midA = document.getElementById('mid-aAudio');
  
    var midE = document.getElementById('mid-eAudio');

  setTimeout(function() {
    midA.volume = .6;
    midA.currentTime = 0;
    midA.play();
  }, 600)

  setTimeout(function() {
    highC.volume = .6;
    highC.currentTime = 0;
    highC.play();
  }, 1400)

  setTimeout(function() {
    midB.volume = .6;
    midB.currentTime = 0;
    midB.play();
  }, 1700)

  setTimeout(function() {
    midA.volume = .9;
    midA.currentTime = 0;
    midA.play();
  }, 2200)

  setTimeout(function() {
    highE.volume = .9;
    highE.currentTime = 0;
    highE.play();
  }, 3300)

  setTimeout(function() {
    highD.volume = 1;
    highD.currentTime = 0;
    highD.play();
  }, 3900)

  setTimeout(function() {
    midB.volume = .9;
    midB.currentTime = 0;
    midB.play();
  }, 5300)




}