import { Button, CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Planurl } from '../Axios';
import Nav from '../Components/Nav';
import State from '../Hooks/UseContext';
import { selectImage } from '../Redux/ImageSlice';
import { fetchplan, selectplan, selectplanloading } from '../Redux/PlansSlice';
import { Dispatch } from '../Redux/Store';
import { logout, selectUser } from '../Redux/UserSlice';

function Profile() {
  const userdata = useSelector(selectUser);
  const plandata = useSelector(selectplan);
  const img=useSelector(state=>state.image);
  // const img2=useSelector(state=>state.image.image)
  // console.log(img,img2)
  const plandataload = useSelector(selectplanloading);
  const [load, setload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localuser = window.localStorage.getItem('user');
  const [User,setUser]=useState([]);
  useEffect(()=>{
    if(window.localStorage.getItem("UserP")!==null){
    const PermanentUser=JSON.parse(window.localStorage.getItem("UserP"))
    setUser(PermanentUser)
    }
    else {
      return
    }
    
  },[])
  const Subscribetoplan = ({ data }) => {
    if (userdata!==null||User.length!==0) {
      setload(true);
      Planurl.post('https://netflix-clone-backend-pxle.onrender.com/create-checkout-session', { item: data })
        .then(
          (it) => (
            window.localStorage.setItem('user', JSON.stringify([userdata])),
            (window.location = it?.data?.url),
            setload(false)
          )
        )
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('Please Login first');
    }
  };
  useEffect(() => {
   dispatch(fetchplan());
    // console.log(plandataload, plandata);
  }, []);
  const Logout = () => {
    Dispatch(logout({ user: null }));
    window.localStorage.removeItem("UserP")
    // console.log(userdata.user);
    navigate('/');
  };
  return (
    <>
      <div className="bg-black box-border  min-h-screen">
        <Nav />

        <div className="w-full min-h-screen relative flex flex-col  justify-center max-w-[40rem] mx-auto">
          <h1 className="pl-1 mobile:mt-[5rem] laptop:text-5xl font-bold text-white mb-6 mobile:text-4xl tablet:text-5xl">
            Edit Profile
          </h1>
          <div className="w-full flex flex-row space-x-4 text-white  ">
            {/* max-w-[29rem] mx-auto */}
            <img
              src={img.image}
              alt="acc-logo"
              className="pl-1 mobile:h-[3rem]  tablet:h-[7rem]   rounded-sm"
            />
            <div className="w-full max-w-[35rem] px-4 text-white flex flex-col">
              <div className="  w-[100%] min-h-[3rem] rounded flex justify-start items-center pl-4  bg-gray-600 ">
                <p className="font-semibold w-[100%]">
                  {userdata?.user?.email ||
                    localuser?.email || User?.email ||
                    'PLease Login to get precise data about you.'}
                </p>
              </div>
              <p className="font-semibold my-4">
                {'Plans (Current Plan: Premium)'}
              </p>
              <hr className="border-gray-400 " />
              <p className="my-4">Renewal date: 04/03/2023</p>
              <div className="px-4 space-y-4">
                {plandataload.length<1  || load === true ? (
                  <div className="bg-black min-h-[8rem] flex justify-center items-center">
                    <CircularProgress className="text-red-600" />
                  </div>
                ) : (
                  plandata?.data?.[0]?.data?.map((item) => (
                    <div key={item.id} className="flex w-full max-w-[40rem]">
                      <div className="mr-[10%] w-full">
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                      </div>
                      <Button
                        onClick={() => Subscribetoplan({ data: item })}
                        variant="contained"
                        className="bg-[#E50914] min-w-[6rem]"
                      >
                        Subscribe
                      </Button>
                    </div>
                  ))
                )}

                {/* <div className="flex w-full max-w-[40rem]">
                  <div className=" mr-[10%] w-full">
                    <p>Netflix Basic</p>
                    <p>480p</p>
                  </div>
                  <Button
                    variant="contained"
                    className="bg-[#E50914] min-w-[6rem]"
                  >
                    Subscribe
                  </Button>
                </div> */}
                {/* <div className="flex w-full max-w-[40rem] ">
                  <div className=" w-full">
                    <p>Netflix Premium</p>
                    <p>4k+HDR</p>
                  </div>
                  <Button
                    variant="contained"
                    className="bg-gray-600 min-w-[6rem]"
                  >
                    Current Package
                  </Button>
                </div> */}
              </div>
              {(userdata!==null||User.length!==0)&& (
                <Button
                  onClick={() => Logout()}
                  variant="contained"
                  className="bg-[#E50914] mt-8 mobile:mb-8 "
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
