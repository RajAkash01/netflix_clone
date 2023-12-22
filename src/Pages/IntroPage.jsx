import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const IntroPage = () => {
  const navigate = useNavigate();
  const arr = ['English', 'हिन्दी'];
  const language = [
    {
      lang: 'Eng',
      title1: 'Unlimited movies, TV shows and more.',
      title2: 'Watch anywhere. Cancel anytime.',
      subheading:
        'Ready to watch? Enter your email to create or restart your membership.',
      Signbtn: 'SIGN IN',
      Emailtxt: 'Email address',
      Getbtn: 'Get Started',
      title21: 'Enjoy on your TV.',
      title22: `Watch on smart TVs, PlayStation, Xbox, \r\n
        Chromecast, Apple TV, Blu-ray players and
        more.`,
      title31: `Download your shows 
      to watch offline.`,
      title32: `Save your favourites easily and always have
      something to watch.`,
      title41: `Watch everywhere.`,
      title42: `Stream unlimited movies and TV shows on
      your phone, tablet, laptop, and TV.`,
      title51: `Create profiles for children.`,
      title52: `Send children on adventures with their
      favourite characters in a space made just for
      them—free with your membership.`,
    },
    {
      lang: 'हिन्दी',
      title1: 'अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ.',
      title2: 'जहां चाहें देखें. जब चाहें कैंसल करें.',
      subheading:
        'देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.',
      Signbtn: 'साइन इन करें',
      Emailtxt: 'ईमेल एड्रेस',
      Getbtn: 'शुरू करें',
      title21: 'अपनी टीवी पर मज़ा लें.',
      title22: `स्मार्ट टीवी, PlayStation, Xbox, Chromecast,\r\n Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस \r\nपर भी देखें.`,
      title31: `ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें.`,
      title32: `अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.`,
      title41: `हर जगह देखें.`,
      title42: `बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.`,
      title51: `बच्चों के लिए प्रोफ़ाइल बनाएं.`,
      title52: `बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.`,
    },
  ];
  const FaqQuestion = [
    {
      title: 'What is Netflix',
      content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. \u00A0 You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      title: 'How much does Netflix cost?',
      content: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹&nbsp;149 to ₹&nbsp;649 a month. No extra costs, no contracts.`,
    },
    {
      title: 'Where can I watch?',
      content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.~{"\n"}You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      title: 'How do I cancel?',
      content: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      title: 'What can I watch on Netflix?',
      content: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      title: 'Is Netflix good for kids?',
      content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. ${(
        <br />
      )} Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];
  const [Langstate, setLangstate] = useState('English');
  const handleChange = (event) => {
    setLangstate(event.target.value);
  };
  return (
    <>
      <div className="bg-[#252525] flex flex-col box-border">
        {/* #1st Row  */}
        <nav>
          <div className="">
            {/* relative overflow-hidden -mb-[0.25rem] */}
            {/* background-image */}
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              className="absolute mobile:h-full mobile:w-screen h-fit w-screen object-cover object-center  filter brightness-50 "
              alt="back_img"
            />
            {/* Netflix logo */}
            <div className=" relative flex flex-row  mb-0 ">
              <img
                src={require('../assets/Netflixlogo.png')}
                className=" tablet:h-[3.4rem] mt-5 ml-5 mobile:h-8 mobile:mr-[0.75rem]"
                alt="netflix_img"
              />
              {/* DropDown Menu */}
              <div className=" w-full h-[3.3rem] flex flex-row mt-5 justify-end  mr-12  mobile:space-x-0.5 tablet:space-x-8">
                <div>
                  <Box className=" w-28">
                    <FormControl fullWidth>
                      <Select
                        sx={{
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #484850',
                            borderRadius: '5px 5px 0 0',
                          },
                          '	.MuiSelect-iconOutlined': {
                            color: 'white',
                          },
                          background: 'black',
                          color: 'white',
                        }}
                        className=" mobile:h-[2rem] mobile:w-[6.5rem] tablet:w-28 tablet:h-[3.3rem] rounded-md"
                        value={Langstate}
                        // MenuProps={{
                        //   sx: {
                        //     '.MuiMenuItem-root::before': {
                        //       backgroundColor: 'darkgrey',
                        //       color: 'white',
                        //     },
                        //     '.MuiMenuItem-root::after': {
                        //       backgroundColor: 'darkgrey',
                        //       color: 'white',
                        //     },
                        //     '.MuiMenuItem-root:hover': {
                        //       backgroundColor: 'blue',
                        //       color: 'white',
                        //     },
                        //   },
                        // }}
                        inputProps={{
                          'aria-label': 'Without label',
                        }}
                        onChange={handleChange}
                      >
                        {arr.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                {/* SignIn Btn */}
                <Button
                  className=" bg-[#E50914] hover:scale-110 transition duration-75 text-white  mobile:h-[2rem]
                   mobile:text-[0.7rem] mobile:text-center tablet:h-[3.3rem] tablet:text-sm"
                  variant="contained"
                  onClick={() => navigate('Signin')}
                >
                  {Langstate === 'English'
                    ? language[0].Signbtn
                    : language[1].Signbtn}
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <div className=" relative flex flex-col items-center justify-center h-[92vh] ">
          <p className="  text-center mobile:text-3xl tablet:text-6xl font-bold text-white -mt-[8rem] tablet:ml-5 max-w-[39rem] ">
            {Langstate === 'English' ? language[0].title1 : language[1].title1}
          </p>
          <p className=" text-center mobile:text-xl tablet:text-2xl font-bold  text-white mt-[1rem] tablet:ml-5 max-w-[39rem] ">
            {Langstate === 'English' ? language[0].title2 : language[1].title2}
          </p>
          <p className=" text-center mobile:text-xl tablet:text-xl  text-white mt-[2rem] tablet:ml-5 max-w-[45rem] mb-6">
            {Langstate === 'English'
              ? language[0].subheading
              : language[1].subheading}
          </p>
          <div className=" flex tablet:flex-row mobile:flex-col mobile:items-center tablet:space-x-0.5 max-w-[44rem] w-full px-5">
            {/* <input
            placeholder="Email address"
            className="outline-none w-[32rem] h-[3rem] pl-2 h-16  rounded-sm"
          /> */}
            <TextField
              fullWidth
              id="filled-basic"
              label={
                Langstate === 'English'
                  ? language[0].Emailtxt
                  : language[1].Emailtxt
              }
              variant="filled"
              className=""
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: 'white',
                  borderRadius: 1,
                  minHeight: 30,
                },
                '& label.Mui-focused': {
                  color: 'gray',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Button
              className="bg-[#E50914] text-white tablet:w-[18rem] mobile:w-[14rem] h-16 text-2xl mobile:mt-4 tablet:mt-0"
              variant="contained"
            >
              {Langstate === 'English'
                ? language[0].Getbtn
                : language[1].Getbtn}
            </Button>
          </div>
          {/* <div className="bg-gradient-to-b h-[7.4rem] w-full from-transparent via-[rgba(37,37,37,0.61)] to-[#111]" /> */}
        </div>

        {/* #2nd Row  */}

        <div className="relative  mb-2">
          <div
            className=" relative bg-black px-4 text-white min-h-[35.5rem] w-full flex flex-col laptop:flex-row mobile:flex-col 
          justify-center items-center mobile:space-x-0 laptop:space-x-32"
          >
            <div
              className=" relative flex flex-col desktop:mb-8 
             mobile:mt-[5rem]  desktop:mr-[8rem]"
            >
              <p className=" mobile:text-4xl tablet:mb-3 tablet:text-6xl font-bold mobile:mb-4  mobile:text-center laptop:text-start">
                {Langstate === 'English'
                  ? language[0].title21
                  : language[1].title21}
              </p>
              <p className=" mobile:text-xl tablet:text-2xl  mobile:text-center laptop:text-start font-medium  max-w-[31rem]  pl-1">
                {Langstate === 'English'
                  ? language[0].title22
                  : language[1].title22}
              </p>
            </div>
            {/* Live Video */}
            <div
              className=" relative flex justify-center items-center mobile:h-[25rem] tablet:h-[25rem] laptop:h-[25rem]
             max-h-[38rem]   mx-auto"
            >
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv-img"
                className=" absolute z-[1] "
              />
              <video
                className=" w-[74%]  "
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
        </div>

        {/* #3rd Row  */}

        <div
          className="min-h-[35.5rem] tablet:py-[3rem]  w-full bg-black flex laptop:flex-row mobile:flex-col
          justify-center items-center space-x-10 mb-2"
        >
          <div className="relative flex justify-center items-center mobile:order-2 laptop:order-1">
            {/* Outter Img */}
            <img
              className="w-[75%]"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="downloading-episodes-img"
            />
            {/* Inner Img */}
            <div
              className="bg-black absolute max-w-[20rem] w-[70%] mobile:w-[75%] mobile:bottom-3  mobile:h-[5rem] tablet:h-[5rem] desktop:h-[6rem] bottom-7 border-solid border-2 rounded-md border-gray-500 
          flex flex-row justify-center items-center space-x-8"
            >
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="episode-img"
                className="w-[17%]  py-2"
              />
              <div>
                <p className="text-white font-bold laptop:text-base mobile:text-sm">
                  Stranger Things
                </p>
                <p className="text-[#0071eb] laptop:text-base mobile:text-sm ">
                  {Langstate === 'English'
                    ? 'Downloading...'
                    : 'डाउनलोड हो रहा है..'}
                </p>
              </div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="download-icon"
                className="w-[17%] "
              />
            </div>
          </div>
          <div className="  mobile:order-1 laptop:order-2">
            <p className="text-white  tablet:max-w-[32rem]  mobile:text-3xl tablet:text-5xl mobile:text-center laptop:text-start  font-bold  mb-5 ">
              {Langstate === 'English'
                ? language[0].title31
                : language[1].title31}
            </p>
            <p className=" text-white tablet:max-w-[34rem] mobile:text-center laptop:text-start mobile:text-base tablet:text-3xl font-medium">
              {Langstate === 'English'
                ? language[0].title32
                : language[1].title32}
            </p>
          </div>
        </div>

        {/* # 4th Row  */}

        <div className="mb-2">
          <div
            className="bg-black text-white min-h-[35.5rem] w-full flex justify-center items-center
           laptop:flex-row mobile:flex-col mobile:space-x-0  laptop:space-x-[9rem]"
          >
            <div className="flex flex-col mobile:mb-8 mobile:-mt-[8rem] desktop:-mt-[8rem] desktop:mb-[4rem] desktop:mt-6">
              <p className=" tablet:max-w-[32rem] mobile:text-3xl tablet:text-5xl font-bold mb-4 mobile:text-center laptop:text-start">
                {Langstate === 'English'
                  ? language[0].title41
                  : language[1].title41}
              </p>
              <p className="tablet:max-w-[34rem]  mobile:text-base tablet:text-3xl font-medium  pl-1 mobile:text-center laptop:text-start">
                {Langstate === 'English'
                  ? language[0].title42
                  : language[1].title42}
              </p>
            </div>
            <div className="relative   flex justify-center items-center tablet:mb-[13rem] ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="tv-img"
                className="absolute  -top-5 z-[1]"
              />
              <video
                className=" w-[62%]"
                autoPlay={true}
                loop={true}
                muted
                controls=""
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        {/* # 5th Row */}

        <div
          className="min-h-[35.5rem] w-full bg-black   flex laptop:flex-row mobile:flex-col
         justify-center items-center  laptop:space-x-32 mb-2"
        >
          <div className="relative flex justify-center items-center mobile:order-2 laptop:order-1">
            <img
              className="w-[95%] tablet:mb-[2rem]"
              src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              alt="downloading-episodes-img"
            />
          </div>
          <div className="mobile:order-1 laptop:order-2 my-[4rem] ">
            <p
              className="text-white mobile:text-3xl tablet:text-5xl max-w-[30rem] font-bold leading-[3.5rem] mb-5 
            laptop:text-start mobile:text-center"
            >
              {Langstate === 'English'
                ? language[0].title51
                : language[1].title51}
            </p>
            <p
              className="text-white mobile:text-base tablet:text-3xl max-w-[31rem] font-medium 
            laptop:text-start mobile:text-center"
            >
              {Langstate === 'English'
                ? language[0].title52
                : language[1].title52}
            </p>
          </div>
        </div>

        {/* # 6th Row */}

        <div className="min-h-[29.5rem] w-full bg-black flex flex-col justify-center items-center mb-2 ">
          <p className="text-5xl font-bold text-white  my-[3rem] text-center">
            {Langstate === 'English'
              ? 'Frequently Asked Questions'
              : 'अक्सर पूछे जाने वाले सवाल'}
          </p>
          <div className="max-w-[50rem] px-4">
            {FaqQuestion.map((item) => (
              <Accordion className=" bg-[#303030] text-white min-h-[4rem] mb-2">
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className=" whitespace-pre-line text-2xl">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{item.content}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div
            className=" flex tablet:flex-row mobile:flex-col mobile:items-center 
          tablet:space-x-0.5 max-w-[44rem] w-full px-5 my-6"
          >
            <TextField
              fullWidth
              id="filled-basic"
              label={
                Langstate === 'English'
                  ? language[0].Emailtxt
                  : language[1].Emailtxt
              }
              variant="filled"
              className=""
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: 'white',
                  borderRadius: 1,
                  minHeight: 30,
                },
                '& label.Mui-focused': {
                  color: 'gray',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Button
              className="bg-[#E50914] text-white tablet:w-[18rem] mobile:w-[14rem] h-16 text-2xl mobile:mt-4 tablet:mt-0"
              variant="contained"
            >
              {Langstate === 'English'
                ? language[0].Getbtn
                : language[1].Getbtn}
            </Button>
          </div>
        </div>
        {/* Navigation to different pages */}
        <div className="bg-black  w-full min-h-[15rem]">
          <div className="flex justify-center items-center">
            <div className="grid laptop:grid-cols-4  mobile:grid-cols-2 gap-x-5 mb-8">
              <p className="laptop:col-span-4 mobile:col-span-2 text-[#737373] mb-4 mt-[4rem]">
                Questions? Call 000-800-040-1843
              </p>
              <div className="space-y-2">
                <p className="text-[#737373]">FAQ</p>
                <p className="text-[#737373]">Investor Realtions</p>
                <p className="text-[#737373]">Privacy</p>
                <p className="text-[#737373]">Speed Test</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#737373]">Help center</p>
                <p className="text-[#737373]">Jobs</p>
                <p className="text-[#737373]">Cookie Preferences</p>
                <p className="text-[#737373]">Legal Notices</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#737373]">Accounts</p>
                <p className="text-[#737373]">Ways to watch</p>
                <p className="text-[#737373]">Corporate Information</p>
                <p className="text-[#737373]">Only on Netflix</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#737373]">Media Centre</p>
                <p className="text-[#737373]">Terms of Use</p>
                <p className="text-[#737373]">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
