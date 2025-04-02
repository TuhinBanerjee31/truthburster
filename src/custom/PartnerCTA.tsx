const PartnerCTA = () => {
  return (
    <div className="min-h-[70vh] bg-[rgb(253,251,246)] font-Rubik py-10 px-5 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl text-center">
        Start using{" "}
        <span className="text-[#854b23] font-play">truthbusters</span>
      </h1>
      <h5 className="text-base md:text-xl tracking-wide text-center p-2">
        Write your first review or find a company that interests you
      </h5>

      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 items-center my-10">
        <img
          src="https://static.sitejabber.com/imgs/footer/google-partner-logo@2x.webp"
          className="h-15 md:h-20"
        />
        <img
          src="https://static.sitejabber.com/imgs/footer/users-love-us-g2.svg"
          className="w-15 md:w-20"
        />
        <img
          src="https://static.sitejabber.com/imgs/footer/reviewmanagement_momentumleader_leader.svg"
          className="w-15 md:w-20"
        />
        <img
          src="https://static.sitejabber.com/imgs/footer/onlinereputationmanagement_highperformer_small-business_highperformer.svg"
          className="w-10 md:w-20"
        />
        <img
          src="https://static.sitejabber.com/imgs/footer/onlinereputationmanagement_highperformer_spring.svg"
          className="w-15 md:w-20"
        />
        <img
          src="https://static.sitejabber.com/imgs/footer/nsf-logo.svg"
          className="w-15 md:w-20"
        />
      </div>
    </div>
  );
};

export default PartnerCTA;
