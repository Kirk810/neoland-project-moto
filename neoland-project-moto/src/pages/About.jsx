import { useEffect, useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
import useDebounce from "../hooks/usedebounce";
import { userContext } from "../context/Context"
import "./About.css";

const About = () => {
  const [brand ,setBrand] = useState([]);
  const [filteredBrand, setFilteredBrands] = useState([]);
  const { user } = useContext (userContext);
  const debounceValue = useDebounce(filteredBrand, 500);

  useEffect(() => {
    fetch("https://63ee3030d466e0c18baafe9c.mockapi.io/Moto")
      .then((res) => res.json())
      .then((res) => {
        setBrand(res);
        setFilteredBrands(res);
      });
  }, []);

  const filterData = (find) => {
    const filter = brand.filter(
      (moto) =>
        moto.name.toLowerCase().includes(find.toLowerCase()) ||
        moto.subname.toLowerCase().includes(find.toLowerCase()) ||
        moto.country.toLowerCase().includes(find.toLowerCase())
    );
    setFilteredBrands(filter);
  };

    return(
      <div className="About">
        <h2><FormattedMessage id="about.gallery" /></h2>
        <h3><FormattedMessage id="about.input" /></h3>
          <nav>
            <button onClick={() => {
              const superbikes = brand.filter((moto) => moto.type === "Superbike");
              setFilteredBrands(superbikes);
              }}>Superbikes</button>
            <button onClick={() => {
              const naked = brand.filter((moto) => moto.type === "Naked");
              setFilteredBrands(naked);
              }}>Naked</button>
            <input type="text" onChange={(ev) => filterData(ev.target.value)} />
            <button onClick={() => {
              const scooter = brand.filter((moto) => moto.type === "Scooter");
              setFilteredBrands(scooter);
              }}>Scooter</button>
            <button onClick={() => {
              const enduro = brand.filter((moto) => moto.type === "Enduro");
              setFilteredBrands(enduro);
              console.log(filteredBrand);
              }}>Enduro</button>
          </nav>
          <div className="Gallery">
            {debounceValue.length ? (
              debounceValue.map((moto) => (
                <div className="Card" key={moto.id}>
                  <img src={moto.image} alt={moto.name} />
                  <h3>Brand: {moto.name}</h3>
                  <h3>Model: {moto.subname}</h3>
                  <h3>Price: {moto.price} €</h3>
                </div>
              ))
            ) : (
              <h3><img src="https://www.gif-maniac.com/gifs/8/8254.gif" alt="moto vueltas" /></h3>
            )}
          </div>
      </div>
    );
};

export default About;