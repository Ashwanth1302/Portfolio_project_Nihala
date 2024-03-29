


function toggleMenu() {
    const menu = document.querySelector('.navigation ul');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const navigationLinks = document.querySelectorAll(".navigation a");
    const cards = document.querySelectorAll(".card");

    // Function to show a specific card based on the section ID
    function showCard(sectionId) {
        cards.forEach(card => {
            card.style.display = "none";
        });
        const selectedCard = document.getElementById(sectionId);
        if (selectedCard) {
            selectedCard.style.display = "block";
        }
    }

    navigationLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = link.getAttribute("href").substr(1); // Remove the "#" character
            showCard(sectionId);
        });
    });

    showCard("about");

    // Additional functionality to show/hide the "Certificates" card
    const certificatesLink = document.getElementById("certificates-link");
    const certificatesCard = document.getElementById("certifications");

    certificatesLink.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = certificatesLink.getAttribute("href").substr(1); // Remove the "#" character
        showCard(sectionId);
    });
});


  