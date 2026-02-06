document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-target");
      if (!target) return;
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const delay = target.getAttribute("data-animate-delay");
          if (delay) {
            setTimeout(() => {
              target.classList.add("is-visible");
            }, Number(delay));
          } else {
            target.classList.add("is-visible");
          }
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

  const chatbotPlaceholder = {
    mount(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      const banner = document.createElement("div");
      banner.style.fontSize = "0.8rem";
      banner.style.color = "#9ca3af";
      banner.style.marginTop = "0.3rem";
      banner.textContent = "Chatbot integration placeholder – connect your chat widget here.";
      container.appendChild(banner);
    },
  };

  window.NUVA = window.NUVA || {};
  window.NUVA.chatbot = chatbotPlaceholder;
});
