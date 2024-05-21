function NavBar({page}) {
  const pages=["English","HTML","CSS"]
  return (
    <nav>
      <h1>
        <div>Playground</div>
      </h1>
      {pages.map((p,i)=>{
        return(<h5 className={page===p?"open":""}>{p}</h5>)
      })}
    </nav>
  );
}
export default NavBar