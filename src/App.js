import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Reviews from "./components/Review";
import { first, sec, third, fourth, footerAPI, fifth } from "./data/data";

function App() {
  return (
    <div>
      <Navbar />
      <Header first={first} ifExists={true} />
      <Content sec={sec} />
      <Header first={fifth} ifExists={false} />
      <Image third={third} />
      <Reviews fourth={fourth} />
      <Footer footerApi={footerAPI} />
    </div>
  );
}

export default App;
