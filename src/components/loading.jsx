function Loading({ permission }) {
  return (
    <div className="h-100 ">
      <nav className={permission === "admin" ? "d-none" : ""}>
        <h1>
          <div style={{ textDecoration: "none" }} className="color-main">
            <div></div>
          </div>
        </h1>
      </nav>
      <div className="d-flex w-100 h-100 ">
        <aside className={permission === "admin" ? "d-none" : ""}></aside>
        <div
          style={{ marginTop: permission === "admin" ? 0 : 90 }}
          className={permission === "admin" ? "w-100" : "scroll-y w-75 "}
        >
          <div className={permission === "admin" ? "d-none" : "score"}>
            <span style={{ visibility: "hidden" }}>Score</span>
          </div>{" "}
          <div className="d-flex jcc aic h-100 ">
            <div className="relative  d-flex jcc aic">
              <h1
                className="absolute  "
                style={{
                  textAlign: "center",
                  animationName: "logo-a",
                  animationDuration: "3s",
                  height: "max-content",
                  width: "max-content",
                  padding: "0px",
                  zIndex: 8,
                  fontSize: 50,
                  borderRadius: "0px 20px 0px 20px",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="d-flex aic jcb"
                  style={{
                    border: "3px #f68840  solid",
                    borderLeft: "none",
                    borderBottom: "none",
                    borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  <img
                    src="./icon/spiral_13162114.png"
                    style={{
                      borderRadius: "0px 0px 0px 20px",
                      width: 88,
                      backgroundColor: "#24b9cc",
                      border: "",
                      borderLeft: "none",
                      borderTop: "none",
                      filter: "hue-rotate(202deg)",
                    }}
                    alt=""
                  />
                  <div
                    style={{
                      margin: "0px 17px 0px 15px",
                      fontWeight: "lighter",
                    }}
                  >
                    Playground
                  </div>
                </div>
              </h1>
              <div className="shapes">
                {[0, 1, 2, 3].map((b) => (
                  <div
                    key={b}
                    className="balls "
                    style={{
                      animationDelay: `${b}s`,
                      animationName: `ball-${b}`,
                    }}
                  />
                ))}
                {[0, 1, 2, 3].map((b) => (
                  <div
                    key={b}
                    className="balls "
                    style={{
                      animationDelay: `${b + 2}s`,
                      animationName: `ball-${b}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <ol className="m-0"></ol>
        </div>
      </div>
    </div>
  );
}

export default Loading;
