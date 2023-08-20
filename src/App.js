import './App.css';
import background from "./img/bg.png";
import life from "./img/life.png";
import human from "./img/human.png";



function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, 
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                  }}>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* =====BOX ICONS===== */}
    <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
    <title>Portfolio website complete</title>
    {/*===== HEADER =====*/}
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="/#" className="nav__logo">logo</a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Life Carries on</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">HUMAN</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Indigo</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"/>
        </div>
      </nav>
    </header>
    <main className="l-main">
      {/*===== HOME =====*/}
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">rebirth</h1>
          <h2 className="home__title2">Editor’s Note:</h2>
          <p className="about__text">
            Indigo was born in January, 2021. Since then, we have come out with approximately 5 issues. Every semester, we gain new momentum, learning from our past obstacles. Each issue Indigo has come out with is a true labor of love of marked by the incredible passion and dedication from students.
            <br/><br/>
            Our growth is a testament to the spirit of community and creativity at UT Dallas.
            <br/><br/>
            As we stand at this pivotal moment in our journey, we are excited to share that Indigo is undergoing a significant restructuring – a rebirth, if you will – that aims to elevate our publication to new heights while staying true to the essence that has made us who we are: For the students, by the students.
            <br/><br/>
            And now from our writers, REBIRTH.
            <br/><br/>
            -Hitha Gudipati, Editor-in-Chief


          </p>           
        </div>

      </section>
      {/*===== ABOUT =====*/}
      <section className="about section " id="about">
        <img src ={life} alt="" className="life-img"/>
        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="assets/img/about.jpg" alt="" />
          </div>
          <div>
            <p className="about__subtitle">
              by Saee Joshi
              <br/>
              photo: Keon Ohimai
              <br/>
              photo: Katheryn Ho
              <br/>
              graphic: Victoria Bruno
            </p>
            <p className="about__text">
            They say fire is the harbinger
            <br/>
            of light, warmth, and life.
            <br/>
            But they don’t mention it brings with it
            <br/>
            endless smoke, death, and strife.
            <br/><br/>
            It burns its way through destruction
            <br/>
            bright, hot, and loud.
            <br/>
            Until it disappears again,
            <br/>
            its remains covering us like a shroud.
            <br/><br/>
            The sky opens above us,
            <br/>
            weeping sorrow down straight.
            <br/>
            But it feels like a cruel joke
            <br/>
            too little and far too late. 
            <br/>
            </p>     
            <p className="about__text">
            Our brethren stand around us
            <br/>
            as far as the eye can see.
            <br/>
            Our limbs stretched to the sky
            <br/>
            in a desperate, silent plea. 
            <br/><br/>
            The forest stands silent now,
            <br/>
            not a sound to be heard.
            <br/>
            So full of life once upon a time,
            <br/>
            now not a creature stirred. 
            <br/><br/>
            The once mighty forest 
            <br/>
            now burnt and charred. 
            <br/>
            Its once lively inhabitants
            <br/>
            now timid and scarred.
            <br/>
            </p>

            <p className="about__text">
            Days crawl by 
            <br/>
            with no end in sight. 
            <br/>
            Until one day, somehow,
            <br/>
            we see a shred of light.
            <br/><br/>
            The smoke parts like a curtain
            <br/>
            and the sun reaches down. 
            <br/>
            And a hint of green emerges
            <br/>
            among the sea of black and brown.
            <br/><br/>
            It brings with it new hope,
            <br/>
            a cautious sign of rebirth. 
            <br/>
            Tiny, precious first creatures,
            <br/>
            and a reminder of our resilient earth.
            </p>      
          </div>                                   
        </div>
      </section>
      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        <img src ={human} alt="" className="life-img"/>
        <div className="skills__container">          
          <p>text</p>
        </div>        
      </section>
      {/*===== WORK =====*/}
      <section className="work section" id="work">
        <h2 className="section-title">nothin</h2>
        <div className="work__container bd-grid">
          
         
          
          
        </div>
      </section>
    </main>
    {/*===== FOOTER =====*/}
    <footer className="footer">
      <p className="footer__title">logo</p>
      <div className="footer__social">
        <a href="" className="footer__icon"><i className="bx bxl-linkedin" /></a>
        <a href="" className="footer__icon"><i className="bx bxl-github" /></a>
      </div>
      <p className="footer__copy"></p>
    </footer>
    {/*===== SCROLL REVEAL =====*/}
    <script src="https://unpkg.com/scrollreveal"></script>
    {/*===== MAIN JS =====*/}
  </div>
  );
}

export default App;
