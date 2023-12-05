/* I denne script-tagen skal du kode JavaScript (ikke i ekstern fil) */

const ticketPrices = {
	// Dette objektet må brukes for å få tak i billettprisene.
	adultTicketPrice: 150,
	childTicketPrice: 90,
};

document.addEventListener("DOMContentLoaded", function () {
	// Henter referanser til DOM-elementer
	const adultTicketsSpan = document.getElementById("number-of-adult-tickets-p");
	const childrenTicketsSpan = document.getElementById("number-of-children-tickets-p");
	const buyBtn = document.getElementById("buy-btn");
	const adultIncreaseBtn = document.getElementById("increase-adult-tickets-btn");
	const adultDecreaseBtn = document.getElementById("decrease-adult-tickets-btn");
	const childrenIncreaseBtn = document.getElementById("increase-children-tickets-btn");
	const childrenDecreaseBtn = document.getElementById("decrease-children-tickets-btn");
	const totalAdultPriceP = document.querySelector("#summary-div p:nth-child(1)");
	const totalChildrenPriceP = document.querySelector("#summary-div p:nth-child(2)");
	const totalPriceP = document.querySelector("#summary-div p:nth-child(3)");

	let numberOfAdultTickets = 0;
	let numberOfChildrenTickets = 0;

	// Legger til event listeners for å øke antall voksenbilletter
	adultIncreaseBtn.addEventListener("click", function () {
		numberOfAdultTickets++;
		updateTicketCountsAndPrices();
	});

	// Legger til event listeners for å redusere antall voksenbilletter
	adultDecreaseBtn.addEventListener("click", function () {
		if (numberOfAdultTickets > 0) {
			numberOfAdultTickets--;
			updateTicketCountsAndPrices();
		}
	});

	// Legger til event listeners for å øke antall barnebilletter
	childrenIncreaseBtn.addEventListener("click", function () {
		numberOfChildrenTickets++;
		updateTicketCountsAndPrices();
	});

	// Legger til event listeners for å redusere antall barnebilletter
	childrenDecreaseBtn.addEventListener("click", function () {
		if (numberOfChildrenTickets > 0) {
			numberOfChildrenTickets--;
			updateTicketCountsAndPrices();
		}
	});

	// Legger til event listener for kjøp-knappen
	buyBtn.addEventListener("click", function () {
		if (numberOfAdultTickets === 2 && numberOfChildrenTickets === 3) {
			alert("Takk for kjøpet! Hyggelig melding.");
		} else {
			alert("Feil antall billetter. Vennligst sjekk kjøpet ditt.");
		}
	});

	// Funksjon for å oppdatere antall billetter og priser i oversikten
	function updateTicketCountsAndPrices() {
		adultTicketsSpan.textContent = "Antall voksenbilletter: " + numberOfAdultTickets;
		childrenTicketsSpan.textContent = "Antall barnebilletter: " + numberOfChildrenTickets;

		const totalAdultPrice = numberOfAdultTickets * ticketPrices.adultTicketPrice;
		const totalChildrenPrice = numberOfChildrenTickets * ticketPrices.childTicketPrice;
		const totalPrice = totalAdultPrice + totalChildrenPrice;

		totalAdultPriceP.textContent = "Totalpris voksenbilletter: " + totalAdultPrice + ",-";
		totalChildrenPriceP.textContent = "Totalpris barnebilletter: " + totalChildrenPrice + ",-";
		totalPriceP.textContent = "Totalpris: " + totalPrice + ",-";
	}
});
