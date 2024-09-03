const BoxSizing = () => {
  const style = {
    border: "5px solid #f68840",
    width: 250,
    height: 250,
    padding: 50,
    margin: 50,
  };
  return (
    <div className="d-flex flex-wrap jcc aic">
      {["content-box", "border-box"].map((box, i) => {
        return (
          <div
            key={i}
            className="d-flex jcc aic"
            style={{ ...style, boxSizing: box }}
          >
            <div className="bg-dark text-light p-20">
              <strong className="text-main">box-sizing: {box}</strong>
              {Object.keys(style).map((k, j) => (
                <div key={j}>
                  {k}: {Object.values(style)[j]}
                  {!isNaN(Object.values(style)[j]) ? "px" : ""}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <p>
        <strong className="text-main">content-box</strong> is the default value
        of box-sizing.the height and width consist only of the content and
        exclude padding and border
      </p>{" "}
      <p>
        <strong className="text-main">border-box</strong> the height and width
        consist of the content, padding and border.
      </p>
    </div>
  );
};

export default BoxSizing;
