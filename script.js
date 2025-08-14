function openNavMenuDrawer() {
  document.getElementById('nav-menu-open-btn').classList.add('If-IsVisible');
  document.getElementById('nav-menu-drawer').classList.add('If-IsVisible');
  document.getElementById('section-nav-menu').classList.add('If-IsVisible');
  document.getElementById('nav-menu-drawer-out-area').classList.add('If-IsActive');
}

function closeNavMenuDrawer() {
  document.getElementById('nav-menu-open-btn').classList.remove('If-IsVisible');
  document.getElementById('nav-menu-drawer').classList.remove('If-IsVisible');
  document.getElementById('section-nav-menu').classList.remove('If-IsVisible');
  document.getElementById('nav-menu-drawer-out-area').classList.remove('If-IsActive');
}

document.querySelectorAll("#nav-menu-drawer li").forEach(element => {
  element.addEventListener("click", () => {
    closeNavMenuDrawer();
  })
});