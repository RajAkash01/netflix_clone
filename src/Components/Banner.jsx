import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { result as Fetchit } from '../Axios';
import request from '../Requests';

function Banner() {
  const [Movie, setMovie] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function Fetchdata() {
      const result = Fetchit.get(request.fetechNetflix).then(function (
        response
      ) {
        setMovie(
          response?.data.results.map((it) => it)[
            Math.floor(Math.random() * response?.data.results.length - 1)
          ]
        );
      });
      setloading(false);
      return result;
    }
    Fetchdata();
  }, []);

  console.log('Banner' + JSON.stringify(Movie));
  const Truncate = ({ str, n }) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <>
      {loading === false ? (
        <>
          <header
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" h-[28rem]  bg-no-repeat object-cover object-center "
          >
            <div className="ml-[30px] pt-[140px]">
              <h1 className="text-4xl font-bold pb-[0.3rem] text-white">
                {Movie?.name}
              </h1>
              <div className="space-x-2 ">
                <Button
                  className="bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition transform duration-300"
                  variant="contained"
                  onClick={() =>
                    navigate(`/Main/${Movie?.id}`, { state: Movie })
                  }
                >
                  Play
                </Button>
                <Button
                  className="bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition transform duration-300"
                  variant="contained"
                >
                  My List
                </Button>
              </div>
              <h1 className="text-xl text-white max-w-[45rem]  pt-4 mb-[3rem]">
                {Truncate({
                  str: `${Movie?.overview}`,
                  n: 150,
                })}
              </h1>
            </div>
            <div className="min-h-[7rem] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111] " />
          </header>
        </>
      ) : (
        <div className="bg-black min-h-[30rem] flex justify-center items-center">
          <CircularProgress className="text-red-600" />
        </div>
      )}
    </>
  );
}

export default Banner;
