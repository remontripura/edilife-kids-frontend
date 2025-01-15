import Provider from "@/components/provider/Provider";
import Footer from "@/components/ui/HeaderFooter/Footer/Footer";
import Navbar from "@/components/ui/HeaderFooter/Navbar/Navbar";
import { INavItem } from "@/types/navbarType/navbarType";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await fetch("http://admin.edulifekids.com/api/headers");
  const navItem: INavItem = await data.json();

  return (
    <div className="relative min-h-screen bg-deepSlate">
      {" "}
      <Provider>
        <Navbar navItem={navItem} />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default HomeLayout;
