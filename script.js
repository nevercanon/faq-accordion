const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');

q1.addEventListener('click', () => {
    q1.classList.toggle('expanded-q');
    a1.classList.toggle('expanded-a');
    arrow1.classList.toggle('expanded-img');
})

q2.addEventListener('click', () => {
    q2.classList.toggle('expanded-q');
    a2.classList.toggle('expanded-a');
    arrow2.classList.toggle('expanded-img');
})

q3.addEventListener('click', () => {
    q3.classList.toggle('expanded-q');
    a3.classList.toggle('expanded-a');
    arrow3.classList.toggle('expanded-img');
})

q4.addEventListener('click', () => {
    q4.classList.toggle('expanded-q');
    a4.classList.toggle('expanded-a');
    arrow4.classList.toggle('expanded-img');
})

q5.addEventListener('click', () => {
    q5.classList.toggle('expanded-q');
    a5.classList.toggle('expanded-a');
    arrow5.classList.toggle('expanded-img');
})
