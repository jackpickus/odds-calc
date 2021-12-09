const Title = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.slogan}</h2>
      <h2>{props.money}</h2>
    </div>
  );
};

export default Title;
