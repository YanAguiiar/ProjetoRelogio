function attTime() {
  var display = document.querySelector('.display'); // Variável que busca a div do relógio no HTML
  var now = new Date(); // Variável referente a criar o horário
  
  // Função para adicionar zero à frente de números menores que 10
  function formatNumber(number) {
      return number < 10 ? '0' + number : number;
  }
  
  var hours = formatNumber(now.getHours()); // Obtém as horas formatadas
  var minutes = formatNumber(now.getMinutes()); // Obtém os minutos formatados
  var seconds = formatNumber(now.getSeconds()); // Obtém os segundos formatados
  
  var time = hours + ':' + minutes + ':' + seconds; // Cria a string do horário
  
  display.textContent = time; // Define o conteúdo da div como o horário formatado
}
attTime();
setInterval(attTime, 1000);

console.log(time); // Exibe o horário no console para verificação
