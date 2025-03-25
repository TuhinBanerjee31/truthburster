import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const OraclePage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[6]} />
      <Reviews data= {itData[6]} />
      <Footer />
    </div>
  )
}

export default OraclePage
