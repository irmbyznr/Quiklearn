import { FeaturedCourses } from './components/featured-courses/featured-card'
import { SearchBar } from './components/header/searchbar'
import { InfoSection } from './components/info-section/info-section'
import LearnersStudents from './components/learners-students/learners-students'
import MainSection from './components/main-section/main-section'
import { TopClassCourses } from './components/top-class-courses/top-class-courses'
import "./index.css"

const App = () => {
  return (
    <>
    <SearchBar/>
    <MainSection/>
    <InfoSection/>
    <TopClassCourses/>
    <LearnersStudents/>
    <FeaturedCourses/>

    </>
  )
}

export default App