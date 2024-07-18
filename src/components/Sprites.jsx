const Sprites = () => {
  const link =
    "https://img.freepik.com/free-vector/childrens-playground_98292-2820.jpg";
  const elements = [{ pos: " -29px -9px " }, { pos: " -479px -9px " },{ pos: " -332px -9px " }];
  return (
    <div className="d-flex flex-column aic">
      <p>
        CSS sprites are a great technique to consider. By combining multiple
        images into a single file and using CSS to display specific portions of
        that file, you can reduce the number of HTTP requests your site needs to
        make and speed up its load times.
      </p>
      <img src={link} alt="Playground" />
      <div className="d-flex flex-wrap jcc ">
        {elements.map((element, i) => (
          <div key={i}>
            <div
              style={{
                height: 100,
                width: 150,
                background: `url('${link}') ${element.pos} no-repeat`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sprites;
