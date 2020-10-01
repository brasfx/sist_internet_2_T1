const changeTheme = document.querySelector('.changeTheme');
const schemeDefault = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme');
} else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme');
}

changeTheme.addEventListener('click', () => {
  if (schemeDefault.matches) {
    document.body.classList.toggle('light-theme');
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';
  }
  localStorage.setItem('theme', theme);
});
