import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const TcsPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[3]} />
      <Reviews data= {itData[3]} />
      <Footer />
    </div>
  )
}

export default TcsPage
