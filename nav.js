// Mobile hamburger menu toggle. Shared across all pages — see the
// .menu-toggle / .mobile-nav rules in styles.css for the matching styles.
function toggleMobileMenu() {
  var nav = document.getElementById('mobileNav');
  var btn = document.querySelector('.menu-toggle');
  if (!nav || !btn) return;
  var isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Close the menu after tapping a link, and if the window is resized past
// the mobile breakpoint while it's open.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('mobileNav');
  if (!nav) return;
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      var btn = document.querySelector('.menu-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });
});
