// Setting up the sidebar behavior

import { shouldStartHidden, setHiddenPreference, toggleHidden } from "../utils/sidebar.js";

export function setupSidebarDesktopUI() {
    const sidebar = document.getElementById("side-bar-div");
    const hideBtn = document.getElementById("sidebar-btn");
    const showBtn = document.getElementById("show-sidebar-btn");
    
    function applyHiddenUI(isHidden) {
    sidebar.classList.toggle("is-hidden", isHidden);
    showBtn.classList.toggle("hidden", !isHidden);
    setHiddenPreference(isHidden);
  }

   hideBtn.addEventListener("click", () => applyHiddenUI(true));
   showBtn.addEventListener("click", () => applyHiddenUI(false));
   
   if (window.innerWidth > 1023 && shouldStartHidden()) {
    applyHiddenUI(true);
} else {
    applyHiddenUI(false);
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      applyHiddenUI(shouldStartHidden());
    }   
    }); 
}

// Sidebar mobile menu UI

export function setupSidebarMobileUI() {
    const sidebar = document.getElementById("side-bar-div");
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const backdrop = document.getElementById("sidebar-backdrop");

  function openMobileMenu() {
    sidebar.classList.add("show-sidebar");
    backdrop.classList.remove("hidden");
  }

  function closeMobileMenu() {
    sidebar.classList.remove("show-sidebar");
    backdrop.classList.add("hidden");
  }

  mobileBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      closeMobileMenu();
    }
  });
}
