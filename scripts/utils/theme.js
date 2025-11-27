/**
 * The localStorage key name used to remember the user's theme choice.
 * @type {string}
 */
const themeStorageKey = "darkTheme";

/**
 * Loads the saved theme setting from localStorage.
 *
 * localStorage stores strings, so the saved value will be:
 * - "true"  (dark mode)
 * - "false" (light mode)
 * - null    (nothing saved yet)
 *
 * @returns {boolean|null} true = dark, false = light, null = no saved preference.
 */
export function loadThemePreference() {
  const saved = localStorage.getItem(themeStorageKey);
  if (saved === null) return null;
  return saved === "true";
}

/**
 * Saves the user's theme choice to localStorage.
 *
 * @param {boolean} isDark - true = dark mode, false = light mode.
 * @returns {void}
 */
export function saveThemePreference(isDark) {
  localStorage.setItem(themeStorageKey, String(isDark));
}

/**
 * Figures out which theme the app should start with.
 *
 * Rules:
 * 1) If the user saved a preference before, use that.
 * 2) If not, use the device/system preference (prefers-color-scheme).
 *
 * @returns {boolean} true = start in dark mode, false = start in light mode.
 */
export function getInitialThemeIsDark() {
  const saved = loadThemePreference();
  if (saved !== null) return saved;

// Default to system preference if no saved preference  
return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}