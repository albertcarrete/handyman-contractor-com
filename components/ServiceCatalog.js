import Link from "next/link";
import Head from "next/head";

export default function ServiceCatalog({ services }) {
  let structuredData = {
    "@context": "https://schema.org/",
    "@type": "Service",
    serviceType: "Handyman Services",
    provider: {
      "@type": "Handyman",
      name: "Handyman Contractor",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: [
        services.map((service) => {
          return {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${service.name}`,
            },
          };
        }),
      ],
    },
  };
  return (
    <div id="ServiceCatalog">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </Head>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {services.map((service, serviceIndex) => {
          return (
            <li
              key={serviceIndex}
              className="text-sm text-center inline-block p-6 border border-gray-200 text-gray-600"
            >
              <div className="text-black font-bold text-base">
                {service.name}
              </div>
              {/* <Link href={`/services/${service.slug}`}>
                <a className="block font-bold text-teal text-lg mb-1 hover:underline hover:text-bright-blue-dark">
                  {service.name}
                </a>
              </Link> */}
              <em>{service.fields.summary}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
