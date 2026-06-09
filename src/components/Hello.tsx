type HelloProps = {
  name: string;
  age?: number;
};

function Hello(props: HelloProps) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default Hello;
