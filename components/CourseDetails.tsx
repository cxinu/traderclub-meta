export default function CourseDetails() {
  return (
    <section id="course-details" className="course-details container section">
      <h2 className="course-details__title">
        Master Trading With<strong className="font-bold"> ✦ Trader Club</strong>
      </h2>
      <div className="course-details__wrapper">
        <video className="course-details__video" controls width="100%">
          <source src="/traderclub.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="course-details__description">
          <p>
            <strong>Trader Club</strong>, founded in 2015, empowers individuals
            to master trading in financial markets by democratizing access to
            professional knowledge and tools.
          </p>
          <p>
            We provide a supportive community and resources for traders of all
            levels, offering real-time data, expert analysis, and peer support
            for trading stocks, forex, commodities, and cryptocurrencies.
          </p>
        </div>
      </div>
    </section>
  );
}
