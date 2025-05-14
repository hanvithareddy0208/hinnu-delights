 function showForm(formType) {
      const loginTab = document.querySelector('.tab:nth-child(1)');
      const signupTab = document.querySelector('.tab:nth-child(2)');
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');

      if (formType === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
      } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
      }
    }