/**
 * @file src/js/whyus.js
 * @description This file sets up the counter and reason boxes for the "Why Us" section.
 */

// Counter Boxes (you can update these numbers and labels)
const counterBoxesData = [
    {
      id: "tires-counter",
      number: 1200,
      text: "Tires Replaced",
    },
    {
      id: "wheels-counter",
      number: 1800,
      text: "Wheels Aligned",
    },
    {
      id: "oil-counter",
      number: 3000,
      text: "Oil Changes",
    },
  ];
  
  // Generate HTML for counter boxes
  const counterBoxesHtml = counterBoxesData.map((cb) => {
    const { id, number, text } = cb;
    return `
      <div id="${id}" class="counter-widget col-6 col-lg-3">
        <div class="shadow-sm rounded p-4 bg-secondary text-bg-secondary h-100 d-flex flex-column justify-content-center">
          <div class="counter-container">
            <div class="counter-head fs-3">
              <span class="counter-number">${number}</span>+
            </div>
          </div>
          <div>${text}</div>
        </div>
      </div>`;
  });
  
  const counterBoxesElement = document.getElementById("counter-boxes");
  if (counterBoxesElement) counterBoxesElement.innerHTML = counterBoxesHtml.join("");
  
  // Animate counters when visible
  const reasonCounter = document.querySelectorAll(`.counter-number`);
  reasonCounter.forEach(reason => {
    if (reason) countWhenVisible(reason, reason.innerHTML, 1000);
  });
  
  function countWhenVisible(element, targetCount, speed) {
    let hasCounted = false;
    let startTime = null;
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasCounted) {
        hasCounted = true;
        startTime = performance.now();
        let count = 0;
        let duration = speed;
        let interval = setInterval(() => {
          let elapsedTime = performance.now() - startTime;
          let progress = elapsedTime / duration;
          if (progress >= 1) {
            clearInterval(interval);
            element.innerHTML = targetCount;
          } else {
            count = Math.floor(progress * targetCount);
            element.innerHTML = count;
          }
        }, 20);
      }
    });
    if (element) observer.observe(element);
  }
  
  // "Why Us" Reasons Section
  const reasonBoxesData = [
    {
      title: `Locally Trusted`,
      body: `Speedy Solutions Vehicles is proud to serve Lehigh Acres with honest and reliable auto services. We treat every car like it’s our own.`,
    },
    {
      title: `Expert Technicians`,
      body: `Our team is trained in the latest diagnostic and repair technologies to ensure precision and safety in every job.`,
    },
    {
      title: `Wide Range of Services`,
      body: `From tire changes and alignments to A/C recharges and brake pads—we handle it all, so you don’t have to go anywhere else.`,
    },
    {
      title: `Fast & Friendly Service`,
      body: `We get it done right the first time, and we do it with a smile. You’ll never leave our shop feeling ignored or rushed.`,
    },
    {
      title: `Affordable Pricing`,
      body: `No hidden fees. No surprises. Just transparent pricing and honest advice, every time.`,
    },
    {
      title: `Bilingual Support`,
      body: `Hablamos Español y estamos aquí para ayudarte. We’re happy to assist you in English or Spanish!`,
    },
  ];
  
  // Generate HTML for reason boxes
  const reasonBoxesHtml = reasonBoxesData.map((rs) => {
    const { title, body } = rs;
    return `
      <div class="col-lg-4 col-6 col-12">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <div class="fs-5 text-primary fw-medium card-title">${title}</div>
            ${body}
          </div>
        </div>
      </div>`;
  });
  
  const reasonBoxesElement = document.getElementById("reason-boxes");
  if (reasonBoxesElement) reasonBoxesElement.innerHTML = reasonBoxesHtml.join("");