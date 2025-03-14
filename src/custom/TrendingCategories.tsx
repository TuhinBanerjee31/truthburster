import { ChevronsRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrendingCategories = () => {
  return (
    <div className='min-h-[40vh] bg-[rgb(253,251,246)] font-Rubik'>
        <div className='max-w-screen-xl flex justify-between mx-auto'>
            <h4 className='text-xl font-medium tracking-wide'>Trending Categories</h4>
            <Link to={"/categories"} className='uppercase flex tracking-wide'>view all categories <ChevronsRight /></Link>
        </div>
      
    </div>
  )
}

export default TrendingCategories
