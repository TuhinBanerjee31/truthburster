import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const InfosysPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[4]} />
      <Reviews data= {itData[4]} />
      <Footer />
    </div>
  )
}

export default InfosysPage
