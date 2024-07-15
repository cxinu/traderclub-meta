import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type CounterProps = {
  count: number;
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <CountUp end={count} redraw={true} duration={2}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default function AboutSection() {
  return (
    <div className="bg-slate-100">
      <section id="about" className="about container section">
        <h1 className="about__title">
          Welcome To<strong className="font-bold"> ✦ Trader Club</strong>
        </h1>
        <div className="about__wrapper">
          <video className="about__video" controls width="100%">
            <source src="/traderclub.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about__description">
            <p>
              <strong>Trader Club</strong>, founded in 2015, empowers
              individuals to master trading in financial markets by
              democratizing access to professional knowledge and tools.
            </p>
            <p>
              We provide a supportive community and resources for traders of all
              levels, offering real-time data, expert analysis, and peer support
              for trading stocks, forex, commodities, and cryptocurrencies.
            </p>
          </div>
        </div>
      </section>
      <div className="about__stats-bg">
        <ul className="about__stats">
          <li>
            <p className="about__count">
              <Counter count={50} />+
            </p>{" "}
            Batches Completed
          </li>
          <li>
            <p className="about__count">
              <Counter count={10} />+
            </p>{" "}
            Years In Business
          </li>
          <li>
            <p className="about__count">
              <Counter count={1000} />
            </p>
            Happy Students
          </li>
          <li>
            <p className="about__count">
              <Counter count={40} /> Hr
            </p>{" "}
            Live Sessions
          </li>
        </ul>
      </div>
    </div>
  );
}
