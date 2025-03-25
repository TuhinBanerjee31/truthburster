import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const KpngPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[1]} />
      <Reviews data= {constructionData[1]} />
      <Footer />
    </div>
  )
}

export default KpngPage
