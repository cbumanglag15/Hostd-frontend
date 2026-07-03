import MainNavBar from "@/components/MainNavBar/MainNavBar.tsx";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <div className="main-header">
      <a href="/" className="logo-link">
        <img className="hostd-logo" src="/logos/hostd-logo.png" alt="Hostd Logo" />
      </a>
      <MainNavBar />
    </div>
  );
}
