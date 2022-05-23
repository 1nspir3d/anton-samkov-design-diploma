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
    image147?: string;
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
    wEBDesign?: string;
    weCreateMaintainAndPromoteWebs?: string;
    sAMKOVDESIGN?: string;
    logo2?: string;
    group42?: string;
    _2021AllRightsReserved?: string;
    home2?: string;
    services2?: string;
    works2?: string;
    contacts2?: string;
    oNLINESHOP?: string;
    cORPORATEWEBSITE?: string;
    wEBSITEBUSINESSCARD?: string;
    sITECATALOGPORTAL?: string;
    sUPPORT?: string;
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
    weDevelopImproveAndPromoteWebs?: string;
    rectangle25?: string;
    contact?: string;
    rectangle26?: string;
    consultation?: string;
    integrationWithDeliveryService?: string;
    corporateWebsiteOfTheCompanyWi?: string;
    smallSiteBuiltInManagementSyst?: string;
    ensuringTheStableOperationOfTh?: string;
    sophisticatedCatalogingManagem?: string;
    dIGITALFORBUSINESS?: string;
    thoughtfulModernDesignDevelopm?: string;
    image145?: string;
    image146?: string;
  };
}
const Web: FC<Props> = memo(function MyWebsite(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.image147} ${props.classes?.image147 || ''}`}></div>
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
      <div className={`${classes.logo} ${props.classes?.logo || ''}`}>
        <Group4Icon className={`${classes.group4} ${props.classes?.group4 || ''}`} />
      </div>
      <Link to="/" className={`${classes.home} ${props.classes?.home || ''}`}>Home</Link>
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
      <Link to="/contacts" className={`${classes.contacts} ${props.classes?.contacts || ''}`}>Contacts</Link>
      <button className={`${classes.logIn} ${props.classes?.logIn || ''}`}>Log In</button>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}> | </div>
      <button className={`${classes.eng} ${props.classes?.eng || ''}`}>Eng</button>
      <button className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>Укр</button>
      <div className={`${classes.rectangle15} ${props.classes?.rectangle15 || ''}`}></div>
      <button className={`${classes.signUp} ${props.classes?.signUp || ''}`}>Sign Up</button>
      <div className={`${classes.wEBDesign} ${props.classes?.wEBDesign || ''}`}>WEB Design</div>
      <div
      id="works"
        className={`${classes.weCreateMaintainAndPromoteWebs} ${props.classes?.weCreateMaintainAndPromoteWebs || ''}`}
      >
        <span className={classes.labelWrapper}>
          <span className={classes.label}>
            We create, maintain
            <br />
            and promote websites
            <br />
          </span>
          <span className={classes.label2}>
            <br />
            <br />
          </span>
        </span>
      </div>
      <div className={`${classes.sAMKOVDESIGN} ${props.classes?.sAMKOVDESIGN || ''}`}>SAMKOV DESIGN</div>
      <div className={`${classes.logo2} ${props.classes?.logo2 || ''}`}>
        <Group4Icon2 className={`${classes.group42} ${props.classes?.group42 || ''}`} />
      </div>
      <div className={`${classes._2021AllRightsReserved} ${props.classes?._2021AllRightsReserved || ''}`}>
        © 2021 All rights reserved.
      </div>
      <Link to="/" className={`${classes.home2} ${props.classes?.home2 || ''}`}>Home</Link>
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
      <Link to="/contacts" className={`${classes.contacts2} ${props.classes?.contacts2 || ''}`}>Contacts</Link>
      <div className={`${classes.oNLINESHOP} ${props.classes?.oNLINESHOP || ''}`}>ONLINE SHOP</div>
      <div className={`${classes.cORPORATEWEBSITE} ${props.classes?.cORPORATEWEBSITE || ''}`}>CORPORATE WEBSITE</div>
      <div className={`${classes.wEBSITEBUSINESSCARD} ${props.classes?.wEBSITEBUSINESSCARD || ''}`}>
        WEBSITE BUSINESS CARD
        <br />
      </div>
      <div className={`${classes.sITECATALOGPORTAL} ${props.classes?.sITECATALOGPORTAL || ''}`}>
        SITE CATALOG / PORTAL
        <br />
      </div>
      <div className={`${classes.sUPPORT} ${props.classes?.sUPPORT || ''}`}>SUPPORT</div>
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
        className={`${classes.weDevelopImproveAndPromoteWebs} ${props.classes?.weDevelopImproveAndPromoteWebs || ''}`}
      >
        We develop, improve and promote websites. <br />
        We implement creative digital solutions and emotional designs.
      </div>
      <div className={`${classes.rectangle25} ${props.classes?.rectangle25 || ''}`}></div>
      <Link to="/contacts" className={`${classes.contact} ${props.classes?.contact || ''}`}>Contact</Link>
      <div className={`${classes.rectangle26} ${props.classes?.rectangle26 || ''}`}></div>
      <div className={`${classes.consultation} ${props.classes?.consultation || ''}`}>Consultation</div>
      <div
        className={`${classes.integrationWithDeliveryService} ${props.classes?.integrationWithDeliveryService || ''}`}
      >
        Integration with delivery services, <br />
        connection of payment systems, <br />
        product cataloging, personal account.
      </div>
      <div
        className={`${classes.corporateWebsiteOfTheCompanyWi} ${props.classes?.corporateWebsiteOfTheCompanyWi || ''}`}
      >
        Corporate website of the company,
        <br />
        with a large number of sections and categories, <br />
        built-in CMS system, mobile friendly.
      </div>
      <div
        className={`${classes.smallSiteBuiltInManagementSyst} ${props.classes?.smallSiteBuiltInManagementSyst || ''}`}
      >
        Small site, built-in management system, <br />
        adaptability for mobile devices.
      </div>
      <div
        className={`${classes.ensuringTheStableOperationOfTh} ${props.classes?.ensuringTheStableOperationOfTh || ''}`}
      >
        Ensuring the stable operation of the site 24/7.
      </div>
      <div
        className={`${classes.sophisticatedCatalogingManagem} ${props.classes?.sophisticatedCatalogingManagem || ''}`}
      >
        Sophisticated cataloging, management system, <br />
        calculation for a large number of materials.
      </div>
      <div className={`${classes.dIGITALFORBUSINESS} ${props.classes?.dIGITALFORBUSINESS || ''}`}>
        DIGITAL FOR BUSINESS
      </div>
      <div
        className={`${classes.thoughtfulModernDesignDevelopm} ${props.classes?.thoughtfulModernDesignDevelopm || ''}`}
      >
        Thoughtful, modern design.
        <br />
        Development and design.
        <br />
        Interactive animation.
        <br />
        Promotion and optimization.
        <br />
        Technical support 24/7
      </div>
      <div className={`${classes.image145} ${props.classes?.image145 || ''}`}></div>
      <div id="services" className={`${classes.image146} ${props.classes?.image146 || ''}`}></div>
    </div>
  );
});

export default Web