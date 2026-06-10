type HelloProps = {
  name: string;
  age?: number;
  message: string;
};
function Hello(props: HelloProps) {
  console.log(props);
  const { name, age, message } = props;
  return (
    <div>
      <h1>
        Hello {name}! {message} You are {age ? age : "ageless"} years old.
      </h1>
    </div>
  );
}

export default Hello;
