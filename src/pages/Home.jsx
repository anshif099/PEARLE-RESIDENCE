import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ResortLiving from "../components/ResortLiving";
import Amenities from "../components/Amenities";
import ArtOfEveryday from "../components/ArtOfEveryday";
import StrategicLocation from "../components/StrategicLocation";
import PearlshireLegacy from "../components/PearlshireLegacy";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import EnquireModal from "../components/EnquireModal";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onEnquireClick={() => setIsModalOpen(true)} />
      <Hero />
      <ResortLiving />
      <Amenities />
      <ArtOfEveryday />
      <StrategicLocation />
      <PearlshireLegacy />
      <EnquireNow />
      <Footer />
      <WhatsAppButton />
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;