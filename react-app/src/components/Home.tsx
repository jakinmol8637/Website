interface HomeProps {
    name: string;
    tagline: string;
  }
  
  function Home({ name, tagline }: HomeProps) {
    return (
      <div className="home text-center">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    );
  }
  
  export default Home;