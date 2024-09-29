type AppProps = {
  title: string;
};

function App(props: AppProps) {
  const { title } = props;

  return (
    <div>
      <h1 className={""}>{title}</h1>
    </div>
  );
}

export default App;
