function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Track CV download
function trackCVDownload() {
  // Google Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      'event_category': 'CV',
      'event_label': 'Resume Download',
      'value': 1
    });
  }
  
  // Console log for debugging
  console.log('CV Download tracked');
}

// Track page views
function trackPageView() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href
    });
  }
}

// Track when page loads
document.addEventListener('DOMContentLoaded', function() {
  trackPageView();
});
