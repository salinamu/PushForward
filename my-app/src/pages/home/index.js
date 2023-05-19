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
          <h2>Overcoming Stagnant Progress In Racial Justice </h2>
        </div>
      </div>
      <div className="subcontainer">
        <div className={styles.headings1}>
          <h2>
            To What Extent Has Racism Externally Evolved Through Time, Yet How
            Has It Also Remained the Same?
          </h2>
          <p>
            The Civil Rights Movement stands as a testament to the collective
            determination to forge a society free from the shackles of racial
            inequality. Yet, as we survey the landscape of our present reality,
            we must confront a disheartening truth: the quest for true racial
            equality remains an unfinished battle. Regrettably, discrimination
            has persisted and continues to be deeply ingrained in our systems
            and structures. Even the advent of social media, a platform that
            promised to unite and amplify voices, has not eradicated this
            scourge entirely; on the contrary, it has only allowed racism to
            take on new alarming forms that we have yet to address. The insights
            of influential leaders such as Malcolm X and Martin Luther King Jr.
            are as pertinent today as they were in the past, serving as a
            reminder of the work that still needs to be accomplished. It is
            imperative that we take decisive action to confront and dismantle
            systemic inequities through candid conversations, self-reflection,
            and tangible actions. By acknowledging our past and working towards
            a future of genuine equality and justice, we can liberate ourselves
            from the shackles of racism.
          </p>
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
              Are we truly making progress in the fight for racial equality?
              When we examine the history of the black community's struggle
              against poverty, desegregation, and labor inequity, it becomes
              evident that the most significant advancements were made within
              the first 50 years of this arduous battle. Beginning in the early
              1900s, America witnessed a surge of change, spurred by legislative
              efforts like the New Deal, aimed at promoting economic freedoms
              and job opportunities for marginalized communities. While these
              positive trends continued to some extent from the 1940s to the
              1970s, we have since witnessed a slowdown in the rate of progress.
              Astonishingly, it seems that America achieved greater advancements
              when starting from base 1, rather than building upon the
              foundations that have been laid over the years. This discrepancy
              is disconcerting, especially considering the abundant resources
              and broader support available to the movement today. Despite
              heightened attention and awareness surrounding the fight for
              racial equality, the actual change experienced has been
              disappointingly minimal. Perhaps part of the reason for this
              disparity lies in the fact that while laws and precedents have
              been established to promote equity, they have failed to address
              the root causes of ongoing discrimination, protests, and riots
              that we continue to witness in America today. The Black Lives
              Matter movement and the tragic events surrounding George Floyd are
              stark reminders of this sobering reality. True progress lies not
              merely in enacting laws, but in effecting internal, informal
              adjustments that elevate equality. It is worth noting that
              historically, the greatest strides toward racial equality were
              made when the movement had the least support. Today, we find
              ourselves in a paradoxical situation where America has failed to
              maintain the same momentum of development. It is imperative that
              we recognize this stagnation and recommit ourselves to the pursuit
              of genuine change. We must strive for the internal shifts
              necessary to dismantle systemic racism and foster a society where
              equality is not just a lofty ideal, but a lived reality for all.
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
              Are we truly making progress in the fight for racial equality?
              When we examine the history of the black community's struggle
              against poverty, desegregation, and labor inequity, it becomes
              evident that the most significant advancements were made within
              the first 50 years of this arduous battle. Beginning in the early
              1900s, America witnessed a surge of change, spurred by legislative
              efforts like the New Deal, aimed at promoting economic freedoms
              and job opportunities for marginalized communities. While these
              positive trends continued to some extent from the 1940s to the
              1970s, we have since witnessed a slowdown in the rate of progress.
              Astonishingly, it seems that America achieved greater advancements
              when starting from base 1, rather than building upon the
              foundations that have been laid over the years. This discrepancy
              is disconcerting, especially considering the abundant resources
              and broader support available to the movement today. Despite
              heightened attention and awareness surrounding the fight for
              racial equality, the actual change experienced has been
              disappointingly minimal. Perhaps part of the reason for this
              disparity lies in the fact that while laws and precedents have
              been established to promote equity, they have failed to address
              the root causes of ongoing discrimination, protests, and riots
              that we continue to witness in America today. The Black Lives
              Matter movement and the tragic events surrounding George Floyd are
              stark reminders of this sobering reality. True progress lies not
              merely in enacting laws, but in effecting internal, informal
              adjustments that elevate equality. It is worth noting that
              historically, the greatest strides toward racial equality were
              made when the movement had the least support. Today, we find
              ourselves in a paradoxical situation where America has failed to
              maintain the same momentum of development. It is imperative that
              we recognize this stagnation and recommit ourselves to the pursuit
              of genuine change. We must strive for the internal shifts
              necessary to dismantle systemic racism and foster a society where
              equality is not just a lofty ideal, but a lived reality for all.
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
              ​​In a world where technology has propelled us into unprecedented
              realms of connectivity, we find ourselves facing a paradox. The
              advent of social media, with its promise of fostering
              communication and understanding, has also become a double-edged
              sword, deepening the wounds of racism. As we navigate this new era
              of revolutionary technology, we are confronted with a stark
              reality—a reality where the struggle against racism takes on a
              perplexing form, comparable to stepping into a boxing ring without
              understanding the rules of engagement. It is a realm where people
              of color find strength and solidarity yet also an opportunity for
              privileged wielders of power to exploit their advantage to silence
              the very voices they claim to protect. Black organizations are
              sometimes reported for violating community guidelines, not because
              they have violated any rules, but because a user disagrees with
              their cause. This leads to detrimental consequences such as shadow
              banning, deleted profiles, and removal of content, with little
              means for these organizations to fight back. In this era of
              instant connection and global reach, racial hatred spreads like
              wildfire, hindering progress. The question then arises: How can we
              confront this complex interplay between social media and racism
              and build a digital landscape that fosters inclusion, equity, and
              safety for all?
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
              As a society, we have made significant strides toward achieving
              equality for people of color. We should take pride in our
              unwavering dedication to this cause instead of focusing on the
              challenges we still face. The progress we have seen over the past
              half-century is a testament to the fact that change is possible.
              Nonetheless, change is not easy, and we must be willing to step
              beyond our comfort zones. Education is the key to understanding
              current constraints, and we can achieve this by studying history,
              keeping up with current events, and seeking out supportive
              individuals. These steps will enable us to work towards the
              progress we hope to see in the future. We must be active in our
              efforts. If our current methods are not effective, we must
              increase our efforts and gather more support. We must do more than
              just sign petitions; we need to engage with elected officials,
              attend community meetings, and join organizations dedicated to
              racial justice. If we want to see change, we must make our voices
              heard and let it be known that the time for change is now.
            </p>
            <div className={`${"btncontainer"} ${styles.btncontainermargin}`}>
              <Link to="https://docs.google.com/document/d/1tEgggIKFL2DkOSvg3i8yOxinVUFuhnSZfGTIVm-mPUw/edit?usp=sharing">
                <button className={"draw"}>Works Cited</button>
              </Link>
              <Link to="/about">
                <button className={"draw"}>About</button>
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
