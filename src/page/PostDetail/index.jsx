import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";

import fakeData from "./fakeData";
import css from "./PostDetail.module.scss";

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
    overflow: "hidden",
  },
};

const handleIndexClick = (e, target) => {
  e.preventDefault();
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function PostDetail() {
  const [indexList, setIndexList] = useState([]);

  const contentRef = useRef();

  useEffect(() => {
    if (!fakeData) return;

    const listDetail = [];

    const headings = contentRef.current.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading, index) => {
      const Tag = heading.nodeName.toLowerCase();

      listDetail.push(
        <Tag key={index} className={Tag}>
          <a onClick={(e) => handleIndexClick(e, heading)}>
            {heading.textContent}
          </a>
        </Tag>
      );
    });

    setIndexList(listDetail);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Post Detail</h1>
      <div style={styles.inner}>
        {/* Content */}
        <div
          ref={contentRef}
          style={styles.content}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(fakeData),
          }}
        ></div>

        {/* Index */}
        {indexList.length && <div className={css.index}>{indexList}</div>}
      </div>
    </div>
  );
}

export default PostDetail;
