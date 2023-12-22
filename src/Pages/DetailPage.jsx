import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Components/Nav';
import StarIcon from '@mui/icons-material/Star';
import YouTube from 'react-youtube';
import Netflixlogo from '../assets/Netflixlogo';
import { Button } from '@mui/material';
import movieTrailer from 'movie-trailer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useWindowDimensions from '../Hooks/UseWindowDimension';

function DetailPage() {
  const { state } = useLocation();
  const [MovieId, setMovieId] = useState('');
  const item = state;
  const { width, height } = useWindowDimensions();
  // const [iwidth, setiwidth] = useState();
  const opts = {
    height: '320',
    width: '45%',
    playerVars: {
      autoplay: 0,
    },
  };
  const opts2 = {
    height: '220',
    width: '75%',
    playerVars: {
      autoplay: 0,
    },
  };
  const id2 = window.location.pathname.split('/');
  const imgurl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    GetMovieId({
      title: item?.name || item?.original_name || item?.original_title,
      year:
        item?.first_air_date?.substr(0, 4) || item?.release_date?.substr(0, 4),
    });
  }, []);
  const GetMovieId = ({ title, year }) => {
    movieTrailer(title, { year: year, id: true }).then(
      (response) => (setMovieId(response))
    );
    const options = {
      method: 'GET',
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      params: {
        q: `${
          item?.name || item?.original_name || item?.original_title
        } netflix movie trailer`,
      },
      headers: {
        'X-RapidAPI-Key': '8dd1d501d1msh6dc0f56cbcf018bp1e52f4jsnd45650cf0b19',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const urlparams = new URLSearchParams(
          new URL(response?.data?.items?.[0]?.url).search
        );
        const url = urlparams.get('v');
        console.log("url here "+ JSON.stringify(response?.data?.items?.[0]?.url))
        setMovieId(url);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="bg-[#252525] text-white min-h-screen">
      <Nav />
      <div>
        <div>
          <div
            style={{
              backgroundImage: `url("${imgurl + item?.backdrop_path}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className="w-full h-[100vh] object-cover object-center  flex items-center  "
            src={imgurl + item?.backdrop_path}
          >
            <div
              className="h-full flex flex-col justify-center items-start bg-gradient-to-l from-transparent via-[rgba(37,37,37,0.61)] to-[#111] 
          mobile:pl-6 mobile:pt-48 tablet:pt-28 tablet:pl-20  z-10 mobile:max-w-[22rem] tablet:max-w-[35rem] space-y-3 tracking-wider leading-7"
            >
              <p className="font-bold text-3xl">
                {item?.name || item?.original_name || item?.original_title}
              </p>
              <div className=" text-[#a3a3a3] ">
                <span>
                  {item.first_air_date
                    ? item?.first_air_date?.substr(0, 4) + ' | '
                    : item?.release_date?.substr(0, 4) + ' | '}{' '}
                  <span className="border-2 border-[#a1a1a1] px-1">
                    {'U/A 16+'}
                  </span>
                  <span>
                    {' | '} <StarIcon className="mb-2" color="#a1a1a1" />{' '}
                    {item?.vote_average.toFixed(1)}
                  </span>
                  <span>
                    {item?.origin_country == 'US' ? ' | ' + 'US Movies' : ''}
                  </span>
                </span>
              </div>
              <p className="">{item?.overview}</p>
            </div>
          </div>
          <div className="-mt-[2rem] z-10  relative flex min-h-[3.5rem]  mx-[2rem]">
            <div
              className="bg-gradient-to-r  space-x-5 from-[#333] to-[#181818]
             w-full rounded-sm flex pl-6 justify-start items-center"
            >
              <Netflixlogo />
              <p className=" ">Watch all you want.</p>
              <div className="w-full  flex max-w-[79vw] justify-end pr-4">
                <Button className="bg-[#e50914] " variant="contained">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Videoframe */}
      <div className="text-white pl-[3rem] pt-[3rem] pb-[2rem] ">
        <span className="font-semibold text-4xl  ">
          Videos
          <span className="text-[#a3a3a3] text-2xl  ">
            {' | '}
            {item?.name || item?.original_name || item?.original_title}
          </span>
        </span>
        {width > 500 ? (
          <YouTube
            className="mt-4"
            videoId={MovieId} // defaults -> ''
            opts={opts}
          />
        ) : (
          <YouTube
            className="mt-4"
            videoId={MovieId} // defaults -> ''
            opts={opts2}
          />
        )}
      </div>
    </div>
  );
}

export default DetailPage;
