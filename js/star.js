class StarRating {
    constructor(containerSelector, labelSelector) {
      this.container = document.querySelector(containerSelector);
      this.labelSelector = labelSelector;
      this.currentlySelectedRating = null;
      
      this.bindEventListeners();
    }
    
    bindEventListeners() {
      this.container.addEventListener('click', (e) => {
        if (e.target.tagName !== 'LABEL') {
          return;
        }
        this.currentlySelectedRating = parseInt(e.target.getAttribute('for'));
        this.highlightStars(e.target);
      });
      
      this.container.addEventListener('mouseover', (e) => {
        if (e.target.tagName !== 'LABEL') {
          return;
        }
        this.highlightStars(e.target);
      });
      
      this.container.addEventListener('mouseleave', (e) => {
        this.highlightStars(document.querySelector(`${this.labelSelector}[for="${this.currentlySelectedRating}"]`));
      });
    }
    
    highlightStars(starElement) {
      const rating = starElement ? parseInt(starElement.getAttribute('for')) : 0;
      for (let i = 1; i <= 5; i++) {
        const currentStar = document.querySelector(`${this.labelSelector}[for="${i}"]`);
        if (i <= rating) {
          currentStar.style.color = 'gold';
        } else {
          currentStar.style.color = 'white';
        }
      }
    }
  }
  
  const ratingsWidget = new StarRating('.review__rating', '.review__rating label');