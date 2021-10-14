import Link from "next/link";
import InlineForm from "../components/forms/InlineForm";
import { useRouter } from "next/router";
function FooterList({ title, list }) {
  return (
    <div className="mb-8 md:mb-0">
      <div className="text-2xl font-heading mb-4">{title}</div>
      <ul>
        {list.map((item, index) => {
          return (
            <li className="text-lg" key={index}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="border-t border-gray-300">
      {router.pathname !== "/contact" && (
        <div className="bg-teal">
          <div className="bumper md:flex py-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-white">
                <h2 className="heading-2">
                  Get your free handyman estimate today
                </h2>
                <p className="mb-8">
                  Fill in your information below to get in touch with an
                  handyman professional. We typically respond to most inquiries
                  the same day. Additionally, you can call us at{" "}
                  <a className="text-bright-blue">(951) 734-3070</a>
                </p>
                <InlineForm />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <iframe
                className="w-full md:h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.935797704124!2d-117.57051204954462!3d33.865545434898735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc80a398ed2b7%3A0x83e4bbae651ab4d1!2sHandyman%20Contractor!5e0!3m2!1sen!2sus!4v1634060636416!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="bumper md:flex py-10">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Link href="/">
            <a className="inline-block">
              <img
                className="h-12 mb-2"
                src="/images/logo.svg"
                alt="Handyman Contractor Logo"
              />
            </a>
          </Link>
          <div className="text-base">
            <p className="font-medium">Handyman Contractor</p>
            <p className="block mb-2">1512 S Main St, Corona, CA 92882</p>
            <a href="tel:9517343070" className="block">
              (951) 734-3070
            </a>
            <a href="mailto:contact@handymancontractor.com" className="block">
              contact@handymancontractor.com
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            <FooterList
              title="Pages"
              list={[
                { name: "About", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Projects", link: "/projects" },
                { name: "Contact", link: "/contact" },
              ]}
            />
            <FooterList
              title="Social"
              list={[
                {
                  name: "Google",
                  link: "https://www.google.com/maps/place/Handyman+Contractor/@33.8344676,-117.587589,13z/data=!4m9!1m2!2m1!1shandyman+contractor!3m5!1s0x80dcc80a398ed2b7:0x83e4bbae651ab4d1!8m2!3d33.865541!4d-117.568318!15sChNoYW5keW1hbiBjb250cmFjdG9ykgEUY29uc3RydWN0aW9uX2NvbXBhbnk",
                },
                {
                  name: "Yelp",
                  link: "https://www.yelp.com/biz/handyman-contractor-corona-2",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div id="subFooter" className="bg-gray-50 py-5">
        <div className="text-base bumper text-center md:text-left md:flex justify-between">
          <p>{new Date().getFullYear()} Handyman Contractor</p>
          <a href="https://squarematter.com">Built by Square Matter</a>
        </div>
      </div>
    </footer>
  );
}
