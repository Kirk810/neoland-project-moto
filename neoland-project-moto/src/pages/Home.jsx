import useAxios from "../hooks/useAxios";
import "./Home.css";

const Home = () => {
  const [data] = useAxios("https://63ee3030d466e0c18baafe9c.mockapi.io/Moto");
  return (
    <div className="Home">
      <h2>Home</h2>
      <h3>Brief history</h3>
        <p>A motorcycle (motorbike, bike, or trike (if three-wheeled)) is a two or three-wheeled motor vehicle steered by a handlebar from a saddle-style seat.

Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.

The 1885 Daimler Reitwagen made by Gottlieb Daimler and Wilhelm Maybach in Germany was the first internal combustion, petroleum-fueled motorcycle. In 1894, Hildebrand & Wolfmüller became the first series production motorcycle.

Globally, motorcycles are comparably popular to cars as a method of transport. In 2021, approximately 58.6 million new motorcycles were sold around the world, fewer than the 66.7 million cars sold over the same period.

In 2022, the top four motorcycle producers by volume and type were Honda, Yamaha, Kawasaki, and Suzuki. In developing countries, motorcycles are considered utilitarian due to lower prices and greater fuel economy. Of all the motorcycles in the world, 58% are in the Asia-Pacific and Southern and Eastern Asia regions, excluding car-centric Japan.

According to the US Department of Transportation, the number of fatalities per vehicle mile traveled was 37 times higher for motorcycles than for cars.</p>
      <h3 className="Moto">Motorbikes</h3>
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