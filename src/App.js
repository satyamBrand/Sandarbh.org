import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCategoryType from './Components/AddCategory/AddCategory';
import AddSubCategoryType from './Components/AddSubCategory/AddSubCategory';
import AddContextType from './Components/AddContextType/ContextType';
import Dashboard from './Components/Dashboard/Dashboard';

import AddBook from './Components/AddBook/AddBook'
import AddVolume from './Components/AddVolume/AddVolume';
import AddSection from './Components/AddSection/AddSection';
import AddChapter from './Components/AddChapter/AddChapter';
import AddSloka from './Components/AddSloka/AddSloka';
import HomePage from './Components/Homepage/HomePage';
import SignUp from './Components/UserSignUp/SignUp';
import AllcategoryHomePage from './Components/AllCategoryHomePage/AllcategoryHomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/usersignup' element={<SignUp/>}/>
        <Route path='/AllcategoryHomePage' element={<AllcategoryHomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
