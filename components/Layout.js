import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
