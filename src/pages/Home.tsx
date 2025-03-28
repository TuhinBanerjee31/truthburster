import Banner from '../custom/Banner'
import FeaturedMarquee from '../custom/FeaturedMarquee'
import Footer from '../custom/Footer'
import Header from '../custom/Header'
import Hero from '../custom/Hero'
import HotReviews from '../custom/HotReviews'
import Overview from '../custom/Overview'
import PartnerCTA from '../custom/PartnerCTA'
import SpecialCards from '../custom/SpecialCards'
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
      <Banner />
      <Testimonial />
      <HotReviews />
      <SpecialCards />
      <PartnerCTA />
      <Footer />
    </div>
  )
}

export default Home
