import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sign_In from './Pages/Sign_In';
import MainScreen from './Pages/MainScreen';
import Test from './Pages/Test';
import IntroPage from './Pages/IntroPage';
import Profile from './Pages/Profile';
import DetailPage from './Pages/DetailPage';
import Whos_WatchingPage from './Pages/Whos_WatchingPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<IntroPage />} />
          <Route path="Signin" element={<Sign_In />} />
          <Route path="Main" element={<MainScreen />} />
          <Route path="test" element={<Test />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/Main/:id" element={<DetailPage />} />
          <Route path="Whos" element={<Whos_WatchingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
