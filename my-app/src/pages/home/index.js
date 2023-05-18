import styles from "../../styles/Home.module.css";
import Navbar from "../../comps/Navbar";
import Time from "../../comps/Time";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="subcontainerbg">
        <Navbar />
        <div className={styles.bg}></div>
        <div className={styles.heading}>
          <h1>Push Forward</h1>
          <h2>Overcoming stagnant progress in racial justice </h2>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s1}>
            <div className={styles.headings1}>
              <h3>High Change:</h3>
              <h2 className={styles.rightalign}>The First 50 Years</h2>
            </div>
            <p>
              Progress toward equality for the black community in the first 50
              years of the fight against poverty, desegregation, and labor
              equity was significant. Since the early 1900s, America has made
              strides toward change through legislation like the New Deal, which
              aimed to address wage gaps and job discrimination faced by
              marginalized communities. However, despite continued efforts,
              progress made during this time period has not been matched in
              subsequent decades. This is concerning, as America should be
              making more progress now than it did when it first began its fight
              for equality. While laws have been enacted, they have not
              necessarily had the intended effect. It's possible that external
              factors like these laws have made people complacent, leading to
              less progress than was made during the 1900s. True progress
              towards equality will come from making internal, informal
              adjustments that impact people's everyday lives. This is a
              systemic issue that requires continued effort to address. It's
              important to remember that historically, the greatest progress
              toward equality was made when the movement had the least amount of
              support. America must work to adopt the same level of development
              in order to achieve true equality.
            </p>
          </div>
          <div className={styles.s2}>
            <div className={styles.scrolldown}></div>

            <Time
              eventName={"1941: World War II"}
              eventDescription={
                "African Americans served in WWII, challenging discrimination."
              }
            />
            <Time
              eventName={"1954: Brown v. Board"}
              eventDescription={"Ended school segregation."}
            />
            <Time
              eventName={"1955: Rosa Parks"}
              eventDescription={"Activist who sparked Montgomery Bus Boycott."}
            />
            <Time
              eventName={"1957: High School Integration"}
              eventDescription={"The desegregation of Central High School"}
            />
            <Time
              eventName={"1958: Loving v. Virginia"}
              eventDescription={"Struck down interracial marriage bans."}
            />
            <Time
              eventName={"1961: CORE and Freedom Rides"}
              eventDescription={
                "Organized integrated bus rides to challenge bus segregation."
              }
            />
            <Time
              eventName={'1963: "I Have A Dream"'}
              eventDescription={"MLK's iconic speech for equality."}
            />
            <Time
              eventName={"1964: Civil Rights Act"}
              eventDescription={
                "Banned discrimination in public facilities and employment."
              }
            />
            <Time
              eventName={"1965: Voting Rights Act"}
              eventDescription={"Protected African American voting rights."}
            />
            <Time
              eventName={"1968: Fair Housing Act"}
              eventDescription={"Prohibited housing discrimination."}
            />
            <Time
              eventName={"1978: Bakke Decision"}
              eventDescription={
                "Ruling on college admissions and affirmative action."
              }
            />
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s3}>
            <div className={styles.captionedimage}>
              <div className={styles.MartinLutherKing} />
              <h1 className={styles.caption}>Martin Luther King</h1>
            </div>
            <div className={styles.captionedimage}>
              <div className={styles.MalcomX} />
              <h1 className={styles.caption}>Malcom X</h1>
            </div>
          </div>
          <div className={styles.s1}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Influences</h2>
            </div>

            <p>
              One cannot be American and not know the legacy of Martin Luther
              King. One cannot have grown up in this country and not have heard
              the famous words, “I have a dream…” and feel the significance
              those words hold. But as children of America, it can be easy to
              believe that the issues and concepts that historical figures like
              Malcolm X and Dr King stood for no longer hold prevalence. Times
              have changed, Jim Crow laws have been outlawed, there are no
              longer “WHITE ONLY” signs hanging over restaurants and water
              fountains, and physically, segregation no longer exists in this
              country.
            </p>
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="accentedtext">
          <div className="redaccent" />
          <h2>Malcolm X’s Fiery Speech Addressing Police Brutality</h2>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6_uYWDyYNUg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s4}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Internet Racism</h2>
            </div>
          </div>
          <div className={styles.s4}>
            <div className={styles.phone}>
              <div className={styles.dotflashing} />
            </div>
          </div>
          <div className={styles.s4}>
            <p className={styles.internetracismp}>
              Since those first fifty years, we’ve entered a new era of
              revolutionary technology characterized by evolving norms of
              interaction and communication. Fighting against racism in this new
              age feels like being thrust into a boxing match without
              understanding the rules of how to win. Most notably, the advent of
              social media has changed the way racism permeates the cultural
              fabric of our society. While it has provided a platform for people
              of color to voice their opinions and garner substantial support
              for influential movements, it has also become a tool for
              privileged people in power to silence those same marginalized
              groups through various forms of censorship. This may manifest as
              reporting, deleting, and shadow banning accounts that have not
              actually violated any community guidelines but have simply
              offended those who disagree with their movement. It is essential
              to recognize the complex interplay between social media and
              racism, acknowledging both its potential for empowerment and the
              challenges it poses in terms of censorship and suppression. By
              understanding these dynamics, we can navigate this new terrain
              more effectively and work towards a more inclusive and just
              society.
            </p>
          </div>
        </div>
      </div>
      <div className="subcontainer">
        <div className="flexrow">
          <div className={styles.s4}>
            <div className={styles.footsteps} />
          </div>
          <div className={styles.s4}>
            <div className="accentedtext">
              <div className="redaccent" />
              <h2>Step Up Today, Change Tomorrow</h2>
            </div>
            <p>
              Since our lowest point in disregarding basic human rights, before
              voting rights and laws protecting people of color, we have made
              significant progress. This is not a complaint but a celebration of
              our unwavering commitment to achieving greater equality regardless
              of skin color. We have witnessed remarkable advancements over the
              past fifty years, proving that change is possible. However, change
              is an ambitious endeavor. Speaking out against the odds was
              uncomfortable then and it is uncomfortable now; that's why
              education is crucial. We need to familiarize ourselves with the
              current constraints and break free from them. This involves
              studying history, staying informed through the news, and
              connecting with supportive individuals. Only then can we be
              prepared to initiate the progress we envision for the future. We
              need to wake up from this period of idleness. If our current
              efforts are not effective, we must turn up the volume. We need to
              gather more support, go beyond signing petitions, and actively
              engage with elected officials, attend community meetings, and join
              organizations dedicated to racial justice. If what we are doing
              now is not enough, we must do more. Increase the noise and make it
              known that the time for change is now.
            </p>
            <div className={`${"btncontainer"} ${styles.btncontainermargin}`}>
              <Link to="https://docs.google.com/document/d/1tEgggIKFL2DkOSvg3i8yOxinVUFuhnSZfGTIVm-mPUw/edit?usp=sharing">
                <button className={"draw"}>Works Cited</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className={styles.codedby}>Coded And Designed By Salina Mu</p>
      </footer>
    </div>
  );
};

export default Home;
