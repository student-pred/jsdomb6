
let destinacija = document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov = document.getElementsByClassName("title");
console.log(naslov);    

let element = document.getElementsByTagName("li");
console.log(element);   



let wrap = document.querySelector("#wrapper");
console.log(wrap);  

let a = document.querySelectorAll(".naziv");
console.log(a);

let listDestinacija = document.querySelector("#lista-destinacija");
console.log("Parent of this node is", listDestinacija.parentNode);


let listaDestinacija2 = document.querySelector("#lista-destinacija");
console.log("Children of this node are:", listaDestinacija2.children);

let listaDestinacija3 = document.querySelector("#lista-destinacija");
console.log("Next sibling is: ", listaDestinacija3.nextElementSibling);

let banner = document.querySelector("#page-banner");
console.log("What type is this banner", banner.nodeName);


let francuska_change = document.querySelector(".naziv");
francuska_change.textContent = "Beograd";


var dugmici = document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
            const li = e.target.parentNode;
            ul = li.parentNode; 
            ul.removeChild(li);
    })
})