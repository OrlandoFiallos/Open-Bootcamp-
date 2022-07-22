import "./App.css";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Contact
        name={"Manuel"}
        apellido={"Fiallos"}
        email={"Manuelfiallos@gmail.com"}
        conectado={true}
      />
    </div>
  );
}

export default App;
