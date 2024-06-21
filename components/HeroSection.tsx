import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero__content">
        <div className="hero__title">
          <h2>Learn How To</h2>
          <h1>
            <strong>✦ Invest </strong>
            In Stock Market
          </h1>
        </div>
        <p className="hero__description">
          Empowering traders to thrive, together and informed. Join our
          community for financial mastery and <strong>growth.</strong>
        </p>
        <div className="hero__cta">
          <button className="btn btn--primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            Enroll Now
          </button>
          <button className="flex btn btn--secondary">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hero__image">
        <Image
          src="/hero-phones.png"
          alt="Hero Image"
          width={600}
          height={800}
        />
      </div>
    </section>
  );
}
