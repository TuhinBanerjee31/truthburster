import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const SapPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[7]} />
      <Reviews data= {itData[7]} />
      <Footer />
    </div>
  )
}

export default SapPage
