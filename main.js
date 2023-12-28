let stars = document.getElementById('stars');
let Webipedia = document.getElementById('Webipedia');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let main = document.getElementById('main');
let scroller = document.getElementById('scroller');

onscroll = () =>{
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*1.5 + 'px';
    mountains4.style.top = value*1.2 + 'px';
    river.style.top = value*0.3 + 'px';
    boat.style.top = value*0.3 + 'px';
    boat.style.left = value*3 + 'px';
    Webipedia.style.fontSize = value + 'px';
    if(scrollY >= 65){
        Webipedia.style.fontSize = '65px';
        Webipedia.style.position = 'fixed';
        if(scrollY >= 500){
        Webipedia.style.display= 'none';
        }else{
        Webipedia.style.display= 'block';
        }if(scrollY >= 113){
            main.style.background = 'linear-gradient(#297ca3 , #1e1b4b )'
        }else{
            main.style.background = 'linear-gradient(#4a044e , #1e1b4b )'
        }if(scrollY >= 272){
            scroller.style.display = 'block';
        }else{
            scroller.style.display = 'none';
        }
    }
}

scroller.onclick = () =>{
    scroll({
        top: 0,
        behavior: "smooth",
    })
}

