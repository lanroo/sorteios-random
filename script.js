document.getElementById("sortear-button").addEventListener("click", sortear);

function sortear() {
  var numerosSorteados = [];
  while (numerosSorteados.length < 6) {
    var numero = Math.floor(Math.random() * 60);
    if (numerosSorteados.indexOf(numero) === -1) {
      numerosSorteados.push(numero);
    }
  }
  document.getElementById("resultado").innerHTML = numerosSorteados.join(", ");
}
