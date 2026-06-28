import MainNavBar from "@/components/MainNavBar/MainNavBar.tsx";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header className="main-header">
      <h1 className="welcome-message">Hostd</h1>
      <MainNavBar />
    </header>
  );
}