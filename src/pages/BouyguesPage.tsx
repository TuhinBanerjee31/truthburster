import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const BouyguesPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[2]} />
      <Reviews data= {constructionData[2]} />
      <Footer />
    </div>
  )
}

export default BouyguesPage
