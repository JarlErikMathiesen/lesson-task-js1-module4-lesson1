
const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json"

const teamContainer = document.querySelector(".container");
const teamLocation = document.querySelector(".container");

async function getHub() {

    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    for(let i = 0; i < results.length; i++) {
        
        
        const result = results[i].teamName.startsWith("C");

        if (result === true){
            continue
        }

        if (i === 15) {
            break
        }

        teamContainer.innerHTML += `<div class="card">${results[i].teamName}</div>`;
        teamLocation.innerHTML += `<div class="card">${results[i].location}</div>`;

    }
}

getHub();