import Marquee from "react-fast-marquee";

const logos = ["https://s3-us-west-1.amazonaws.com/upload.comparably.com/60746/companies/60746/logo_1722880319144.jpg", "https://cdn.comparably.com/27525401/l/35625_logo_elsevier.png", "https://s3-us-west-1.amazonaws.com/upload.comparably.com/39416/companies/39416/logo_1731078637940.jpg", "https://cdn.comparably.com/27157874/l/25736_logo_adobe.png", "https://cdn.comparably.com/27515700/l/361717_logo_squarespace.png", "https://cdn.comparably.com/27608545/l/32970_logo_esri.png", "https://cdn.comparably.com/27556048/l/62914/logo.jpg", "https://s3-us-west-1.amazonaws.com/upload.comparably.com/31295/companies/31295/logo_1659348762225.jpg", "https://s3-us-west-1.amazonaws.com/upload.comparably.com/102255/companies/102255/logo_1692215760399.jpg", "https://cdn.comparably.com/24749373/l/30263/company_logo_30263.png", "https://cdn.comparably.com/27579934/l/17407_logo_chegg.png", "https://cdn.comparably.com/27248650/l/141124/logo.jpg", "https://cdn.comparably.com/27548492/l/16715_logo_tinder.png"]

const FeaturedMarquee = () => {
  return (
    <div className="min-h-[40vh] bg-[rgb(253,251,246)] py-16 md:py-4">
        <h5 className="text-center font-Rubik uppercase tracking-wide">As Featured On</h5>
      <Marquee className="py-4 max-w-screen-xl mx-auto">
        {logos.map(item => (
            <div key={item} className="px-8 py-3 mt-5 shadow-md mx-6 rounded-lg hover:scale-125 transition-all duration-200 ease-in-out">
                <img src={item} className="w-10" />
            </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeaturedMarquee;
