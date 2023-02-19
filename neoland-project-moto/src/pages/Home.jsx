import useAxios from "../hooks/useAxios";
import "./Home.css";

const Home = () => {
  const [data] = useAxios("https://63ee3030d466e0c18baafe9c.mockapi.io/Moto");
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="Gallery">
        {data && data.map((user) => (
          <div className="Card" key={user.id}>
            <img src={user.image} alt={user.name} />
            <h3>Brand: {user.name}</h3>
            <h3>Model: {user.subname}</h3>
            <h3>{user.cc} cc</h3>
            <h3>Country: {user.country}</h3>
          </div>
      ))};
      </div>
    </div>
  )
};
export default Home;