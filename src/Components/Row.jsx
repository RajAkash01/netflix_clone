import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { result as Fetchit } from '../Axios';
import List_Optimized from './List_Optimized';

function Row({ title, requests, isLarge = false,islast=false }) {
  const [Movie, setMovie] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const imgurl = 'https://image.tmdb.org/t/p/original/';
  const Fetchdata = useCallback(async () => {
    const result = Fetchit.get(requests).then(function (response) {
      setMovie(response.data.results);
    });
    setloading(false);
    return result;
  }, []);
  useEffect(() => {
    Fetchdata();
  }, []);
  // console.log(Movie);
  const MapRow = () => {
    return (
      <div
        className={` flex  p-[20px] scrollbar-hide`}
      >
        <List_Optimized islast={islast} itemwidth={170} itemheight={isLarge?300:250}  data={Movie} renderItem={({columnIndex, key, rowIndex, style})=>{
              const item=Movie[columnIndex]
          return(
              
            item?.backdrop_path && (
            <div
              key={key}
              onClick={() => navigate(`/Main/${item?.id}`, { state: item })}
              className={`relative rounded-lg   object-cover object-center  transition transform duration-300 hover:scale-125 hover:z-10  text-transparent hover:text-[#e6e6e6]  cursor-pointer`}
              style={{...style,
                backgroundImage: `url("${
                  isLarge
                    ? imgurl + item?.poster_path
                    : imgurl + item?.backdrop_path
                }")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                left:columnIndex * (170 + 20), // to create a space between every item that is columnindex * (itemWidth + gap),
                top:0
              }}
            >
              <div  >
                <p
                  className={` absolute bottom-0 bg-gradient-to-b w-full from-transparent via-[rgba(37,37,37,0.60)] to-[rgba(37,37,37,0.70)]
                      `}
                  // style={{ textShadow: `1px 1px 2px black` }}
                >
                  <b className='ml-2 mb-2' >{item?.name || item?.original_title}</b>
                </p>
              </div>
            </div>
          )

          )
        }
        }/>
        {/* {Movie?.map(
          (item) =>
            item?.backdrop_path && (
              <div
                key={item?.id}
                onClick={() => navigate(`/Main/${item?.id}`, { state: item })}
                className={`relative ${
                  isLarge !== true
                    ? 'h-[120px] aspect-square '
                    : 'h-[250px] aspect-[9/16] '
                }w-full object-cover object-contain transition transform duration-300 hover:scale-125 text-transparent hover:text-[#e6e6e6]  cursor-pointer`}
                style={{
                  backgroundImage: `url("${
                    isLarge
                      ? imgurl + item?.poster_path
                      : imgurl + item?.backdrop_path
                  }")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              >
                <div className="w-full max-w-[9rem] ">
                  <p
                    className={`absolute ${
                      isLarge !== true
                        ? 'bottom-0  pb-[0.2rem]  px-1'
                        : 'bottom-0  pb-[1.5rem] pt-[1rem] px-4'
                    }  bg-gradient-to-b w-full from-transparent via-[rgba(37,37,37,0.60)] to-[rgba(37,37,37,0.70)]
                        `}
                    // style={{ textShadow: `1px 1px 2px black` }}
                  >
                    {item?.name || item?.original_title}
                  </p>
                </div>
              </div>
            )
        )} */}
      </div>
    );
  };
  return (
    <>
      <div className="bg-black">
        {loading === false ? (
          <>
            <h2 className="text-4xl text-white pl-[20px] pt-[20px]">{title}</h2>
            <MapRow />
          </>
        ) : (
          <div className="bg-black min-h-[8rem] flex justify-center items-center">
            <CircularProgress className="text-red-600" />
          </div>
        )}
      </div>
    </>
  );
}

export default Row;
