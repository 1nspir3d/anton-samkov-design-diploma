import { FC, memo } from 'react';

import { AntDesignShoppingCartOutlinedI } from './AntDesignShoppingCartOutlinedI';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse1Icon3 } from './Ellipse1Icon3';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse2Icon3 } from './Ellipse2Icon3';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse3Icon2 } from './Ellipse3Icon2';
import { Ellipse3Icon3 } from './Ellipse3Icon3';
import { FaDiamondIcon } from './FaDiamondIcon';
import { FluentFoodPizza20RegularIcon } from './FluentFoodPizza20RegularIcon';
import { Group4Icon } from './Group4Icon';
import { Group4Icon2 } from './Group4Icon2';
import { GroupIcon } from './GroupIcon';
import classes from './MyWebsite.module.css';
import { RiAncientPavilionLineIcon } from './RiAncientPavilionLineIcon';
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
    image150?: string;
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
    logo2?: string;
    developmentOfVisualIdentificat?: string;
    sAMKOVDESIGN?: string;
    logo3?: string;
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
    developmentOfALogoAndTrademark?: string;
    rectangle25?: string;
    contact?: string;
    rectangle26?: string;
    consultation?: string;
    logoDesign?: string;
    weFillInTheBriefAndDetermineTh?: string;
    image148?: string;
    image149?: string;
    logosForAPersonalBrand?: string;
    logosForCompaniesFirmsAndBusin?: string;
    logoForProjectsInTheFieldOfEdu?: string;
    logosForShopsCafesRestaurants?: string;
    brandNamesForProductsEmblemsTr?: string;
    faDiamond?: string;
    biBagDash?: string;
    group?: string;
    antDesignShoppingCartOutlined?: string;
    riAncientPavilionLine?: string;
    fluentFoodPizza20Regular?: string;
  };
}
const Logo: FC<Props> = memo(function MyWebsite(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.image150} ${props.classes?.image150 || ''}`}></div>
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
        const homeElem = document.getElementById("works")
        homeElem?.scrollIntoView({behavior: 'smooth'})
      }} className={`${classes.works} ${props.classes?.works || ''}`}>Works</button>
      <Link to="/anton-samkov-design-diploma/contacts" className={`${classes.contacts} ${props.classes?.contacts || ''}`}>Contacts</Link>
      <button className={`${classes.logIn} ${props.classes?.logIn || ''}`}>Log In</button>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}> | </div>
      <button className={`${classes.eng} ${props.classes?.eng || ''}`}>Eng</button>
      <button className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>Укр</button>
      <div className={`${classes.rectangle15} ${props.classes?.rectangle15 || ''}`}></div>
      <button className={`${classes.signUp} ${props.classes?.signUp || ''}`}>Sign Up</button>
      <div className={`${classes.logo2} ${props.classes?.logo2 || ''}`}>Logo</div>
      <div
      id="works"
        className={`${classes.developmentOfVisualIdentificat} ${props.classes?.developmentOfVisualIdentificat || ''}`}
      >
        Development of visual
        <br />
        identification.
      </div>
      <div className={`${classes.sAMKOVDESIGN} ${props.classes?.sAMKOVDESIGN || ''}`}>SAMKOV DESIGN</div>
      <div className={`${classes.logo3} ${props.classes?.logo3 || ''}`}>
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
        className={`${classes.developmentOfALogoAndTrademark} ${props.classes?.developmentOfALogoAndTrademark || ''}`}
      >
        Development of a logo
        <br />
        and trademarks.
      </div>
      <div className={`${classes.rectangle25} ${props.classes?.rectangle25 || ''}`}></div>
      <Link to="/anton-samkov-design-diploma/contacts" className={`${classes.contact} ${props.classes?.contact || ''}`}>Contact</Link>
      <div className={`${classes.rectangle26} ${props.classes?.rectangle26 || ''}`}></div>
      <div className={`${classes.consultation} ${props.classes?.consultation || ''}`}>Consultation</div>
      <div className={`${classes.logoDesign} ${props.classes?.logoDesign || ''}`}>Logo design</div>
      <div
        className={`${classes.weFillInTheBriefAndDetermineTh} ${props.classes?.weFillInTheBriefAndDetermineTh || ''}`}
      >
        We fill in the brief and determine the theme of the logo;
        <br />
        We collect competitors (company logos);
        <br />
        We form the key parameters of the logo (taking into <br />
        account the wishes of the customer) color, shape, visualization;
        <br />
        We generate ideas and concepts;
        <br />
        We draw the logo in vector format;
        <br />
        Making a presentation (visualization);
        <br />
        Preparation of logo formats svg, pdf, png, jpg;
        <br />
        The finish!
      </div>
      <div className={`${classes.image148} ${props.classes?.image148 || ''}`}></div>
      <div id="services" className={`${classes.image149} ${props.classes?.image149 || ''}`}></div>
      <div className={`${classes.logosForAPersonalBrand} ${props.classes?.logosForAPersonalBrand || ''}`}>
        Logos for a personal brand.
      </div>
      <div
        className={`${classes.logosForCompaniesFirmsAndBusin} ${props.classes?.logosForCompaniesFirmsAndBusin || ''}`}
      >
        Logos for companies, firms and businesses.
        <br />
      </div>
      <div
        className={`${classes.logoForProjectsInTheFieldOfEdu} ${props.classes?.logoForProjectsInTheFieldOfEdu || ''}`}
      >
        Logo for projects in the field of education, <br />
        culture, sports.
      </div>
      <div className={`${classes.logosForShopsCafesRestaurants} ${props.classes?.logosForShopsCafesRestaurants || ''}`}>
        Logos for shops, cafes, restaurants.
      </div>
      <div
        className={`${classes.brandNamesForProductsEmblemsTr} ${props.classes?.brandNamesForProductsEmblemsTr || ''}`}
      >
        Brand names for products, emblems, trademarks.
        <br />
      </div>
      <FaDiamondIcon className={`${classes.faDiamond} ${props.classes?.faDiamond || ''}`} />
      <div className={`${classes.biBagDash} ${props.classes?.biBagDash || ''}`}>
        <GroupIcon className={`${classes.group} ${props.classes?.group || ''}`} />
      </div>
      <AntDesignShoppingCartOutlinedI
        className={`${classes.antDesignShoppingCartOutlined} ${props.classes?.antDesignShoppingCartOutlined || ''}`}
      />
      <RiAncientPavilionLineIcon
        className={`${classes.riAncientPavilionLine} ${props.classes?.riAncientPavilionLine || ''}`}
      />
      <FluentFoodPizza20RegularIcon
        className={`${classes.fluentFoodPizza20Regular} ${props.classes?.fluentFoodPizza20Regular || ''}`}
      />
    </div>
  );
});

export default Logo