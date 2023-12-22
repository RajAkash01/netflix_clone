import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Firebase';
import { Dispatch } from '../Redux/Store';
import { login, selectUser } from '../Redux/UserSlice';
import { useSelector } from 'react-redux';


const Sign_In = () => {
  const [Pass, setPass] = useState(true);
  const [email, setemail] = useState('');
  const [Rememberme,setRememberme]=useState(false);
  // const [Helpertextemail, setHelpertextemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const userstored = useSelector(selectUser);
  const CreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const Signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Dispatch(login({ user: user }));
        if(Rememberme){
          window.localStorage.setItem("UserP",JSON.stringify({email:email,pass:password}))
        }
        console.log('user saved');
        navigate('/Main',{replace:true});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // console.log(userstored.user);
  };
  return (
    <>
      <div className="bg-[#252525]">
        {/* #1st Row  */}

        <div className="relative  -mb-[0.25rem]">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/fbb54774-ca17-4208-a995-db44bffe4163/IN-en-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            className="absolute object-cover object-center  mobile:brightness-0 mobile:h-full mobile:w-screen h-fit w-screen -mt-[3.1rem]  filter tablet:brightness-50 "
            alt="back_img"
          />
          <div className="relative ">
            <img
              onClick={() => navigate('/')}
              src={require('../assets/Netflixlogo.png')}
              className=" tablet:h-[3.4rem] mobile:h-8 mt-5 ml-5 cursor-pointer "
              alt="netflix_img"
            />
          </div>
          <div className=" mx-auto relative min-h-[599px] max-w-[450px]  bg-black/70 rounded-md filter   ">
            {/* min-h-[660px] max-w-[450px] */}
            <p className="text-white pt-[4rem] pl-[4rem] font-bold text-3xl mobile:pl-8 mobile:pt-8">
              Sign In
            </p>
            <div className="flex flex-col justify-center items-center">
              <TextField
                id="filled-basic"
                label="Email or phone number"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                variant="filled"
                // helperText={Helpertextemail}
                className=" min-w-[20rem] mt-[3rem]" //w-[22rem]
                sx={{
                  '& .MuiInputBase-input': {
                    backgroundColor: '#333',
                    borderRadius: 1,
                    minHeight: 30,
                    color: 'white',
                  },
                  '& label.Mui-focused': {
                    color: '#8c8c8c',
                  },
                  '& label': {
                    color: '#8c8c8c',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <TextField
                id="input-with-icon-textfield"
                label="Password"
                type={Pass ? 'password' : 'email'}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                variant="filled"
                className="min-w-[20rem] mt-[1.5rem] bg-[#333] rounded-md"
                sx={{
                  '& .MuiInputBase-input': {
                    minHeight: 30,
                    color: 'white',
                  },
                  '& label.Mui-focused': {
                    color: '#8c8c8c',
                  },
                  '& label': {
                    color: '#8c8c8c',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        color: 'white',
                      }}
                      position="end"
                    >
                      <IconButton
                        onClick={() => setPass((e) => !e)}
                        // onMouseDown={handleMouseDownPassword}
                        // edge="end"
                      >
                        {Pass ? (
                          <VisibilityOff sx={{ color: 'white' }} />
                        ) : (
                          <Visibility sx={{ color: 'white' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                className="bg-[#E50914] text-white min-w-[20rem] h-14 text-sm mt-16 normal-case"
                variant="contained"
                onClick={() => Signin()}
              >
                Sign In
              </Button>
              <div className="flex flex-row space-x-[5.5rem]">
                <FormControlLabel
                  value="top"
                  control={
                    <Checkbox
                    onChange={(e)=>setRememberme(e.target.checked)}
                      sx={{
                        color: '#b3b3b3',
                        '&.Mui-checked': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  label="Remember me"
                  labelPlacement="end"
                  sx={{ color: '#b3b3b3' }}
                />
                <p className="text-[#b3b3b3] py-4">Need help?</p>
              </div>
              <p className="text-[#b3b3b3] mr-32 ">
                New to Netflix?{' '}
                <button
                  href="Signup"
                  onClick={() => CreateAccount()}
                  // onClick={() => navigate('/')}
                  className="text-white hover:underline hover:underline-offset-2 decoration-white cursor-pointer"
                >
                  Sign up now
                </button>
              </p>
            </div>
          </div>
          {/* Navigation to different pages */}
          {/* <p className="relative text-red-500">hello</p> */}
          <div className="bg-black relative mt-[3rem] w-full min-h-[15rem]">
            <div className="flex justify-center items-center">
              <div className="grid laptop:grid-cols-4  mobile:grid-cols-2 gap-x-5 mb-8">
                <p className="laptop:col-span-4 mobile:col-span-2 text-[#737373] mb-4 mt-[2rem]">
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
      </div>
    </>
  );
};

export default Sign_In;
