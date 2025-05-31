import { Header, Hero, HomeContainer, PLayer, SideNav } from "../components";

function HomePage() {
  return (
    <>
      <Header />
      <HomeContainer>
        <SideNav />
        <Hero />
      </HomeContainer>
      <PLayer />
    </>
  );
}

export default HomePage;
