// Sidebar logic

const sidebarStorageKey = "hiddenSidebar";

// Returns true if the sidebar is hidden, false otherwise
export function shouldStartHidden() {
    return localStorage.getItem(sidebarStorageKey) === "true";
}

// Sets the hidden preference for the sidebar
export function setHiddenPreference(isHidden) {
  localStorage.setItem(sidebarStorageKey, String(isHidden));
}

// Toggles a boolean state
export function toggleHidden(currentHidden) {
  return !currentHidden;
}
