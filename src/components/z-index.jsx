import { useState } from "react";

const Zindex = () => {
  let [green, setGreen] = useState(0);
  let [blue, setBlue] = useState(1);
  let [yellow, setYellow] = useState(2);
  const colors = ["Green", "Blue", "Yellow"];
  const onChangeHandle = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    switch (id) {
      case "Blue":
        setBlue(value);
        break;
      case "Yellow":
        setYellow(value);
        break;
      case "Green":
        setGreen(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <p>
        This is one of the most frequently asked CSS interview questions.
        Z-index is used to specify the stack order of elements that overlap each
        other. Its default value is zero and can take both negative and positive
        values. A higher z-index value is stacked above the lower index element.
        It takes the following values- auto, number, initial, and inherit.
      </p>
      <div className="d-flex flex-wrap jcc">
        {colors.map((color, i) => {
          return (
            <div
              style={{
                width: "max-content",
                marginBottom: 10,
                backgroundColor: "light" + color,
                padding: 20,
              }}
              key={i}
            >
              <label htmlFor={color}>{color}</label>
              <input
                onChange={(e) => onChangeHandle(e)}
                value={
                  color === "Green"
                    ? green
                    : color === "Blue"
                    ? blue
                    : color === "Yellow"
                    ? yellow
                    : 0
                }
                className="input-light"
                type="number"
                id={color}
                style={{ padding: "10px", margin: "10px 0px", width: 100 }}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          height: 200,
          marginTop: 10,
          margin: "auto",
        }}
        className="d-flex jcc aic"
      >
        <div className="relative">
          {colors.map((color, i) => {
            return (
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: `light${color}`,
                  position: "absolute",
                  left: color === "Green" ? 0 : color === "Blue" ? -50 : 0,
                  top: color === "Yellow" ? -60 : color === "Blue" ? -40 : 0,
                  opacity: 0.9,
                  borderRadius: "50%",
                  zIndex:
                    color === "Green"
                      ? green
                      : color === "Blue"
                      ? blue
                      : color === "Yellow"
                      ? yellow
                      : 0,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Zindex;
