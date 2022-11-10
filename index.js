var header = $('header');
var range = 200;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }
  
});

function ageCalc() {
  var now = new Date();
  var birthday = new Date('2003-06-27');
  var difference = now - birthday; 
  var age = new Date(difference).getFullYear() - 1970
return document.getElementById("currentage").innerHTML = age;
}
console.log(ageCalc());