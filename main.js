

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
document.getElementById('cane').innerHTML = "La tua password è: " + nome + cognome + colore + "19";
