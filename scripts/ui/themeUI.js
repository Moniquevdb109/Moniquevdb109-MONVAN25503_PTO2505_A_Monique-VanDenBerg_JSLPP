// Light and dark mode display

import { getInitialThemeIsDark, saveThemePreference } from "../utils/theme.js";

function swapImg(el, isDark) {
  const light = el.dataset.lightSrc;
  const dark = el.dataset.darkSrc;
  if (light && dark) el.src = isDark ? dark : light;
}

export function applyThemeToUI(isDark) {
  document.body.classList.toggle("dark-theme", isDark);

  const sidebarLogo = document.getElementById("logo");
  if (sidebarLogo) swapImg(sidebarLogo, isDark);

  const mobileIcon = document.getElementById("mobile-menu-btn");
  if (mobileIcon) swapImg(mobileIcon, isDark);

}

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