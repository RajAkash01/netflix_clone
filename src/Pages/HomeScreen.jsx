import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
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
    <div className="bg-[#252525] flex flex-col">
      {/* #1st Row  */}

      <div className="relative overflow-hidden  -mb-[0.25rem]">
        {/* background-image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/c96f2a1d-1627-40aa-a29e-6ab6b27b35ab/IN-en-20221107-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="absolute mobile:h-full mobile:w-screen h-fit w-screen -mt-[3.1rem]  filter brightness-50 "
          alt="back_img"
        />

        {/* Netflix logo */}
        <div className="relative flex flex-row  mb-0">
          <img
            src={require('../assets/Netflixlogo.png')}
            className=" laptop:h-[3.4rem] mt-5 ml-5 mobile:h-8 mobile:mr-[5rem]"
            alt="netflix_img"
          />
          <div className="w-full h-[3.3rem] flex flex-row mt-5 justify-end  mr-12 mobile:space-x-0.5 laptop:space-x-8">
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
                    className="mobile:h-[2.5rem] mobile:w-[6.5rem] laptop:w-28 laptop:h-[3.3rem]"
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
            <Button
              className="bg-[#E50914] hover:scale-110 transition duration-75 text-white mobile:h-[2.2rem] mobile:text-[0.7rem]
              mobile:text-center 
              laptop:h-[3.3rem] laptop:text-sm"
              variant="contained"
              onClick={() => navigate('Signin')}
            >
              {Langstate === 'English'
                ? language[0].Signbtn
                : language[1].Signbtn}
            </Button>
          </div>
        </div>
        <div className="  relative flex flex-col items-center justify-center h-screen w-screen">
          <p className="  text-center mobile:text-2xl laptop:text-6xl font-bold text-white -mt-[8rem] laptop:ml-5 max-w-[39rem] ">
            {Langstate === 'English' ? language[0].title1 : language[1].title1}
          </p>
          <p className=" text-center mobile:text-sm laptop:text-2xl font-bold  text-white mt-[1rem] laptop:ml-5 max-w-[39rem] ">
            {Langstate === 'English' ? language[0].title2 : language[1].title2}
          </p>
          <p className=" text-center mobile:text-sm laptop:text-xl  text-white mt-[2rem] laptop:ml-5 max-w-[45rem] mb-6">
            {Langstate === 'English'
              ? language[0].subheading
              : language[1].subheading}
          </p>
          <div className="flex laptop:flex-row mobile:flex-col mobile:items-center laptop:space-x-0.5 ">
            {/* <input
            placeholder="Email address"
            className="outline-none w-[32rem] h-[3rem] pl-2 h-16  rounded-sm"
          /> */}
            <TextField
              id="filled-basic"
              label={
                Langstate === 'English'
                  ? language[0].Emailtxt
                  : language[1].Emailtxt
              }
              variant="filled"
              className="laptop:w-[32rem] mobile:w-[23rem] "
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
              className="bg-[#E50914] text-white w-56 h-16 text-2xl mobile:mt-4 laptop:mt-0"
              variant="contained"
            >
              {Langstate === 'English'
                ? language[0].Getbtn
                : language[1].Getbtn}
            </Button>
          </div>
          {/* <div className="bg-gradient-to-b h-[7.4rem] w-full from-transparent via-[rgba(37,37,37,0.61)] to-[#111]" /> */}
        </div>
      </div>

      {/* #2nd Row  */}

      <div className="mb-2">
        <div className="bg-black text-white h-[29.5rem] w-full flex flex-row justify-center items-center space-x-32">
          <div className="flex flex-col">
            <p className="text-[3.5rem] font-bold ">
              {Langstate === 'English'
                ? language[0].title21
                : language[1].title21}
            </p>
            <p className="text-2xl font-medium w-[31rem] pl-1">
              {Langstate === 'English'
                ? language[0].title22
                : language[1].title22}
            </p>
          </div>
          <div className="relative min-w-[34rem] h-[26rem]">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="tv-img"
              className=" absolute "
            />
            <video
              className="h-[13.5rem] ml-[5rem] mt-[5.5rem]"
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

      <div className="laptop:h-[29.5rem] mobile:h-[45rem] w-full bg-black flex laptop:flex-row mobile:flex-col  justify-center items-center space-x-32 mb-2">
        <div className="relative flex justify-center items-center mobile:order-2 laptop:order-1">
          <img
            className="laptop:h-[24rem] mobile:h-[15rem]"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="downloading-episodes-img"
          />
          <div
            className="bg-black absolute bottom-7 border-solid border-2 rounded-md border-gray-500 laptop:w-[18rem] laptop:h-[5rem] 
            mobile:w-[15rem] mobile:h-[4.4rem]
          flex flex-row justify-center items-center space-x-8"
          >
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="episode-img"
              className="laptop:h-16 mobile:h-12 -mr-[1rem]"
            />
            <div>
              <p className="text-white font-bold laptop:text-base mobile:text-sm">
                Stranger Things
              </p>
              <p className="text-[#0071eb] laptop:text-base mobile:text-sm">
                {Langstate === 'English'
                  ? 'Downloading...'
                  : 'डाउनलोड हो रहा है..'}
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="download-icon"
              className="laptop:h-12 mobile:h-10"
            />
          </div>
        </div>
        <div className="mobile:order-1 laptop:order-2">
          <p className="text-white laptop:w-[40rem] mobile:w-[20rem] mobile:text-2xl mobile:text-center  laptop:text-[3.5rem] font-bold leading-[3.5rem] mb-5 ">
            {Langstate === 'English'
              ? language[0].title31
              : language[1].title31}
          </p>
          <p className=" text-white laptop:w-[30rem] mobile:w-[18rem] laptop:text-2xl mobile:text-base font-medium">
            {Langstate === 'English'
              ? language[0].title32
              : language[1].title32}
          </p>
        </div>
      </div>

      {/* # 4th Row  */}

      <div className="mb-2">
        <div className="bg-black text-white h-[29.5rem] w-full flex flex-row justify-center items-center space-x-32">
          <div className="flex flex-col">
            <p className="text-[3.5rem] font-bold">
              {Langstate === 'English'
                ? language[0].title41
                : language[1].title41}
            </p>
            <p className="text-2xl font-medium w-[31rem] pl-1">
              {Langstate === 'English'
                ? language[0].title42
                : language[1].title42}
            </p>
          </div>
          <div className="relative min-w-[34rem] h-[26rem]">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="tv-img"
              className=" absolute bottom-0 top-0"
            />
            <video
              className="h-[11.8rem] ml-[6.3rem] mt-[2.2rem]"
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

      <div className="h-[29.5rem] w-full bg-black flex justify-center items-center space-x-32 mb-2">
        <div className="relative flex justify-center items-center">
          <img
            className="h-[24rem]"
            src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
            alt="downloading-episodes-img"
          />
        </div>
        <div>
          <p className="text-white text-[3.5rem] max-w-[30rem] font-bold leading-[3.5rem] mb-5 ">
            {Langstate === 'English'
              ? language[0].title51
              : language[1].title51}
          </p>
          <p className="text-white text-2xl max-w-[31rem] font-medium">
            {Langstate === 'English'
              ? language[0].title52
              : language[1].title52}
          </p>
        </div>
      </div>

      {/* # 6th Row */}

      <div className="min-h-[29.5rem] w-full bg-black flex flex-col justify-center items-center mb-2 ">
        <p className="text-5xl font-bold text-white  my-[3rem]">
          {Langstate === 'English'
            ? 'Frequently Asked Questions'
            : 'अक्सर पूछे जाने वाले सवाल'}
        </p>
        <div className="max-w-[50rem] ">
          {FaqQuestion.map((item) => (
            <Accordion className=" bg-[#303030] text-white min-h-[4rem]">
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
        {/* Search_again */}
        <div className=" mt-[2rem] flex flex-row space-x-0.5 mb-[5rem]">
          {/* <TextField
            // color="warning"
            id="filled-basic"
            label={
              Langstate === 'English'
                ? language[0].Emailtxt
                : language[1].Emailtxt
            }
            variant="filled"
            className="w-[32rem] "
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
          /> */}
          {/* <Button
            className="bg-[#E50914] text-white w-56 h-16 text-2xl "
            variant="contained"
          >
            {Langstate === 'English'
              ? language[0].Signbtn
              : language[1].Signbtn}
          </Button> */}
        </div>
      </div>

      {/* Navigation to different pages */}
      <div className="bg-black flex justify-center items-center w-full h-[15rem] flex-col">
        <p className="text-[#737373] mr-[15rem] mb-[2rem]">
          Questions? Call 000-800-040-1843
        </p>
        <Grid alignItems="center" justifyContent="center" container spacing={0}>
          <Grid item xs={2}>
            <p className="text-[#737373]">FAQ</p>
            <p className="text-[#737373]">Investor Realtions</p>
            <p className="text-[#737373]">Privacy</p>
            <p className="text-[#737373]">Speed Test</p>
          </Grid>
          <Grid item xs={2}>
            <p className="text-[#737373]">Help center</p>
            <p className="text-[#737373]">Jobs</p>
            <p className="text-[#737373]">Cookie Preferences</p>
            <p className="text-[#737373]">Legal Notices</p>
          </Grid>
          <Grid item xs={2}>
            <p className="text-[#737373]">Accounts</p>
            <p className="text-[#737373]">Ways to watch</p>
            <p className="text-[#737373]">Corporate Information</p>
            <p className="text-[#737373]">Only on Netflix</p>
          </Grid>
          <Grid item xs={2}>
            <p className="text-[#737373]">Media Centre</p>
            <p className="text-[#737373]">Terms of Use</p>
            <p className="text-[#737373]">Contact Us</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeScreen;
