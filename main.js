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


function myFunction(){
    const readmore = document.getElementById("readmore");
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const view = document.getElementById("view");
    

     if (more.style.display === "none") {
        more.style.display = "inline";
        dots.style.display = "none";
        readmore.innerHTML = `<i class='fas fa-angle-up block lg:hidden' style='font-size:24px'></i>`
        view.innerHTML = 
        ` <div class="view block">
        <a target="_blank" href="mailto:satrioagung68@gmail.com"><button class="btn-more block bg-primary hover:bg-secondary my-4 md:m-0 px-3 py-3 xl:px-8 xl:py-3 rounded-xl font-semibold xl:text-xl text-white">VIEW MORE</button></a>
        </div>
        `;
        view.style.display = "block";
      
       
    } else {
        more.style.display = "none";
        dots.style.display = "inline";
        readmore.innerHTML = `<i class='fas fa-angle-down block lg:hidden' style='font-size:24px'></i>`
        view.innerHTML = 
        ` <div class="view block">
        <a target="_blank" href="mailto:satrioagung68@gmail.com"><button class="btn-more block bg-primary hover:bg-secondary my-4 md:m-0 px-3 py-3 xl:px-8 xl:py-3 rounded-xl font-semibold xl:text-xl text-white">VIEW MORE</button></a>
        </div>
        `;
        view.style.display = "none";
      
    }
    
} 

