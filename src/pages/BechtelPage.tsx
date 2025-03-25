import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const BechtelPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[4]} />
      <Reviews data= {constructionData[4]} />
      <Footer />
    </div>
  )
}

export default BechtelPage
