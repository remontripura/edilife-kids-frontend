import Provider from "@/components/provider/Provider";
import Footer from "@/components/ui/HeaderFooter/Footer/Footer";
import Navbar from "@/components/ui/HeaderFooter/Navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-deepSlate">
      {" "}
      <Provider>
        <Navbar />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default HomeLayout;
