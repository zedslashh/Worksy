// public/script.js
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
const roleFilter = document.getElementById('roleFilter');
const dataContainer = document.getElementById('dataContainer');
const modal = document.getElementById('userModal');
const modalData = document.getElementById('modalData');
const closeModal = document.querySelector('.close');

// Fetch and display data based on filter
async function fetchData() {
  const role = roleFilter.value;
  const url = role === 'all' ? '/api/data' : `/api/data/role/${role}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Display data in grid
function displayData(data) {
  dataContainer.innerHTML = data.map(user => `
    <div class="grid-item" onclick="showDetails(${user.id})">
      <h3>${user.name}</h3>
      <p>Role: ${user.role}</p>
      <p>Location: ${user.location}</p>
    </div>
  `).join('');
}

// Show details in modal
window.showDetails = function(id) {
  const user = data.find(user => user.id === id);
  if (user) {
    modalData.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Role:</strong> ${user.role}</p>
      <p><strong>Location:</strong> ${user.location}</p>
    `;
    modal.style.display = 'flex';
  }
};

// Close modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal on outside click
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
