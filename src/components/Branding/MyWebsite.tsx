import { FC, memo } from 'react';

import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse1Icon3 } from './Ellipse1Icon3';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse2Icon3 } from './Ellipse2Icon3';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse3Icon2 } from './Ellipse3Icon2';
import { Ellipse3Icon3 } from './Ellipse3Icon3';
import { Group4Icon } from './Group4Icon';
import { Group4Icon2 } from './Group4Icon2';
import classes from './MyWebsite.module.css';
import { Vector1Icon } from './Vector1Icon';
import { Vector1Icon2 } from './Vector1Icon2';
import { Vector1Icon3 } from './Vector1Icon3';
import {
  Link
} from "react-router-dom";
import bgvideo from '../../assets/Background.mp4'

interface Props {
  className?: string;
  classes?: {
    image144?: string;
    image14?: string;
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
    bRANDING?: string;
    weCreateAUniqueDesignInTheVisu?: string;
    sAMKOVDESIGN?: string;
    logo2?: string;
    group42?: string;
    _2021AllRightsReserved?: string;
    home2?: string;
    services2?: string;
    works2?: string;
    contacts2?: string;
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
    weDesignImpressiveBrandingAndA?: string;
    rectangle25?: string;
    contact?: string;
    rectangle26?: string;
    consultation?: string;
    developmentOfCorporateIdentity?: string;
    creatingALogoFormStyleMarketin?: string;
    image151?: string;
    image152?: string;
    developmentOfFirmStyle?: string;
    presentationAndCatalongs?: string;
    creatingNavigation?: string;
    websiteDevelopment?: string;
    packagingDevelopment?: string;
    outdoorAndPrintAdvertising?: string;
    image153?: string;
    image154?: string;
    image155?: string;
    image156?: string;
    image157?: string;
    image158?: string;
  };
}
const Branding: FC<Props> = memo(function MyWebsite(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
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
        className={`${classes.image144} ${props.classes?.image144 || ""}`}
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
      <Link to="/anton-samkov-design-diploma" className={`${classes.home} ${props.classes?.home || ""}`}>Home</Link>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth', block: 'start'})
      }} className={`${classes.services} ${props.classes?.services || ""}`}>
        Services
      </button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("works")
        homeElem?.scrollIntoView({behavior: 'smooth', block: 'start'})
      }} className={`${classes.works} ${props.classes?.works || ""}`}>
        Works
      </button>
      <Link to={'/anton-samkov-design-diploma/contacts'} className={`${classes.contacts} ${props.classes?.contacts || ""}`}>
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
      <div className={`${classes.bRANDING} ${props.classes?.bRANDING || ''}`}>BRANDING</div>
      <div
        id='works'
        className={`${classes.weCreateAUniqueDesignInTheVisu} ${props.classes?.weCreateAUniqueDesignInTheVisu || ''}`}
      >
        We create a unique design in the visual and emotional plane.
      </div>
      <div className={`${classes.sAMKOVDESIGN} ${props.classes?.sAMKOVDESIGN || ''}`}>SAMKOV DESIGN</div>
      <div className={`${classes.logo2} ${props.classes?.logo2 || ''}`}>
        <Group4Icon2 className={`${classes.group42} ${props.classes?.group42 || ''}`} />
      </div>
      <div className={`${classes._2021AllRightsReserved} ${props.classes?._2021AllRightsReserved || ''}`}>
        © 2021 All rights reserved.
      </div>
      <Link to="/anton-samkov-design-diploma" className={`${classes.home2} ${props.classes?.home2 || ''}`}>Home</Link>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }}  className={`${classes.services2} ${props.classes?.services2 || ''}`}>Services</button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("works")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.works2} ${props.classes?.works2 || ''}`}>Works</button>
      <Link to="/anton-samkov-design-diploma/contacts" className={`${classes.contacts2} ${props.classes?.contacts2 || ''}`}>Contacts</Link>
      <Ellipse1Icon className={`${classes.ellipse1} ${props.classes?.ellipse1 || ''}`} />
      <Ellipse2Icon className={`${classes.ellipse2} ${props.classes?.ellipse2 || ''}`} />
      <Ellipse3Icon className={`${classes.ellipse3} ${props.classes?.ellipse3 || ''}`} />
      <Vector1Icon className={`${classes.vector1} ${props.classes?.vector1 || ''}`} />
      <Ellipse1Icon2 className={`${classes.ellipse12} ${props.classes?.ellipse12 || ''}`} />
      <Ellipse2Icon2 className={`${classes.ellipse22} ${props.classes?.ellipse22 || ''}`} />
      <Ellipse3Icon2 className={`${classes.ellipse32} ${props.classes?.ellipse32 || ''}`} />
      <Vector1Icon2 className={`${classes.vector12} ${props.classes?.vector12 || ''}`} />
      <Ellipse1Icon3 className={`${classes.ellipse13} ${props.classes?.ellipse13 || ''}`} />
      <Ellipse2Icon3 className={`${classes.ellipse23} ${props.classes?.ellipse23 || ''}`} />
      <Ellipse3Icon3 className={`${classes.ellipse33} ${props.classes?.ellipse33 || ''}`} />
      <Vector1Icon3 className={`${classes.vector13} ${props.classes?.vector13 || ''}`} />
      <div
        className={`${classes.weDesignImpressiveBrandingAndA} ${props.classes?.weDesignImpressiveBrandingAndA || ''}`}
      >
        We design impressive
        <br />
        branding and advertising
        <br />
        graphics.
      </div>
      <Link to={'/anton-samkov-design-diploma/contacts'} className={`${classes.contact} ${props.classes?.contact || ''}`}>Contact</Link>
      <button className={`${classes.consultation} ${props.classes?.consultation || ''}`}>Consultation</button>
      <div
        className={`${classes.developmentOfCorporateIdentity} ${props.classes?.developmentOfCorporateIdentity || ''}`}
      >
        Development of corporate <br />
        identity, logos, identity, branding <br />
        and corporate materials.
        <br />
      </div>
      <div
        className={`${classes.creatingALogoFormStyleMarketin} ${props.classes?.creatingALogoFormStyleMarketin || ''}`}
      >
        Creating a Logo
        <br />
        Form style.
        <br />
        Marketing materials.
        <br />
        Corporate website.
        <br />
        Brandbook.
      </div>
      <div className={`${classes.image151} ${props.classes?.image151 || ''}`}></div>
      <div id='services' className={`${classes.image152} ${props.classes?.image152 || ''}`}></div>
      <div className={`${classes.developmentOfFirmStyle} ${props.classes?.developmentOfFirmStyle || ''}`}>
        Development of firm style
      </div>
      <div className={`${classes.presentationAndCatalongs} ${props.classes?.presentationAndCatalongs || ''}`}>
        Presentation and catalongs
      </div>
      <div className={`${classes.creatingNavigation} ${props.classes?.creatingNavigation || ''}`}>
        Creating navigation
      </div>
      <div className={`${classes.websiteDevelopment} ${props.classes?.websiteDevelopment || ''}`}>
        Website development
      </div>
      <div className={`${classes.packagingDevelopment} ${props.classes?.packagingDevelopment || ''}`}>
        Packaging development
      </div>
      <div className={`${classes.outdoorAndPrintAdvertising} ${props.classes?.outdoorAndPrintAdvertising || ''}`}>
        Outdoor and print advertising
      </div>
      <div className={`${classes.image153} ${props.classes?.image153 || ''}`}></div>
      <div className={`${classes.image154} ${props.classes?.image154 || ''}`}></div>
      <div className={`${classes.image155} ${props.classes?.image155 || ''}`}></div>
      <div className={`${classes.image156} ${props.classes?.image156 || ''}`}></div>
      <div className={`${classes.image157} ${props.classes?.image157 || ''}`}></div>
      <div className={`${classes.image158} ${props.classes?.image158 || ''}`}></div>
    </div>
  );
});

export default Branding