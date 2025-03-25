import Header from '../custom/Header'
import Footer from '../custom/Footer'
import ContentBody from '../custom/ContentBody'
import { itData } from '../data/itData'
import Reviews from '../custom/Reviews'

const MicrosoftPage = () => {
  return (
    <div>
      <Header />
      <ContentBody data={itData[2]} />
      <Reviews data= {itData[2]} />
      <Footer />
    </div>
  )
}

export default MicrosoftPage
