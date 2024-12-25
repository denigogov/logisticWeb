import About from "./Block/About/About";
import Action from "./Block/Action/Action";
import Form from "./Block/Form/Form";
import Header from "./Block/Header/Header";
import Service from "./Block/Service/Service";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Action />
      <Service />
      <Form />
    </div>
  );
};

export default App;
