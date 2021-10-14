import { NextSeo } from "next-seo";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs
        links={[
          {
            name: "About",
            url: "/about",
          },
        ]}
      />
      <NextSeo
        title="About"
        description="	
        Learn about Handyman Contractor. We are the fast and reliable home and commercial repair and maintenance solution for you."
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          title: "About",
          description:
            "Learn about Handyman Contractor. We are the fast and reliable home and commercial repair and maintenance solution for you.",
          url: `${process.env.NEXT_PUBLIC_URL}/about`,
          type: "website",
        }}
      />
      <section
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/handyman-contractor-welding.jpg')",
        }}
      >
        <div className="relative z-10 bumper text-center py-20">
          <h1 className="text-4xl md:text-6xl font-heading text-white">
            About Us
          </h1>
        </div>
        <div className="absolute inset-0 bg-teal opacity-70"></div>
      </section>
      <section>
        <div className="bumper max-w-screen-md py-20 article">
          <p>
            Handyman Contractor is a father - son construction company that was
            founded with a few key principles; get the job done right, on time
            and on budget. Our company provides fast and reliable handyman
            services for both residential and larger commercial contracting
            projects.
          </p>
          <p>
            After seeing patchy handyman quality work and hearing about
            nightmare professional contractor stories over and over, we knew we
            could provide a much needed service. Professional work through an
            experienced company all at affordable and competitive prices.
          </p>
          <p>
            Handyman Contractor provides a wide array of services built up over
            three decades of experience. Currently we provide full service to
            the greater Inland Empire areas and larger remodel / addition
            projects to the Orange County areas.
          </p>
          <h2 className="text-4xl font-heading">
            The history of Handyman Contractor
          </h2>
          <p>
            Handyman Contractor serves the greater Orange County and Inland
            Empire areas with over 30 years building experience. Owner Chris
            Robles has developed a professional crew throughout his many years
            of development of both large and small projects to guarantee that
            our work is done right, on time and on budget.
          </p>
          <p>
            Son, Thomas Christopher has been raised on the job sites and has
            returned from Woodbury University burbank with a passion to make HC
            the next household trusted name. The combined skills of talent for
            design, architecture, and innovative ideas from Tom and the go to
            attitude of building experience from Chris; the teamwork is nothing
            but exceptional.
          </p>
        </div>
      </section>
    </div>
  );
}
