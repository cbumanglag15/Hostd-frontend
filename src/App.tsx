import Hello from "./components/Hello.tsx";

function App() {
  return (
    <main className="app-shell">
      <Hello name="Rob" message="Welcome to the app!" age={30} />
    </main>
  );
}

export default App;
