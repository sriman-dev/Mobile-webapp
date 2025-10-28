let showmenuicon =document.getElementById("menutoggle");
let showmenus =document.getElementById("navbar");

showmenuicon.addEventListener("click",()=>{
    // showmenus.classList.add("active");
    showmenus.classList.toggle("active");

    if(showmenus.classList.contains("active")){
        showmenuicon.classList.remove("bx-menu");   
        showmenuicon.classList.add("bx-x");
    }
    else{
        showmenuicon.classList.add("bx-menu");   
        showmenuicon.classList.remove("bx-x");
    }
});