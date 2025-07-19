const url = 'data/members.json';
const membersContainer = document.querySelector("#members-display");

let allMembers = []; // Store all fetched members

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    allMembers = data.members;
    displayMembers(allMembers.slice(0, 3)); // Show only first 3 members initially
  } catch (error) {
    console.error("Failed to fetch member data:", error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = ''; // Clear previous content

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add("member-card");

    card.innerHTML = `
      <h2>${member.name}</h2>
      <p class="tagline">${member.tagline}</p>
      <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy" width="120" height="120">
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership Level:</strong> ${member.membership}</p>
    `;

    membersContainer.appendChild(card);
  });
}

// View Toggle Buttons
const gridBtn = document.getElementById('grid-view-button');
const listBtn = document.getElementById('list-view-button');

gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
  displayMembers(allMembers); // Show all members
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
  displayMembers(allMembers); // Show all members
});

// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial fetch
getMembers();