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
    <title>indigo rebirth</title>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at mauris vel leo commodo pulvinar id sed ex. Nunc luctus pharetra molestie. Proin sodales viverra arcu at rhoncus. Phasellus commodo magna augue, in consectetur nisl cursus a. Proin eget massa non quam accumsan cursus. Praesent convallis eleifend mi, ac finibus urna molestie a. Etiam imperdiet ultricies nunc in lacinia. Sed a dolor lacinia, mattis mauris sit amet, euismod dui. Sed rhoncus ante quis purus facilisis, at ultrices dolor venenatis. Sed porttitor, metus id porta fermentum, tortor lectus mattis ante, a accumsan quam lacus quis lectus. Duis justo dolor, porttitor non placerat a, porttitor id ante.

              Sed lectus tellus, rhoncus euismod sapien pulvinar, porttitor placerat nunc. Cras non orci sollicitudin neque pulvinar tincidunt. Maecenas pharetra velit odio, at finibus tortor laoreet ut. In venenatis ornare ex eu finibus. Vivamus at ante aliquam, aliquam ipsum at, venenatis massa. Suspendisse erat dui, faucibus id mi sed, porttitor tincidunt velit. Ut aliquet, orci in dapibus varius, est nisi vehicula dolor, vitae tempor orci eros ac sapien.

              Etiam ut porta ipsum, aliquam varius mauris. Ut nibh augue, aliquet id fringilla et, convallis sit amet urna. Sed quis quam auctor, interdum ipsum eu, dignissim tellus. Vestibulum tristique nibh quis efficitur porta. Integer a dui vel leo fringilla maximus. Nunc sed egestas lorem. Maecenas id nisi cursus, imperdiet tortor non, eleifend orci.

              Nullam ac scelerisque quam, in ultricies purus. Nam viverra eu tortor ac porttitor. Mauris tincidunt lorem et massa imperdiet, non condimentum metus tincidunt. Maecenas commodo, quam non maximus finibus, enim libero dignissim ante, sit amet aliquam lectus ex maximus mauris. Maecenas dignissim condimentum eros, eu imperdiet magna suscipit at. Etiam pharetra ornare est. Etiam ornare mollis felis, sit amet efficitur mi. Nam auctor, elit eu consequat mollis, nisl neque accumsan enim, nec condimentum nisl felis a ipsum. Curabitur quis leo placerat, iaculis urna ut, maximus libero. Donec nisl lectus, feugiat et ultricies eu, mollis sit amet tortor. Vivamus vel lectus et elit pharetra condimentum vitae in ligula. Nam consectetur elit fringilla arcu consectetur, vitae venenatis velit tincidunt. Vivamus pellentesque lacinia dolor sed hendrerit. Nunc vestibulum ligula nec libero semper consequat.

              Nunc mattis, risus ac rutrum convallis, nisl justo egestas orci, vel interdum nibh dolor et tellus. Praesent magna orci, consectetur et risus ac, gravida tincidunt ante. Nulla non lorem et sem lobortis tincidunt sed quis sapien. Proin dapibus neque nec arcu hendrerit sodales. Donec sodales enim at gravida viverra. Ut vestibulum condimentum sapien, vitae finibus nisi ultrices nec. Nulla diam tortor, tempor vitae porta porttitor, vestibulum nec turpis. Nullam vel velit eget dui tristique consectetur id vitae odio. Aenean non commodo ligula. Integer eros neque, commodo quis ullamcorper quis, eleifend eu lorem.

              Nam dignissim erat pharetra, sagittis lacus sed, lobortis eros. Proin facilisis, nisi in dapibus finibus, sapien felis sagittis elit, ac porta elit quam ac massa. Donec ac porttitor purus, a semper lectus. Sed feugiat convallis fringilla. Nulla interdum tincidunt diam auctor bibendum. Nulla vehicula lacus vel tortor cursus cursus. Nulla aliquet dui at tellus dignissim, sed rutrum diam ornare. Mauris faucibus orci non est tempus, nec eleifend mauris tincidunt.

              In in nibh eget nisl pharetra imperdiet. Praesent at tincidunt quam. Maecenas ut imperdiet justo. Praesent nec pellentesque purus, ut semper nulla. Integer fermentum sem vel metus feugiat pretium non quis leo. Aenean rhoncus accumsan posuere. Donec a facilisis quam. Sed euismod massa sed faucibus pellentesque. Aliquam suscipit lobortis justo ut vestibulum. Pellentesque ac massa sit amet dolor fringilla elementum. Vivamus imperdiet dui mauris, eget condimentum turpis pharetra a. Aenean volutpat sodales faucibus. Pellentesque dapibus arcu mi. Maecenas condimentum mauris nisl, ut lacinia urna malesuada non. Vestibulum accumsan vel felis id ultrices.

              Fusce at lectus convallis, bibendum mauris non, ornare ex. Vivamus tristique augue sit amet dolor vestibulum, eget mattis erat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae maximus felis. Suspendisse condimentum est vitae nisi faucibus tincidunt. Phasellus tempor, tortor eget blandit lacinia, neque eros tincidunt libero, vitae lacinia dolor ex quis nulla. Donec ac pharetra lacus, pharetra pharetra lorem. Suspendisse potenti. Curabitur condimentum molestie leo, a aliquet risus. Donec velit mi, consectetur rhoncus risus rhoncus, sodales pulvinar dui. Ut tortor sem, suscipit vitae lorem id, pellentesque efficitur nunc.

              Integer vitae tempus nisl. Maecenas et risus nec orci ultrices maximus a eget tellus. Integer elementum dolor eget sem dapibus ultricies. Donec lacus ipsum, aliquet a venenatis eget, egestas et mauris. Nunc imperdiet id urna in tempus. Donec id dapibus massa. Integer tristique, mauris nec fermentum pellentesque, ante velit pretium libero, vitae tincidunt arcu eros et turpis. Sed tellus justo, sagittis at volutpat eget, euismod sed metus. Nullam tempus tortor sit amet massa blandit bibendum. Praesent laoreet aliquet lectus ut maximus. Etiam iaculis interdum magna eu pellentesque.

              Integer at ultrices sapien, eu rhoncus massa. Quisque cursus nulla venenatis, viverra risus in, volutpat elit. Cras elementum pulvinar enim consequat mollis. Praesent molestie elit mi, ut pellentesque elit facilisis pellentesque. Suspendisse justo sem, dictum nec molestie at, pulvinar quis erat. Maecenas porta sapien quis neque euismod, scelerisque auctor risus bibendum. Quisque dignissim tempor massa nec viverra. Pellentesque pharetra leo vel malesuada varius. Cras efficitur semper orci. Aenean sed convallis ex, malesuada imperdiet mi. Sed feugiat nibh lectus.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at mauris vel leo commodo pulvinar id sed ex. Nunc luctus pharetra molestie. Proin sodales viverra arcu at rhoncus. Phasellus commodo magna augue, in consectetur nisl cursus a. Proin eget massa non quam accumsan cursus. Praesent convallis eleifend mi, ac finibus urna molestie a. Etiam imperdiet ultricies nunc in lacinia. Sed a dolor lacinia, mattis mauris sit amet, euismod dui. Sed rhoncus ante quis purus facilisis, at ultrices dolor venenatis. Sed porttitor, metus id porta fermentum, tortor lectus mattis ante, a accumsan quam lacus quis lectus. Duis justo dolor, porttitor non placerat a, porttitor id ante.

              Sed lectus tellus, rhoncus euismod sapien pulvinar, porttitor placerat nunc. Cras non orci sollicitudin neque pulvinar tincidunt. Maecenas pharetra velit odio, at finibus tortor laoreet ut. In venenatis ornare ex eu finibus. Vivamus at ante aliquam, aliquam ipsum at, venenatis massa. Suspendisse erat dui, faucibus id mi sed, porttitor tincidunt velit. Ut aliquet, orci in dapibus varius, est nisi vehicula dolor, vitae tempor orci eros ac sapien.

              Etiam ut porta ipsum, aliquam varius mauris. Ut nibh augue, aliquet id fringilla et, convallis sit amet urna. Sed quis quam auctor, interdum ipsum eu, dignissim tellus. Vestibulum tristique nibh quis efficitur porta. Integer a dui vel leo fringilla maximus. Nunc sed egestas lorem. Maecenas id nisi cursus, imperdiet tortor non, eleifend orci.

              Nullam ac scelerisque quam, in ultricies purus. Nam viverra eu tortor ac porttitor. Mauris tincidunt lorem et massa imperdiet, non condimentum metus tincidunt. Maecenas commodo, quam non maximus finibus, enim libero dignissim ante, sit amet aliquam lectus ex maximus mauris. Maecenas dignissim condimentum eros, eu imperdiet magna suscipit at. Etiam pharetra ornare est. Etiam ornare mollis felis, sit amet efficitur mi. Nam auctor, elit eu consequat mollis, nisl neque accumsan enim, nec condimentum nisl felis a ipsum. Curabitur quis leo placerat, iaculis urna ut, maximus libero. Donec nisl lectus, feugiat et ultricies eu, mollis sit amet tortor. Vivamus vel lectus et elit pharetra condimentum vitae in ligula. Nam consectetur elit fringilla arcu consectetur, vitae venenatis velit tincidunt. Vivamus pellentesque lacinia dolor sed hendrerit. Nunc vestibulum ligula nec libero semper consequat.

              Nunc mattis, risus ac rutrum convallis, nisl justo egestas orci, vel interdum nibh dolor et tellus. Praesent magna orci, consectetur et risus ac, gravida tincidunt ante. Nulla non lorem et sem lobortis tincidunt sed quis sapien. Proin dapibus neque nec arcu hendrerit sodales. Donec sodales enim at gravida viverra. Ut vestibulum condimentum sapien, vitae finibus nisi ultrices nec. Nulla diam tortor, tempor vitae porta porttitor, vestibulum nec turpis. Nullam vel velit eget dui tristique consectetur id vitae odio. Aenean non commodo ligula. Integer eros neque, commodo quis ullamcorper quis, eleifend eu lorem.

              Nam dignissim erat pharetra, sagittis lacus sed, lobortis eros. Proin facilisis, nisi in dapibus finibus, sapien felis sagittis elit, ac porta elit quam ac massa. Donec ac porttitor purus, a semper lectus. Sed feugiat convallis fringilla. Nulla interdum tincidunt diam auctor bibendum. Nulla vehicula lacus vel tortor cursus cursus. Nulla aliquet dui at tellus dignissim, sed rutrum diam ornare. Mauris faucibus orci non est tempus, nec eleifend mauris tincidunt.

              In in nibh eget nisl pharetra imperdiet. Praesent at tincidunt quam. Maecenas ut imperdiet justo. Praesent nec pellentesque purus, ut semper nulla. Integer fermentum sem vel metus feugiat pretium non quis leo. Aenean rhoncus accumsan posuere. Donec a facilisis quam. Sed euismod massa sed faucibus pellentesque. Aliquam suscipit lobortis justo ut vestibulum. Pellentesque ac massa sit amet dolor fringilla elementum. Vivamus imperdiet dui mauris, eget condimentum turpis pharetra a. Aenean volutpat sodales faucibus. Pellentesque dapibus arcu mi. Maecenas condimentum mauris nisl, ut lacinia urna malesuada non. Vestibulum accumsan vel felis id ultrices.

              Fusce at lectus convallis, bibendum mauris non, ornare ex. Vivamus tristique augue sit amet dolor vestibulum, eget mattis erat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae maximus felis. Suspendisse condimentum est vitae nisi faucibus tincidunt. Phasellus tempor, tortor eget blandit lacinia, neque eros tincidunt libero, vitae lacinia dolor ex quis nulla. Donec ac pharetra lacus, pharetra pharetra lorem. Suspendisse potenti. Curabitur condimentum molestie leo, a aliquet risus. Donec velit mi, consectetur rhoncus risus rhoncus, sodales pulvinar dui. Ut tortor sem, suscipit vitae lorem id, pellentesque efficitur nunc.

              Integer vitae tempus nisl. Maecenas et risus nec orci ultrices maximus a eget tellus. Integer elementum dolor eget sem dapibus ultricies. Donec lacus ipsum, aliquet a venenatis eget, egestas et mauris. Nunc imperdiet id urna in tempus. Donec id dapibus massa. Integer tristique, mauris nec fermentum pellentesque, ante velit pretium libero, vitae tincidunt arcu eros et turpis. Sed tellus justo, sagittis at volutpat eget, euismod sed metus. Nullam tempus tortor sit amet massa blandit bibendum. Praesent laoreet aliquet lectus ut maximus. Etiam iaculis interdum magna eu pellentesque.

            </p>
          </div>
        </div>        
      </section>

      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        <img src ={human} alt="" className="life-img"/>
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
            <p className="skills__text">
            It was a fairly simple procedure, the doctors said. Rewire the circuits that made up her hardware, connect them to a living heart and living brain - not unlike how a defibrillator revives a silent heart. The cells would come alive, stitching together the missing parts of her body to fill in whatever would come next. The complicated part was procuring the heart and brain. But Reese had ways of getting into places humans couldn’t. And she wasn’t damned by the ethics of human guilt either. Perhaps that would change afterward. Reese didn't mind that sacrifice though. It would surely be worth it.
            </p>
            <p className="skills__text">
            When she went under, her system processes played back memories of her “life” - as Reese programmed her software to do. It would feel cinematic and real and human, and maybe then the afterward would feel smoother. She supposed she should feel nervousness as her system was shut down, so she imagined what it might be as the images flashed before her eyes. Lonely, as humans would call it. Machinery isn’t afforded such lofty experiences as emotions, as Reese found out. Instead, her system took it in as a piece of data that she was not normal. And different made her a stranger in this vast world, created barriers she could not cross. Humans would call this jealousy, bitterness, contempt. But these, too, were things Reese wanted to learn. She just wasn't wired that way. Couldn't be wired that way.
            </p>
            <img src="../src/human_img_one" alt="" className="life_img"/>
            <p className="skills__text">
            The human Reese called her sister played a starring role in her “dreams”. Beautiful and intelligent, with lively rose cheeks and warm skin, she was as human as they come. She spent her days among the living, breathing trees, dew sprinkling her wet cheeks as her chest heaved and sighed. She remained behind Reese’s glass screen, framed in the panoramic view of her lens box. Reese’s processors could not take in the water the same way, could not feel the warmth of sunrays the same way, could not inhale oxygen and exhale carbon dioxide the same way. This was a missing piece of information, something her processors begged to learn and take in - being human. 
            </p>
            <img src={"../src/human_img_two"} alt="" className="life_img"/>
            <p className="skills__text">
            Now, as the doctors fidgeted with the nails and bolts that made up Reese's head, she thought about the path that led her to the operation table her robot body was laid upon, but also concocted a vision of her future. She would be happy and sad and confused and many other things - and that was the intention. New shades and things she could not understand - finally clear. With that thought, she allowed her wires to be taken apart and to fall into the darkness.
            </p>
            <p className="skills__text">
              <br/>
              —
              <br/>
              For Angela, the world was far too vast. She could not grasp that there were 8 billion other humans, all living and breathing at the same time as her, experiencing their own unique threads while she lived her own unique life. Someone in China was giving birth to new life at the same time that a market street vendor in Zambia sold an apple to a hungry child, all while her sister slipped out the backdoor to do something unknown to the entire family. All strings, raveling and unraveling and twisting and turning inside out and backwards and forwards in ways Angela truly could not fathom.
              She had to understand.
            </p>
            <p className="skills__text">
            Her friends called it greed. That hunger for knowledge. Maybe it ran too deep. So what? Is that not what makes us humans - to thirst for more and seek after it? Her request was not unreasonable or ethically ambiguous. It was as natural as the big bang that created this earth and the leaves from which water drizzled onto her skin on a rainy day. To be human was to want to know, but apparently not to actually know. Angela couldn't live without doing something about it; she had to take matters into her own hands.
            </p>
            <p className="skills__text">
            What started as a debate in speech class blossomed into deeper consideration, but hushed away from her family and friends’ disapproval and judgment. She knew they’d tell her she was being reckless, and that she should think through it carefully. Angela had thought about it, and quite deeply, and so that’s how it came to entirely overwhelm her. She needed a refresh, to rise to her full potential. This would be that rebirth.
            </p>
            <img src="../src/human_img_three" alt="" className="life_img"/>
            <img src="../src/human_img_four" alt="" className="life_img"/>

            <p className="skills__text">
            The surgeons said the process would be risky, as she was human making changes to her existing body, but her cells would quickly regenerate and adapt to the new systems and metal parts of her body. It would be like having a glass eye - which Angela quickly agreed to. Apparently the robot girl in the next room over was having a similar operation, and had procured all the parts but that one. In exchange for her metal parts, Angela gave up her human eye. It was a small sacrifice for what she would be gaining, and the cool new version of herself she would soon be. She had to calm her shaking hands and the giddy butterflies in her stomach as the anesthesia kicked in and the world faded to black.
            <br/>

            Angela just didn't expect everything to fall away so quickly and so suddenly.
            <br/>

            When she awoke, she could feel the part of her heart that had been sliced away to make room for the metal. She felt heavier, deeply aware of new appendages hanging from her stitched up skin. She could hear gears whizzing around in her head, an incessant clicking and buzzing as the new computerization synced up and processed inside her.
            <br/>
            And all the information - so much of it that Angela felt ravenous, hungry to learn. But only half as much, to be honest. Her desire had quelled, leaving only half as much interest in taking in the information her mind was feeding her. She smiled half-heartedly, scrolling through new ideas and full understanding of the world. The universe was truly limitless now. So why didn’t she feel fulfilled? 
            “Angela?” 
            <br/>
            The mome
            <br/>
            —
            <br/>
            It was entirely overwhelming. 
            <br/>
            The gnawing, screaming urge to tear off her own throat. Her real, human eye prickling like a thousand tiny needles were poking away at the surface in sequence. Pain in her new, human heart, as though it was shrieking at her from deep within. The throbbing in her head. Was this sadness? Happiness? Relief? Confusion? Or was the operation simply botched? Half her vision clouded with the alerts she had grown accustomed to over her many years of existence, while the other half blurred and swelled and crystallized as it took in a new dimension to the same world she had always known. All at once, her new heart and mind synced and struggled to sync as the earth threatened to suffocate Reese entirely. 
            <br/>
            But nothing compared to the feeling of seeing her own sister exit the room beside her, covered from head to toe in metal and machinery. 
            <br/>
            Her metal and machinery. 
            <br/>
            “Angela?” Reese whispered out, collapsing to the ground with a noisy clanging. Angela rushed over, her metal scraping against Reese's new skin, perfectly fitting where 
            <br/>
            “Why did you do that to yourself?” Reese begged. Her human eye was burning,  So this was what crying felt like. But if the water was leaking from her eye, why did her chest and heart hurt? 
            <br/>
            “I…” Angela could not answer. “I just wanted to learn. You know so much, and I wanted to be like you.” This was her truth, her heart, the feeling that led her here. But why could she not say it? Why did he not feel it? Was she not human enough? 
            <br/>
            Reese began to sob, her cool metal body sparking like a thousand electric shocks. “Why… I wanted to be like you, Angela. I wanted to feel human like you so we could live and exist and die together. That was the point. 
            <br/>
            Angela picked up Reese's human fingers and brought them up to her chest. “At least you'll always have a part of me with you. And so will I.” 
            <br/>
            Wait. 
            <br/>
            “So then…” Reese's metal fingers had already crawled up to her eye before Angela could process what was happening. She clawed at her eye, her vision crackling as blue sparks flitted through the air.
            <br/>
            “REESE, NO!” Angela screeched, her metal and human fingers twisting indistinguishably with Reese's own. So this was pain, this horrific sensation of being torn apart and battered from the inside out. This was what it meant to be reborn as a human. 
            <br/>
            She hated it. 
            <br/>
            Reese's final thoughts were of this very hatred. Of the choice she had made; of “emotion” that she chased forever; of the sister who had jumped to the same irreversible decision she had. 
            <br/>
            Of herself. Something she didn't know was possible. But maybe she had always felt all along. Maybe that part of her was always a little bit human. 
            <br/>
            With that, her lips settled into a final smile. 
            <br/>
            Angela sat on the cold, sterile hospital floor, stunned into silence. The pop-ups of information hid her sister's broken, cracked face and sparking body. Half of Angela was on fire, writhing in pain and grief and loss and confusion, begging to know where things went wrong. How was her sister lying here, colder and more lifeless than when she was fully made of metal, damaged in her arms after a shortlived life? The sorrow prickled at her eye, brought nausea up to her throat like bile, made her dread her eventual return home. What now? 
            <br/>
            Yet somewhat disappointingly, 
            <br/>
            half of her felt nothing.
            <br/>
            No emotion. No feelings. No experience. No pain.
            <br/>
            Just information being processed. Angela's sister is dead. She is a cyborg. This is the major news article from this morning. The police are on their way. In Nepal, a baby was born in a miracle delivery. This and 387K+ more news pieces to read tod
            <br/>
            Closing her eyes did not make it stop.
            <br/>
            Was that the robot side? Or just the human side that she had been all along?
            <br/>
            Angela did not know.
            </p>
          </div>
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
