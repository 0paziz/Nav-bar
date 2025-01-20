const Menu_triggerID= document.getElementById("menu");
const Cence_triggerlID=document.getElementById("cencel");

const menu_container=document.getElementById("nav-container");


function display(){

   menu_container.style.display="block";

}

function close(){

     menu_container.style.display="none";
}

Menu_triggerID.addEventListener("click" , (event)=>{
    event.preventDefault;

    display();
});

Cence_triggerlID.addEventListener("click", ()=>{
    close();
})


