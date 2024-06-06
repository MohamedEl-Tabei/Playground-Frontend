import { useState } from "react";

function NewInputTypes() {
  const newInputTypes = [
    "Color",
    "Date",
    "Datetime-local",
    "Email",
    "Month",
    "Number",
    "Range",
  ];
  let [color, setColor] = useState("#e5532d");
  let [range, setRange] = useState(0);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Welcome to Playground");
      }}
      style={{ alignItems: "start", flexWrap: "wrap", flexDirection: "row" }}
    >
      {newInputTypes.map((t, i) => {
        return (
          <div
            key={i}
            style={{ width: "100%", maxWidth: "350px", marginBottom: 10 }}
          >
            <label htmlFor={t}>
              {t} {t === "Range" ? <span>{range}</span> : ""}
            </label>
            <input
              required
              style={{
                padding:
                  t === "Color" || t === "Range" ? "5px 0px" : "5px 0px 5px 10px",
                width: "85%",
                margin: 0,
                border: "none",
                backgroundColor: t === "Color" ? "#d3d3d300" : "lightGray",
              }}
              id={t}
              type={t}
              onChange={(e) => {
                if (t === "Color") setColor(e.currentTarget.value);
                if (t === "Range") setRange(e.currentTarget.value);
              }}
              value={t === "Color" ? color : t === "Range" ? range : undefined}
            />
          </div>
        );
      })}
      <div className=" w-100">
      <button
        style={{
          maxWidth: "350px",
          width: "100%",
          padding: "8px 10px",
          border: "none",
          backgroundColor: color,
        }}
      >
        Submit
      </button>
      </div>
    </form>
  );
}
export default NewInputTypes;
