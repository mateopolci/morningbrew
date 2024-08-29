const endpoint = "https://api.quotable.io/quotes/random?tags=Happiness";
const phraseContainer = document.getElementById("phraseContainer");
const fetchPhrase = async () => {
    try {
        phraseContainer.classList.add("loader");
        const response = await fetch(endpoint);
        const data = await response.json();
        phraseContainer.innerHTML=`${data[0].content}`
    } catch (error) {
        console.log("Error:", error);
    } finally {
        phraseContainer.classList.remove("loader");
    }
};
fetchPhrase();
//.loader