import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const DellPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[9]} />
      <Reviews data= {itData[9]} />
      <Footer />
    </div>
  )
}

export default DellPage
