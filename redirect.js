window.onload = function () {
    // Get the URL and countdown parameters from the script tag
    const scriptTag = document.querySelector('script[src*="redirect.js"]');
    const urlParams = new URLSearchParams(scriptTag.src.split('?')[1]);
    const redirectUrl = urlParams.get('url');
    let countdown = parseInt(urlParams.get('countdown')) || 15;

    const timerElement = document.getElementById("timer");

    const interval = setInterval(function () {
      timerElement.textContent = countdown + " seconds remaining...";

      const redirectMessage = document.createElement("p");
      redirectMessage.textContent = "Redirecting you to the new page...";

      timerElement.appendChild(redirectMessage);

      countdown--;

      if (countdown < 0) {
        clearInterval(interval);
        location.href = redirectUrl;
      }
    }, 1000);
};
