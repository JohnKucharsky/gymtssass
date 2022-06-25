import {
  Button,
  Dialog,
  LinearProgress,
  Pagination,
  TextField,
} from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";
import "@splidejs/react-splide/css";
import gym from "../../assets/icons/gym.png";
import "./exercises.scss";

const Exercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  exercises,
}: {
  setExercises: React.Dispatch<React.SetStateAction<never[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  exercises: never[];
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState("");
  const [video, setVideo] = useState<any[]>([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions,
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  const paginate = (event: any, value: any) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions,
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions,
      );

      const searchedExercises = exercisesData.filter(
        (item: any) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  if (!currentExercises.length) return <LinearProgress />;
  return (
    <div className="exercises">
      <div className="exercises__top">
        <Header />
        <div className="exercises__top--search">
          <TextField
            value={search}
            variant="standard"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              backgroundColor: "#fee2e2",
              ".MuiInputBase-input": {
                padding: "0.5rem",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              backgroundColor: "#dc2626",
              "&:hover": {
                backgroundColor: "#b91c1c",
              },
            }}>
            Search
          </Button>
        </div>
      </div>
      <div className="exercise__middle">
        <Splide
          options={{
            perPage: 5,
            type: "loop",
            breakpoints: {
              1000: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              },
            },
            classes: {
              arrows: "exercise__middle--arrows",
            },
          }}>
          {bodyParts.map((v) => (
            <SplideSlide key={v}>
              <div
                onClick={() => setBodyPart(v)}
                className="exercise__middle--item">
                <img src={gym} alt="" />
                <p>{v}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="exercise__pagination">
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </div>
      <Dialog
        sx={{ width: "800px", height: "100%" }}
        open={open}
        onClose={() => setOpen((prev) => !prev)}></Dialog>
      <div className="exercise__bottom">
        {currentExercises.map((v: any) => (
          <div
            onClick={() => {
              setOpen((prev) => !prev);
              setExercise(v.name);
            }}
            key={v.id}
            className="exercise__bottom--item">
            <div className="exercise__bottom--tags">
              <span>{v.bodyPart}</span>
              <span>{v.target}</span>
            </div>
            <img src={v.gifUrl} alt={v.name} />
            <h2>{v.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
