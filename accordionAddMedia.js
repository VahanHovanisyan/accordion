// class Accordion {
//   constructor(accordionElem, options) {
//     let defaultOptions = {
//       speed: 500,
//       turn: false,
//       mediaQuery: false,
//       width: 'min',
//       breackpoint: 1200
//     }
//     this.accordion = document.querySelector(`[data-accordion="${accordionElem}"]`);
//     this.options = Object.assign(defaultOptions, options);
//     this.allAccordionCollapse = this.accordion.querySelectorAll('.accordion__collapse');
//     this.allAccordionButton = this.accordion.querySelectorAll('.accordion__button');
//     this.media = window.matchMedia(`(${this.options.width}-width: ${this.options.breackpoint}px)`);
//     // this.media.addEventListener("change", this.handleMediaChange.bind(this));
//     if (!this.options.mediaQuery) {
//       this.initialize();
//       this.setupEventListeners();
//       this.toggleSlide();
//       this.media.addEventListener("change", this.handleMediaChange.bind(this));
//     }
//     this.hideEl();
//   }
//   handleMediaChange(event) {
//     if (event.matches || !!this.options.mediaQuery) {
//       this.initialize();
//       this.setupEventListeners();
//       this.toggleSlide();
//       return true
//     } else {

//       return false
//     }
//   }
//   initialize() {
//     this.allAccordionCollapse.forEach(collapseElement => {
//       collapseElement?.setAttribute('id', 'accordion__collapse');
//       collapseElement.hidden = true;
//       if (collapseElement.classList.contains('accordion__collapse_open')) {
//         this.toggleSlide(collapseElement)
//       }
//     });

//     this.allAccordionButton.forEach(buttonElement => {
//       buttonElement.setAttribute('aria-expanded', 'false');
//       buttonElement.setAttribute('aria-controls', 'accordion__collapse');
//     });
//   }
//   hideEl = element => {
//     if (element && !element.classList.contains('collapse')) {
//       element.classList.add('collapse');
//       element.classList.remove('accordion__collapse_open');
//       element.previousElementSibling.classList.remove('accordion__button_active');
//       element.previousElementSibling.setAttribute('aria-expanded', 'false');
//       element.style.transitionProperty = 'height, margin, padding';
//       element.style.transitionDuration = this.options.speed + 'ms';
//       element.style.height = element.offsetHeight + 'px';
//       element.offsetHeight;
//       element.style.overflow = 'hidden';
//       element.style.height = 0;
//       element.style.paddingTop = 0;
//       element.style.paddingBottom = 0;
//       element.style.marginTop = 0;
//       element.style.marginBottom = 0;
//       window.setTimeout(() => {
//         element.hidden = true;
//         element.style.removeProperty('height');
//         element.style.removeProperty('padding-top');
//         element.style.removeProperty('padding-bottom');
//         element.style.removeProperty('margin-top');
//         element.style.removeProperty('margin-bottom');
//         element.style.removeProperty('overflow');
//         element.style.removeProperty('transition-duration');
//         element.style.removeProperty('transition-property');
//         element.classList.remove('collapse');
//       }, this.options.speed);
//     }
//   };

//   toggleSlide(collapseElement, duration = this.options.speed) {
//     const hideElement = element => {
//       if (element && !element.classList.contains('collapse')) {
//         element.classList.add('collapse');
//         element.classList.remove('accordion__collapse_open');
//         element.previousElementSibling.classList.remove('accordion__button_active');
//         element.previousElementSibling.setAttribute('aria-expanded', 'false');
//         element.style.transitionProperty = 'height, margin, padding';
//         element.style.transitionDuration = duration + 'ms';
//         element.style.height = element.offsetHeight + 'px';
//         element.offsetHeight;
//         element.style.overflow = 'hidden';
//         element.style.height = 0;
//         element.style.paddingTop = 0;
//         element.style.paddingBottom = 0;
//         element.style.marginTop = 0;
//         element.style.marginBottom = 0;
//         window.setTimeout(() => {
//           element.hidden = true;
//           element.style.removeProperty('height');
//           element.style.removeProperty('padding-top');
//           element.style.removeProperty('padding-bottom');
//           element.style.removeProperty('margin-top');
//           element.style.removeProperty('margin-bottom');
//           element.style.removeProperty('overflow');
//           element.style.removeProperty('transition-duration');
//           element.style.removeProperty('transition-property');
//           element.classList.remove('collapse');
//         }, duration);
//       }
//     };

