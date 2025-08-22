window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

function renderPage() {
  const page = location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');

  if (page === 'home') {
    app.innerHTML = `<h2>Welcome to CYBER-SENSE</h2>
                     <p>Learn about cyber frauds, take quizzes, and stay safe online.</p>`;
  } else if (page === 'learn') {
    app.innerHTML = `<h2>Learn</h2><p>Guides coming soon...</p>`;
  } else if (page === 'quiz') {
    app.innerHTML = `<h2>Quiz</h2><p>Quiz coming soon...</p>`;
  } else if (page === 'sos') {
    app.innerHTML = `<h2>SOS</h2><p>Emergency steps coming soon...</p>`;
  }
}

const personas = [
  { name: "Student", description: "Learn cyber safety basics and common scams." },
  { name: "Professional", description: "Protect your online work and finances." },
  { name: "Homemaker", description: "Stay safe from phone and banking scams." },
  { name: "Senior Citizen", description: "Understand phishing and fake calls." }
];

function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `<h2>Welcome to CYBER-SENSE</h2>
                   <p>Choose your persona to learn tips and take quizzes.</p>
                   <div id="personas" class="card-container"></div>`;

  const container = document.getElementById('personas');
  personas.forEach(persona => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${persona.name}</h3><p>${persona.description}</p>`;
    card.onclick = () => renderPersona(persona.name);
    container.appendChild(card);
  });
}

window.addEventListener('load', renderHome);
window.addEventListener('hashchange', () => {
  if (location.hash === '#home' || location.hash === '') renderHome();
});

const personaDetails = {
  "Student": `
    <h2>Student</h2>
    <p>Learn cyber safety basics: recognizing phishing emails, safe browsing, and common scams targeting students.</p>
    <button onclick="renderHome()">Back to Home</button>
  `,
  "Professional": `
    <h2>Professional</h2>
    <p>Protect your online work, finances, and accounts. Tips for secure passwords, avoiding fraud, and safe remote work.</p>
    <button onclick="renderHome()">Back to Home</button>
  `,
  "Homemaker": `
    <h2>Homemaker</h2>
    <p>Stay safe from phone scams, banking fraud, and social media risks. Simple ways to protect personal information.</p>
    <button onclick="renderHome()">Back to Home</button>
  `,
  "Senior Citizen": `
    <h2>Senior Citizen</h2>
    <p>Understand phishing calls, fake OTPs, and identity theft. Easy steps to stay safe online and offline.</p>
    <button onclick="renderHome()">Back to Home</button>
  `
};

const personaData = {
  "Student": {
    tips: [
      "Check email senders carefully to avoid phishing.",
      "Never share your passwords with anyone.",
      "Use 2FA wherever possible."
    ],
    quiz: [
      {
        question: "What should you do if you get a suspicious email?",
        options: ["Click the link immediately", "Ignore or verify first", "Forward to friends"],
        answer: 1 // zero-based index
      },
      {
        question: "Is it safe to use the same password for multiple sites?",
        options: ["Yes", "No"],
        answer: 1
      }
    ]
  },
  "Professional": {
    tips: [
      "Use strong and unique passwords for work accounts.",
      "Beware of fake job offers or business emails.",
      "Secure your devices with antivirus and updates."
    ],
    quiz: [
      {
        question: "What is a safe way to store passwords?",
        options: ["Plain text file", "Password manager", "Sticky notes on desk"],
        answer: 1
      }
    ]
  },
  "Homemaker": {
    tips: [
      "Verify calls asking for OTPs.",
      "Do not share banking info on unknown websites.",
      "Check social media privacy settings."
    ],
    quiz: [
      {
        question: "What to do when someone asks for your OTP?",
        options: ["Share immediately", "Never share", "Guess a number"],
        answer: 1
      }
    ]
  },
  "Senior Citizen": {
    tips: [
      "Be skeptical of unsolicited calls claiming emergencies.",
      "Always ask a family member before sharing sensitive info.",
      "Do not install unknown apps on phone."
    ],
    quiz: [
      {
        question: "A call asks for your bank details to 'verify your account', what should you do?",
        options: ["Give details", "Hang up and check with bank", "Ignore"],
        answer: 1
      }
    ]
  }
};

personaData = {
  "Student": {
    tips: [
      "Never share your password with anyone.",
      "Check email senders carefully to avoid phishing.",
      "Use 2FA wherever possible."
    ],
    quiz: [
      {
        question: "What should you do if you get a suspicious email?",
        options: ["Click the link immediately", "Ignore or verify first", "Forward to friends"],
        answer: 1 // zero-based index
      },
      {
        question: "Is it safe to use the same password for multiple sites?",
        options: ["Yes", "No"],
        answer: 1
      }
    ]
  },
  "Professional": {
    tips: [
      "Use strong and unique passwords for work accounts.",
      "Beware of fake job offers or business emails.",
      "Secure your devices with antivirus and updates."
    ],
    quiz: [
      {
        question: "What is a safe way to store passwords?",
        options: ["Plain text file", "Password manager", "Sticky notes on desk"],
        answer: 1
      }
    ]
  },
  "Homemaker": {
    tips: [
      "Verify calls asking for OTPs.",
      "Do not share banking info on unknown websites.",
      "Check social media privacy settings."
    ],
    quiz: [
      {
        question: "What to do when someone asks for your OTP?",
        options: ["Share immediately", "Never share", "Guess a number"],
        answer: 1
      }
    ]
  },
  "Senior Citizen": {
    tips: [
      "Be skeptical of unsolicited calls claiming emergencies.",
      "Always ask a family member before sharing sensitive info.",
      "Do not install unknown apps on phone."
    ],
    quiz: [
      {
        question: "A call asks for your bank details to 'verify your account', what should you do?",
        options: ["Give details", "Hang up and check with bank", "Ignore"],
        answer: 1
      }
    ]
  }
};

function renderPersona(name) {
  const app = document.getElementById('app');
  const data = personaData[name];
  
  // Tips HTML
  let tipsHTML = "<h2>Tips</h2><ul>";
  data.tips.forEach(tip => {
    tipsHTML += `<li>${tip}</li>`;
  });
  tipsHTML += "</ul>";

  // Quiz HTML
  let quizHTML = "<h2>Quiz</h2>";
  data.quiz.forEach((q, index) => {
    quizHTML += `<p>${q.question}</p>`;
    q.options.forEach((opt, i) => {
      quizHTML += `<button onclick="checkAnswer('${name}', ${index}, ${i})">${opt}</button> `;
    });
  });

  app.innerHTML = `<div>${tipsHTML}${quizHTML}<br><button onclick="renderHome()">Back to Home</button></div>`;
}

function checkAnswer(persona, qIndex, selected) {
  const correct = personaData[persona].quiz[qIndex].answer;
  if (selected === correct) {
    alert("Correct! ✅");
  } else {
    alert("Incorrect ❌. Tip: " + personaData[persona].tips[qIndex % personaData[persona].tips.length]);
  }
}


