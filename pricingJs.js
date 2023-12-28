

const toggler = document.querySelector(".toggler");
const startprice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    
    if(toggler.checked){

        startprice.innerHTML = `$200 <span> / year </span>`;
        proPrice.innerHTML = `$1000 <span> / year </span>`;
    }
    else{
            startprice.innerHTML = `$19 <span> / month </span>`;
        proPrice.innerHTML = `$99 <span> / month </span>`;
        }

    
})