// Dynamic Background Color Schemes for Each Page
const colorSchemes = {
  'home': {
    name: 'Ocean Blue',
    primaryGradient1: 'circle at 90% -10%, #e4f2ff 0%, transparent 34%',
    primaryGradient2: 'circle at 0% 70%, #fff3dc 0%, transparent 28%',
    primaryColor: '#0b4f77',
    accentColor: '#f59e0b',
    bgLight: '#f6f8fc',
    bgDark: '#11243e'
  },
  'about': {
    name: 'Forest Green',
    primaryGradient1: 'circle at 80% 20%, #d4f4dd 0%, transparent 40%',
    primaryGradient2: 'circle at 10% 80%, #ffe8e8 0%, transparent 35%',
    primaryColor: '#2f946a',
    accentColor: '#e85d75',
    bgLight: '#f0faf6',
    bgDark: '#0f3d23'
  },
  'contact': {
    name: 'Sunset Purple',
    primaryGradient1: 'circle at 100% 0%, #fce7f3 0%, transparent 40%',
    primaryGradient2: 'circle at 0% 100%, #dbeafe 0%, transparent 35%',
    primaryColor: '#9333ea',
    accentColor: '#f97316',
    bgLight: '#faf5ff',
    bgDark: '#2e1065'
  },
  'products': {
    name: 'Coral Reef',
    primaryGradient1: 'circle at 85% 15%, #fed7aa 0%, transparent 38%',
    primaryGradient2: 'circle at 15% 85%, #c7d2fe 0%, transparent 32%',
    primaryColor: '#dc2626',
    accentColor: '#0891b2',
    bgLight: '#fff7ed',
    bgDark: '#7c2d12'
  },
  'tata': {
    name: 'Indigo Night',
    primaryGradient1: 'circle at 95% 5%, #e0e7ff 0%, transparent 42%',
    primaryGradient2: 'circle at 5% 95%, #fecdd3 0%, transparent 36%',
    primaryColor: '#1e40af',
    accentColor: '#f43f5e',
    bgLight: '#f0f9ff',
    bgDark: '#0c2340'
  },
  'ht-lt': {
    name: 'Emerald Tech',
    primaryGradient1: 'circle at 90% 10%, #ccfbf1 0%, transparent 40%',
    primaryGradient2: 'circle at 10% 90%, #fce7f3 0%, transparent 32%',
    primaryColor: '#059669',
    accentColor: '#db2777',
    bgLight: '#f0fdfa',
    bgDark: '#134e4a'
  },
  'industrial-wiring': {
    name: 'Steel Gray',
    primaryGradient1: 'circle at 85% 20%, #f3f4f6 0%, transparent 38%',
    primaryGradient2: 'circle at 15% 80%, #fef3c7 0%, transparent 34%',
    primaryColor: '#374151',
    accentColor: '#eab308',
    bgLight: '#f9fafb',
    bgDark: '#111827'
  },
  'testing': {
    name: 'Sky Blue',
    primaryGradient1: 'circle at 80% 25%, #cffafe 0%, transparent 42%',
    primaryGradient2: 'circle at 20% 75%, #fecaca 0%, transparent 30%',
    primaryColor: '#0369a1',
    accentColor: '#dc2626',
    bgLight: '#f0f9ff',
    bgDark: '#082f4b'
  },
  'safety': {
    name: 'Safety Red',
    primaryGradient1: 'circle at 88% 12%, #fee2e2 0%, transparent 40%',
    primaryGradient2: 'circle at 12% 88%, #dbeafe 0%, transparent 35%',
    primaryColor: '#b91c1c',
    accentColor: '#0284c7',
    bgLight: '#fef2f2',
    bgDark: '#5f1914'
  },
  'solar': {
    name: 'Solar Gold',
    primaryGradient1: 'circle at 90% 5%, #fef08a 0%, transparent 45%',
    primaryGradient2: 'circle at 5% 90%, #e0e7ff 0%, transparent 38%',
    primaryColor: '#b45309',
    accentColor: '#3b82f6',
    bgLight: '#fffbeb',
    bgDark: '#451a03'
  },
  'consultancy': {
    name: 'Navy Consulting',
    primaryGradient1: 'circle at 92% 8%, #e0f2fe 0%, transparent 42%',
    primaryGradient2: 'circle at 8% 92%, #f5d0a9 0%, transparent 35%',
    primaryColor: '#003d82',
    accentColor: '#d97706',
    bgLight: '#f0f9ff',
    bgDark: '#001a33'
  }
};

function getPageName() {
  // Get the page name from data attribute
  const pageAttr = document.body.getAttribute('data-page');
  if (pageAttr) return pageAttr;

  // Fallback: determine from filename
  const filename = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  return filename === '' ? 'home' : filename;
}

function applyColorScheme(pageName) {
  const scheme = colorSchemes[pageName] || colorSchemes['home'];
  const root = document.documentElement;

  // Apply color scheme to CSS variables
  root.style.setProperty('--primary', scheme.primaryColor);
  root.style.setProperty('--accent', scheme.accentColor);
  root.style.setProperty('--bg', scheme.bgLight);
  root.style.setProperty('--text', scheme.bgDark);
  root.style.setProperty('--primary-gradient-1', scheme.primaryGradient1);
  root.style.setProperty('--primary-gradient-2', scheme.primaryGradient2);

  // Update body background
  document.body.style.background = `radial-gradient(${scheme.primaryGradient1}),
    radial-gradient(${scheme.primaryGradient2}), ${scheme.bgLight}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const pageName = getPageName();
  applyColorScheme(pageName);
});

// Also apply on document ready (for edge cases)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const pageName = getPageName();
    applyColorScheme(pageName);
  });
} else {
  const pageName = getPageName();
  applyColorScheme(pageName);
}
