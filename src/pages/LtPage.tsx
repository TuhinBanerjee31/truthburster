import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const LtPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[0]} />
      <Reviews data= {constructionData[0]} />
      <Footer />
    </div>
  )
}

export default LtPage
