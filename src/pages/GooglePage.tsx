import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const GooglePage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[1]} />
      <Reviews data= {itData[1]} />
      <Footer />
    </div>
  )
}

export default GooglePage