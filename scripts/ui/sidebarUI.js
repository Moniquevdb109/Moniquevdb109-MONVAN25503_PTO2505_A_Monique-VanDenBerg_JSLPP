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