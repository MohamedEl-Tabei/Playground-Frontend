function SideBar({ topics, setTopic, topic }) {
  return (
    <aside>
      <div>
        {topics?.map((t, i) => (
          <h4>{t}</h4>
        ))}
      </div>
    </aside>
  );
}
export default SideBar;
