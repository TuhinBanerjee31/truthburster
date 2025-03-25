import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const CognizantPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[8]} />
      <Reviews data= {itData[8]} />
      <Footer />
    </div>
  )
}

export default CognizantPage
