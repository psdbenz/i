/*<![CDATA[*/		var toast = document.getElementById("myToast");
var toastTimer;
var toastDuration = 3000; // default duration is 3 seconds

function showToast(message, duration, icon) {
  if (message) {
    document.querySelector(".toast-message").textContent = message;
  }
  if (icon) {
    document.querySelector(".toast-icon").innerHTML = icon;
  }
  if (duration) {
    toastDuration = duration;
  }

  toast.classList.add("show");

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(function() {
    hideToast();
  }, toastDuration);
}

function hideToast() {
  clearTimeout(toastTimer);
  toast.classList.remove("show");
}     /*]]>*/