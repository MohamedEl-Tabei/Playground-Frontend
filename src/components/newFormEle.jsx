import { useEffect, useState } from "react";

const NewFormElement = () => {
  const dataList = ["C", "C++", "C#", "Java", "Java Script", "Python"];
  const style = { padding: "8px 16px", marginLeft: 0, fontSize: "11px" };
  let [progress, setProgress] = useState(5);
  useEffect(() => {
    if (progress > 100) setProgress(0);
    setTimeout(() => {
      setProgress(progress + 5);
    }, 1000);
  }, [progress]);
  return (
    <div className="d-flex flex-wrap jcc w-100">
      <div className="me-20">
        <label htmlFor="list_">{"<datalist>"}</label>
        <input style={style} name="datalist" id="list_" list="list" />
        <datalist id="list">
          {dataList.map((data, i) => (
            <option key={i}>{data}</option>
          ))}
        </datalist>
      </div>
      <div className="me-20">
        <label htmlFor="progress">{"<progress>"}</label>
        <div>
          <progress style={{width:150}} value={progress} max={100} id="progress" />
        </div>
      </div>
      <div className="me-20">
        <label htmlFor="meter">{"<meter>"}</label>
        <div>
          <meter style={{width:150}} value={.1}  id="meter" />
        </div>
      </div>
    </div>
  );
};

export default NewFormElement;
