
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!name || !email || !feedback) {
      message.textContent = 'Please fill in all fields.';
      message.style.color = 'red';
      return;
    }

    if (!emailPattern.test(email)) {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = 'red';
      return;
    }

    
    message.textContent = `✅ Thank you, ${name}! Your feedback has been received.`;
    message.style.color = 'limegreen';

    
    form.reset();
  });
});
