import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Breadcrumbs({ links }) {
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebPage",
          "@id": process.env.NEXT_PUBLIC_URL,
          name: process.env.NEXT_PUBLIC_NAME,
          url: process.env.NEXT_PUBLIC_URL,
        },
      },
      links.map((link, index) => {
        return {
          "@type": "ListItem",
          position: index + 2,
          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_URL}${link.url}`,
            name: `${link.name}`,
            url: `${process.env.NEXT_PUBLIC_URL}${link.url}`,
          },
        };
      }),
    ],
  };
  return (
    <>
      <nav id="Breadcrumb" aria-label="Breadcrumb" className="breadcrumb">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          ></script>
        </Head>
        <div className="bumper">
          <ol>
            <li>
              <Link href="/">
                <a className="inline-block text-gray-700">Home</a>
              </Link>
            </li>
            {links.map((link, linkIndex) => {
              return (
                <li key={linkIndex}>
                  <Link href={link.url}>
                    {linkIndex < links.length - 1 ? (
                      <a>{link.name}</a>
                    ) : (
                      <a aria-current="page">{link.name}</a>
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      {/* Test world */}
    </>
  );
}
