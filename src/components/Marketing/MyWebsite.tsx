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
import { Ellipse4Icon } from './Ellipse4Icon';
import { Ellipse5Icon } from './Ellipse5Icon';
import { Ellipse6Icon } from './Ellipse6Icon';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Group4Icon } from './Group4Icon';
import { Group4Icon2 } from './Group4Icon2';
import classes from './MyWebsite.module.css';
import { Vector1Icon } from './Vector1Icon';
import { Vector1Icon2 } from './Vector1Icon2';
import { Vector1Icon3 } from './Vector1Icon3';
import { Vector2Icon } from './Vector2Icon';
import { Vector3Icon } from './Vector3Icon';
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
    mARKETING?: string;
    promotionToTheMaxFacebookAndIn?: string;
    reactiveSEOPromotionAndSiteOpt?: string;
    effectiveSMMForEffectiveProjec?: string;
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
    ellipse4?: string;
    ellipse7?: string;
    ellipse23?: string;
    ellipse5?: string;
    ellipse8?: string;
    ellipse33?: string;
    ellipse6?: string;
    ellipse9?: string;
    vector13?: string;
    vector2?: string;
    vector3?: string;
    weCreateImplementAndLaunchAdve?: string;
    rectangle25?: string;
    contact?: string;
    rectangle26?: string;
    consultation?: string;
    targetedAdvertisingWithMaximum?: string;
    weDetermineTheBestAdvertisingC?: string;
    brandCompanyPromotionSaleOfGoo?: string;
    analysisOfThePositionOfTheSite?: string;
    brandMarketingCreationOfTextAn?: string;
    image159?: string;
    image160?: string;
    image161?: string;
    image163?: string;
  };
}
const Marketing: FC<Props> = memo(function MyWebsite(props = {}) {
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
      <div className={`${classes.logo} ${props.classes?.logo || ''}`}>
        <Group4Icon className={`${classes.group4} ${props.classes?.group4 || ''}`} />
      </div>
      <Link to="/anton-samkov-design-diploma" className={`${classes.home} ${props.classes?.home || ''}`}>Home</Link>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.services} ${props.classes?.services || ''}`}>Services</button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.works} ${props.classes?.works || ''}`}>Works</button>
      <Link to="/anton-samkov-design-diploma/contacts" className={`${classes.contacts} ${props.classes?.contacts || ''}`}>Contacts</Link>
      <button className={`${classes.logIn} ${props.classes?.logIn || ''}`}>Log In</button>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}> | </div>
      <button className={`${classes.eng} ${props.classes?.eng || ''}`}>Eng</button>
      <button className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>Укр</button>
      <button className={`${classes.signUp} ${props.classes?.signUp || ''}`}>Sign Up</button>
      <div className={`${classes.mARKETING} ${props.classes?.mARKETING || ''}`}>MARKETING</div>
      <div
        className={`${classes.promotionToTheMaxFacebookAndIn} ${props.classes?.promotionToTheMaxFacebookAndIn || ''}`}
      >
        Promotion to the max . <br />
        Facebook and Instagram <br />
        advertising for business.
      </div>
      <div
        className={`${classes.reactiveSEOPromotionAndSiteOpt} ${props.classes?.reactiveSEOPromotionAndSiteOpt || ''}`}
      >
        Reactive SEO promotion and site optimization in search results
      </div>
      <div
        className={`${classes.effectiveSMMForEffectiveProjec} ${props.classes?.effectiveSMMForEffectiveProjec || ''}`}
      >
        Effective SMM
        <br />
        for effective projects.
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
      }} className={`${classes.services2} ${props.classes?.services2 || ''}`}>Services</button>
      <button onClick={(e) => {
        const homeElem = document.getElementById("services")
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
      <Ellipse4Icon className={`${classes.ellipse4} ${props.classes?.ellipse4 || ''}`} />
      <Ellipse7Icon className={`${classes.ellipse7} ${props.classes?.ellipse7 || ''}`} />
      <Ellipse2Icon3 className={`${classes.ellipse23} ${props.classes?.ellipse23 || ''}`} />
      <Ellipse5Icon className={`${classes.ellipse5} ${props.classes?.ellipse5 || ''}`} />
      <Ellipse8Icon className={`${classes.ellipse8} ${props.classes?.ellipse8 || ''}`} />
      <Ellipse3Icon3 className={`${classes.ellipse33} ${props.classes?.ellipse33 || ''}`} />
      <Ellipse6Icon className={`${classes.ellipse6} ${props.classes?.ellipse6 || ''}`} />
      <Ellipse9Icon className={`${classes.ellipse9} ${props.classes?.ellipse9 || ''}`} />
      <Vector1Icon3 className={`${classes.vector13} ${props.classes?.vector13 || ''}`} />
      <Vector2Icon className={`${classes.vector2} ${props.classes?.vector2 || ''}`} />
      <Vector3Icon className={`${classes.vector3} ${props.classes?.vector3 || ''}`} />
      <div
        className={`${classes.weCreateImplementAndLaunchAdve} ${props.classes?.weCreateImplementAndLaunchAdve || ''}`}
      >
        We create, implement
        <br />
        and launch advertising
        <br />
        channels for business.
      </div>
      <div className={`${classes.rectangle25} ${props.classes?.rectangle25 || ''}`}></div>
      <Link to="/anton-samkov-design-diploma/contacts" className={`${classes.contact} ${props.classes?.contact || ''}`}>Contact</Link>
      <div className={`${classes.rectangle26} ${props.classes?.rectangle26 || ''}`}></div>
      <div className={`${classes.consultation} ${props.classes?.consultation || ''}`}>Consultation</div>
      <div
        className={`${classes.targetedAdvertisingWithMaximum} ${props.classes?.targetedAdvertisingWithMaximum || ''}`}
      >
        Targeted advertising with maximum
        <br />
        impact:
      </div>
      <div
        className={`${classes.weDetermineTheBestAdvertisingC} ${props.classes?.weDetermineTheBestAdvertisingC || ''}`}
      >
        We determine the best advertising channels to influence the target audience.
        <br />
        We draw up the stages and sequences of advertising campaigns.
        <br />
        We develop creative concepts in the visual and emotional plane.
        <br />
        We forecast the budget and launch advertising.
      </div>
      <div
        className={`${classes.brandCompanyPromotionSaleOfGoo} ${props.classes?.brandCompanyPromotionSaleOfGoo || ''}`}
      >
        Brand / company promotion;
        <br />
        Sale of goods / services;
        <br />
        Increasing traffic to the company&#39;s website;
        <br />
        PR (Public Relations) - public relations.
      </div>
      <div
        className={`${classes.analysisOfThePositionOfTheSite} ${props.classes?.analysisOfThePositionOfTheSite || ''}`}
      >
        Analysis of the position of the site and competitors;
        <br />
        Internal and external optimization;
        <br />
        Search promotion of the site in the first position.
      </div>
      <div
        className={`${classes.brandMarketingCreationOfTextAn} ${props.classes?.brandMarketingCreationOfTextAn || ''}`}
      >
        brand marketing;
        <br />
        Creation of text and graphic content;
        <br />
        Shooting and creating video clips;
        <br />
        Interaction with the audience.
      </div>
      <div id="services" className={`${classes.image159} ${props.classes?.image159 || ''}`}></div>
      <div className={`${classes.image160} ${props.classes?.image160 || ''}`}></div>
      <div className={`${classes.image161} ${props.classes?.image161 || ''}`}></div>
      <div className={`${classes.image163} ${props.classes?.image163 || ''}`}></div>
    </div>
  );
});

export default Marketing