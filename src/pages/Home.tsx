import FeaturedMarquee from '../custom/FeaturedMarquee'
import Header from '../custom/Header'
import Hero from '../custom/Hero'
import HotReviews from '../custom/HotReviews'
import Overview from '../custom/Overview'
import Testimonial from '../custom/Testimonial'
import TrendingCategories from '../custom/TrendingCategories'

const Home = () => {
  return (
    <div >
      <Header />
      <Hero />
      <FeaturedMarquee />
      <TrendingCategories />
      <Overview />
      <Testimonial />
      <HotReviews />
    </div>
  )
}

export default Home
