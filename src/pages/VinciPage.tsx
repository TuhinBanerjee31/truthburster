import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const VinciPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[3]} />
      <Reviews data= {constructionData[3]} />
      <Footer />
    </div>
  )
}

export default VinciPage
