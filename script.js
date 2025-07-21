function generateTravelPlan() {
  alert("Generating your travel plan...");

  const name = document.getElementById("userName").value;
  const city = document.getElementById("city").value;
  const destination = document.getElementById("destination").value.toLowerCase();
  const budget = parseInt(document.getElementById("budget").value);
  const output = document.getElementById("output");

  if (!name || !city || !destination || !budget) {
    output.innerHTML = "<p>Please fill all fields!</p>";
    return;
  }

  const mustVisitPlaces = {
    paris: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    delhi: ["Red Fort", "India Gate", "Qutub Minar"],
    tokyo: ["Tokyo Tower", "Meiji Shrine", "Shibuya Crossing"]
  };

  const localFoods = {
    paris: ["Croissant", "Macarons", "Baguette"],
    delhi: ["Chole Bhature", "Butter Chicken", "Paratha"],
    tokyo: ["Sushi", "Ramen", "Tempura"]
  };

  const hotelSuggestion = budget < 5000 ? "Backpacker Hostel"
                      : budget < 15000 ? "3-Star Hotel"
                      : "4 or 5-Star Hotel";

  const quotes = [
    "Travel is the only thing you buy that makes you richer.",
    "To travel is to live.",
    "Wander often, wonder always.",
    "Life is short and the world is wide."
  ];

  const selectedPlaces = mustVisitPlaces[destination] || ["Explore hidden gems in the city"];
  const selectedFoods = localFoods[destination] || ["Try local street food!"];
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

  output.innerHTML = `
    <h3>Hello, ${name}!</h3>
    <p><strong>From:</strong> ${city}</p>
    <p><strong>To:</strong> ${destination.charAt(0).toUpperCase() + destination.slice(1)}</p>
    <p><strong>Your Budget:</strong> ₹${budget}</p>
    <p><strong>Recommended Hotel Stay:</strong> ${hotelSuggestion}</p>
    <p><strong>Must-Visit Places:</strong> ${selectedPlaces.join(", ")}</p>
    <p><strong>Local Foods to Try:</strong> ${selectedFoods.join(", ")}</p>
    <p><strong>Travel Quote:</strong> "${selectedQuote}"</p>
  `;
}

function downloadPDF() {
  const content = document.getElementById("output").innerText;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "TravelPlan.txt";
  link.href = window.URL.createObjectURL(blob);
  link.click();
}