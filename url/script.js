// Reference to container and buttons
const container = document.getElementById('container');
const gridButton = document.getElementById('gridButton');
const listButton = document.getElementById('listButton');

for (let i = 1; i <= 10; i++) {
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = `Item ${i}`;
  container.appendChild(item);
}

function updateLayout() {
  const params = new URLSearchParams(window.location.search);
  const layout = params.get("layout") || "grid";

  container.className = `container ${layout}`;
}

gridButton.addEventListener('click', () => {
  const params = new URLSearchParams(window.location.search);
  params.set('layout', 'grid');
  history.replaceState(null, '', `?${params.toString()}`);
  updateLayout();
});

listButton.addEventListener('click', () => {
  const params = new URLSearchParams(window.location.search);
  params.set('layout', 'list');
  history.replaceState(null, '', `?${params.toString()}`);
  updateLayout();
});

// Initialize layout on page load
updateLayout();