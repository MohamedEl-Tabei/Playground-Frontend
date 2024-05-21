import { useState } from "react";
import Components from "../base/components"
const Admin = () => {
  let [questions, setQuestions] = useState([]);
  function onChangeHandler(event) {
    var arrQ=[]
    const textarea = event.currentTarget.value;
    const arr = textarea.split("\n;\n");
    arr.forEach(element => {
      const q=element.split("\n*\n");
      console.log(q)
      arrQ.push({
        img:q[0],
        head:q[1],
        answer:q[2],
        options:q[3]?.split(',')
      })
    });
    setQuestions(arrQ)
  }
  return (
    <div>
      <form>
        <textarea onChange={(e) => onChangeHandler(e)} />
        <div className="w-98">
          <button>Save</button>
        </div>
      </form>
      <ol>
      {questions.map((q,i)=>(
        <li key={i}>
          <Components.Question question={q}/>
        </li>
      ))}
      </ol>
    </div>
  );
};
export default Admin;
