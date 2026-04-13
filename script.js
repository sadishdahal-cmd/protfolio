// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('#navLinks a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

// Scroll reveal animation
var reveals = document.querySelectorAll('.reveal');
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(function(r) { revealObs.observe(r); });

// Skill bar animation on scroll
var bars = document.querySelectorAll('.skill-fill');
var barObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.style.width = e.target.getAttribute('data-fill');
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(function(b) { barObs.observe(b); });

// Active nav link highlight on scroll
var sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
  var current = '';
  sections.forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 100) {
      current = s.id;
    }
  });
  document.querySelectorAll('.nav-link').forEach(function(a) {
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

// Contact form submit
document.getElementById('sendBtn').addEventListener('click', function() {
  var name  = document.getElementById('cname').value.trim();
  var email = document.getElementById('cemail').value.trim();
  var msg   = document.getElementById('cmsg').value.trim();
  var note  = document.getElementById('formNote');

  if (!name || !email || !msg) {
    note.textContent = 'Please fill in all fields.';
    note.style.color = '#ff6584';
    return;
  }

  note.textContent = 'Thanks ' + name + '! Your message has been sent.';
  note.style.color = '#6C63FF';
  document.getElementById('cname').value  = '';
  document.getElementById('cemail').value = '';
  document.getElementById('cmsg').value   = '';
});
