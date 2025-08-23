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

// Initial load
window.onload = renderHome;