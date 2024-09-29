import Counter from "./Counter";

type AppProps = {
  title: string;
};

function App(props: AppProps) {
  const { title } = props;

  return (
    <>
      <h1>{title}</h1>
      <Counter />
    </>
  );
}

export default App;
