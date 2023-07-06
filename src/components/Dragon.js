const Dragon = (dragons) => {
  const { name, img, desc } = dragons;
  return (
    <div className=" d-flex-space g-10 my-20">
      <img src={img} className="logo" alt="dragon" />
      <div className="dragon-details">
        <h2 className="dragon-name">{name}</h2>
        <p className="dragon-desc">{desc}</p>
        <button type="button" className="dragon-reserve btn">Reserve Dragon</button>
      </div>
    </div>
  );
};

export default Dragon;
