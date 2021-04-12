function cerca(Event){
    let filtro=Event.currentTarget.value.toUpperCase();
    let rice=ricetta.querySelectorAll(".ri");
    for (let c of rice){ 
        let titolo=c.querySelector("h1").textContent.toUpperCase(); 
        if (titolo.indexOf(filtro)>-1) {
            c.style.display="";
        } else c.style.display="none";
    }
}function AddElement() {
    for (let i of contenuti) {
        let elemento=document.createElement("div");
        elemento.setAttribute("class", "ri");

        let preferiti=document.createElement("a");
        preferiti.setAttribute("class", "prf");

        let immPrf=document.createElement("img");
        immPrf.setAttribute("class", "stella")
        immPrf.src="immagini/star.jpg";

        let titolo=document.createElement("h1");
        let testo=document.createTextNode(i.titolo);
        titolo.appendChild(testo);
        preferiti.appendChild(titolo);
        preferiti.appendChild(immPrf);

        let fotoricett=document.createElement("img");
        fotoricett.setAttribute("class", "fotoricetta");
        fotoricett.src=i.immagine;

        let descr=document.createElement("p");
        descr.style.display= "none";
        let paragrafo=document.createTextNode(i.descrizione);
        descr.appendChild(paragrafo);

        let button=document.createElement("a");
        let span=document.createElement("span");
        let textspan=document.createTextNode("Leggi di più");
        span.appendChild(textspan);
        button.appendChild(span);

        elemento.appendChild(preferiti);
        elemento.appendChild(fotoricett);
        elemento.appendChild(descr); 
        elemento.appendChild(button);
        ricetta.appendChild(elemento);  
        
        button.addEventListener("click", vedidescr)
        preferiti.addEventListener("click", AddPreference);
    }
}

function ElimPref(Event){
   
    let ricett = document.querySelector(".ricetta");
    let click = Event.currentTarget.querySelector("h1").textContent; //verifica il titolo dell'elem cliccato
    prefer.removeChild(Event.currentTarget.parentNode);
    let pref = prefer.querySelectorAll(".ricettaprf");
    let List = ricett.querySelectorAll(".ri");
    for(let r of List){
        let s=r.querySelector("h1").textContent;
        console.log(s);
        console.log(click);
        if(s === click){
            r.querySelector("a").addEventListener("click", AddPreference);
        }
     }
} 

function AddPreference(Event) {
    prefer.classList.remove("preference");
    let t2=Event.currentTarget.parentNode.querySelector(".prf h1").textContent;
    let ip2=Event.currentTarget.parentNode.querySelector(".fotoricetta").src;
    console.log(ip2);

    let boxprefe=document.createElement("div");
    boxprefe.setAttribute("class", "ricettaprf");

    let preferiti2=document.createElement("a");
    preferiti2.setAttribute("class", "prefe2");

    let immPref2=document.createElement("img");
    immPref2.src="immagini/remove_star.jpg";
    let titolo2=document.createElement("h1");
    let testo2=document.createTextNode(t2);
    let fotoricett2=document.createElement("img");
    fotoricett2.src=ip2;

    titolo2.appendChild(testo2);
    preferiti2.appendChild(titolo2);
    preferiti2.appendChild(immPref2);
    boxprefe.appendChild(preferiti2);
    boxprefe.appendChild(fotoricett2);
    prefer.appendChild(boxprefe);

    Event.currentTarget.removeEventListener("click", AddPreference);
    //evita che ci siano ricette uguali tra i preferiti
}



function vedidescr(Event) {
    let des=Event.currentTarget.parentNode.querySelector("p");
    console.log(des);
    let span2=Event.currentTarget.parentNode.querySelector("span");  
    if (des.style.display === "none") {
        des.style.display="";
        span2.textContent="Nascondi";
    } else {
        des.style.display="none";
        span2.textContent="Leggi di più";
    }
}
const ricerca=document.querySelector(".search-txt");
ricerca.addEventListener("keyup", cerca);
const ricetta=document.querySelector(".ricetta");
const prefer=document.querySelector(".preference");
AddElement();
