const Fraction = ({ option }) => {
  const x = option.slice(9, option.indexOf("/"));
  const y = option.slice(option.indexOf("/") + 1, option.indexOf("]"));
  return (
    <small
      className="d-flex "
      style={{ textAlign: "center", flexDirection: "column" }}
    >
      <sup className="w-100">{x}</sup>
      <hr className="m-0" />
      <sub>{y}</sub>
    </small>
  );
};
export default Fraction;
