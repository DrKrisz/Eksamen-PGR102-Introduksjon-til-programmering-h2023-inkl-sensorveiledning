// Hent referanser til elementene
const glass1Content = document.getElementById("glass-1-content");
const glass2Content = document.getElementById("glass-2-content");
const waiter = document.getElementById("waiter");
const outputDiv = document.getElementById("output-div");

// Initialisering av variabler
let julebrusGlass1 = 0;
let julebrusGlass2 = 0;

// Event-lytter for kelnerklikk
waiter.addEventListener("click", function () {
	if (julebrusGlass1 < 80 && julebrusGlass2 < 80) {
		julebrusGlass1 += 40;
		julebrusGlass2 += 40;

		updateGlassContent();
		outputDiv.innerHTML = "<p>Kelneren fylte begge glassene med julebrus.</p>";
	} else {
		outputDiv.innerHTML = "<p>Glassene kan ikke fylles mer enn 80px.</p>";
	}
});

// Event-lytter for kattklikk
document.addEventListener("click", function (event) {
	if (event.target.id === "cat-left") {
		julebrusGlass1 = Math.max(0, julebrusGlass1 - 20);
	} else if (event.target.id === "cat-right") {
		julebrusGlass2 = Math.max(0, julebrusGlass2 - 20);
	}

	updateGlassContent();
	outputDiv.innerHTML += `<p>Katten reduserte mengden julebrus i det nærmeste glasset.</p>`;
});

// Oppdaterer innholdet i glassene
function updateGlassContent() {
	glass1Content.style.height = `${julebrusGlass1}px`;
	glass2Content.style.height = `${julebrusGlass2}px`;
}
