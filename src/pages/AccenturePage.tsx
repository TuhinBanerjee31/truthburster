import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const AccenturePage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[5]} />
      <Reviews data= {itData[5]} />
      <Footer />
    </div>
  )
}

export default AccenturePage
