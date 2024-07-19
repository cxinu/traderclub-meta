function TickMark({ color }: { color?: string }) {
  return (
    <svg
      width="29"
      height="22"
      viewBox="0 0 29 22"
      fill="none"
      className="check-icon"
      data-astro-cid-j7pv25f6=""
    >
      <path
        d="M3 9.72308L11.1385 17.8615L26 3"
        {...(color ? { stroke: color } : { stroke: "var(--accent)" })}
        stroke-width="5.66154"
        data-astro-cid-j7pv25f6=""
      ></path>
    </svg>
  );
}

function ListItem({ p, color }: { p: string; color?: string }) {
  return (
    <div className="flex gap-4">
      <TickMark color={color} />
      <p>{p}</p>
    </div>
  );
}
export default function CourseSection() {
  return (
    <div className="bg-slate-100">
      <section id="courses" className="course container section">
        <h1 className="course__title">
          <strong>Courses ✦</strong> We Offer
        </h1>
        <div className="course__wrapper">
          <div className="course__card">
            <div>
              <h2>BASIC COURSE</h2>
              <div className="flex flex-col gap-6 mt-4">
                <ListItem p="Fundamental Analysis" />
                <ListItem p="Technical Analysis" />
              </div>
            </div>
            <h2 className="text-slate-600">₹14,999</h2>
          </div>
          <div className="course__card best-offer">
            <div>
              <h2>GOLD MEMBER PACKAGE</h2>
              <div className="flex flex-col gap-6 mt-4">
                <ListItem p="Fundamental Analysis" color="var(--background)" />
                <ListItem p="Technical Analysis" color="var(--background)" />
                <ListItem
                  p="Advance Technical Analysis"
                  color="var(--background)"
                />
                <ListItem p="Intraday Stocks Tips" color="var(--background)" />
                <ListItem p="Live Trading Hours" color="var(--background)" />
              </div>
            </div>
            <h2 className="flex justify-center">₹24,999</h2>
          </div>
          <div className="course__card">
            <div>
              <h2>ELITE TRADERS PROGRAM</h2>
              <div className="flex flex-col gap-6 mt-4">
                <ListItem p="Fundamental Analysis" />
                <ListItem p="Technical Analysis" />
                <ListItem p="Advance Technical Analysis" />
                <ListItem p="Intraday Stocks Tips" />
                <ListItem p="Live Trading Hours" />
                <ListItem p="Live Mentorship Program" />
              </div>
            </div>
            <h2 className="text-slate-600">₹29,999</h2>
          </div>
        </div>
        <div className="px-[16px] w-full sm:w-auto">
          <button className="btn btn--primary justify-center w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
