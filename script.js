// Get references to DOM elements
const jokeContainer = document.getElementById("joke-container");
const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("new-joke-btn");

// Function to fetch a random joke from JokeAPI
async function getJoke() {
    try {
        // Fetch a random joke
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();
        
        if (data.joke) {
            jokeText.textContent = data.joke; // Display the joke
        } else {
            jokeText.textContent = "Sorry, something went wrong. Please try again."; // Fallback if no joke found
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeText.textContent = "Sorry, something went wrong. Please try again.";
    }
}

// Fetch a joke when the page loads
window.onload = getJoke;

// Add an event listener to the button to get a new joke
jokeBtn.addEventListener("click", getJoke);