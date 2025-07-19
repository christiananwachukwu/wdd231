const spotlightContainer = document.getElementById("spotlights");

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    displaySpotlights(data.members);
  } catch (error) {
    console.error("Error loading member data:", error);
  }
}

function displaySpotlights(members) {
  // Filter members with "Gold" or "Silver" membership
  const spotlightMembers = members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  // Pick 3 random unique members
  const selected = [];
  while (selected.length < 3 && spotlightMembers.length > 0) {
    const index = Math.floor(Math.random() * spotlightMembers.length);
    selected.push(spotlightMembers.splice(index, 1)[0]);
  }

  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="120" height="120">
      <h3>${member.name}</h3>
      <p class="tagline">${member.tagline}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    `;

    spotlightContainer.appendChild(card);
  });
}

fetchMembers();