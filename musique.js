const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-button');

const recognition = new window.webkitSpeechRecognition();

// Créer un objet pour stocker les couleurs
const colors = {
  blanc: 'white',
  noir: 'black',
  vert: 'green',
  violet: 'purple',
  jaune: 'yellow'
};

startBtn.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('result', (event) => {
  const speechToText = event.results[0][0].transcript;
  console.log(speechToText);
});

recognition.continuous = true;
recognition.interimResults = true;

let audioPlayer = null;

recognition.onresult = function(event) {
  let transcription = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      transcription += event.results[i][0].transcript;
    }
  }
  document.querySelector('#transcription').textContent = transcription;

  // Changer la couleur de fond en fonction de la commande vocale
  Object.keys(colors).forEach(color => {
    if (transcription.includes(color)) {
      document.body.style.backgroundColor = colors[color];
      document.querySelector('#transcription').style.color = color === 'blanc' ? 'black' : 'white';
      document.querySelector('#p').style.color = color === 'blanc' ? 'black' : 'white';
      document.querySelector('#p1').style.color = color === 'blanc' ? 'black' : 'white';
    }
  });

  if (transcription.includes('musique')) {
    if (transcription.includes('classique')) {
      if (audioPlayer) {
        audioPlayer.pause();
      }
      audioPlayer = new Audio('musique/classique.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
      pauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      });
    } else if (transcription.includes('rap')) {
      if (audioPlayer) {
        audioPlayer.pause();
      }
      audioPlayer = new Audio('musique/rap.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
      pauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      });
    } else if (transcription.includes('pop')) {
      if (audioPlayer) {
        audioPlayer.pause();
      }
      audioPlayer = new Audio('musique/pop.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
      pauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      });
    } else if (transcription.includes('hip-hop')) {
      if (audioPlayer) {
        audioPlayer.pause();
      }
      audioPlayer = new Audio('musique/hiphop.mp3');
      document.querySelector('#play-button').addEventListener('click', function() {
        audioPlayer.play();
      });
      pauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      });
    }
  }
}

recognition.start();
