document.addEventListener("DOMContentLoaded", () => {
  console.log("System Status: Portfolio Pipeline Active.");

  // 1. Asynchronous Soft Alert Notification System
  setTimeout(() => {
    createModernNotification("Welcome to the Portfolio Ecosystem of Eric Muli 🚀");
  }, 1000);

  // 2. Automated Scroll Animation (Reveal-on-Scroll Implementation)
  const sections = document.querySelectorAll(".card");
  
  const revealOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop tracking once successfully rendered
      }
    });
  }, revealOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

// Structural Helper for Programmatic Non-blocking Banner
function createModernNotification(message) {
  const Banner = document.createElement("div");
  
  // Design configuration via Javascript injection
  Object.assign(Banner.style, {
    position: "fixed",
    bottom: "24px",
    right: "-400px",
    backgroundColor: "#1c2642",
    color: "#00f2fe",
    padding: "16px 24px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    border: "1px solid rgba(0,242,254,0.3)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.95rem",
    zIndex: "9999",
    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  });
  
  Banner.innerText = message;
  document.body.appendChild(Banner);
  
  // Smooth slide-in
  setTimeout(() => { Banner.style.right = "24px"; }, 100);
  
  // Smooth slide-out and absolute termination
  setTimeout(() => {
    Banner.style.right = "-400px";
    Banner.style.opacity = "0";
    setTimeout(() => { Banner.remove(); }, 500);
  }, 4500);
}
