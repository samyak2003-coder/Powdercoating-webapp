import Header from "../components/header/Header";
import YellowButton from "../components/button/YellowButton";
import GreyButton from "../components/button/GreyButton";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-10">
        <YellowButton text="Main Page" href="/" />
        <GreyButton text="Database" href="/database" />
      </div>
      <Container />
    </>
  );
}
