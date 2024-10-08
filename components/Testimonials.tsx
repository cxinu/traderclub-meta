function Testimonial({
  name,
  title,
  text,
}: {
  name: string;
  title: string;
  text: string;
}) {
  const letter = name.charAt(0).toUpperCase();
  return (
    <div className="flex flex-col gap-4 w-[400px] min-w-[400px] p-10 bg-slate-200 rounded-xl">
      <div className="flex w-full items-center gap-4">
        <div className="bg-blue-400 h-16 w-16 rounded-full">
          <div className="flex justify-center items-center h-full text-2xl text-slate-100">
            {letter}
          </div>
        </div>
        <div className="reviewer-name">
          {name}
          <br></br>
          <span style={{ opacity: 0.5 }}>{title}</span>
        </div>
      </div>
      <svg
        width="159"
        height="26"
        viewBox="0 0 159 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rating"
      >
        {" "}
        <path
          d="M145.336 21.7742L151.933 25.7642C153.141 26.4955 154.62 25.4145 154.302 24.0474L152.553 16.5443L158.387 11.4892C159.452 10.5672 158.88 8.81858 157.481 8.7073L149.803 8.05555L146.798 0.965712C146.258 -0.321904 144.414 -0.321904 143.873 0.965712L140.869 8.03965L133.191 8.69141C131.792 8.80268 131.22 10.5513 132.285 11.4733L138.119 16.5284L136.37 24.0315C136.052 25.3986 137.531 26.4796 138.739 25.7483L145.336 21.7742Z"
          fill="var(--accent)"
        ></path>{" "}
        <path
          d="M13.6026 21.7742L20.1996 25.7642C21.4077 26.4955 22.8861 25.4145 22.5682 24.0474L20.8196 16.5443L26.6536 11.4892C27.7186 10.5672 27.1464 8.81858 25.7475 8.7073L18.0695 8.05555L15.065 0.965712C14.5246 -0.321904 12.6806 -0.321904 12.1401 0.965712L9.13564 8.03965L1.45764 8.69141C0.0587495 8.80268 -0.513524 10.5513 0.55154 11.4733L6.38555 16.5284L4.63694 24.0315C4.31901 25.3986 5.79738 26.4796 7.00551 25.7483L13.6026 21.7742Z"
          fill="var(--accent)"
        ></path>{" "}
        <path
          d="M46.5357 21.7742L53.1327 25.7642C54.3408 26.4955 55.8192 25.4145 55.5013 24.0474L53.7527 16.5443L59.5867 11.4892C60.6517 10.5672 60.0795 8.81858 58.6806 8.7073L51.0026 8.05555L47.9981 0.965712C47.4577 -0.321904 45.6137 -0.321904 45.0732 0.965712L42.0687 8.03965L34.3907 8.69141C32.9919 8.80268 32.4196 10.5513 33.4846 11.4733L39.3187 16.5284L37.57 24.0315C37.2521 25.3986 38.7305 26.4796 39.9386 25.7483L46.5357 21.7742Z"
          fill="var(--accent)"
        ></path>{" "}
        <path
          d="M79.4693 21.7742L86.0663 25.7642C87.2744 26.4955 88.7528 25.4145 88.4349 24.0474L86.6863 16.5443L92.5203 11.4892C93.5853 10.5672 93.0131 8.81858 91.6142 8.7073L83.9362 8.05555L80.9317 0.965712C80.3913 -0.321904 78.5473 -0.321904 78.0068 0.965712L75.0023 8.03965L67.3243 8.69141C65.9254 8.80268 65.3532 10.5513 66.4182 11.4733L72.2523 16.5284L70.5036 24.0315C70.1857 25.3986 71.6641 26.4796 72.8722 25.7483L79.4693 21.7742Z"
          fill="var(--accent)"
        ></path>{" "}
        <path
          d="M112.402 21.7742L118.999 25.7642C120.208 26.4955 121.686 25.4145 121.368 24.0474L119.619 16.5443L125.453 11.4892C126.518 10.5672 125.946 8.81858 124.547 8.7073L116.869 8.05555L113.865 0.965712C113.324 -0.321904 111.48 -0.321904 110.94 0.965712L107.935 8.03965L100.257 8.69141C98.8586 8.80268 98.2863 10.5513 99.3513 11.4733L105.185 16.5284L103.437 24.0315C103.119 25.3986 104.597 26.4796 105.805 25.7483L112.402 21.7742Z"
          fill="var(--accent)"
        ></path>{" "}
      </svg>
      <p className="text-base leading-7">{text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-slate-50">
      <section
        id="testimonials"
        className="testimonials container py-10 pb-[500px]"
      >
        <h1 className="text-center mb-10">
          Our Students<strong className="font-bold"> ✦ Testimonials</strong>
        </h1>
        <div className="no-scrollbar flex px-4 xl:justify-center gap-4 overflow-auto w-screen left-0 absolute z-20">
          <Testimonial
            name="Anush"
            title="Student"
            text={`"Trader Club has been an invaluable resource for
my trading journey. The insights, tools, and
community support have helped me improve my
strategies and stay informed about market
trends. Highly recommended for both new and
experienced traders!"`}
          />
          <Testimonial
            name="Yashi"
            title="Trainee"
            text={`"I've been a member of Trader Club for over a
year now, and I can't imagine trading without it.
The platform is user-friendly, the educational
resources are top-notch, and the customer
support is always there to help. Joining Trader
Club was one of the best decisions I've made for
my trading career."`}
          />
          <Testimonial
            name="Akshay"
            title="Student"
            text={`"Trader Club is a game-changer for anyone
serious about trading. The platform's features
are designed to enhance your trading
experience, from advanced charting tools to
real-time market analysis. I've learned so much
and have seen significant improvements in my
trading performance since joining Trader Club."`}
          />
        </div>
      </section>
    </div>
  );
}
