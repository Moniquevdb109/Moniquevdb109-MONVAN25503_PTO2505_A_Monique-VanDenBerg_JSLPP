/**
 * The localStorage key name used to remember if the sidebar is hidden.
 * @type {string}
 */
const sidebarStorageKey = "hiddenSidebar";

/**
 * Checks localStorage to see if the sidebar should start hidden.
 *
 * @returns {boolean} Returns true if the saved value is "true", otherwise false.
 */
export function shouldStartHidden() {
    return localStorage.getItem(sidebarStorageKey) === "true";
}

/**
 * Saves the user's sidebar preference (hidden or shown) in localStorage.
 * localStorage only stores strings, so we convert the boolean to a string.
 *
 * @param {boolean} isHidden - true = sidebar hidden, false = sidebar shown.
 * @returns {void}
 */
export function setHiddenPreference(isHidden) {
  localStorage.setItem(sidebarStorageKey, String(isHidden));
}

/**
 * Flips a boolean value.
 *
 * Example:
 * - toggleHidden(true) => false
 * - toggleHidden(false) => true
 *
 * @param {boolean} currentHidden - The current hidden state.
 * @returns {boolean} The opposite of the current hidden state.
 */
export function toggleHidden(currentHidden) {
  return !currentHidden;
}
