document.getElementById('formaNaruci').addEventListener('submit', function(event) {
    event.preventDefault();

    // Učitaj elemente forme
    const ime = document.getElementById('ime');
    const email = document.getElementById('email');
    const imeGreska = document.getElementById('ime-greska');
    const emailGreska = document.getElementById('email-greska');

    // Sakrij sve prethodne greške


    let validnost = true;

    if (!ime.value.trim()) {
        imeGreska.textContent = 'Molimo unesite vaše ime!';
        validnost = false;
    }

    if (!email.value.trim() || !email.checkValidity()) {
        emailGreska.textContent = 'Molimo unesite validnu email adresu.';
        validnost = false;
    }

    if (validnost) {
        alert('Forma je uspešno validirana!');
        imeGreska.textContent = '';
        emailGreska.textContent = '';
        
        const fs = require("fs");
        fs.writeFile("message.txt", "Treba doraditi program", (err) => { // treba doraditi
          if (err) throw err;
          console.log("The file has been saved!");
});
    }
});