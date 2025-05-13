import Category from './component/Category'
import Chef from './component/Chef'
import Hero from './component/Hero'
import Inbox from './component/Inbox'
import Morerecipe from './component/Morerecipe'
import Ourinsta from './component/Ourinsta'
import Recipe from './component/Recipe'

const Home = () => {
  return (
     <>
     <Hero/>
     <Category/>
     <Recipe/>
     <Chef/>
     <Ourinsta/>
     <Morerecipe/>
     <Inbox/>
     </>
  )
}

export default Home