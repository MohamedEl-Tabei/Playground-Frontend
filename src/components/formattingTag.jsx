import { useState } from "react";

const FormattingTag = () => {
  let [tag, setTag] = useState("b");
  let tags = [
    "b",
    "i",
    "em",
    "big",
    "small",
    "sub",
    "sup",
    "del",
    "strong",
    "mark",
    "ins",
  ];
  const code = () => {
    switch (tag) {
      case "b":
        return <b>code</b>;
      case "i":
        return <i>code</i>;
      case "em":
        return <em>code</em>;
      case "big":
        return <big>code</big>;
      case "small":
        return <small>code</small>;
      case "sub":
        return <sub>code</sub>;
      case "sup":
        return <sup>code</sup>;
      case "del":
        return <del>code</del>;
      case "strong":
        return <strong>code</strong>;
      case "mark":
        return <mark>code</mark>;
      case "ins":
        return <ins>code</ins>;
      default:
        return "code";
    }
  };
  return (
    <div className="d-flex jcc aic flex-column w-100">
      <ul className="d-flex flex-wrap w-100 jcc" type="none" >
        {tags.map((t, i) => (
          <li className={`me-20 option border-bottom border-top mt-15 ${t===tag?"text-main":""}`} onClick={()=>setTag(t)} key={i}>{t}</li>
        ))}
      </ul>
      <p>No {code()} no fun</p>
    </div>
  );
};
export default FormattingTag;
