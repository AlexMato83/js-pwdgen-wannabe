

// creazione var per il nome //
var nome

// creazione var per il cognome //
var cognome

// creazione var per il colore //
var colore

// chiedere il nome //
nome = prompt("inserire il nome");

// chiedere il cognome //
cognome = prompt('inserire il cognome');

// chiedere il colore preferito //
colore = prompt("inserire il colore preferito");


// output creazione password //
document.getElementById('password').innerHTML = '<span>"La tua password è: "</span>' + '<h1>' + nome + cognome + colore + "19" + '</h1>';
document.body.style.backgroundImage = "url('https://www.statigeneralinnovazione.it/online/wp-content/uploads/2015/08/2015-08-28-password.jpg')";
