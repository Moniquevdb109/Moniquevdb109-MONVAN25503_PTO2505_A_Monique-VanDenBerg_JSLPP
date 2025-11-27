import { shouldStartHidden, setHiddenPreference, toggleHidden } from "../utils/sidebar.js";

/**
 * Sets up the desktop sidebar hide/show behavior.
 *
 * What it does:
 * - Clicking "Hide Sidebar" hides the sidebar and shows the little eye button.
 * - Clicking the eye button shows the sidebar again.
 * - Remembers the user's choice in localStorage.
 * - When the page loads on desktop, it checks localStorage to decide if the sidebar
 *   should start hidden or shown.
 * - If the window is resized back to desktop width, it re-applies the saved preference.
 *
 * @returns {void}
 */
export function setupSidebarDesktopUI() {
    const sidebar = document.getElementById("side-bar-div");
    const hideBtn = document.getElementById("sidebar-btn");
    const showBtn = document.getElementById("show-sidebar-btn");
    
    /**
   * Updates the UI based on whether the sidebar should be hidden or not.
   *
   * @param {boolean} isHidden - true = hide sidebar, false = show sidebar
   * @returns {void}
   */
    function applyHiddenUI(isHidden) {
    sidebar.classList.toggle("is-hidden", isHidden);
    showBtn.classList.toggle("hidden", !isHidden);
    setHiddenPreference(isHidden);
  }

   hideBtn.addEventListener("click", () => applyHiddenUI(true));
   showBtn.addEventListener("click", () => applyHiddenUI(false));
   
   // On page load: apply the saved preference on desktop only
   if (window.innerWidth > 1023 && shouldStartHidden()) {
    applyHiddenUI(true);
} else {
    applyHiddenUI(false);
  }

   // If the user resizes back to desktop, re-apply the saved preference
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      applyHiddenUI(shouldStartHidden());
    }   
    }); 
}

/**
 * Sets up the mobile sidebar menu behavior.
 *
 * What it does:
 * - Clicking the mobile icon opens the sidebar as a menu.
 * - Clicking the X button closes the menu.
 * - Also shows/hides a backdrop behind the menu.
 * - If the screen is resized to desktop width, it closes the mobile menu.
 *
 * @returns {void}
 */
export function setupSidebarMobileUI() {
    const sidebar = document.getElementById("side-bar-div");
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const backdrop = document.getElementById("sidebar-backdrop");

  /**
   * Opens the mobile sidebar menu and shows the backdrop.
   * @returns {void}
   */
  function openMobileMenu() {
    sidebar.classList.add("show-sidebar");
    backdrop.classList.remove("hidden");
  }

  /**
   * Closes the mobile sidebar menu and hides the backdrop.
   * @returns {void}
   */
  function closeMobileMenu() {
    sidebar.classList.remove("show-sidebar");
    backdrop.classList.add("hidden");
  }

  mobileBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);

  // If the user switches to desktop width, close the mobile menu state
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      closeMobileMenu();
    }
  });
}
