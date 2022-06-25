import { Button } from "@mui/material";
import Header from "../../Components/Header/Header";
import hero from "../../assets/images/banner.png";
import "./home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <Header />
        <div className="home__left--container">
          <h3>Fitness Club</h3>
          <h1>
            Sweat, Smile <br /> And Repeat
          </h1>
          <p>Check out the most effective exercises personalized to you</p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/exercises">
            <Button
              sx={{
                backgroundColor: "#dc2626",
                fontSize: "1.1rem",
                padding: "0.5rem 1.5rem",
                "&:hover": {
                  backgroundColor: "#b91c1c",
                },
              }}
              variant="contained">
              Exercises
            </Button>
          </Link>

          <h2>Exersize</h2>
        </div>
      </div>
      <img className="home__image" src={hero} alt="hero" />
    </div>
  );
};

export default Home;
