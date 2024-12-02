document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const body = document.body;
  
    // Carregar o tema salvo no armazenamento local (se disponível)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    }
  
    themeButton.addEventListener('click', () => {
      // Alternar entre temas claro e escuro
      body.classList.toggle('dark');
  
      // Salvar o estado atual no armazenamento local
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  