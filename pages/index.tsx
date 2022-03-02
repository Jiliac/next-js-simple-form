import type { NextPage } from "next";
import InfoForm from "../components/infoForm";

const Home: NextPage = () => {
  return (
    <div className="container mt-5 mb-3">
      <InfoForm />
    </div>
  );
};

export default Home;
