export default function CourseSection() {
  return (
    <div className="bg-slate-100">
      <section id="courses" className="course container section">
        <h1 className="course__title">
          {" "}
          <strong>Courses ✦</strong> We Offer
        </h1>
        <div className="course__wrapper">
          <div className="course__card">
            <h2>BASIC COURSE</h2>
            <p>
              Stock market investments is designed to make basic course on stock
              market you understand complete basics on stock markets. Anyone who
              can understand minimum English / Hindi can attend this course and
              learn. After this basic course on stock market investment you will
              feel very confident to invest in equity markets. You will feel
              extremely overwhelmed after the session .We cover fundamental
              analysis and technical analysis also.
            </p>
          </div>
          <div className="course__card best-offer">
            <h2>GOLD MEMBER PACKAGE</h2>
            <p>
              The main intention of advanced technical course is to educate
              students all the core Technicals in stock markets history. We will
              train you in such a way that you can trade independently and make
              money consistently. We teach advanced technical course in a right
              way. We also provide live trading which other institutions won’t
              provide at all.
            </p>
          </div>
          <div className="course__card">
            <h2>ELITE TRADERS PROGRAM</h2>
            <p>
              Start your trading with Trader Club during the live hours i.e,
              9:15 am- 3:30 pm. Know the techniques and intraday stock tips to
              protect your capital. We have designed a curriculum with a
              combination of all market segments, including technical, advanced
              and fundamental analysis tools, for beginners, intermediates, and
              expert traders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
