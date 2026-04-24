const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
  (navigator.maxTouchPoints > 0 && /Safari/.test(navigator.userAgent));

const openLink = (appScheme, webUrl) => {
  if (isMobile()) {
    const start = Date.now();
    
    // Use location.href for most direct interaction
    window.location.href = appScheme;

    setTimeout(() => {
      // If the app is installed, the browser tab backgrounds and the 
      // timer is throttled/paused. If we are still here after 2s 
      // and the elapsed time is low, the app launch likely failed.
      if (Date.now() - start < 2200) {
        window.location.href = webUrl;
      }
    }, 1500);
  } else {
    // On desktop, we can safely open a new tab
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
};

export { isMobile, openLink };