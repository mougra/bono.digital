let navbar = document.getElementById('header-fixed').classList;
let active_class = 'header__scrolled';

window.addEventListener('scroll', (e) => {
  if (pageYOffset > 180) {
    navbar.add(active_class);
  } else {
    navbar.remove(active_class);
  }
});
