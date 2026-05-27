document.getElementById('predict-btn').addEventListener('click', function() {
    // Captura dos valores do formulário
    const temp = parseFloat(document.getElementById('temp-input').value);
    const humidity = parseFloat(document.getElementById('humidity-input').value);
    const pressure = parseFloat(document.getElementById('pressure-input').value);

    // Seleção de elementos da tela
    const resultDisplay = document.getElementById('result-display');
    const loadingSpinner = document.getElementById('loading-spinner');
    const predictionOutput = document.getElementById('prediction-output');
    const weatherText = document.getElementById('weather-text');
    const confidenceText = document.getElementById('confidence-text');

    // Mostra a caixa de resultados e o spinner de carregamento
    resultDisplay.classList.remove('hidden');
    loadingSpinner.classList.remove('hidden');
    predictionOutput.classList.add('hidden');

    // Simula o tempo de processamento da Inteligência Artificial (1.5 segundos)
    setTimeout(() => {
        let resultado = "";
        let icone = "";

        // Lógica preditiva simulada (Árvore de decisão simples)
        if (humidity > 80 && pressure < 1010) {
            resultado = "Tempestade iminente com alta atividade elétrica.";
            icone = "⛈️";
        } else if (humidity > 70 && temp > 20) {
            resultado = "Pancadas de chuva isoladas no fim da tarde.";
            icone = "🌦️";
        } else if (temp < 10 && humidity > 60) {
            resultado = "Formação de névoa úmida e declínio acentuado de temperatura.";
            icone = "🌫️";
        } else if (pressure > 1015 && humidity < 50) {
            resultado = "Tempo firme, seco e céu limpo pelas próximas 24 horas.";
            icone = "☀️";
        } else {
            resultado = "Condições de estabilidade climática moderada (Parcialmente Nublado).";
            icone = "⛅";
        }

        // Simulação de cálculo de nível de confiança da IA (entre 84% e 99%)
        const confianca = (Math.random() * (99 - 84) + 84).toFixed(1);

        // Atualiza a interface com a resposta gerada
        weatherText.innerHTML = `${icone} <strong>Previsão da IA:</strong> ${resultado}`;
        confidenceText.innerHTML = `<i class="fa-solid fa-check-double"></i> Grau de certeza do modelo: ${confianca}%`;

        // Esconde o carregamento e exibe o resultado final
        loadingSpinner.classList.add('hidden');
        predictionOutput.classList.remove('hidden');

    }, 1500); 
});