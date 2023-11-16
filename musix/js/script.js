flag= true
function dark(){
    // if(flag==true)
    document.querySelector("nav").removeAttribute("data-bs-theme");
    document.querySelector("nav").setAttribute("data-bs-theme","dark");
    // document.querySelector("nav").dataset = "bs-theme:dark";
}
