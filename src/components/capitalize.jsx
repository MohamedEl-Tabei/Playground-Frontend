import { useEffect, useState } from "react";

const Capitalize_ = () => {
  let [name, setName] = useState("_________");
  let [capitalize, setCapitalize] = useState(false);
  useEffect(() => {
    if (name.length === 0) setName("_________");
  }, [name]);
  return (
    <div className="d-flex flex-column jcc aic">
      <h1
        className="w-100"
        style={{
          fontSize: "1rem",
          textTransform: capitalize ? "capitalize" : "initial",
        }}
      >
        welcome {name}
      </h1>
      <div className="w-100">
        <label htmlFor="">Enter your name</label>
        <input
          type="text"
          name="capitalize"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <button name="capitalize" onClick={() => setCapitalize(!capitalize)}>
          text-transform: {!capitalize ? "capitalize" : "initial"}
        </button>
      </div>
    </div>
  );
};

export default Capitalize_;
