const isMobile = () => {
  const ua = navigator.userAgent;
  return /iPhone|iPad|iPod|Android/i.test(ua) || 
         (navigator.maxTouchPoints > 0 && ua.includes('Safari') && !ua.includes('Chrome'));
};

const openLink = (appScheme, webUrl) => {
  if (isMobile()) {
    const start = Date.now();
    // Attempt to launch the native application
    window.location.assign(appScheme);

    setTimeout(() => {
      // Detection logic: If the time elapsed is close to our timeout, 
      // it means the browser was likely not backgrounded (app failed to open).
      // We use location.href for the fallback on mobile to avoid popup blockers.
      if (Date.now() - start < 2500) {
        window.location.href = webUrl;
      }
    }, 2000);
  } else {
    // On desktop, we can safely open a new tab
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
};

export { isMobile, openLink };