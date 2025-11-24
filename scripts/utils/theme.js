// Light and dark mode preference handling

const themeStorageKey = "darkTheme";

// Function to apply the theme based on preference
export function loadThemePreference() {
  const saved = localStorage.getItem(themeStorageKey);
  if (saved === null) return null;
  return saved === "true";
}

// Save user's preference to localStorage.
export function saveThemePreference(isDark) {
  localStorage.setItem(themeStorageKey, String(isDark));
}

// Decide what theme to start with.
export function getInitialThemeIsDark() {
  const saved = loadThemePreference();
  if (saved !== null) return saved;

// Default to system preference if no saved preference  
return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}