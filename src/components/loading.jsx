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
        <div style={{ marginTop:permission==="admin"?0: 90 }} className={permission==="admin"?"w-100":"scroll-y w-75 "}>
          <div className={permission==="admin"?"d-none":"score"}>
            <span style={{ visibility: "hidden" }}>Score</span>
          </div>{" "}
          <div className="d-flex jcc aic h-100 ">
            <div className="relative  d-flex jcc aic">
              <h1
                className="absolute "
                style={{
                  textAlign: "center",
                  animationName: "logo-a",
                  animationDuration: "3s",
                  height: "max-content",
                  width: "max-content",
                  padding: "4px 35px",
                  zIndex: 8,
                  fontSize: 50,
                  borderRadius: 50,
                }}
              >
                Playground
              </h1>
              <div className="shapes">
                {[0, 1, 2, 3].map((b) => (
                  <div
                    key={b}
                    className="balls"
                    style={{
                      animationDelay: `${b}s`,
                      animationName: `ball-${b}`,
                    }}
                  />
                ))}
                {[0, 1, 2, 3].map((b) => (
                  <div
                    key={b}
                    className="balls bg-dark"
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
