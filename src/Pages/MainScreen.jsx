import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';
import Nav from '../Components/Nav';
import Row from '../Components/Row';
import request from '../Requests';

const MainScreen = () => {
  const navigate = useNavigate();
  const data=window.localStorage.getItem("UserP")
  useEffect(()=>{
    if(data){
      window.onpopstate=()=>{
        navigate('/Main',{replace:true})
      }
    }
    },[])
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        requests={request.fetechNetflix}
        isLarge={true}
      />
      <Row title="Top Rated" requests={request.fetchToprated} />
      <Row title="Trending" requests={request.fetchTrending} />
      <Row title="Drama Movies" requests={request.fetchDrama} />
      <Row title="Comedy Movies" requests={request.fetchComedyMovies} />
      <Row title="Mystery Movies" requests={request.fetchMysteryMovies} />
      <Row title="Romantic Movies" requests={request.fetchRomanticMovies} />
      <Row title="Documentaries" requests={request.fetchDocumentaries} />
    </div>
  );
};

export default MainScreen;
