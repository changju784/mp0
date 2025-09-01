/* Your JS here. */
document.getElementById("colorSelect").addEventListener("change", function (e) {
    document.body.classList.remove("theme-brown", "theme-orange");

    if (e.target.value === "brown") {
        document.body.classList.add("theme-brown");
    } else if (e.target.value === "orange") {
        document.body.classList.add("theme-orange");
    }

});