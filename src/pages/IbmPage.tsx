import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const IbmPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[0]} />
      <Reviews data= {itData[0]} />
      <Footer />
    </div>
  )
}

export default IbmPage
