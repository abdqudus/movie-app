import React, { useEffect, useState } from "react";
import Video from "../components/movie-page-component/Video";
import Synopsis from "../components/movie-page-component/Synopsis";
import Awards from "../components/movie-page-component/Awards";
import WatchOptions from "../components/movie-page-component/WatchOptions";
import OtherMovies from "../components/movie-page-component/OtherMovies";
import SideNav from "../components/movie-page-component/SideNav";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchUtility";
import Loader from "../components/general/loader";
const Movie = () => {
  const { id } = useParams();
  const [appState, setAppState] = useState({
    movie: {},
    isLoading: true,
    error: "",
  });
  const { movie, isLoading, error } = appState;
  useEffect(() => {
    const getMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0675fe991f3ca4e6f5b5f9efb36add15&language=en-US`;
      try {
        const movie = await fetchData(url, id);
        setAppState((state) => ({ ...state, movie: movie }));
      } catch (error) {
        setAppState((state) => ({ ...state, error }));
      } finally {
        setAppState((state) => ({ ...state, isLoading: false }));
      }
    };
    getMovie();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Something is wrong with the network</div>;
  }
  return (
    <div className=" grid grid-cols-70px-auto lg:grid-cols-226px-auto  sm:min-h-[100vh]  ">
      <aside className=" sm:min-h-full flex flex-col border-[1px] lg:border-[2px] lg:rounded-r-[50px] border-[#C4C4C4] items-center gap-8 py-4">
        <SideNav />
      </aside>
      <main className="bg-white p-4 grid lg:grid-cols-movie-grid lg:grid-rows-movie-rows">
        <Video imagePath={movie.backdrop_path} />
        <Synopsis
          overview={movie.overview}
          runtime={movie.runtime}
          title={movie.original_title}
          genres={movie.genres}
          releaseDate={movie.release_date}
        />
        <Awards />
        <WatchOptions
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
        />
        <OtherMovies />
      </main>
    </div>
  );
};

export default Movie;
