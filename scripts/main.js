/**
 * Orlando Studio - Main JavaScript
 * Vanilla JavaScript with modular structure
 */

// Theme Flash Prevention - CRITICAL
// Run immediately when script loads (before DOMContentLoaded) to prevent theme flash
(function() {
  const theme = localStorage.getItem('theme') || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

// Theme Management
const ThemeManager = {
  init() {
    this.setupThemeToggle();
  },

  setupThemeToggle() {
    // Get current theme
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply theme (already set above, but ensure it's correct)
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    });
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  // Note: Client-side console.log is acceptable for runtime initialization messages
});

// Export for use in other modules if needed
if (typeof window !== 'undefined') {
  window.ThemeManager = ThemeManager;
}
