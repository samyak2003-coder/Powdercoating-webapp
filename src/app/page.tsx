import Header from "../components/header/Header";
import DbButton from "../components/button/DbButton";
import MainButton from "../components/button/MainButton";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-10">
          <MainButton />
          <DbButton />
      </div>
    </>
  );
}
