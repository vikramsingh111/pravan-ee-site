// Animated Background with Particles and Complete Color Schemes for Each Page

const colorSchemes = {
  'home': {
    name: 'Ocean Blue',
    bgGradient: ['#e4f2ff', '#fff3dc', '#f6f8fc'],
    primary: '#0b4f77',
    secondary: '#1286c2',
    accent: '#f59e0b',
    cardBg: '#ffffff',
    cardText: '#11243e',
    buttonBg: '#0b4f77',
    buttonText: '#ffffff',
    particleColor: 'rgba(11, 79, 119, 0.5)',
    lineColor: 'rgba(18, 134, 194, 0.3)'
  },
  'about': {
    name: 'Rich Purple',
    bgGradient: ['#f3e8ff', '#fef3c7', '#f5f3ff'],
    primary: '#6d28d9',
    secondary: '#5b21b6',
    accent: '#f59e0b',
    cardBg: '#ffffff',
    cardText: '#3f2d6f',
    buttonBg: '#6d28d9',
    buttonText: '#ffffff',
    particleColor: 'rgba(109, 40, 217, 0.5)',
    lineColor: 'rgba(91, 33, 182, 0.3)'
  },
  'contact': {
    name: 'Sunset Purple',
    bgGradient: ['#fce7f3', '#dbeafe', '#faf5ff'],
    primary: '#9333ea',
    secondary: '#7c3aed',
    accent: '#f97316',
    cardBg: '#ffffff',
    cardText: '#2e1065',
    buttonBg: '#9333ea',
    buttonText: '#ffffff',
    particleColor: 'rgba(147, 51, 234, 0.5)',
    lineColor: 'rgba(124, 58, 237, 0.3)'
  },
  'products': {
    name: 'Coral Reef',
    bgGradient: ['#fed7aa', '#c7d2fe', '#fff7ed'],
    primary: '#dc2626',
    secondary: '#b91c1c',
    accent: '#0891b2',
    cardBg: '#ffffff',
    cardText: '#7c2d12',
    buttonBg: '#dc2626',
    buttonText: '#ffffff',
    particleColor: 'rgba(220, 38, 38, 0.5)',
    lineColor: 'rgba(185, 28, 28, 0.3)'
  },
  'tata': {
    name: 'Indigo Night',
    bgGradient: ['#e0e7ff', '#fecdd3', '#f0f9ff'],
    primary: '#1e40af',
    secondary: '#1e3a8a',
    accent: '#f43f5e',
    cardBg: '#ffffff',
    cardText: '#0c2340',
    buttonBg: '#1e40af',
    buttonText: '#ffffff',
    particleColor: 'rgba(30, 64, 175, 0.5)',
    lineColor: 'rgba(30, 58, 138, 0.3)'
  },
  'ht-lt': {
    name: 'Safety Red',
    bgGradient: ['#fee2e2', '#dbeafe', '#fef2f2'],
    primary: '#b91c1c',
    secondary: '#991b1b',
    accent: '#0284c7',
    cardBg: '#ffffff',
    cardText: '#5f1914',
    buttonBg: '#b91c1c',
    buttonText: '#ffffff',
    particleColor: 'rgba(185, 28, 28, 0.5)',
    lineColor: 'rgba(153, 27, 27, 0.3)'
  },
  'industrial-wiring': {
    name: 'Steel Gray',
    bgGradient: ['#f3f4f6', '#fef3c7', '#f9fafb'],
    primary: '#374151',
    secondary: '#1f2937',
    accent: '#eab308',
    cardBg: '#ffffff',
    cardText: '#111827',
    buttonBg: '#374151',
    buttonText: '#ffffff',
    particleColor: 'rgba(55, 65, 81, 0.5)',
    lineColor: 'rgba(31, 41, 55, 0.3)'
  },
  'testing': {
    name: 'Sky Blue',
    bgGradient: ['#cffafe', '#fecaca', '#f0f9ff'],
    primary: '#0369a1',
    secondary: '#0284c7',
    accent: '#dc2626',
    cardBg: '#ffffff',
    cardText: '#082f4b',
    buttonBg: '#0369a1',
    buttonText: '#ffffff',
    particleColor: 'rgba(3, 105, 161, 0.5)',
    lineColor: 'rgba(2, 132, 199, 0.3)'
  },
  'safety': {
    name: 'Emerald Tech',
    bgGradient: ['#ccfbf1', '#fce7f3', '#f0fdfa'],
    primary: '#059669',
    secondary: '#047857',
    accent: '#db2777',
    cardBg: '#ffffff',
    cardText: '#134e4a',
    buttonBg: '#059669',
    buttonText: '#ffffff',
    particleColor: 'rgba(5, 150, 105, 0.5)',
    lineColor: 'rgba(4, 120, 87, 0.3)'
  },
  'solar': {
    name: 'Solar Gold',
    bgGradient: ['#fef08a', '#e0e7ff', '#fffbeb'],
    primary: '#b45309',
    secondary: '#92400e',
    accent: '#3b82f6',
    cardBg: '#ffffff',
    cardText: '#451a03',
    buttonBg: '#b45309',
    buttonText: '#ffffff',
    particleColor: 'rgba(180, 83, 9, 0.5)',
    lineColor: 'rgba(146, 64, 14, 0.3)'
  },
  'consultancy': {
    name: 'Navy Consulting',
    bgGradient: ['#e0f2fe', '#f5d0a9', '#f0f9ff'],
    primary: '#003d82',
    secondary: '#001a33',
    accent: '#d97706',
    cardBg: '#ffffff',
    cardText: '#001a33',
    buttonBg: '#003d82',
    buttonText: '#ffffff',
    particleColor: 'rgba(0, 61, 130, 0.5)',
    lineColor: 'rgba(0, 26, 51, 0.3)'
  }
};

class AnimatedBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId) || this.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.lines = [];
    this.currentScheme = this.getColorScheme();
    this.animationId = null;
    
    this.resize();
    this.initParticles();
    this.animate();
    
    window.addEventListener('resize', () => {
      this.resize();
      this.initParticles();
    });
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'animated-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.insertBefore(canvas, document.body.firstChild);
    return canvas;
  }

  getPageName() {
    const pageAttr = document.body.getAttribute('data-page');
    if (pageAttr) return pageAttr;
    const filename = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    return filename === '' ? 'home' : filename;
  }

  getColorScheme() {
    const pageName = this.getPageName();
    return colorSchemes[pageName] || colorSchemes['home'];
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    this.lines = [];
    
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 10000);
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  drawBackground() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, this.currentScheme.bgGradient[0]);
    gradient.addColorStop(0.5, this.currentScheme.bgGradient[1]);
    gradient.addColorStop(1, this.currentScheme.bgGradient[2]);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;

      // Draw particle
      this.ctx.fillStyle = this.currentScheme.particleColor;
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1;
  }

  drawLines() {
    this.ctx.strokeStyle = this.currentScheme.lineColor;
    this.ctx.lineWidth = 1;
    this.ctx.globalAlpha = 0.4;

    // Draw lines between nearby particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
    this.ctx.globalAlpha = 1;
  }

  animate() {
    this.drawBackground();
    this.drawParticles();
    this.drawLines();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

function applyColorScheme() {
  const pageName = document.body.getAttribute('data-page') || getPageName();
  const scheme = colorSchemes[pageName] || colorSchemes['home'];

  // Apply to CSS variables
  const root = document.documentElement;
  root.style.setProperty('--primary', scheme.primary);
  root.style.setProperty('--primary-2', scheme.secondary);
  root.style.setProperty('--accent', scheme.accent);
  root.style.setProperty('--card-bg', scheme.cardBg);
  root.style.setProperty('--card-text', scheme.cardText);
  root.style.setProperty('--button-bg', scheme.buttonBg);
  root.style.setProperty('--button-text', scheme.buttonText);

  // Apply to cards
  document.querySelectorAll('.card').forEach(card => {
    card.style.backgroundColor = scheme.cardBg;
    card.style.color = scheme.cardText;
  });

  // Apply to buttons
  document.querySelectorAll('.btn, button').forEach(btn => {
    btn.style.backgroundColor = scheme.buttonBg;
    btn.style.color = scheme.buttonText;
  });

  // Update text colors
  document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.style.color = scheme.primary;
  });

  // Apply to header
  document.querySelector('header').style.backgroundColor = `rgba(255, 255, 255, 0.95)`;
  document.querySelector('header').style.borderBottomColor = scheme.primary;

  // Solar page specific styling
  if (pageName === 'solar') {
    const sliderHeading = document.querySelector('.slider-text h1');
    if (sliderHeading) {
      sliderHeading.style.color = '#fbbf24';
    }
  }
}

function getPageName() {
  const pageAttr = document.body.getAttribute('data-page');
  if (pageAttr) return pageAttr;
  const filename = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  return filename === '' ? 'home' : filename;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animated background
  const bg = new AnimatedBackground('animated-bg-canvas');
  
  // Apply color scheme to all elements
  applyColorScheme();
  
  // Reapply on images load (in case layout shifts)
  window.addEventListener('load', applyColorScheme);
});

// Initialize immediately if DOM is already loaded
if (document.readyState !== 'loading') {
  const bg = new AnimatedBackground('animated-bg-canvas');
  applyColorScheme();
}
