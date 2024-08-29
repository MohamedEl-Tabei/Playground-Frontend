import { useState } from "react";

const CssDisplay = () => {
  const displayType = ["block", "inline", "inline-block"];
  const labels = ["Padding", "Margin", "Width", "Height"];
  let [h, setH] = useState(0);
  let [w, setW] = useState(0);
  let [p, setP] = useState(0);
  let [m, setM] = useState(0);
  let [display, setDisplay] = useState("inline");
  return (
    <div>
      <div className="d-flex flex-wrap jcc aic">
        <div className="m-auto bg-lightdark ">
          <select
            value={display}
            id="_listt"
            name="sm"
            style={{ border: "none", borderRadius: 0 }}
            onChange={(e) => setDisplay(e.currentTarget.value)}
          >
            {displayType.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </select>
        </div>
        {labels.map((l, i) => {
          return (
            <div key={i} className="m-auto">
              <label htmlFor={l}>{`${l} `}{i === 0 ? p : i === 1 ? m : i === 2 ? w : h}</label>
              <input
                min={0}
                max={i===2?605:25}
                type="range"
                id={l}
                className="p-0"
                name="sm"
                value={i ===0 ? p : i === 1 ? m : i === 2 ? w : h}
                onChange={(e) => {
                  let value = e.currentTarget.value;
                  i === 0
                    ? setP(value)
                    : i === 1
                    ? setM(value)
                    : i === 2
                    ? setW(value)
                    : setH(value);
                }}
              />
            </div>
          );
        })}
      </div>
      <p className="bg-dark text-light p-20">
        CSS enables the separation of the content from the presentation.
        <span
          className="border"
          style={{ display, padding: `${p}px`, margin:`${m}px`, height: `${h}px`, width: `${w}px` }}
        >
          {
            " This separation provides a lot of flexibility and control over how the website has to look like. "
          }
        </span>
        This is the main advantage of using CSS.
      </p>
    </div>
  );
};
export default CssDisplay;
