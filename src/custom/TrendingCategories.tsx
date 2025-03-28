import { ChevronsRight, MonitorDot, Pickaxe, Scale, Factory, SwatchBook, RadioTower, Headset, Zap, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'

const trendCategories = [
  {
    compo: <MonitorDot />,
    title: "IT",
    redirect:"/categories/it"
  },
  {
    compo: <Pickaxe />,
    title: "Construction",
    redirect:"/categories/construction"
  },
  {
    compo: <Scale />,
    title: "Legal",
    redirect:"/categories/legal"
  },
  {
    compo: <Factory />,
    title: "Manufacture",
    redirect:"/categories/manufacture"
  },
  {
    compo: <SwatchBook />,
    title: "Textile",
    redirect:"/categories/manufacture"
  },
  {
    compo: <RadioTower />,
    title: "Telecom",
    redirect:"/categories/telecom"
  },
  {
    compo: <Headset />,
    title: "BPO",
    redirect:"/categories/bpo"
  },
  {
    compo: <Zap />,
    title: "Energy",
    redirect:"/categories/energy"
  },
  {
    compo: <Ship />,
    title: "Maritime",
    redirect:"/categories/martime"
  }
]

const TrendingCategories = () => {
  return (
    <div className='min-h-[40vh] bg-[rgb(253,251,246)] font-Rubik px-4'>
        <div className='max-w-screen-xl h-full flex justify-between items-center mx-auto'>
            <h4 className='text-lg md:text-xl font-medium tracking-wide'>Trending Categories</h4>
            <Link to={"/categories"} className='uppercase h-full flex items-center justify-center tracking-wide text-xs md:text-xl'>view all categories <ChevronsRight /></Link>
        </div>
      
      <div className='flex flex-wrap max-w-screen-xl mx-auto justify-between items-center py-8'>
        {trendCategories.map(item => (
          <Link to={item.redirect} key={item.title} className='group w-25 h-25 md:w-30 md:h-30 m-2 px-2 py-4 shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 flex flex-col justify-center items-center bg-white rounded-lg'>
              <div className='p-4 rounded-lg bg-[rgb(253,251,246)] transition-colors duration-300 ease-in-out group-hover:bg-[#ce9436] my-2'>{item.compo}</div>

            <p className='text-xs md:text-base'>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TrendingCategories
