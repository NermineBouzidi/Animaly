import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [txt] = useTypewriter({
    words: ["Our Mission: Connecting Hearts, Changing Lives"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="relative">
        <video autoPlay loop muted>
          <source src="dog.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  ">
          <h1 className="text-4xl font-bold text-pink-500">
            Welcome to Animaly: Your Compassionate Hub for Pet Adoption
          </h1>
          <h1 className="text-2xl font-bold">
            <span className="font-bold">{txt}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Header;
