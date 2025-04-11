/**
 * @file contact.js
 * @description Handles store open/closed status and contact form validation and submission.
 */

// Store Status Logic
function storeStatus() {
    const timeZone = "America/New_York";
    const now = new Date();
    const localTime = new Date(now.toLocaleString("en-US", { timeZone }));
    const options = { weekday: "long" };
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric", minute: "2-digit", hour12: true, timeZone
    });
  
    const currentDay = new Intl.DateTimeFormat("en-US", options).format(localTime);
    const hours = localTime.getHours();
    const dayOfWeek = currentDay;
  
    let outputTime;
  
    if (
      (dayOfWeek === "Sunday" && hours >= 9 && hours < 17) ||
      (dayOfWeek !== "Sunday" && hours >= 8 && hours < 19)
    ) {
      outputTime = '<span class="open text-success fw-bold">Open</span> — Come on down!';
    } else if (
      (dayOfWeek === "Sunday" && hours >= 17) ||
      (dayOfWeek !== "Sunday" && hours >= 19)
    ) {
      outputTime = '<span class="closed text-danger fw-bold">Closed</span> — See you tomorrow. 😊';
    } else {
      outputTime = '<span class="closed text-danger fw-bold">Closed</span> — We open at 08:00 AM. 😴';
    }
  
    return `It is ${currentDay} ${formattedTime}, We are currently ${outputTime}`;
  }
  
  function updateStatusRealtime() {
    const statusEl = document.getElementById("storestatus");
    if (statusEl) statusEl.innerHTML = storeStatus();
  }
  
  updateStatusRealtime();
  setInterval(updateStatusRealtime, 15000);
  
  // Contact Form Logic
  import "bootstrap/js/dist/alert.js";
  
  const formId = 'homepage-contact-form';
  const contactForm = document.getElementById(formId);
  
  if (contactForm) {
    const nameInput = contactForm.querySelector('#contact-form-name');
    const emailInput = contactForm.querySelector('#contact-form-email');
    const messageInput = contactForm.querySelector('#contact-form-message');
    const alertPlaceholder = contactForm.querySelector('#errorAlerts');
  
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  
    const appendAlert = (message) => {
      alertPlaceholder.innerHTML = `
        <div class="alert alert-danger alert-dismissible" role="alert">
          <div>${message}</div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
  
    const validateForm = () => {
      if (nameInput.value.trim() === '') {
        appendAlert('Please enter your name.');
        return false;
      }
      if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        appendAlert('Please enter a valid email address.');
        return false;
      }
      if (messageInput.value.trim() === '') {
        appendAlert('Please enter your message.');
        return false;
      }
      return true;
    }
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      alertPlaceholder.innerHTML = ""; // Clear previous alerts
  
      if (!validateForm()) return;
  
      const receiveEmail = "speedysolutionsauto@gmail.com";
      const subject = `[Contact-Form] ${nameInput.value}`;
      const body = `${messageInput.value}\n\nFrom: ${nameInput.value}\nEmail: ${emailInput.value}`;
      const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      window.open(mailtoUrl);
    });
  }