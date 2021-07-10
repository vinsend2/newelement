"use strict";

const html = document.querySelector("html");

const initFixedHeader = () => {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const headerHeight = header.offsetHeight;

  if (window.pageYOffset > headerHeight) {
    header.classList.add("fixed");
    menu.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    menu.classList.remove("fixed");
  }
};

const closeEsc = () =>
  document.addEventListener(
    "keyup",
    function (e) {
      if (e.key == `Escape`) {
        document.querySelector(".modal").classList.remove("open");
      }
    },
    false
  );

const initFeedbackModal = () => {
  const workBtn = document.querySelector(".work__btn");
  const feedbackModal = document.querySelector("#feedback-modal");

  workBtn.addEventListener("click", () => {
    html.classList.add("lock");
    feedbackModal.classList.add("open");
  });
};

const initCloseModal = () => {
  const modalCloseButtons = document.querySelectorAll(".modal__close");

  modalCloseButtons.forEach(function (button) {
    button.addEventListener("click", () => {
      html.classList.remove("lock");
      button.closest(".modal").classList.remove("open");
    });
  });
};

const overlayClick = () => {
  document.querySelector(".modal__overlay").addEventListener("click", () => {
    console.log(123);
    document.querySelector(".modal").classList.remove("open");
  });
};

window.addEventListener("scroll", () => {
  initFixedHeader();
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    initFixedHeader();
    initFeedbackModal();
    initCloseModal();
    closeEsc();
    overlayClick();
  },
  false
);
