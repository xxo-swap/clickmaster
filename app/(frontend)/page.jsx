import Hero from "@/section/Hero";
import SelectedWork from "@/section/SelectedWork";
import MeetTheMen from "@/section/MeetTheMen";
import InquiryPage from "@/section/InquiryPage";
import Clients from "@/section/Clients";



const Home = () => {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Clients/>
      <InquiryPage/>
      <MeetTheMen />
    </main>
  );
};

export default Home;