//     const showElement = element => {
//       if (element && !element.classList.contains('collapse')) {
//         element.classList.add('collapse');
//         element.classList.add('accordion__collapse_open');
//         element.previousElementSibling.classList.add('accordion__button_active');
//         element.previousElementSibling.setAttribute('aria-expanded', 'true');
//         if (element.hidden) {
//           element.hidden = false;
//         }
//         let height = element.offsetHeight;
//         element.style.overflow = 'hidden';
//         element.style.height = 0;
//         element.style.paddingTop = 0;
//         element.style.paddingBottom = 0;
//         element.style.marginTop = 0;
//         element.style.marginBottom = 0;
//         element.offsetHeight;
//         element.style.transitionProperty = 'height, margin, padding';
//         element.style.transitionDuration = duration + 'ms';
//         element.style.height = height + 'px';
//         element.style.removeProperty('padding-top');
//         element.style.removeProperty('padding-bottom');
//         element.style.removeProperty('margin-top');
//         element.style.removeProperty('margin-bottom');
//         window.setTimeout(() => {
//           element.style.removeProperty('height');
//           element.style.removeProperty('overflow');
//           element.style.removeProperty('transition-duration');
//           element.style.removeProperty('transition-property');
//           element.classList.remove('collapse');
//         }, duration);
//       }
//     };

//     if (collapseElement?.hidden) {
//       showElement(collapseElement);
//     } else {
//       hideElement(collapseElement);
//     }
//   }

//   setupEventListeners() {
//     this.accordion.addEventListener('click', (event) => {
//       const accordionButton = event.target.closest('.accordion__button');
//       const accordionCollapse = accordionButton?.nextElementSibling;

//       // toggle
//       this.toggleSlide(accordionCollapse);

//       // turn == true
//       if (accordionCollapse?.classList.contains('accordion__collapse_open') && this.options.turn) {
//         this.allAccordionCollapse.forEach(collapseElement => {
//           this.hideEl(collapseElement);
//         });
//         accordionCollapse.hidden = false
//       }
//     });
//   }
// }




class Accordion {
  constructor(accordionElem, options) {
    let defaultOptions = {
      speed: 500,
      turn: false,
      width: 'min',
      breakpoint: 1200,
    };

    this.accordion = document.querySelector(`[data-accordion="${accordionElem}"]`);
    this.options = Object.assign(defaultOptions, options);
    this.allAccordionCollapse = this.accordion?.querySelectorAll('.accordion__collapse');
    this.allAccordionButton = this.accordion?.querySelectorAll('.accordion__button');
    this.media = window.matchMedia(`(${this.options.width}-width: ${this.options.breakpoint}px)`);
    this.initMedia();
    this.media.addEventListener("change", this.handleMediaChange.bind(this));
    
    // this.hideEl();
  }

  initMedia() {
    if (this.media.matches) {
      this.initialize(true);
      this.setupEventListeners(true);
    } else {
      this.initialize(false);
      this.setupEventListeners(false);
    }
  }

  handleMediaChange(event) {
    if (event.matches) {
      this.initialize(true);
      this.setupEventListeners(true);
      console.log(true);
    } else {
      this.initialize(false);
      this.setupEventListeners(false);
      console.log(false);
    }
  }

