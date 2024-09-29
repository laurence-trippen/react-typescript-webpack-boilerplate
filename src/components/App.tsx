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

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
