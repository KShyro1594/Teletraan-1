const searchInput = document.getElementById("search");

const factionFilters =
    document.querySelectorAll(".faction-filter");

const universeFilters =
    document.querySelectorAll(".universe-filter");

const characters =
    document.querySelectorAll(".character-card");

const objet =
    document.querySelectorAll(".objet-card");


function filterCharacters() {

    const search =
        searchInput.value.toLowerCase();


    const selectedFactions =
        [...factionFilters]
        .filter(filter => filter.checked)
        .map(filter => filter.value);


    const selectedUniverses =
        [...universeFilters]
        .filter(filter => filter.checked)
        .map(filter => filter.value);


    characters.forEach(character => {

        const name =
            character.dataset.name || "";

        const faction =
            character.dataset.faction || "";

        const universes =
            character.dataset.universe || "";


        const matchesSearch =
            name.includes(search);


        const matchesFaction =
            selectedFactions.length === 0 ||
            selectedFactions.includes(faction);


        const matchesUniverse =
            selectedUniverses.length === 0 ||
            selectedUniverses.some(
                universe =>
                    universes.includes(universe)
            );


        if (
            matchesSearch &&
            matchesFaction &&
            matchesUniverse
        ) {

            character.style.display = "";

        } else {

            character.style.display = "none";

        }

    });

}


searchInput.addEventListener(
    "input",
    filterCharacters
);


factionFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterCharacters
    );

});


universeFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterCharacters
    );

});




function filterobjet() {

    const search =
        searchInput.value.toLowerCase();


    const selectedFactions =
        [...factionFilters]
        .filter(filter => filter.checked)
        .map(filter => filter.value);


    const selectedUniverses =
        [...universeFilters]
        .filter(filter => filter.checked)
        .map(filter => filter.value);


    objet.forEach(objet => {

        const name =
            objet.dataset.name || "";

        const faction =
            objet.dataset.faction || "";

        const universes =
            objet.dataset.universe || "";


        const matchesSearch =
            name.includes(search);


        const matchesFaction =
            selectedFactions.length === 0 ||
            selectedFactions.includes(faction);


        const matchesUniverse =
            selectedUniverses.length === 0 ||
            selectedUniverses.some(
                universe =>
                    universes.includes(universe)
            );


        if (
            matchesSearch &&
            matchesFaction &&
            matchesUniverse
        ) {

            objet.style.display = "";

        } else {

            objet.style.display = "none";

        }

    });

}


searchInput.addEventListener(
    "input",
    filterobjet
);


factionFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterobjet
    );

});


universeFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        filterobjet
    );

});