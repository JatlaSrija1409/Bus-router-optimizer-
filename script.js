
function optimizeRoute() {
  const start = document.getElementById('start').value.trim();
  const end = document.getElementById('end').value.trim();
  const result = document.getElementById('result');

  if (!start || !end) {
    result.innerHTML = "⚠️ Please enter both start and destination.";
    return;
  }

  // Simulated logic for demo
  result.innerHTML = `✅ Best route from <b>${start}</b> to <b>${end}</b> is calculated (demo).`;
}
