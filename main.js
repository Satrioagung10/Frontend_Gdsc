document.addEventListener("DOMContentLoaded", function () {
    const navbarItems = document.querySelectorAll("ul.menu-items > li");

    navbarItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navbarItems.forEach(function (navItem) {
                navItem.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});