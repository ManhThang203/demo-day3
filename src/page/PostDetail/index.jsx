import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import DOMPurify from "dompurify";
import slugify from "slugify";

import fakeData from "./fakeData";
import css from "./PostDetail.module.scss";

/* =========================
   Inline styles (demo layout)
========================= */
const styles = {
  container: {
    background: "#f0f0f0",
    padding: 20,
  },
  inner: {
    display: "flex",
    gap: 20,
  },
  content: {
    marginRight: 350,
  },
};

/* =========================
   Helper: tạo slug an toàn
   - lower: chữ thường
   - strict: chỉ giữ chữ + dấu "-"
   -> tránh lỗi selector, tránh id bắt đầu bằng số
========================= */
const generateSlug = (text) =>
  slugify(text, {
    lower: true,
    strict: true,
  });

/* =========================
   Component chính
========================= */
function PostDetail() {
  // Lấy location để đọc hash (#abc)
  const location = useLocation();

  // Ref trỏ vào div content (HTML render từ fakeData)
  const contentRef = useRef(null);

  // Danh sách TOC (Table of Contents)
  const [indexList, setIndexList] = useState([]);

  /* ======================================================
     Effect 1:
     - Quét các heading trong content
     - Gán id cho heading
     - Wrap heading bằng <a> (để click / hover)
     - Build TOC
     - Theo dõi scroll bằng IntersectionObserver
  ====================================================== */
  useEffect(() => {
    if (!contentRef.current) return;

    // Lấy tất cả heading cần dùng
    const headings = contentRef.current.querySelectorAll("h2, h3, h4, h5, h6");

    if (!headings.length) return;

    /* -------------------------
       IntersectionObserver
       - Theo dõi heading nào đang ở trong viewport
       - Dùng để active TOC
    ------------------------- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Xóa active cũ
          document
            .querySelectorAll(`#index-list a.${css.active}`)
            .forEach((el) => el.classList.remove(css.active));

          // Tìm link TOC tương ứng với heading đang visible
          const activeLink = document.querySelector(
            `#index-list a[href="#${entry.target.id}"]`
          );

          // Thêm active
          activeLink?.classList.add(css.active);
        });
      },
      {
        // Điều chỉnh điểm active cho mượt hơn
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const listDetail = [];

    /* -------------------------
       Duyệt từng heading
    ------------------------- */
    headings.forEach((heading, index) => {
      const tag = heading.tagName.toLowerCase(); // h2, h3...
      const text = heading.textContent.trim();
      const slug = generateSlug(text);

      // Gán id cho heading (để scroll theo hash)
      heading.id = slug;

      // Clear nội dung cũ (tránh XSS)
      heading.innerHTML = "";

      // Tạo link cho heading
      const link = document.createElement("a");
      link.className = "heading-link";
      link.href = `#${slug}`;
      link.textContent = text;

      heading.appendChild(link);

      // Theo dõi scroll
      observer.observe(heading);

      // Build TOC
      listDetail.push(
        <li key={index} className={css[`level-${tag}`]}>
          <a href={`#${slug}`}>{text}</a>
        </li>
      );
    });

    // Set danh sách TOC
    setIndexList(listDetail);

    // Cleanup observer khi unmount
    return () => observer.disconnect();
  }, []);

  /* ======================================================
     Effect 2:
     - Khi có hash trên URL
     - Scroll tới heading tương ứng
  ====================================================== */
  useEffect(() => {
    if (!indexList.length || !location.hash) return;

    // Bỏ dấu #
    const id = location.hash.slice(1);

    // Dùng getElementById (an toàn hơn querySelector)
    const target = document.getElementById(id);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [indexList, location.hash]);

  /* =========================
     Render UI
========================= */
  return (
    <div style={styles.container}>
      <h1>Post Detail</h1>

      <div style={styles.inner}>
        {/* -------- Content -------- */}
        <div
          ref={contentRef}
          style={styles.content}
          // Render HTML + sanitize để chống XSS
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(fakeData),
          }}
        />

        {/* -------- TOC -------- */}
        {indexList.length > 0 && (
          <nav id="index-list" className={css.index}>
            <ul>{indexList}</ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
