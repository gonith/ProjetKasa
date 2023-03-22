import "./_collapse.scss";
import arrow from "../../assets/img/arrow.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow_down" : "arrow arrow_up"}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
}
