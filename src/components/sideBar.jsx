import cookieJS from "js-cookie"
function SideBar({ topics, setTopic, topic }) {
  return (
    <aside>
      <div>
        {topics?.map((t, i) => (
          <h4 key={i} className={`${t.name===topic?.name?"bg-main":""}`} onClick={()=>{
            cookieJS.set("topic",t.name)
            setTopic(t)
          }}>{t.name}</h4>
        ))}
      </div>
    </aside>
  );
}
export default SideBar;