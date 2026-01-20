
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Ventures } from './components/Ventures';
import { Portfolio } from './components/Portfolio';
import { Network } from './components/Network';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Network />
      <Services />
      <Ventures />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
