import Header from '../../components/header/Header';
import './home.css';
// import Header from '../components/header/Header';

function Home() {
  return (
    <div class="container" >
      <Header/>
      <section class="page">
        Page one
      </section>
      <section class="page">
        Page two
      </section>
    </div>

  );
}

export default Home;
