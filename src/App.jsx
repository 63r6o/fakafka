import "./app.css";
import { useEffect, useState, useRef } from "react";
import { usePaddingTop } from "./hooks/main";
import { eu } from "./utils/countries";
import CountryForm from "./components/CountryForm";
import HeroText from "./components/HeroText";
import MapForm from "./components/MapForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const selectRef = useRef();

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  useEffect(() => {
    if (from) selectRef.current.focus();
  }, [from, to]);

  const handlePick = {
    from: (selected) => setFrom(selected.value),
    to: (selected) => setTo(selected.value),
  };

  const headerRef = useRef();
  const paddingTop = usePaddingTop(headerRef);

  return (
    <div className="container">
      <Header ref={headerRef} />
      <div style={{ paddingTop: `${paddingTop}px` }} className="form-container">
        <div className="text-form">
          <HeroText />
          <CountryForm
            countries={eu}
            handlePick={handlePick}
            picks={{ from, to }}
            ref={selectRef}
          />
        </div>
        <MapForm countries={eu} handlePick={handlePick} picks={{ from, to }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
