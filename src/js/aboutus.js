/**
 * @file aboutus.js
 * @description Generates HTML content dynamically for the About Us service slides.
 */

/**
 * @constant {Array<Object>} serviceSlidesData
 * @description An array of service details used to populate the About Us section.
 */
const serviceSlidesData = [
    {
      icon: `<i class="bx bxs-car-mechanic"></i>`,
      title: `Tire Work`,
      body: `Whether you need tire repairs or replacements, our skilled technicians are here to keep your wheels rolling safely and smoothly.`,
    },
    {
      icon: `<i class="bx bxs-car-mechanic"></i>`,
      title: `New & Used Tire`,
      body: `We offer a selection of high-quality new and used tires that provide excellent performance and value for your vehicle.`,
    },
    // Add more services here as needed
  ];
  
  /**
   * @function generateSlideBoxesHtml
   * @description Returns an array of HTML strings for each service slide.
   * @param {Array<Object>} slidesData
   * @returns {Array<string>}
   */
  const generateSlideBoxesHtml = (slidesData) => {
    return slidesData.map(({ icon = "", title = "", body = "" }) => {
      return `
        <li class="glide__slide h-auto">
          <div class="card h-100">
            <div class="card-body">
              <div class="card-title text-primary fw-medium fs-5">
                ${icon} ${title}
              </div>
              ${body}
            </div>
          </div>
        </li>`;
    });
  };
  
  // Insert the slides into the DOM
  const slideBoxesElement = document.getElementById("service-slides");
  if (slideBoxesElement) {
    slideBoxesElement.innerHTML = generateSlideBoxesHtml(serviceSlidesData).join("");
  }