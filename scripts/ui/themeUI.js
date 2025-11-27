import { getInitialThemeIsDark, saveThemePreference } from "../utils/theme.js";

/**
 * Swaps an image src between a light and dark version.
 * The image element must have:
 * - data-light-src="..."
 * - data-dark-src="..."
 *
 * @param {HTMLImageElement} el - The image element to swap.
 * @param {boolean} isDark - true = use dark image, false = use light image.
 * @returns {void}
 */
function swapImg(el, isDark) {
  const light = el.dataset.lightSrc;
  const dark = el.dataset.darkSrc;
  if (light && dark) el.src = isDark ? dark : light;
}

/**
 * Applies the theme to the page UI.
 * It:
 * - adds/removes the "dark-theme" class on the body
 * - swaps the sidebar logo and mobile icon based on theme
 *
 * @param {boolean} isDark - true = dark theme, false = light theme.
 * @returns {void}
 */
export function applyThemeToUI(isDark) {
  document.body.classList.toggle("dark-theme", isDark);

  const sidebarLogo = document.getElementById("logo");
  if (sidebarLogo) swapImg(sidebarLogo, isDark);

  const mobileIcon = document.getElementById("mobile-menu-btn");
  if (mobileIcon) swapImg(mobileIcon, isDark);

}

/**
 * Sets up the theme toggle switch (checkbox).
 *
 * What it does:
 * - checks the saved theme preference (or system default)
 * - updates the UI to match the starting theme
 * - sets the checkbox position to match the theme
 * - listens for changes and saves the user's choice
 *
 * @returns {void}
 */
export function setupThemeToggleUI() {
  const checkbox = document.getElementById("theme-toggle-checkbox");
  if (!checkbox) return;

  const startDark = getInitialThemeIsDark();
    applyThemeToUI(startDark);
    checkbox.checked = startDark;
    
    checkbox.addEventListener("change", () => {
        const isDark = checkbox.checked;
        applyThemeToUI(isDark);
        saveThemePreference(isDark);
    });
}   