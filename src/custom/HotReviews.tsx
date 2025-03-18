import Marquee from "react-fast-marquee";

const hotReviews = [
  {
    customer: "Chris",
    company: "etrailer",
    title: "Great quality products at a good price",
    content: `“Every purchase I make from Fashionphile is so easy. They offer different ways to purchase if you don't want to pay in full upfront (layaway and Affirm) which I appreciate, and the description of the bag and its condition is always spot on, if not in fact better (as they are very picky and detailed when describing the imperfections). I know exactly when my bag will arrive with the tracking email they send, which is helpful because I have to sign for it, and if for some reason I need to return it, they make that very seamless. Fashionphile is always my go-to site for vintage and resale bags.”`,
    stars: 4,
  },
  {
    customer: "Emila",
    company: "BestBuy",
    title: "Fantastic customer service!",
    content: `“I've been a BestBuy customer for years, and the service is always exceptional. They provide various payment options, which makes it easier to purchase high-end electronics. Their product descriptions are always detailed, ensuring you know exactly what you're buying. The staff is helpful, and delivery is reliable, always keeping me updated with tracking emails. Their return process is also simple, allowing for easy exchanges when needed. Whether shopping in-store or online, BestBuy remains my preferred choice for all my tech needs.”`,
    stars: 5,
  },
  {
    customer: "Mike",
    company: "Amazon",
    title: "Fast shipping, decent quality",
    content: `“Amazon's convenience is unmatched. They offer multiple payment methods and Prime shipping, which ensures fast delivery. I find their product descriptions mostly accurate, though quality varies depending on the seller. I appreciate that customer reviews provide insights, but occasionally, items are not as described. Tracking updates are clear, and returns are generally smooth, making it easy to send back anything unsatisfactory. Overall, Amazon remains my go-to for online shopping, offering variety and competitive pricing.”`,
    stars: 4,
  },
  {
    customer: "Saria",
    company: "Nike",
    title: "Comfortable and stylish shoes",
    content: `“Nike has always been my favorite brand for athletic shoes. Their sizing is consistent, and the comfort level is exceptional. They provide flexible payment options, making it easier to grab limited-edition releases. Their descriptions of material and fit are precise, helping me choose the right style. Tracking my order is simple, and they update me regularly on my shipment. If I ever need to return something, their process is quick and customer-friendly. Nike remains my trusted brand for both casual and performance wear.”`,
    stars: 5,
  },
  {
    customer: "Damay",
    company: "Walmart",
    title: "Terrible shipping experience",
    content: `“Ordering from Walmart was a frustrating experience. While they have decent prices, their shipping service is unreliable. The estimated delivery time kept changing, and tracking updates were vague. When the package finally arrived, one of the items was missing, and another was damaged. Customer service was not helpful, making the return process frustrating. I expected better from such a big retailer. Unless they improve their logistics and support, I will think twice before ordering again.”`,
    stars: 2,
  },
  {
    customer: "Jogesh",
    company: "Target",
    title: "Disappointed with product quality",
    content: `“Target has a good selection, but I was disappointed with the quality of my recent purchase. I bought a set of kitchen utensils, and they started falling apart after just a few uses. The product description was misleading, making it seem more durable than it actually was. I attempted to return it, but the process was inconvenient and required multiple steps. Customer service was polite but not very helpful. While I usually like shopping at Target, this experience made me reconsider.”`,
    stars: 2,
  },
  {
    customer: "Dhiraj",
    company: "Apple",
    title: "Overpriced and disappointing service",
    content: `“Apple's reputation for quality made me confident in my MacBook purchase, but I was left disappointed. While the design and performance were initially great, issues started arising after a few months. The customer service process was not as smooth as expected, and repairs cost more than they should have. Tracking service requests was difficult, and responses were slow. Considering the price I paid, I expected better long-term reliability. Apple needs to improve its support system and warranty coverage to maintain customer trust.”`,
    stars: 1,
  },
];

const HotReviews = () => {
  return (
    <div className="max-h-screen bg-[rgb(253,251,246)] font-Rubik py-10 md:py-[30vh]">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-around items-center px-4">
        {/* TEXT AREA */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide">
            Real reviews,
          </h2>
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide">
            hot off the press 🔥
          </h2>
          <p className="w-full lg:max-w-lg text-base md:text-lg">
            Recent insights for any company, from actual customers – the good,
            the bad, and everything in between
          </p>
        </div>

        {/* VERTICAL MARQUEE FOR LARGE ABOVE SCREEEN */}
        <div
          className="hidden lg:flex w-[50%] h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(https://static.sitejabber.com/imgs/home/roller-bg.svg)`,
          }}
        >
          <Marquee direction="up" className="overflow-y-hidden py-5">
            {hotReviews.map((item, index) => (
              <div
                key={index}
                className="w-[25vw] min-h-[50vh] mx-auto bg-white rounded shadow my-2 flex flex-col gap-2 p-4"
              >
                <h5>
                  <span className="text-[#ce9436]">{item.customer}</span> on{" "}
                  <span className="text-[#ce9436]">{item.company}</span>
                </h5>

                <h4 className="text-base font-medium tracking-wide">
                  {item.title}
                </h4>

                <p className="text-xs tracking-wide">{item.content}</p>

                <span className="flex gap-1 mt-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <img
                      key={i}
                      src="https://static.sitejabber.com/imgs/icons/star/5.png"
                      alt="star"
                    />
                  ))}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* HORZONTAL MARQUEE FOR SMALL SCREEN */}
        <div
          className="flex lg:hidden w-[100%] h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(https://static.sitejabber.com/imgs/home/roller-bg.svg)`,
          }}
        >
          <Marquee className="overflow-y-hidden py-5 flex">
            {hotReviews.map((item, index) => (
              <div
                key={index}
                className="w-96 min-h-[40vh] bg-white rounded shadow mx-2 flex flex-col gap-2 p-4"
              >
                <h5>
                  <span className="text-[#ce9436]">{item.customer}</span> on{" "}
                  <span className="text-[#ce9436]">{item.company}</span>
                </h5>

                <h4 className="text-base font-medium tracking-wide">
                  {item.title}
                </h4>

                <p className="text-xs tracking-wide">{item.content}</p>

                <span className="flex gap-1 mt-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <img
                      key={i}
                      src="https://static.sitejabber.com/imgs/icons/star/5.png"
                      alt="star"
                    />
                  ))}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HotReviews;
