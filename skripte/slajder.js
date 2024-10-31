var slajdIndeks = 1;
prikaz(slajdIndeks);

function promena(n) {
    prikaz(slajdIndeks += n);
}

function prikaz(n) {
  var i;
  var x = $(".slajd");
  if (n > x.length) {slajdIndeks = 1}
  if (n < 1) {slajdIndeks = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slajdIndeks-1].style.display = "block";  
}