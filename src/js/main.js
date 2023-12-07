import vars from './_vars';
import './_functions';
import './_components';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-message');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      let formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      form.reset();
      if (name) {
        console.log(`name: ${name}`);
      }
      if (email) {
        console.log(`email: ${email}`);
      }
      if (message) {
        console.log(`message: ${message}`);
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    let formEmail = document.querySelector('._email');

    formRemoveError(formEmail);

    if (emailTest(formEmail)) {
      formAddError(formEmail);
      error++;
    }

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
