// 共通インタラクション：GLightboxによる画像拡大とモバイルナビ
document.addEventListener("DOMContentLoaded", () => {
  // data-gallery属性を持つ画像リンクをLightbox化
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
      openEffect: "zoom",
      closeEffect: "fade"
    });
  }

  // スマートフォンではナビゲーションを開閉する
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".global-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      });
    });
  }
});
