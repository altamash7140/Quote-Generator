// const quoteElement = document.getElementById('quote');
// const authorElement = document.getElementById('author');
// const button = document.getElementById('new-quote');

// async function  getQuote () {
//   const response = await fetch("https://type.fit/api/quotes");
//   const data = await response.json();
  
//   // generating random index
//   const randomIndex = Math.floor(Math.random() * data.length);
//   console.log(data[randomIndex]); 

//   // updating data of quotes and text from API to own elements

//   quoteElement.textContent = data[randomIndex].text;
//   authorElement.textContent = "-"+ " " +data[randomIndex].author;

  

  
// }


// button.addEventListener('click', getQuote);


const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('new-quote');

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    
    // generating random index
    const randomIndex = Math.floor(Math.random() * data.length);

    // updating quote and author elements with fetched data
    quoteElement.textContent = data[randomIndex].content;
    authorElement.textContent = "- " + (data[randomIndex].author || "Unknown"); // Handle case where author is not provided

  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = "Failed to fetch quote";
    authorElement.textContent = "";
  }
}

button.addEventListener('click', getQuote);
