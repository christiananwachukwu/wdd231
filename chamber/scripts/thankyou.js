document.addEventListener("DOMContentLoaded", () => {
  const query = new URLSearchParams(window.location.search);
  const details = document.getElementById("thankyouDetails");

  if (!details) return;

  const firstName = query.get("firstName") || "Valued Member";
  const lastName = query.get("lastName") || "";
  // orgTitle and description are not 'required' by the prompt, but displaying them is fine for UX
  const orgTitle = query.get("orgTitle") || "N/A";
  const email = query.get("email") || "N/A";
  const phone = query.get("phone") || "N/A";
  const organization = query.get("organization") || "N/A";
  const rawMembership = query.get("membership") || "N/A";
  const description = query.get("description") || "N/A";
  const timestamp = query.get("timestamp") || "";

  // Map raw membership values to readable names
  let formattedMembership;
  switch (rawMembership) {
    case "np":
      formattedMembership = "NP Membership (Non-Profit)";
      break;
    case "bronze":
      formattedMembership = "Bronze Membership";
      break;
    case "silver":
      formattedMembership = "Silver Membership";
      break;
    case "gold":
      formattedMembership = "Gold Membership";
      break;
    default:
      formattedMembership = rawMembership; // Fallback if no match
  }

  const formattedTimestamp = timestamp ? new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }) : "N/A";

  details.innerHTML = `
    <h2>Welcome, ${firstName} ${lastName}!</h2>
    <p><strong>Title:</strong> ${orgTitle}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Organization:</strong> ${organization}</p>
    <p><strong>Membership Level:</strong> ${formattedMembership}</p>
    <p><strong>Business Description:</strong> ${description}</p>
    <p><strong>Submitted On:</strong> ${formattedTimestamp}</p>
  `;
});