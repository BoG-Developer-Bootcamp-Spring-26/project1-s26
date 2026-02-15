const pokemonId = 1;
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

async function fetchPokemon() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        //info from the fetch
        const spriteUrl = data.sprites.front_default;
        const img = document.getElementById("pokemon-sprite");
        img.src = spriteUrl;
        img.alt = data.name;

        const name = document.getElementById("pokemon-name");
        name.innerText = data.name;

        const infoText = document.getElementById("info-text");
        infoText.innerText = JSON.stringify(data);
    } catch (error) {
        console.error(error);
    }
}

fetchPokemon();

// const button = document.createElement("button");
// button.textContent = "click to fetch";
// document.body.appendChild(button);

// button.addEventListener("click", async (event) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const infoText = document.getElementById("info-text");
//         infoText.innerText = JSON.stringify(data);
//     } catch (error) {
//         console.error(error);
//     }
// })
