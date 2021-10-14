import Link from "next/link";
import { NextSeo } from "next-seo";

function ContactConfirmationPage() {
  return (
    <div className="bumper py-20">
      <NextSeo title="Contact | Confirmation" noindex={true} />
      <div className="max-w-screen-sm m-auto text-center">
        <h1 className="beta mb-8">Thank you for contacting us</h1>
        <p className="text-lg font-body mb-4">
          We will respond to your message as soon as possible. If you are
          messaging us outside of our normal business hours please wait for a
          reply on the next business day.
        </p>
        <Link href="/">
          <a className="button button--black">Return to homepage</a>
        </Link>
      </div>
    </div>
  );
}

export default ContactConfirmationPage;
