document.addEventListener("DOMContentLoaded", () => {
    const planetFilter = document.getElementById("planetFilter");
    const speciesFilter = document.getElementById("speciesFilter");
    const characterList = document.getElementById("characterList");
    const items = Array.from(characterList.children);

    function filterCharacters() {
        const planet = planetFilter.value;
        const species = speciesFilter.value;

        items.forEach(item => {
            const text = item.textContent;
            item.style.display =
                (planet === "" || text.includes(planet)) &&
                (species === "" || text.includes(species))
                    ? "block"
                    : "none";
        });
    }

    planetFilter.addEventListener("change", filterCharacters);
    speciesFilter.addEventListener("change", filterCharacters);
});
