import MainNavBar from "@/components/MainNavBar/MainNavBar.tsx";
import "./HomePage.css";

export default function HomePage() {

  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="welcome-message">Hostd</h1>
        <MainNavBar />
      </header>
    </div>
  );
}