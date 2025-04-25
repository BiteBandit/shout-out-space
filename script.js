document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");
    const shoutouts = document.querySelectorAll(".shoutout");
    const resultArea = document.getElementById("searchResult");

    // Hide all shoutouts at start
    shoutouts.forEach(card => {
        card.style.display = "none";
    });

    searchBox.addEventListener("input", function () {
        const searchName = searchBox.value.trim().toLowerCase();
        let found = false;

        // Hide all again
        shoutouts.forEach(card => {
            card.style.display = "none";
            card.classList.remove("active"); // remove big style
        });

        // Find and show only matching shoutout
        shoutouts.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();
            if (name === searchName) {
                card.style.display = "block";
                card.classList.add("active"); // add big bold style
                found = true;
            }
        });

        if (!found) {
            resultArea.innerHTML = "<p style='color: red;'>No shoutout found for that name.</p>";
        } else {
            resultArea.innerHTML = ""; // clear if found
        }
    });
});