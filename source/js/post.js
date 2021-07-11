

function form (formSelector) {
  const forms = document.querySelectorAll(formSelector);
  const feedbackForm = document.querySelector('#feedback-form');

  function bindPostForm(form) {
      form.addEventListener(`submit`, (e) => {
          e.preventDefault();
          const save = feedbackForm.innerHTML
          const formData = new FormData(form);
          const json = JSON.stringify(Object.fromEntries(formData.entries()));
          const object = {};
          formData.forEach((value, key) => {
              object[key] = value;
          });
          function delay(ms) {
            return new Promise((resolve, reject) => {
              setTimeout(resolve, ms);
            });
          }
          postForm(`https://element-ede61-default-rtdb.europe-west1.firebasedatabase.app/requests.json`, json )
          .then(() => {
            feedbackForm.innerHTML = '<p style="color: black">Your message successfully sent</p>';
          })
          delay(3000)
          .then(() => {
            feedbackForm.innerHTML = save;
          })
            .catch(() => {
            console.log(`post-error`);
          }).finally(() => {
              form.reset();
          });

      });
  }
  forms.forEach(item => {
      bindPostForm(item);
  });
  }
  const initFormValidation = () => {
    document.querySelector('#feedback-form-email').addEventListener('input', function() {
        this.setCustomValidity('');
        if (this.validity.typeMismatch) {
           this.classList.add('error');
           this.classList.remove('success');
        } else {
           this.classList.remove('error');
           this.classList.add('success');
        }
        if (this.value.length === 0) {
           this.classList.remove('success');
        }
     });
  };

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      form(`form`)
      initFormValidation();
    },
    false
  );

