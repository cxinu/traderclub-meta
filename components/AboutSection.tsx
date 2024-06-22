"use client";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState, useEffect } from "react";

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
    <>
      <section id="about" className="about container section">
        <h2 className="about__title">
          ✦ <strong className="font-bold">Welcome</strong> To Trader Club
        </h2>
        <div className="flex justify-evenly gap-4 mb-5">
          <Image
            className="about__image"
            src="/about-section.png"
            alt="Trader Club"
            width={300}
            height={300}
          />
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
      </section>
    </>
  );
}