  initialize(bool) {
    if (bool) {
      this.allAccordionCollapse?.forEach(collapseElement => {
        collapseElement?.setAttribute('id', 'accordion__collapse');
        collapseElement.hidden = true;

        if (collapseElement.classList.contains('accordion__collapse_open')) {
          this.toggleSlide(collapseElement);
        }
      });

      this.allAccordionButton?.forEach(buttonElement => {
        buttonElement.setAttribute('aria-expanded', 'false');
        buttonElement.setAttribute('aria-controls', 'accordion__collapse');
      });
    }
  }



  hideEl(element) {
    if (element && !element.classList.contains('collapse')) {
      element.classList.add('collapse');
      element.classList.remove('accordion__collapse_open');
      element.previousElementSibling.classList.remove('accordion__button_active');
      element.previousElementSibling.setAttribute('aria-expanded', 'false');
      element.style.transitionProperty = 'height, margin, padding';
      element.style.transitionDuration = this.options.speed + 'ms';
      element.style.height = element.offsetHeight + 'px';
      element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      window.setTimeout(() => {
        element.hidden = true;
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
        element.classList.remove('collapse');
      }, this.options.speed);
    }
  }

  showEl(element, duration = this.options.speed) {
    if (element && !element.classList.contains('collapse')) {
      element.classList.add('collapse');
      element.classList.add('accordion__collapse_open');
      element.previousElementSibling.classList.add('accordion__button_active');
      element.previousElementSibling.setAttribute('aria-expanded', 'true');

      if (element.hidden) {
        element.hidden = false;
      }

      let height = element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      element.offsetHeight;
      element.style.transitionProperty = 'height, margin, padding';
      element.style.transitionDuration = duration + 'ms';
      element.style.height = height + 'px';
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');

      window.setTimeout(() => {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
        element.classList.remove('collapse');
      }, duration);
    }
  };

  toggleSlide(collapseElement, duration = this.options.speed) {
    const hideElement = element => {
      if (element && !element.classList.contains('collapse')) {
        element.classList.add('collapse');
        element.classList.remove('accordion__collapse_open');
        element.previousElementSibling.classList.remove('accordion__button_active');
        element.previousElementSibling.setAttribute('aria-expanded', 'false');
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.height = element.offsetHeight + 'px';
        element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;

        window.setTimeout(() => {
          element.hidden = true;
          element.style.removeProperty('height');
          element.style.removeProperty('padding-top');
          element.style.removeProperty('padding-bottom');
          element.style.removeProperty('margin-top');
          element.style.removeProperty('margin-bottom');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
          element.classList.remove('collapse');
        }, duration);
      }
    };

    const showElement = element => {
      if (element && !element.classList.contains('collapse')) {
        element.classList.add('collapse');
        element.classList.add('accordion__collapse_open');
        element.previousElementSibling.classList.add('accordion__button_active');
        element.previousElementSibling.setAttribute('aria-expanded', 'true');

        if (element.hidden) {
          element.hidden = false;
        }

        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');

        window.setTimeout(() => {
          element.style.removeProperty('height');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
          element.classList.remove('collapse');
        }, duration);
      }
    };

    if (collapseElement?.hidden) {
      showElement(collapseElement);
    } else {
      hideElement(collapseElement);
    }
  }

  setupEventListeners(bool) {
    if (bool) {
      this.accordion?.addEventListener('click', (event) => {
        const accordionButton = event.target.closest('.accordion__button');
        const accordionCollapse = accordionButton?.nextElementSibling;

        // toggle
        this.toggleSlide(accordionCollapse);

        // turn == true
        if (accordionCollapse?.classList.contains('accordion__collapse_open') && this.options.turn) {
          this.allAccordionCollapse.forEach(collapseElement => {
            this.hideEl(collapseElement);
          });
          accordionCollapse.hidden = false;
        }
      });
    }
  }
}

// Example usage:
// const myAccordion = new Accordion('my-accordion', {
//   speed: 300,
//   turn: true,
//   mediaQuery: false,
//   width: 'min',
//   breakpoint: 768,
// });
