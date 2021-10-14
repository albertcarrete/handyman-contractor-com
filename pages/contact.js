import Link from "next/link";
import ContactForm from "../components/forms/ContactForm";
import { NextSeo } from "next-seo";
import Breadcrumbs from "../components/Breadcrumbs";

export default function contactPage() {
  return (
    <div>
      <Breadcrumbs
        links={[
          {
            name: "Contact",
            url: "/contact-us",
          },
        ]}
      />
      <NextSeo
        title="Contact"
        description="Need home repair or improvements? Commercial or construction services? Schedule your service with Handyman Contractor in Inland Empire or Orange County."
        canonical={`${process.env.URL}/contact`}
        openGraph={{
          title: "Contact",
          description:
            "Need home repair or improvements? Commercial or construction services? Schedule your service with Handyman Contractor in Inland Empire or Orange County.",
          url: `${process.env.URL}/contact`,
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
            Contact Us
          </h1>
        </div>
        <div className="absolute inset-0 bg-teal opacity-70"></div>
      </section>

      <div className="bumper py-10 md:py-20">
        {/* <h1 className="text-4xl mb-8">Contact Us</h1> */}
        <div className="md:flex flex-row-reverse">
          <section className="w-full md:w-2/3">
            <ContactForm />
          </section>
          <section className="w-full md:w-1/3">
            <div className="font-bold font-heading text-2xl mb-4">
              Handyman Contractor
            </div>
            <p>1512 S Main St, Corona, CA 92882</p>
            <p className="mb-4">License #558374</p>
            <table className="table-auto mb-4">
              <tbody>
                <tr>
                  <td className="pr-5">
                    <b>Phone:</b>
                  </td>
                  <td>
                    <a
                      href="tel:9517343070
"
                    >
                      (951) 734-3070
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-xl mb-2">Hours (PST)</div>
            <table className="table-auto mb-4">
              <tbody>
                <tr>
                  <td className="pr-5">
                    <b>Mon-Fri:</b>
                  </td>
                  <td>8:00am - 5:00pm</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td>
                    <b>Saturday:</b>
                  </td>
                  <td>8:00am - 2:00pm</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td>
                    <b>Sunday:</b>
                  </td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}
