import MainHeader from "@/components/MainHeader/MainHeader.tsx";
import MainFooter from "@/components/MainFooter/MainFooter.tsx";
import HomePageBody from "@/components/HomePageBody/HomePageBody.tsx";
import "./HomePage.css";

export default function HomePage() {

  return (
    <div className="mainPage">
      <div className="hotelBackground" />
      <div className="pageContent">
        <MainHeader />
        <HomePageBody />
        <MainFooter />
      </div>
    </div>
  );
}