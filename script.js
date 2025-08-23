// Persona descriptions
const personaDetails = {
  Student: "Students should be aware of online scams, phishing, and safe social media practices.",
  Parent: "Parents must safeguard their children from cyber threats, scams, and online predators.",
  Professional: "Working professionals should be cautious of phishing emails, data breaches, and workplace cybersecurity.",
  Elderly: "Senior citizens should be extra cautious about online frauds, scams, and suspicious calls."
};

// Persona data (tips + quiz)
const personaData = {
  Student: {
    tips: [
      "Avoid sharing personal details on public platforms.",
      "Use strong and unique passwords.",
      "Think before clicking unknown links."
    ],
    quiz: [
      {
        question: "What should you do before clicking a link?",
        options: ["Click immediately", "Check the source", "Ignore it"],
        answer: 1
      }
    ]
  },
  Parent: {
    tips: [
      "Monitor children's online activity.",
      "Educate kids about cyberbullying.",
      "Use parental control apps."
    ],
    quiz: [
      {
        question: "What’s the best way to protect children online?",
        options: ["Ignore them", "Educate and monitor", "Ban internet"],
        answer: 1
      }
    ]
  },
  Professional: {
    tips: [
      "Verify emails before clicking attachments.",
      "Keep software updated.",
      "Use two-factor authentication."
    ],
    quiz: [
      {
        question: "What helps prevent unauthorized account access?",
        options: ["Weak passwords", "2FA", "Ignoring updates"],
        answer: 1
      }
    ]
  },
  Elderly: {
    tips: [
      "Never share OTP or banking details.",
      "Beware of lottery or prize scams.",
      "Verify calls claiming to be from banks."
    ],
    quiz: [
      {
        question: "What should you do if someone asks for your OTP?",
        options: ["Share it", "Ignore and report", "Call them back"],
        answer: 1
      }
    ]
  }
};







// Home page rendering
function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div id="personas" class="card-container">
      ${Object.keys(personaDetails).map(persona => `
        <div class="card" onclick="renderPersona('${persona}')">
          <h3>${persona}</h3>
          <p>${personaDetails[persona]}</p>
        </div>
      `).join('')}
    </div>
  `;
  
}


// Persona details rendering
function renderPersona(name) {
  const app = document.getElementById('app');
  const data = personaData[name];
  
  // Tips section
  let tipsHTML = `
    <div class="tips-section">
      <h3>Safety Tips</h3>
      <ul>
        ${data.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `;

  // Quiz section
  let quizHTML = `
    <div class="quiz-section">
      <h3>Quick Quiz</h3>
      ${data.quiz.map((q, index) => `
        <p>${q.question}</p>
        ${q.options.map((opt, i) => 
          `<button onclick="checkAnswer('${name}', ${index}, ${i})">${opt}</button>`
        ).join('')}
      `).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
  `;

  // Final render
  app.innerHTML = `
    <section id="persona-detail">
      <h2>${name}</h2>
      <p>${personaDetails[name]}</p>
      ${tipsHTML}
      ${quizHTML}
      <button class="back-button" onclick="renderHome()">⬅ Back to Personas</button>
    </section>
  `;
}

// Quiz answer checker
function checkAnswer(persona, qIndex, selected) {
  const correct = personaData[persona].quiz[qIndex].answer;
  const feedbackDiv = document.getElementById('feedback');

  if (selected === correct) {
    feedbackDiv.innerHTML = "✅ Correct!";
    feedbackDiv.style.color = "green";
  } else {
    feedbackDiv.innerHTML = "❌ Incorrect. Hint: " + personaData[persona].tips[qIndex % personaData[persona].tips.length];
    feedbackDiv.style.color = "red";
  }
}

window.onload = renderHome; 

// Handle navigation clicks
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href").substring(1); // remove #
    navigateTo(target);
  });
});

function navigateTo(section) {
  const app = document.getElementById("app");

  if (section === "home") {
    renderPersonas();
  } 
  else if (section === "learn") {
    app.innerHTML = `
      <section id="learn-section">
        <h2>Learn Cyber Safety</h2>
        <p>Stay safe online by following these best practices:</p>
        <ul>
          <li>Use strong & unique passwords.</li>
          <li>Enable 2FA whenever possible.</li>
          <li>Beware of phishing emails & suspicious links.</li>
          <li>Keep software and apps updated.</li>
        </ul>
      </section>
    `;
  } 
  else if (section === "quiz") {
    app.innerHTML = `
      <section id="quiz-section">
        <h2>General Cyber Quiz</h2>
        <div class="quiz-section">
          <h3>What should you do if you get a suspicious email?</h3>
          <button onclick="showFeedback('Correct! Never click unknown links.')">Ignore it / Report it</button>
          <button onclick="showFeedback('Not safe! Clicking could expose you.')">Click the link</button>
          <button onclick="showFeedback('Risky! Don’t download unknown files.')">Download the attachment</button>
          <div id="quiz-feedback" class="feedback"></div>
        </div>
      </section>
    `;
  } 
  else if (section === "sos") {
    app.innerHTML = `
      <section id="sos-section">
        <h2>🚨 SOS - Emergency Help</h2>
        <p>If you are in danger online:</p>
        <ul>
          <li>Call the national cybercrime helpline: <strong>1930 (India)</strong></li>
          <li>Report at <a href="https://cybercrime.gov.in" target="_blank">cybercrime.gov.in</a></li>
          <li>Disconnect from suspicious accounts immediately.</li>
          <li>Inform a trusted person.</li>
        </ul>
      </section>
    `;
  }
}

// Reuse feedback system
function showFeedback(message) {
  const fb = document.getElementById("quiz-feedback");
  fb.textContent = message;
}



