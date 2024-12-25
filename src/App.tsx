import About from "./Block/About/About";
import Action from "./Block/Action/Action";
import Header from "./Block/Header/Header";
import Service from "./Block/Service/Service";
import ContactForm from "./components/form/ContactForm";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <About />
      <Action />
      <Service />
      <ContactForm />
    </div>
  );
};

export default App;
