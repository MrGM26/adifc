// Auto-animation system for viewport reveals
export class AnimationObserver {
  private observer: IntersectionObserver;
  private animatedElements = new Set<Element>();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
            this.animateElement(entry.target as HTMLElement);
            this.animatedElements.add(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private animateElement(element: HTMLElement) {
    // Reveal animations
    if (element.classList.contains('reveal-on-scroll')) {
      element.classList.add('revealed');
    }
    if (element.classList.contains('reveal-fade-up')) {
      element.classList.add('revealed');
    }
    if (element.classList.contains('reveal-scale-up')) {
      element.classList.add('revealed');
    }
    if (element.classList.contains('text-reveal')) {
      element.classList.add('revealed');
    }
    if (element.classList.contains('section-entrance')) {
      element.classList.add('revealed');
    }

    // Staggered container animations
    if (element.classList.contains('stagger-container')) {
      element.classList.add('revealed');
    }

    // Auto-apply animations to common elements
    const sections = element.querySelectorAll('section');
    sections.forEach((section) => {
      if (!section.classList.contains('section-entrance')) {
        section.classList.add('section-entrance', 'revealed');
      }
    });

    const cards = element.querySelectorAll('.card, [class*="card"]');
    cards.forEach((card) => {
      if (!card.classList.contains('premium-card')) {
        card.classList.add('hover-lift');
      }
    });

    const buttons = element.querySelectorAll('button, .btn');
    buttons.forEach((button) => {
      if (!button.classList.contains('glow-button')) {
        button.classList.add('hover-lift', 'magnetic-element');
      }
    });

    const images = element.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.classList.contains('image-reveal')) {
        img.classList.add('image-reveal', 'revealed');
      }
    });

    const icons = element.querySelectorAll('svg, .icon');
    icons.forEach((icon) => {
      if (!icon.classList.contains('animated-icon')) {
        icon.classList.add('animated-icon');
      }
    });
  }

  public observe(elements: NodeListOf<Element> | Element[]) {
    elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  public disconnect() {
    this.observer.disconnect();
  }
}

// Auto-initialize animation observer
export const initializeAnimations = () => {
  const animationObserver = new AnimationObserver();
  
  // Observe all potential animated elements
  const elementsToObserve = document.querySelectorAll(`
    .reveal-on-scroll,
    .reveal-fade-up,
    .reveal-scale-up,
    .text-reveal,
    .section-entrance,
    .stagger-container,
    section,
    .card,
    [class*="card"]
  `);
  
  animationObserver.observe(elementsToObserve);
  
  // Auto-apply classes to elements that don't have them
  setTimeout(() => {
    // Add reveal classes to headings
    document.querySelectorAll('h1, h2, h3').forEach((heading) => {
      if (!heading.classList.contains('text-reveal')) {
        heading.classList.add('text-reveal');
        animationObserver.observe([heading]);
      }
    });

    // Add reveal classes to paragraphs
    document.querySelectorAll('p').forEach((p) => {
      if (!p.classList.contains('reveal-on-scroll')) {
        p.classList.add('reveal-on-scroll');
        animationObserver.observe([p]);
      }
    });

    // Add premium card effects
    document.querySelectorAll('.card, [class*="Card"]').forEach((card) => {
      if (!card.classList.contains('premium-card')) {
        card.classList.add('premium-card');
      }
    });

  }, 100);

  return animationObserver;
};