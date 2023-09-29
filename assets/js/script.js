const menuBtn=document.querySelector("#menuBtn");
const asideMenuNav=document.querySelector(".header__nav")

runEvent();

function runEvent(){
    menuBtn.addEventListener("click",asideMenu);
    asideMenuNav.addEventListener("click",closeAsideMenu)
}

function asideMenu(e){
    e.preventDefault();
    asideMenuNav.style.display="block";
}
function closeAsideMenu(){
    asideMenuNav.style.display="none";

}