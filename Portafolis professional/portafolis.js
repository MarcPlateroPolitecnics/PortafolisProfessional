// Codi per el "scroll" al fer clic en alguna de les opcions de la barra
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('a.nav-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                let target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Codi per animar el clic al logo per mostrar la informació oculta
document.addEventListener("DOMContentLoaded", function() {
    let logo = document.querySelector('.navbar-brand img');
    let aboutContent = document.getElementById('about-content');
    let missionVisionValues = document.querySelector('.mission-vision-values');
    let clickedOnce = false;

    logo.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!clickedOnce) {
            clickedOnce = true;
            fadeIn(aboutContent);
            fadeIn(missionVisionValues); // Mostra la secció de Missió, Visió i Valors
        }
    });

    function fadeIn(element) {
        let opacity = 0;
        element.style.display = 'block';
        let fadeInInterval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05; // Disminueix la quantitat per fer l'animació més lenta
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50); // Mantén l'interval de temps com a 50ms
    }
});

// Codi del vídeo
document.addEventListener("DOMContentLoaded", function() {
    let videoPlayer = document.getElementById('videoPlayer');
    let firstPause = true; // Variable de control per controlar la primera pausa
    let restartTimes = [81, 153, 226]; // Marcas de temps en segons (1:21, 2:33, 3:46)

    // Pausa el vídeo en el minut 00:07 només la primera vegada
    videoPlayer.addEventListener('timeupdate', function() {
        if (firstPause && videoPlayer.currentTime >= 6.75) {
            videoPlayer.pause();
            firstPause = false; // Marquem que ja s'ha pausat la primera vegada
            showLanguageButtons(); // Mostrem els botons d'idioma
        }

        // Comprova si el temps actual és una de les marques de reinici
        restartTimes.forEach(function(time) {
            if (Math.floor(videoPlayer.currentTime) === time) {
                videoPlayer.currentTime = 0; // Reinicia el vídeo
                videoPlayer.pause(); // Reprodueix el vídeo
            }
        });
    });

    // Funció per mostrar els botons d'idioma
    function showLanguageButtons() {
        let languageButtonsDiv = document.getElementById('languageButtons');
        languageButtonsDiv.style.display = 'block'; // Mostrem els botons d'idioma
    }

    // Evita l'avanç del vídeo fins que s'ha seleccionat un idioma
    let languageButtons = document.querySelectorAll('#languageButtons button');
    languageButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            videoPlayer.currentTime = 6.75; // Torna a posar el vídeo al minut 00:07
            videoPlayer.play(); // Reprodueix el vídeo
        });
    });

    let englishButton = document.getElementById('englishButton');
    let spanishButton = document.getElementById('spanishButton');
    let catalanButton = document.getElementById('catalanButton');

    englishButton.addEventListener('click', function() {
        changeLanguage('english', 0, 7); // Anglès: del minut 0:07
    });

    spanishButton.addEventListener('click', function() {
        changeLanguage('spanish', 1, 22); // Castellà: minut 1:22
    });

    catalanButton.addEventListener('click', function() {
        changeLanguage('catalan', 2, 34); // Català: minut 2:33
    });

    // Funció per canviar l'idioma del vídeo i saltar al minut especificat
    function changeLanguage(language, minutes, seconds) {
        let currentTime = minutes * 60 + seconds; // Convertim el minut i segon a segons totals
        videoPlayer.currentTime = currentTime; // Establim el temps al vídeo
        videoPlayer.play(); // Inicia la reproducció automàticament després de canviar l'idioma
    }
});

// Codi per fer que no es pugui fer pantalla completa
document.addEventListener("DOMContentLoaded", function() {
    let videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.addEventListener('fullscreenchange', function(event) {
        if (document.fullscreenElement !== null) {
            exitFullscreen(); // Si s'intenta posar en pantalla completa, surt immediatament
        }
    });

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});
