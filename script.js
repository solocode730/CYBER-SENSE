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