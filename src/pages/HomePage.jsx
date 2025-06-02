import {
  Header,
  Hero,
  HomeContainer,
  PLayer,
  SideNav,
  SidePlayer,
} from "../components";

function HomePage() {
  return (
    <>
      <Header />
      <HomeContainer>
        <SideNav />
        <Hero />
        <SidePlayer />
      </HomeContainer>
      <PLayer />
    </>
  );
}

export default HomePage;
