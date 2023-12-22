import { Create } from '@mui/icons-material';
import { Button, Menu, MenuItem, Stack } from '@mui/material';
import { color } from '@mui/system';
import React, { useContext, useState, } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import State from '../Hooks/UseContext';
import { Imagesss, selectImage } from '../Redux/ImageSlice';
import { Dispatch } from '../Redux/Store';


function Nav() {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentpage = location.pathname;
  const [imgacc,setimgacc]=useState("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png");
  const img=useSelector(selectImage);
  const data=window.localStorage.getItem("UserP")
  const Showblackonnav = () => {
    if (window.scrollY > 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    currentpage !== '/profile' ? navigate('/profile'):setAnchorEl(event.currentTarget);
  };
  const handleClose = ({tt="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}) => {
    setAnchorEl(null);
    setimgacc(tt)
    Dispatch(Imagesss(tt))
  };

  useEffect(() => {
    window.addEventListener('scroll', Showblackonnav);
    return () => window.removeEventListener('scroll', Showblackonnav);
  }, []);
  return (
    <>
      <div className="fixed w-full z-30">
        <div
          className={`relative flex justify-between ${
            Show ? 'bg-black' : 'bg-transparent'
          } transition transform duration-300 pb-4`}
        >
          <img
            onClick={() =>data?window.location.pathname=="/Main"? (console.log(window.location.pathname),navigate('/Main',{replace:true})):window.location.pathname=="/profile"?navigate('/Main',{replace:true}):null: navigate('/')
              }
            src={require('../assets/Netflixlogo.png')}
            className=" tablet:h-[3.4rem] mobile:h-8 mt-5 ml-5 cursor-pointer "
            alt="netflix_img"
          />

          <img
            onClick={handleClick}
            src={img.image}
            alt="acc-logo"
            className="tablet:h-[3.4rem] mobile:h-8 mr-5 mt-5 ring-offset-4 ring-offset-black/80
               transition transform duration-500 hover:ring-2 cursor-pointer ring-white"
          />
          <Menu
          sx={{
            '& .MuiPaper-root': {
              marginTop: 1,
              minWidth: 150,
              borderRadius:2,
              color:"black",
              // boxShadow:
              //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              '& .MuiMenu-list': {
               
                backgroundColor:"#262626",
               
              },
              '& .MuiMenuItem-root': {
                // '& .MuiSvgIcon-root': {
                //   fontSize: 18,
                //   color: theme.palette.text.secondary,
                //   marginRight: theme.spacing(1.5),
                // },
                  // '&:active': {
                    backgroundColor: "#262626",
                    color:"white"
                // },
          }}
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={()=>handleClose({tt:'https://ia803404.us.archive.org/31/items/profiles_202104/chicken.png'})}>
          <Stack spacing={1} direction="row">
          <img 
           style={{width:'40px'}}
            src="https://ia803404.us.archive.org/31/items/profiles_202104/chicken.png" alt="netflix_logo" /><p style={{marginTop:5}}>Shane</p>
          </Stack></MenuItem>
        <MenuItem  onClick={()=>handleClose({tt:"https://ia803404.us.archive.org/31/items/profiles_202104/dog.png"})}>
          <Stack spacing={1} direction="row">
          <img style={{width:'40px'}} src="https://ia803404.us.archive.org/31/items/profiles_202104/dog.png" alt="netflix_logo" /><p style={{marginTop:5}}>Einstein</p>
          </Stack></MenuItem>
        <MenuItem  onClick={()=>handleClose({tt:"https://ia903404.us.archive.org/31/items/profiles_202104/hero.png"})}>
          <Stack spacing={1} direction="row">
          <img style={{width:'40px'}} src="https://ia903404.us.archive.org/31/items/profiles_202104/hero.png" alt="netflix_logo" /><p style={{marginTop:5}}>Issac</p>
          </Stack></MenuItem>
        <MenuItem  onClick={()=>handleClose({tt:"https://ia803404.us.archive.org/31/items/profiles_202104/monster.png"})}>
          <Stack spacing={1} direction="row">
          <img style={{width:'40px'}} src="https://ia803404.us.archive.org/31/items/profiles_202104/monster.png" alt="netflix_logo" /><p style={{marginTop:5}}>Akash</p>
          </Stack></MenuItem>
        <MenuItem 
         //onClick={handleClose}
         >
          <Stack spacing={1} direction="row">
          <Create style={{marginLeft:5}}/><p style={{marginTop:5,marginLeft:20}}>Manage Profiles</p>
          </Stack></MenuItem>
      </Menu>
        </div>
      </div>
    </>
  );
}

export default Nav;
