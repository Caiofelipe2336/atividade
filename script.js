/* questão 1 */

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

function combinacao(n, k) {
  if (n < k) {
    return "n deve ser maior ou igual a k";
}
  
  const numerador = calcularFatorial(n);
  const denominador = calcularFatorial(n - k) * calcularFatorial(k);
  const resultado = numerador / denominador;
  
  return resultado;
}

function calcularCombinação() {
  const n = parseInt(document.getElementById("nInput").value);
  const k = parseInt(document.getElementById("kInput").value);
    
  const resultado = combinacao(n, k);
    document.getElementById("resultado").innerText = `C(${n}, ${k}) = ${resultado}`;
}

/* questão 2 */

let intervalId;

function scrollMessage() {
  let messageField = document.getElementById("messageField");
  let message = messageField.value;
  message = message.substring(1) + message[0]; 
  messageField.value = message;
}

function startScroll() {
  intervalId = setInterval(scrollMessage, 200);
}

function stopScroll() {
  clearInterval(intervalId);
}

/* questão 3 */

function inverterTexto() {
  let originalText = document.getElementById("originalTextarea").value;
  let words = originalText.split(" ");
  let invertedWords = words.map(word => word.split("").reverse().join(""));
  
  let invertedText = invertedWords.join(" ");
            document.getElementById("invertedTextarea").value = invertedText;
}

/*questão 4 */