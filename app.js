const moonPath = "M12.5 27.5C12.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 12.5 12.3122 12.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

// clickable sun
darkMode.addEventListener('click', () => {
    // use anime.js

    // setup animation
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    // add the animations
    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    })

    .add({
        targets: '#darkMode',
        rotate: toggle ? 0 : 320
    }, '-= 450')

    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
    }, '-= 700');

    if(!toggle){
        toggle = true;
        document.getElementById("header").innerHTML = "Dark Mode";
    }else{
        toggle = false;
        document.getElementById("header").innerHTML = "Light Mode";
    }
});