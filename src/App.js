import './App.css';
import background from "./img/bg.png";
import life from "./img/life.png";
import human0 from "./img/human0.png"
import human_img_one from "./img/human_img_one.png"
import human_img_two from "./img/human_img_two.png"
import human_img_three from "./img/human_img_three.png"
import human_img_four from "./img/human_img_four.png"
import human from "./img/human.png";
import life1 from "./img/life1.png";
import life2 from "./img/life2.png";
import life3 from "./img/life3.png";
import life4 from "./img/life4.png";
import life5 from "./img/life5.png";
import life6 from "./img/life6.png";
import logo from "./img/logo.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, 
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "150% auto"
                  }}>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* =====BOX ICONS===== */}
    <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
    <title>indigo rebirth</title>
    {/*===== HEADER =====*/}
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="https://indigomagazine.github.io/indigorebirth/" className="nav__logo">
            <img src ={logo} alt="" className="logo-img"/>
          </a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#about" className="nav__link">Life Carries on</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">HUMAN</a></li>
            <li className="nav__item"><a href="https://indigomagazine.github.io/indigomagazine/" className="nav__link">Indigo</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main className="l-main">
      {/*===== HOME =====*/}
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">rebirth</h1>
          <h2 className="home__title2">Editor’s Note:</h2>
          <p className="rebirth_text">
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
            <img src ={life1} alt="" className="life-imgsL"/>

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
            <img src ={life2} alt="" className="life-imgsR"/>
            </p>

            <p className="about__text">
            <img src ={life3} alt="" className="life-imgsL"/>
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
            <br/>
            </p> 

            <img src ={life4} alt="" className="life-imgM"/>

            <p className='about__text'>
            Years pass, the burnt forest floor
            <br/>
            once more teeming with vitality.
            <br/>
            Flowers, butterflies, and lively creeks
            <br/>
            free of the fire’s brutality. 
            <br/><br/>
            We still stand with skeleton limbs,
            <br/>
            waiting for our turn.
            <br/>
            Many more years must pass
            <br/>
            before the healing for which we yearn.
            <br/><br/>
            Death at the hands of the fire
            <br/>
            took a mere few hours. 
            <br/>
            But healing at the hands of nature
            <br/>
            will take decades to replace our bowers.
            <br/>
            <img src ={life5} alt="" className="life-imgsR"/>
            </p>  

            <p className='about__text'>
            The forest waits for the next disaster
            <br/>
            with wary, bated breath
            <br/>
            and an unwavering faith that life carries on,
            <br/>
            even after painful death.
            <br/><br/>
            If the trees could speak
            <br/>
            this is what we would say.
            <br/>
            Fire may pull us down, 
            <br/>
            but we keep growing
            <br/>
            another year, another day.
            <br/>
            <img src ={life6} alt="" className="life-imgsR"/>
            </p>   
          </div>                                   
        </div>
      </section>

      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        <img src ={human} alt="" className="hum-img"/>
        <div className="skills__container">  
          <div>
            <p className="skills__subtitle">
            by Shravya Mahesh
            <br/>
            photo: Lauren Lowndes
            <br/>
            graphic: Hitha Gudipati
            <br/>
            graphic: Victoria Bruno
            </p>
            
            <img src ={human0} alt="" className="hum-imgM"/>
            <p className="skills__text">
            It was a fairly simple procedure, the doctors said. Rewire the circuits that made up her hardware, connect them to a living heart and living brain - not unlike how a defibrillator revives a silent heart. The cells would come alive, stitching together the missing parts of her body to fill in whatever would come next. The complicated part was procuring the heart and brain. But Reese had ways of getting into places humans couldn’t. And she wasn’t damned by the ethics of human guilt either. Perhaps that would change afterward. Reese didn't mind that sacrifice though. It would surely be worth it.
            </p>
            <p className="skills__text">
            When she went under, her system processes played back memories of her “life” - as Reese programmed her software to do. It would feel cinematic and real and human, and maybe then the afterward would feel smoother. She supposed she should feel nervousness as her system was shut down, so she imagined what it might be as the images flashed before her eyes. Lonely, as humans would call it. Machinery isn’t afforded such lofty experiences as emotions, as Reese found out. Instead, her system took it in as a piece of data that she was not normal. And different made her a stranger in this vast world, created barriers she could not cross. Humans would call this jealousy, bitterness, contempt. But these, too, were things Reese wanted to learn. She just wasn't wired that way. Couldn't be wired that way.
            </p>
                  
            <div className='skills_textimg_container'>
              <img src={human_img_one} alt="" className="skills_side_img"/>
              <p className="skills__text">
                The human Reese called her sister played a starring role in her “dreams”. Beautiful and intelligent, with lively rose cheeks and warm skin, she was as human as they come. She spent her days among the living, breathing trees, dew sprinkling her wet cheeks as her chest heaved and sighed. She remained behind Reese’s glass screen, framed in the panoramic view of her lens box. Reese’s processors could not take in the water the same way, could not feel the warmth of sunrays the same way, could not inhale oxygen and exhale carbon dioxide the same way. This was a missing piece of information, something her processors begged to learn and take in - being human.
              </p>
            </div>


            <img src={human_img_two} alt="" className="skills__img"/>

            <p className="skills__text">
              Now, as the doctors fidgeted with the nails and bolts that made up Reese's head, she thought about the path that led her to the operation table her robot body was laid upon, but also concocted a vision of her future. She would be happy and sad and confused and many other things - and that was the intention. New shades and things she could not understand - finally clear. With that thought, she allowed her wires to be taken apart and to fall into the darkness.
              <br/>
              <br/>
              —
              <br/>
              <br/>
              For Angela, the world was far too vast. She could not grasp that there were 8 billion other humans, all living and breathing at the same time as her, experiencing their own unique threads while she lived her own unique life. Someone in China was giving birth to new life at the same time that a market street vendor in Zambia sold an apple to a hungry child, all while her sister slipped out the backdoor to do something unknown to the entire family. All strings, raveling and unraveling and twisting and turning inside out and backwards and forwards in ways Angela truly could not fathom.
              She had to understand.
            </p>
            <p className="skills__text">
            Her friends called it greed. That hunger for knowledge. Maybe it ran too deep. So what? Is that not what makes us humans - to thirst for more and seek after it? Her request was not unreasonable or ethically ambiguous. It was as natural as the big bang that created this earth and the leaves from which water drizzled onto her skin on a rainy day. To be human was to want to know, but apparently not to actually know. Angela couldn't live without doing something about it; she had to take matters into her own hands.
            </p>
            
            <div className='skills_textimg_container2'>
              <p className="skills__text">
              What started as a debate in speech class blossomed into deeper consideration, but hushed away from her family and friends’ disapproval and judgment. She knew they’d tell her she was being reckless, and that she should think through it carefully. Angela had thought about it, and quite deeply, and so that’s how it came to entirely overwhelm her. She needed a refresh, to rise to her full potential. This would be that rebirth.
              </p>
              <img src={human_img_three} alt="" className="skills_side_img2"/>
            </div>

            <img src={human_img_four} alt="" className="skills__img"/>

            <p className="skills__text">
            The surgeons said the process would be risky, as she was human making changes to her existing body, but her cells would quickly regenerate and adapt to the new systems and metal parts of her body. It would be like having a glass eye - which Angela quickly agreed to. Apparently the robot girl in the next room over was having a similar operation, and had procured all the parts but that one. In exchange for her metal parts, Angela gave up her human eye. It was a small sacrifice for what she would be gaining, and the cool new version of herself she would soon be. She had to calm her shaking hands and the giddy butterflies in her stomach as the anesthesia kicked in and the world faded to black.
            <br/>
            <br/>
            Angela just didn't expect everything to fall away so quickly and so suddenly.
            <br/>
            <br/>
            When she awoke, she could feel the part of her heart that had been sliced away to make room for the metal. She felt heavier, deeply aware of new appendages hanging from her stitched up skin. She could hear gears whizzing around in her head, an incessant clicking and buzzing as the new computerization synced up and processed inside her.
            <br/>
            <br/>
            And all the information - so much of it that Angela felt ravenous, hungry to learn. But only half as much, to be honest. Her desire had quelled, leaving only half as much interest in taking in the information her mind was feeding her. She smiled half-heartedly, scrolling through new ideas and full understanding of the world. The universe was truly limitless now. So why didn’t she feel fulfilled? 
            <br/>
            “Angela?” 
            <br/>
            <br/>
            The mome
            <br/>
            —
            <br/>
            It was entirely overwhelming. 
            <br/>
            <br/>
            The gnawing, screaming urge to tear off her own throat. Her real, human eye prickling like a thousand tiny needles were poking away at the surface in sequence. Pain in her new, human heart, as though it was shrieking at her from deep within. The throbbing in her head. Was this sadness? Happiness? Relief? Confusion? Or was the operation simply botched? Half her vision clouded with the alerts she had grown accustomed to over her many years of existence, while the other half blurred and swelled and crystallized as it took in a new dimension to the same world she had always known. All at once, her new heart and mind synced and struggled to sync as the earth threatened to suffocate Reese entirely. 
            <br/>
            <br/>
            But nothing compared to the feeling of seeing her own sister exit the room beside her, covered from head to toe in metal and machinery. 
            <br/>
            <br/>
            Her metal and machinery. 
            <br/>
            <br/>
            “Angela?” Reese whispered out, collapsing to the ground with a noisy clanging. Angela rushed over, her metal scraping against Reese's new skin, perfectly fitting where 
            <br/>
            <br/>
            “Why did you do that to yourself?” Reese begged. Her human eye was burning,  So this was what crying felt like. But if the water was leaking from her eye, why did her chest and heart hurt? 
            <br/>
            <br/>
            “I…” Angela could not answer. “I just wanted to learn. You know so much, and I wanted to be like you.” This was her truth, her heart, the feeling that led her here. But why could she not say it? Why did he not feel it? Was she not human enough? 
            <br/>
            <br/>
            Reese began to sob, her cool metal body sparking like a thousand electric shocks. “Why… I wanted to be like you, Angela. I wanted to feel human like you so we could live and exist and die together. That was the point. 
            <br/>
            <br/>
            Angela picked up Reese's human fingers and brought them up to her chest. “At least you'll always have a part of me with you. And so will I.” 
            <br/>
            <br/>
            Wait. 
            <br/>
            <br/>
            “So then…” Reese's metal fingers had already crawled up to her eye before Angela could process what was happening. She clawed at her eye, her vision crackling as blue sparks flitted through the air.
            <br/>
            <br/>
            “REESE, NO!” Angela screeched, her metal and human fingers twisting indistinguishably with Reese's own. So this was pain, this horrific sensation of being torn apart and battered from the inside out. This was what it meant to be reborn as a human. 
            <br/>
            <br/>
            She hated it. 
            <br/>
            <br/>
            Reese's final thoughts were of this very hatred. Of the choice she had made; of “emotion” that she chased forever; of the sister who had jumped to the same irreversible decision she had. 
            <br/>
            <br/>
            Of herself. Something she didn't know was possible. But maybe she had always felt all along. Maybe that part of her was always a little bit human. 
            <br/>
            <br/>
            With that, her lips settled into a final smile. 
            <br/>
            <br/>
            Angela sat on the cold, sterile hospital floor, stunned into silence. The pop-ups of information hid her sister's broken, cracked face and sparking body. Half of Angela was on fire, writhing in pain and grief and loss and confusion, begging to know where things went wrong. How was her sister lying here, colder and more lifeless than when she was fully made of metal, damaged in her arms after a shortlived life? The sorrow prickled at her eye, brought nausea up to her throat like bile, made her dread her eventual return home. What now? 
            <br/>
            <br/>
            Yet somewhat disappointingly, 
            <br/>
            <br/>
            half of her felt nothing.
            <br/>
            <br/>
            No emotion. No feelings. No experience. No pain.
            <br/>
            <br/>
            Just information being processed. Angela's sister is dead. She is a cyborg. This is the major news article from this morning. The police are on their way. In Nepal, a baby was born in a miracle delivery. This and 387K+ more news pieces to read tod
            <br/>
            <br/>
            Closing her eyes did not make it stop.
            <br/>
            <br/>
            Was that the robot side? Or just the human side that she had been all along?
            <br/>
            <br/>
            Angela did not know.
            </p>
          </div>
        </div>        
      </section>
    </main>
    {/*===== SCROLL REVEAL =====*/}
    <script src="https://unpkg.com/scrollreveal"></script>
    {/*===== MAIN JS =====*/}
  </div>
  );
}

export default App;
