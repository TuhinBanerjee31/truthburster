import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import Reviews from '../custom/Reviews'
import { constructionData } from '../data/constructionData'

const ObayashiPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={constructionData[7]} />
      <Reviews data= {constructionData[7]} />
      <Footer />
    </div>
  )
}

export default ObayashiPage
