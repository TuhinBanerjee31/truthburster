import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const SkanskaPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[5]} />
      <Reviews data= {constructionData[5]} />
      <Footer />
    </div>
  )
}

export default SkanskaPage
