let rounds = [];
function addRound(result) {
  rounds.push({ result, time: new Date().toLocaleTimeString() });
  render();
}
function render() {
  document.getElementById('total').textContent = rounds.length;
  const wins = rounds.filter(r => r.result==='win').length;
  const losses = rounds.filter(r=>r.result==='loss').length;
  const dead20 = rounds.slice(-20).filter(r=>r.result==='loss').length;
  let heat = 'NEUTRAL';
  if (dead20>=20) heat = 'COLD';
  else if (wins>losses) heat = 'HOT';
  document.getElementById('heat').textContent = heat;
  document.getElementById('heat').className = heat.toLowerCase();
  document.getElementById('alert').textContent = dead20>=20 ? '⚠️ 20 dead spins!' : '';
  const hist = rounds.map((r,i)=>\`\${i+1}. \${r.result.toUpperCase()} @ \${r.time}\`).join('<br>');
  document.getElementById('history').innerHTML = hist;
}