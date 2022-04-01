import { getAllServices } from "../lib/services";
import ServiceCatalog from "../components/ServiceCatalog";
import Breadcrumbs from "../components/Breadcrumbs";
import { NextSeo } from "next-seo";

export default function ServicesPage({ services }) {
  return (
    <>
      <Breadcrumbs
        links={[
          {
            name: "Services",
            url: "/services",
          },
        ]}
      />
      <NextSeo
        title="Services"
        description="appliance repair, electric, HVAC, flooring, plumbing, remodels, and more. Get a free estimate!"
        canonical={`${process.env.NEXT_PUBLIC_URL}/services`}
        openGraph={{
          title: "Services",
          description:
            "appliance repair, electric, HVAC, flooring, plumbing, remodels, and more. Get a free estimate!",
          url: `${process.env.NEXT_PUBLIC_URL}/services`,
          type: "website",
        }}
      />
      <section className="bumper py-20">
        <div className="mb-10">
          <h1 className="heading-2">Our Services</h1>
          <p className="w-3/4 text-xl">
            We provide a wide range of services for both residential and
            commercial clients. With over 40 years of experience we've learned
            how to do a thing or two.
          </p>
        </div>
        {/* <section>
        <div className="w-1/2 mb-10">
          <h1 className="text-4xl font-heading font-medium mb-2">Services</h1>

        </div>
      </section> */}
        <ServiceCatalog services={services} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const services = await getAllServices();
  return {
    props: {
      services: services ? services : [],
    },
  };
}
