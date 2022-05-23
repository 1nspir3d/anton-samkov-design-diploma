import { FC, memo } from "react";

import { Ellipse1Icon } from "./Ellipse1Icon";
import { Ellipse1Icon2 } from "./Ellipse1Icon2";
import { Ellipse1Icon3 } from "./Ellipse1Icon3";
import { Ellipse1Icon4 } from "./Ellipse1Icon4";
import { Ellipse2Icon } from "./Ellipse2Icon";
import { Ellipse2Icon2 } from "./Ellipse2Icon2";
import { Ellipse2Icon3 } from "./Ellipse2Icon3";
import { Ellipse2Icon4 } from "./Ellipse2Icon4";
import { Ellipse3Icon } from "./Ellipse3Icon";
import { Ellipse3Icon2 } from "./Ellipse3Icon2";
import { Ellipse3Icon3 } from "./Ellipse3Icon3";
import { Ellipse3Icon4 } from "./Ellipse3Icon4";
import { Group4Icon } from "./Group4Icon";
import { Group4Icon2 } from "./Group4Icon2";
import { Group4Icon3 } from "./Group4Icon3";
import classes from "./MyWebsite.module.css";
import { Vector1Icon } from "./Vector1Icon";
import { Vector1Icon2 } from "./Vector1Icon2";
import { Vector1Icon3 } from "./Vector1Icon3";
import { Vector1Icon4 } from "./Vector1Icon4";
import {
  Link
} from "react-router-dom";
import bgvideo from '../../assets/Background.mp4'

