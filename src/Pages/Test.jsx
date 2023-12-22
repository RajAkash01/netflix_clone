import React from 'react';

const Test = () => {
  return (
    <>
      <div className="box-border flex flex-col relative mt-[7.2rem]  p-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          cupiditate dicta neque doloremque facilis non perferendis quasi
          cumque! Dolore qui inventore et, ipsam debitis quae quibusdam porro
          voluptatibus laborum facilis quasi sed dignissimos libero modi omnis,
          rem nostrum at doloremque in non, maiores consequuntur corrupti!
          Doloremque facilis, sunt repudiandae aperiam nobis enim delectus quis
          sint veritatis laudantium harum illum ipsum ipsa quam minima eveniet
          eum reprehenderit quae! Officia quia illo eveniet harum quidem totam
          optio illum! Maxime libero illum quia voluptate architecto voluptates,
          nesciunt doloribus iste magnam quas culpa cum laboriosam, dolor sint
          dignissimos animi aperiam eos laborum eveniet ipsa aspernatur! Libero
          consequatur illo ab molestias laborum ea eos consectetur soluta,
          mollitia ullam praesentium provident quae deserunt sunt reprehenderit
          aperiam quam, architecto nesciunt? Odit explicabo incidunt ad
          cupiditate aut, quam sint, repudiandae, illum ratione delectus dicta
          hic. Minus delectus consequatur iusto fuga perferendis necessitatibus
          enim id! Voluptatibus ea temporibus, doloremque culpa dignissimos
          assumenda quibusdam fugiat officiis eius nobis tempore ut voluptate
          praesentium, quam animi facilis, quae debitis atque maxime tempora
          porro voluptatem nostrum? Inventore, ullam. Optio saepe recusandae
          quisquam facere quidem totam? Veniam placeat mollitia eligendi
          quisquam totam libero, laboriosam, consectetur sunt quis eaque aut
          maxime cum quas ipsum autem!
        </p>
        <div className=" border-8 border-red-500 relative flex  mx-auto  bg-white max-w-[33rem]  ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv-img"
            className="   w-[70%] z-[1]"
          />

          {/* <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/c96f2a1d-1627-40aa-a29e-6ab6b27b35ab/IN-en-20221107-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="tv-img"
            className=" w-[55%] absolute top-[20%] left-[5.5%] "
          /> */}

          <video
            className=" absolute w-[55%] top-[20%] left-[5.5%] "
            autoPlay
            loop={true}
            muted
            controls=""
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Test;
