import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAllProjects } from "../lib/projects";
import { getAllServices } from "../lib/services";
import ServiceCatalog from "../components/ServiceCatalog";
import Projects from "../components/Projects";
import Head from "next/head";
const features = [
  {
    name: "Fast and reliable",
    description:
      "We get the job done quickly without cutting corners, ensuring you get quality results.",
  },
  {
    name: "Residential & Commercial",
    description:
      "Rest easy knowing we are bringing decades of experience to each project.",
  },
  {
    name: "Over 40 Years of Experience",
    description:
      "We can handle projects of all types and sizes, there is no project too big or small!",
  },
];
const Checkmark = () => {
  return (
    <svg
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.99 7.74"
      width="30"
      height="30"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path
            className="fill-current text-teal"
            d="M3.83,7.59a.55.55,0,0,1-.36.15.49.49,0,0,1-.36-.15L.22,4.71a.77.77,0,0,1,0-1.07l.37-.36a.76.76,0,0,1,1.07,0h0l1.8,1.79L8.33.22a.78.78,0,0,1,1.08,0l.37.36a.78.78,0,0,1,0,1.08Z"
            transform="translate(0 0)"
          />
        </g>
      </g>
    </svg>
  );
};
export default function Home({ projects, services }) {
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.handymancontractor.com",
    name: "Handyman Contractor",
    founder: "Chris Robles",
    foundingLocation: "Corona, CA",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1512 S. Main St.",
      addressLocality: "Corona",
      addressRegion: "CA",
      postalCode: "92882",
      addressCountry: "United States",
    },
    slogan: "We get the job done right, on time, and on budget.",
    url: "https://www.handymancontractor.com",
    email: "contact@handymancontractor.com",
    telephone: "(951) 734-3070",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Credit Card",
    hasMap:
      "https://www.google.com/maps?ll=33.865541,-117.568318&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=9503927471353541841",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "(951) 734-3070",
        contactType: "customer service",
        areaServed: ["Corona, CA"],
        availableLanguage: "English",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.865541",
      longitude: "-117.568318",
    },
    priceRange: "$$",
    openingHours: "Mo, Tu, We, Th, Fr 08:00-17:00 Sa 08:00-13:00",
  };

  return (
    <div id="content">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </Head>

      <NextSeo
        title=""
        description="A trusted handyman providing home repair, commercial services, and construction services in Inland Empire & Orange County. Get a free estimate today!"
        canonical="https://www.handymancontractor.com"
        openGraph={{
          title: "Handyman Contractor",
          description:
            "A trusted handyman providing home repair, commercial services, and construction services in Inland Empire & Orange County. Get a free estimate today!",
          url: "https://www.handymancontractor.com",
          type: "website",
          images: [
            {
              url: `https://www.handymancontractor.com/images/opengraph.jpg`,
            },
          ],
        }}
      />
      <section className="bg-cover bg-center relative">
        <div className="py-4 md:py-12 bumper relative z-10 max-w-screen-xl md:flex md:flex-row-reverse items-center">
          <div className="md:w-2/5">
            <div className="hero-photo-container mb-5 md:mb-0">
              <img
                className="hero-photo"
                src="/images/handyman-inland-empire-and-orange-county.jpg"
                alt="Handyman in Inland Empire and Orange County"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-heading font-bold text-center md:text-left">
              Handyman in Inland Empire & Orange County
            </h1>
            <p className="font-body font-light text-xl md:text-2xl xl:text-3xl text-center md:text-left mb-4">
              Over 40 years of experience in home improvement, repair, and
              construction.
            </p>
            <p className="font-bold text-2xl md:text-4xl mb-4 md:mb-8 text-center md:text-left">
              Call Us:{" "}
              <a href="tel:9517343070" className="link">
                (951) 734-3070
              </a>
            </p>
            <div>
              <Link href="/contact">
                <a className="button button--teal text-center block md:inline-block md:mr-4 mb-4 md:mb-0">
                  Get a Free Estimate
                </a>
              </Link>
              <Link href="/services">
                <a className="button text-center button--white block md:inline-block mb-4">
                  Explore Services
                </a>
              </Link>
            </div>
            <div className="text-base text-gray-500">
              Contractor's License #558374
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-12 md:py-24 bg-teal text-white relative bg-center"
        style={{ backgroundImage: "url('/images/tools.jpg')" }}
      >
        <div className="bumper">
          <div className="relative z-10 max-w-screen-md m-auto text-center">
            <p className="text-xl md:text-4xl mb-4">
              Finding a professional and trustworthy handyman is no simple task,
              that's why we started Handyman Contractor, a service that{" "}
              <b>get's the job done right, on time, and on budget</b>.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-70"
          style={{ backgroundColor: "#033664" }}
        ></div>
      </section>
      <section className="py-20">
        <div className="bumper max-w-screen-lg text-center">
          <h2 className="heading-2">
            ORANGE COUNTY & INLAND EMPIRE’S EXPERT HANDYMAN COMPANY
          </h2>
          <p className="mb-20">
            Our experts work on all types of home repairs and business repair
            and installations. So, whether your next project is big or small; on
            a home or commercial property, Handyman Contractor is your best
            choice among all handyman companies. Our experience and skill level
            mean that we can tackle any size project smoothly and efficiently.
            Contact one of the best Handyman companies today at{" "}
            <a className="link" href="tel:9517343070">
              (951) 734-3070
            </a>{" "}
            or get a{" "}
            <Link href="contact">
              <a className="link">FREE estimate online</a>
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="m-auto mb-4">
                <Checkmark />
              </div>
              <h3 className="heading-3 font-body">Fast and reliable</h3>
              <p>
                We get the job done quickly without cutting corners, ensuring
                you get quality results
              </p>
            </div>
            <div>
              <div className="m-auto mb-4">
                <Checkmark />
              </div>
              <h3 className="heading-3 font-body">40+ Years Experience</h3>
              <p>
                Rest easy knowing we are bringing decades of experience to each
                project.
              </p>
            </div>
            <div>
              <div className="m-auto mb-4">
                <Checkmark />
              </div>
              <h3 className="heading-3 font-body">Residential & Commercial</h3>
              <p>
                Our experience in the multiple industries means we understand
                the needs of all our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-dark-blue text-white bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/handyman-kitchen-remodel.jpg')",
        }}
      >
        <div className="bumper relative z-10">
          <div className="max-w-screen-sm m-auto text-center">
            <h2 className="heading-2">
              Need a handyman in Orange County or Inland Empire?
            </h2>
            <p className="mb-4">
              Are you looking for a “handyman near me”, we have the right
              professionals for handling all types and sizes of repair and
              installation jobs for homes and businesses.
            </p>
            <Link href="/contact">
              <a className="button button--bright-teal">Get a Free Estimate</a>
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-0  opacity-70"
          style={{ backgroundColor: "#033664" }}
        ></div>
      </section>
      <section className="bumper py-20">
        <div className="">
          <h2 className="heading-2">Our Services</h2>
        </div>
        <ServiceCatalog services={services} />
      </section>

      <section className="py-20">
        <div className="article bumper">
          <h2>
            Best handyman service in the Inland Empire and Orange County, CA
          </h2>
          <img
            className="inline w-full md:w-auto md:float-left pr-8 pb-8 max-w-md"
            src="/images/handyman-contractor-welding.jpg"
            alt=""
          />
          <p>
            Handyman Contractor is a unique father and son founded construction
            and home repair company based in Corona, California. We take pride
            in providing personal handyman services with family owned values
            while also delivering the professionality you'd come to expect from
            a big franchise. At Handyman Contractor we are happy to serve you by
            getting the job done right, on time and on budget.
          </p>
          <p>
            You will find no better handyman in Inland Empire or Orange County,
            CA than those at Handyman Contractor. We focus on providing a
            professional service for home improvement and repair, and can
            essentially handle any home repair, installation or maintenance
            service. In addition to our residential services we also offer both
            commercial handyman services and construction services involving
            tenant improvement and ground up construction.
          </p>
          <p>
            Our founder, Chris Robles, has been in the business for over 40
            years. In that time he has become a staple in the community
            delivering the best quality experience available. We have a simple
            motto at Handyman Contractor: We get the job done right, on time,
            and on budget!
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="bumper">
          <h2 className="heading-2">Our Projects</h2>
          <Projects projects={projects.slice(0, 3)} />
          <Link href="/projects">
            <a className="block font-bold text-xl text-center text-teal">
              View all projects
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  const services = await getAllServices();
  return {
    props: {
      projects: projects ? projects : [],
      services: services ? services : [],
    },
  };
}
