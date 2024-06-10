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
          <div className="d-flex jcc aic h-100 " style={{ overflow: "hidden" }}>
            <div
              className="relative  d-flex jcc aic "
              style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
              }}
            >
              <h1
                className="absolute  "
                style={{
                  textAlign: "center",
                  height: "max-content",
                  width: "max-content",
                  padding: "0px",
                  zIndex: 8,
                  fontSize: 50,
                  borderRadius: "0px 20px 0px 20px",
                  border: "none",
                  transform: "scale(.4)",
                }}
              >
                <div
                  className="d-flex aic jcb"
                  style={{
                    border: "4px #f68840  solid",
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
                      color: "white",
                    }}
                    className="bg-dark"
                  >
                    Playground
                  </div>
                </div>
              </h1>
              <div className="shapes relatives">
                <div
                  style={{ width: 300, height: 300 }}
                  className="bg-lightdark d-flex jcc aic shapes"
                >
                  <div
                    style={{
                      width: "80%",
                          animation:"none",
                      height: "80%",
                    }}
                    className="bg-main d-flex jcc aic shapes"
                  >
                    <div
                      style={{
                        width: "90%",
                        height: "90%",
                          animation:"none",
                        backgroundColor: "white",
                      }}
                      className="shapes d-flex jcc aic"
                    >
                      <div
                        style={{
                          width: "90%",
                          height: "90%",
                          animation:"none"
                        }}
                        className="bg-dark shapes"
                      />
                    </div>
                  </div>
                </div>
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
