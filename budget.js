// Line chart : évolution des dépenses variables
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Dépenses variables (€)',
      data: [420, 390, 450, 410, 470, 430],
      borderColor: '#00cba9',
      backgroundColor: 'rgba(0, 203, 169, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

// Camembert charges fixes
const ctxFixes = document.getElementById('pieFixes').getContext('2d');
new Chart(ctxFixes, {
  type: 'pie',
  data: {
    labels: ['Loyer', 'Téléphone', 'Eau', 'Électricité'],
    datasets: [{
      data: [600, 50, 40, 70],
      backgroundColor: ['#007BFF', '#00CBA9', '#FFC107', '#FF6384']
    }]
  }
});

// Camembert charges variables
const ctxVars = document.getElementById('pieVariables').getContext('2d');
new Chart(ctxVars, {
  type: 'pie',
  data: {
    labels: ['Alimentation', 'Transport', 'Loisirs', 'Shopping'],
    datasets: [{
      data: [200, 100, 150, 80],
      backgroundColor: ['#4BC0C0', '#36A2EB', '#9966FF', '#FF9F40']
    }]
  }
});
