document.addEventListener('DOMContentLoaded', () => {
  const signUpBtnlink = document.querySelector('.signUpBtn-link');
  const signInBtnlink = document.querySelector('.signInBtn-link');
  const wrapper = document.querySelector('.wrapper');
  const signInForm = document.querySelector('.sign-in');
  const signUpForm = document.querySelector('.sign-up');

  signUpBtnlink.addEventListener('click', () => {
    wrapper.classList.add('active');
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
  });

  signInBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
  });
});
