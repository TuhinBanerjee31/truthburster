import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const StrabagPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[6]} />
      <Reviews data= {constructionData[6]} />
      <Footer />
    </div>
  )
}

export default StrabagPage
