import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home-page-component/hero";
import FeaturedMovies from "../components/home-page-component/featured.movies";
import Footer from "../components/home-page-component/footer";
import { fetchData } from "../utils/fetchUtility";
import NotFound from "../components/home-page-component/not-found";
import Loader from "../components/general/loader";
const Home = () => {
  const [notFound, setNotFound] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef();
  const handleSearch = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0675fe991f3ca4e6f5b5f9efb36add15&query=${movie}`;
    setIsLoading(true);
    const movies = await fetchData(url, movie, "results");

    if (movies) {
      setMovies(movies);
    }
    setNotFound(true);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0675fe991f3ca4e6f5b5f9efb36add15&language=en-US&page=1";
      try {
        const movies = await fetchData(url, "featured-movies", "results");
        heroRef.current = movies[15];
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-[100vh] mx-auto min-w-[400px] sm:min-w-fit">
      <Hero hero={heroRef.current} handleSearch={handleSearch} />
      {!notFound && <FeaturedMovies movies={movies} />}
      {notFound && <NotFound />}

      <Footer />
    </div>
  );
};

export default Home;