interface Props {
  className?: string;
  classes?: {
    image14?: string;
    image142?: string;
    logo?: string;
    group4?: string;
    home?: string;
    services?: string;
    works?: string;
    contacts?: string;
    logIn?: string;
    unnamed?: string;
    eng?: string;
    unnamed2?: string;
    rectangle15?: string;
    signUp?: string;
    logo2?: string;
    group42?: string;
    sAMKOVDESIGN?: string;
    sAMKOVDESIGNIsASpaceWhereCreat?: string;
    oURWORKS?: string;
    sAMKOVDESIGN2?: string;
    logo3?: string;
    group43?: string;
    _2021AllRightsReserved?: string;
    home2?: string;
    services2?: string;
    works2?: string;
    contacts2?: string;
    sERVICES?: string;
    bRANDING?: string;
    wEB?: string;
    lOGO?: string;
    mARKETING?: string;
    _480?: string;
    _30000?: string;
    _5000?: string;
    _215?: string;
    projectsCompleted?: string;
    aPR?: string;
    hoursSavedAnnually?: string;
    uniqueUsers?: string;
    sequrityAppDesign1?: string;
    photo_202222_213351?: string;
    slide16_971?: string;
    instagramPost33?: string;
    slide16_9142?: string;
    instagramPost211?: string;
    instagramPost32?: string;
    instagramPost111?: string;
    instagramPost51?: string;
    instagramPost11?: string;
    photo_2021822_2130151?: string;
    unsplash_DLghs4gQrAI1?: string;
    identy?: string;
    webSite?: string;
    graphicDesign?: string;
    internetShops?: string;
    typography?: string;
    uIUX?: string;
    navigation?: string;
    app?: string;
    package?: string;
    development?: string;
    developmentOfLogosWithAnImpres?: string;
    sSM?: string;
    sEO?: string;
    pR?: string;
    context?: string;
    uIUXBankingApp?: string;
    webBannerDesign?: string;
    webBannerDesign2?: string;
    sciFiInterface?: string;
    vPNAppDesignUIUX?: string;
    sCIFIINTERFACEDESIGN?: string;
    mobileMusicAppDesign?: string;
    uIUXSequrityMobileAppDesign?: string;
    lMinimalisticLogo2?: string;
    webBannerPUMA?: string;
    hUDInterfaceDesign?: string;
    neonLogo?: string;
    ellipse1?: string;
    ellipse2?: string;
    ellipse3?: string;
    vector1?: string;
    ellipse12?: string;
    ellipse22?: string;
    ellipse32?: string;
    vector12?: string;
    ellipse13?: string;
    ellipse23?: string;
    ellipse33?: string;
    vector13?: string;
    ellipse14?: string;
    ellipse24?: string;
    ellipse34?: string;
    vector14?: string;
  };
}
const Main: FC<Props> = memo(function MyWebsite(props = {}) {
  return (
    <div id="home" className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes.image14} ${props.classes?.image14 || ""}`}
      >
        <video style={{
          objectFit: 'cover'
        }} loop width="100%" height="100%" muted autoPlay >
        <source src={bgvideo} type="video/mp4"/>
        </video>
      </div>
      <div
        className={`${classes.image142} ${props.classes?.image142 || ""}`}
      >
        <video style={{
          objectFit: 'cover'
        }} loop width="100%" height="100%" muted autoPlay >
        <source src={bgvideo} type="video/mp4"/>
        </video>
      </div>
      <div className={`${classes.logo} ${props.classes?.logo || ""}`}>
        <Group4Icon
          className={`${classes.group4} ${props.classes?.group4 || ""}`}
        />
      </div>
      <button onClick={(e) => {
        const homeElem = document.getElementById("home")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }}  className={`${classes.home} ${props.classes?.home || ""}`}>Home</button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.services} ${props.classes?.services || ""}`}>
        Services
      </button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("works")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.works} ${props.classes?.works || ""}`}>
        Works
      </button>
      <Link to={'/contacts'} className={`${classes.contacts} ${props.classes?.contacts || ""}`}>
        Contacts
      </Link>
      <button className={`${classes.logIn} ${props.classes?.logIn || ""}`}>
        Log In
      </button>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ""}`}>
      </div>
      <button className={`${classes.eng} ${props.classes?.eng || ""}`}>Eng</button>
      <button className={`${classes.unnamed2} ${props.classes?.unnamed2 || ""}`}>
        Укр
      </button>
      <button type="button" className={`${classes.signUp} ${props.classes?.signUp || ""}`}>
        Sign Up
      </button>
      <div className={`${classes.logo2} ${props.classes?.logo2 || ""}`}></div>
      <div style={{width: '750px', position: 'absolute', left: '584px',
    top: '460px', height: 'fit-content', display: 'flex', justifyContent: 'center'}}>

      <Group4Icon2
        className={`${classes.group42} ${props.classes?.group42 || ""}`}
        />
        </div>
      <div
        className={`${classes.sAMKOVDESIGN} ${
          props.classes?.sAMKOVDESIGN || ""
        }`}
      >
        SAMKOV DESIGN
      </div>
      <div
        className={`${classes.sAMKOVDESIGNIsASpaceWhereCreat} ${
          props.classes?.sAMKOVDESIGNIsASpaceWhereCreat || ""
        }`}
      >
        <span className={classes.labelWrapper}>
          <span className={classes.label}>
            SAMKOV DESIGN
            <br />
          </span>
          <span className={classes.label2}>
            Is a space where creativity is focused on user experience through
            reflection and exploration. To meet today&#39;s challenges, we
            carefully consider every action to carry out our mandates with
            vision and innovation. We firmly believe that the consumer is not a
            target but a strategic partner in the success of a brand, product or
            service. To enhance and complement integrated campaigns, we develop
            original content and products. Whatever the challenge, ANTRO will
            always have a creative reaction.
            <br />
            <br />
          </span>
        </span>
      </div>
      <div id="works" className={`${classes.oURWORKS} ${props.classes?.oURWORKS || ""}`}>
        OUR WORKS
      </div>
      <div
        className={`${classes.sAMKOVDESIGN2} ${
          props.classes?.sAMKOVDESIGN2 || ""
        }`}
      >
        SAMKOV DESIGN
      </div>
      <div className={`${classes.logo3} ${props.classes?.logo3 || ""}`}>
        <Group4Icon3
          className={`${classes.group43} ${props.classes?.group43 || ""}`}
        />
      </div>
      <div
        className={`${classes._2021AllRightsReserved} ${
          props.classes?._2021AllRightsReserved || ""
        }`}
      >
        © 2021 All rights reserved.
      </div>
      <button onClick={(e) => {
        const homeElem = document.getElementById("home")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.home2} ${props.classes?.home2 || ""}`}>
        Home
      </button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.services2} ${props.classes?.services2 || ""}`}>
        Services
      </button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("works")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.works2} ${props.classes?.works2 || ""}`}>
        Works
      </button>
      <button className={`${classes.contacts2} ${props.classes?.contacts2 || ""}`}>
        Contacts
      </button>
      <div className={`${classes.sERVICES} ${props.classes?.sERVICES || ""}`}>
        SERVICES
      </div>
      <Link to={'/branding'} className={`${classes.bRANDING} ${props.classes?.bRANDING || ""}`}>
        BRANDING
      </Link>
      <Link to="/web" className={`${classes.wEB} ${props.classes?.wEB || ""}`}>WEB</Link>
      <Link to="/logo" className={`${classes.lOGO} ${props.classes?.lOGO || ""}`}>LOGO</Link>
      <Link to="/marketing" className={`${classes.mARKETING} ${props.classes?.mARKETING || ""}`}>
        MARKETING
      </Link>
      <div className={`${classes._480} ${props.classes?._480 || ""}`}>
        48.00
      </div>
      <div className={`${classes._30000} ${props.classes?._30000 || ""}`}>
        30000$
      </div>
      <div className={`${classes._5000} ${props.classes?._5000 || ""}`}>
        +50.000
      </div>
      <div className={`${classes._215} ${props.classes?._215 || ""}`}>215</div>
      <div
        className={`${classes.projectsCompleted} ${
          props.classes?.projectsCompleted || ""
        }`}
      >
        Projects completed
      </div>
      <div className={`${classes.aPR} ${props.classes?.aPR || ""}`}>APR</div>
      <div
        className={`${classes.hoursSavedAnnually} ${
          props.classes?.hoursSavedAnnually || ""
        }`}
      >
        Hours Saved Annually
      </div>
      <div
        className={`${classes.uniqueUsers} ${props.classes?.uniqueUsers || ""}`}
      >
        Unique Users
      </div>
      <div
        className={`${classes.sequrityAppDesign1} ${
          props.classes?.sequrityAppDesign1 || ""
        }`}
      ></div>
      <div
        className={`${classes.photo_202222_213351} ${
          props.classes?.photo_202222_213351 || ""
        }`}
      ></div>
      <div
        className={`${classes.slide16_971} ${props.classes?.slide16_971 || ""}`}
      ></div>
      <div
        className={`${classes.instagramPost33} ${
          props.classes?.instagramPost33 || ""
        }`}
      ></div>
      <div
        className={`${classes.slide16_9142} ${
          props.classes?.slide16_9142 || ""
        }`}
      ></div>
      <div
        className={`${classes.instagramPost211} ${
          props.classes?.instagramPost211 || ""
        }`}
      ></div>
      <div
        className={`${classes.instagramPost32} ${
          props.classes?.instagramPost32 || ""
        }`}
      ></div>
      <div
        className={`${classes.instagramPost111} ${
          props.classes?.instagramPost111 || ""
        }`}
      ></div>
      <div
        className={`${classes.instagramPost51} ${
          props.classes?.instagramPost51 || ""
        }`}
      ></div>
      <div
        className={`${classes.instagramPost11} ${
          props.classes?.instagramPost11 || ""
        }`}
      ></div>
      <div
        className={`${classes.photo_2021822_2130151} ${
          props.classes?.photo_2021822_2130151 || ""
        }`}
      ></div>
      <div
        className={`${classes.unsplash_DLghs4gQrAI1} ${
          props.classes?.unsplash_DLghs4gQrAI1 || ""
        }`}
      ></div>
      <div className={`${classes.identy} ${props.classes?.identy || ""}`}>
        Identy
      </div>
      <div className={`${classes.webSite} ${props.classes?.webSite || ""}`}>
        Web-site
      </div>
      <div
        className={`${classes.graphicDesign} ${
          props.classes?.graphicDesign || ""
        }`}
      >
        Graphic Design
      </div>
      <div
        className={`${classes.internetShops} ${
          props.classes?.internetShops || ""
        }`}
      >
        Internet shops
      </div>
      <div
        className={`${classes.typography} ${props.classes?.typography || ""}`}
      >
        Typography
      </div>
      <div className={`${classes.uIUX} ${props.classes?.uIUX || ""}`}>
        UI/UX
      </div>
      <div
        className={`${classes.navigation} ${props.classes?.navigation || ""}`}
      >
        Navigation
      </div>
      <div className={`${classes.app} ${props.classes?.app || ""}`}>App</div>
      <div className={`${classes.package} ${props.classes?.package || ""}`}>
        Package
      </div>
      <div
        className={`${classes.development} ${props.classes?.development || ""}`}
      >
        Development
      </div>
      <div
        className={`${classes.developmentOfLogosWithAnImpres} ${
          props.classes?.developmentOfLogosWithAnImpres || ""
        }`}
      >
        Development of
        <br />
        logos with an impressing
        <br />
        design
      </div>
      <div className={`${classes.sSM} ${props.classes?.sSM || ""}`}>SSM</div>
      <div className={`${classes.sEO} ${props.classes?.sEO || ""}`}>SEO</div>
      <div className={`${classes.pR} ${props.classes?.pR || ""}`}>PR</div>
      <div className={`${classes.context} ${props.classes?.context || ""}`}>
        Context
      </div>
      <div
        className={`${classes.uIUXBankingApp} ${
          props.classes?.uIUXBankingApp || ""
        }`}
      >
        UI UX Banking App
      </div>
      <div
        className={`${classes.webBannerDesign} ${
          props.classes?.webBannerDesign || ""
        }`}
      >
        Web banner design
      </div>
      <div
        className={`${classes.webBannerDesign2} ${
          props.classes?.webBannerDesign2 || ""
        }`}
      >
        Web banner design
      </div>
      <div
        className={`${classes.sciFiInterface} ${
          props.classes?.sciFiInterface || ""
        }`}
      >
        Sci-fi Interface
      </div>
      <div
        className={`${classes.vPNAppDesignUIUX} ${
          props.classes?.vPNAppDesignUIUX || ""
        }`}
      >
        VPN app design UI/UX
      </div>
      <div
        className={`${classes.sCIFIINTERFACEDESIGN} ${
          props.classes?.sCIFIINTERFACEDESIGN || ""
        }`}
      >
        SCI-FI INTERFACE DESIGN
      </div>
      <div
        className={`${classes.mobileMusicAppDesign} ${
          props.classes?.mobileMusicAppDesign || ""
        }`}
      >
        Mobile music app design
      </div>
      <div
        className={`${classes.uIUXSequrityMobileAppDesign} ${
          props.classes?.uIUXSequrityMobileAppDesign || ""
        }`}
      >
        <br />
        UI/UX Sequrity mobile app design
      </div>
      <div
        className={`${classes.lMinimalisticLogo2} ${
          props.classes?.lMinimalisticLogo2 || ""
        }`}
      >
        L minimalistic logo #2
      </div>
      <div
        className={`${classes.webBannerPUMA} ${
          props.classes?.webBannerPUMA || ""
        }`}
      >
        Web banner #PUMA
      </div>
      <div
        className={`${classes.hUDInterfaceDesign} ${
          props.classes?.hUDInterfaceDesign || ""
        }`}
      >
        HUD interface design
      </div>
      <div className={`${classes.neonLogo} ${props.classes?.neonLogo || ""}`}>
        Neon logo
      </div>
      <Ellipse1Icon
        className={`${classes.ellipse1} ${props.classes?.ellipse1 || ""}`}
      />
      <Ellipse2Icon
        className={`${classes.ellipse2} ${props.classes?.ellipse2 || ""}`}
      />
      <Ellipse3Icon
        className={`${classes.ellipse3} ${props.classes?.ellipse3 || ""}`}
      />
      <Vector1Icon
        className={`${classes.vector1} ${props.classes?.vector1 || ""}`}
      />
      <Ellipse1Icon2
        id="services"
        className={`${classes.ellipse12} ${props.classes?.ellipse12 || ""}`}
      />
      <Ellipse2Icon2
        className={`${classes.ellipse22} ${props.classes?.ellipse22 || ""}`}
      />
      <Ellipse3Icon2
        className={`${classes.ellipse32} ${props.classes?.ellipse32 || ""}`}
      />
      <Vector1Icon2
        className={`${classes.vector12} ${props.classes?.vector12 || ""}`}
      />
      <Ellipse1Icon3
        className={`${classes.ellipse13} ${props.classes?.ellipse13 || ""}`}
      />
      <Ellipse2Icon3
        className={`${classes.ellipse23} ${props.classes?.ellipse23 || ""}`}
      />
      <Ellipse3Icon3
        className={`${classes.ellipse33} ${props.classes?.ellipse33 || ""}`}
      />
      <Vector1Icon3
        className={`${classes.vector13} ${props.classes?.vector13 || ""}`}
      />
      <Ellipse1Icon4
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <Ellipse2Icon4
        className={`${classes.ellipse24} ${props.classes?.ellipse24 || ""}`}
      />
      <Ellipse3Icon4
        className={`${classes.ellipse34} ${props.classes?.ellipse34 || ""}`}
      />
      <Vector1Icon4
        className={`${classes.vector14} ${props.classes?.vector14 || ""}`}
      />
    </div>
  );
});


export default Main 
