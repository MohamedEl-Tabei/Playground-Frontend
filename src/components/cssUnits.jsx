import { useState } from "react";

const CSSUnits = () => {
  const units = ["px", "pt", "%"];
  const relativeToFontSize = ["em", "rem"];
  let [index, setIndex] = useState(0);
  let [parent, setParent] = useState(120);
  let [fontSize, setFontSize] = useState(1);
  let [fontSizeU, setFontSizeU] = useState("em");
  return (
    <div className="w-100 d-flex jcc flex-wrap">
      <table
        style={{ width: 350 }}
        align="center"
        border={5}
        cellSpacing={5}
        cellPadding={15}
      >
        <thead>
          <tr>
            {units.map((u, i) => (
              <th
                name={u}
                className="option"
                key={i}
                align="center"
                onClick={() => setIndex(i)}
                colSpan={2}
              >
                {u}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>Click unit</td>
            <td colSpan={3} rowSpan={2}>
              <div
                style={{
                  width: 150,
                  height: 150,
                }}
                className="d-flex jcc aic "
              >
                <div
                  className="d-flex jcc aic relative"
                  style={{
                    width: `${parent}px`,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "#364354",
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      width: `50${units[index]}`,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "#f68840",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>width: 50{units[index]}</td>
          </tr>
          <tr>
            <td colSpan={6} align="center">
              Parent element {parent}px
              <input
                style={{ width: 150, padding: 0, margin: 0 }}
                type="range"
                max={120}
                min={70}
                value={parent}
                onChange={(e) => setParent(e.currentTarget.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        style={{ width: 350 }}
        align="center"
        border={5}
        cellSpacing={5}
        cellPadding={15}
      >
        <thead>
          <tr>
            {relativeToFontSize.map((u, i) => (
              <th
                name={u}
                className="option"
                key={i}
                align="center"
                onClick={() => setFontSizeU(u)}
                colSpan={3}
              >
                {u}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>Click unit</td>
            <td colSpan={3} rowSpan={2}>
              <div
                style={{
                  width: 150,
                  height: 150,
                }}
                className="d-flex jcc aic "
              >
                <div
                  className="d-flex jcc aic flex-column"
                  style={{
                    fontSize: `${fontSize}px`,
                    width: `50${fontSizeU}`,
                    height: 50,
                    backgroundColor: "#364354",
                    color: "white",
                    borderRadius: "10%",
                  }}
                >
                  PLAYGROUND
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>width: 50{fontSizeU}</td>
          </tr>
          <tr>
            <td colSpan={6} align="center">
              fontSize {fontSize}{fontSizeU}
              <input
                style={{ width: 150, padding: 0, margin: 0 }}
                type="range"
                max={6}
                min={1}
                value={fontSize}
                onChange={(e) => setFontSize(e.currentTarget.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <dl className="w-100">
        <dt>pt & px</dt>
        <dd>both of them are fixed size.</dd>
        <dt>% (percentage)</dt>
        <dd>relative to the parent element.</dd>
        <dt>em</dt>
        <dd>relative to the fontSize of the element</dd>
        <dt>rem</dt>
        <dd>relative to the fontSize of the root html</dd>
      </dl>
    </div>
  );
};
export default CSSUnits;
