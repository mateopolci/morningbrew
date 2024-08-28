const endpoint = "https://api.quotable.io/quotes/random?tags=Happiness";
const phraseContainer = document.getElementById("phraseContainer");
const fetchPhrase = async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data[0].content);
        phraseContainer.innerHTML=`${data[0].content}`
    } catch (error) {
        console.log("Error:", error);
    }
};
fetchPhrase();