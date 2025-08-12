function openMenu() {
  document.getElementById('section-menu').classList.add('open');
  document.getElementById('open-menu-button').classList.add('open');
  document.getElementById('navMenuBGOverlay').classList.add('active');
  document.getElementById('open-menu-button').setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  document.getElementById('section-menu').classList.remove('open');
  document.getElementById('open-menu-button').classList.remove('open');
  document.getElementById('navMenuBGOverlay').classList.remove('active');
  document.getElementById('open-menu-button').setAttribute('aria-expanded', 'false');
}

document.querySelectorAll(".menu-items li a").forEach(element => {
  element.addEventListener("click", () => {
    closeMenu();
  })
});