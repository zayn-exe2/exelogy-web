import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

type PageLayoutProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
};

export default function PageLayout({ children, hideFooter }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
