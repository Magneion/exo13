var hulk = function(div) {
  div.style = 'background-color: green;';
}

var resetDiv = function(div) {
  div.style = '';
}


var allgreen = function() {
  redgogreen();
  bluegogreen();
}

var redgogreen = function() {
  var divs = Array.from(document.getElementsByClassName('red'));
  divs.forEach(hulk);
  }



var bluegogreen = function() {
  var divs = Array.from(document.getElementsByClassName('blue'));
  divs.forEach(hulk);
  }


var reset = function() {
  var divs = Array.from(document.getElementsByTagName('div'));
  divs.forEach(resetDiv);
}
