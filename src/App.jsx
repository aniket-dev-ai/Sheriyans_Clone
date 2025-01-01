import { Route, Routes } from 'react-router-dom';
import CoursePage from './Components/CoursePage.jsx';
import HomePage from './Components/HomePage.jsx';
import KodrPage from './Components/KodrPage.jsx';
import Navbar from './Components/Navbar.jsx';
import courses from './coursesdata.jsx';
import Aptitude_Reasoning_for_Placements from './Courses.jsx/Aptitude_Reasoning_for_Placements.jsx';
import BackEnd_Domination from './Courses.jsx/BackEnd_Domination.jsx';
import FrontEnd_Domination from './Courses.jsx/FrontEnd_Domination.jsx';
import Mastering_DSA from './Courses.jsx/Mastering_DSA.jsx';
import Three_JS_Domination from './Courses.jsx/Three_JS_Domination.jsx';
import SignIn from './Components/SignIn.jsx';

export default function App() {
  const courseComponents = {
    "Three_JS_Domination": Three_JS_Domination,
    "Mastering_DSA": Mastering_DSA,
    "BackEnd_Domination": BackEnd_Domination,
    "FrontEnd_Domination": FrontEnd_Domination,
    "Aptitude_Reasoning_for_Placements": Aptitude_Reasoning_for_Placements,
  };

  return (
    <div className='text-serif bg-black min-h-screen text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage courses={courses} />} />
        <Route path='/courses' element={<CoursePage courses={courses} />} />
        <Route path='/kodr' element={<KodrPage />} />
        <Route path='/Signin' element={<SignIn />} />
        {courses.map((course) => {
          const formatCourseName = (name) => {
            return name.replace(/\s+/g, '_');
          };
          const formattedCourseName = formatCourseName(course.courseName);
          const CourseComponent = courseComponents[formattedCourseName];

          return (
            <Route
              key={formattedCourseName}
              path={`/courses/${formattedCourseName}`}
              element={<CourseComponent />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
