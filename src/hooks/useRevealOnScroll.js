import { useEffect } from "react";

/** ページ内の [data-reveal] をまとめて監視して順次フェードイン */
export function useRevealOnScroll(options = { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }) {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      }
    }, options);

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [options]);
}
