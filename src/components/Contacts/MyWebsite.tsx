import { FC, memo } from 'react';

import { AntDesignMailFilledIcon } from './AntDesignMailFilledIcon';
import { BxlTelegramIcon } from './BxlTelegramIcon';
import { ClarityPhoneHandsetSolidIcon } from './ClarityPhoneHandsetSolidIcon';
import { ClarityPhoneHandsetSolidIcon2 } from './ClarityPhoneHandsetSolidIcon2';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse3Icon2 } from './Ellipse3Icon2';
import { Group4Icon } from './Group4Icon';
import { Group4Icon2 } from './Group4Icon2';
import classes from './MyWebsite.module.css';
import { Vector1Icon } from './Vector1Icon';
import { Vector1Icon2 } from './Vector1Icon2';
import {Link} from 'react-router-dom'
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
    contacts2?: string;
    sAMKOVDESIGN?: string;
    logo2?: string;
    group42?: string;
    _2021AllRightsReserved?: string;
    home2?: string;
    services2?: string;
    works2?: string;
    contacts3?: string;
    ellipse1?: string;
    ellipse2?: string;
    ellipse3?: string;
    vector1?: string;
    ellipse12?: string;
    ellipse22?: string;
    ellipse32?: string;
    vector12?: string;
    _380665217036380984183093Askold?: string;
    clarityPhoneHandsetSolid?: string;
    clarityPhoneHandsetSolid2?: string;
    antDesignMailFilled?: string;
    bxlTelegram?: string;
  };
}
const Contacts: FC<Props> = memo(function MyWebsite(props = {}) {
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
      <Link to="/" className={`${classes.home} ${props.classes?.home || ''}`}>Home</Link>
      <button className={`${classes.services} ${props.classes?.services || ''}`}>Services</button>
      <button className={`${classes.works} ${props.classes?.works || ''}`}>Works</button>
      <Link to="/contacts" className={`${classes.contacts} ${props.classes?.contacts || ''}`}>Contacts</Link>
      <button className={`${classes.logIn} ${props.classes?.logIn || ''}`}>Log In</button>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}> | </div>
      <button className={`${classes.eng} ${props.classes?.eng || ''}`}>Eng</button>
      <button className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>Укр</button>
      <div className={`${classes.rectangle15} ${props.classes?.rectangle15 || ''}`}></div>
      <button className={`${classes.signUp} ${props.classes?.signUp || ''}`}>Sign Up</button>
      <div className={`${classes.contacts2} ${props.classes?.contacts2 || ''}`}>Contacts</div>
      <div className={`${classes.sAMKOVDESIGN} ${props.classes?.sAMKOVDESIGN || ''}`}>SAMKOV DESIGN</div>
      <div className={`${classes.logo2} ${props.classes?.logo2 || ''}`}>
        <Group4Icon2 className={`${classes.group42} ${props.classes?.group42 || ''}`} />
      </div>
      <div className={`${classes._2021AllRightsReserved} ${props.classes?._2021AllRightsReserved || ''}`}>
        © 2021 All rights reserved.
      </div>
      <Link to="/" className={`${classes.home2} ${props.classes?.home2 || ''}`}>Home</Link>
      <div className={`${classes.services2} ${props.classes?.services2 || ''}`}>Services</div>
      <div className={`${classes.works2} ${props.classes?.works2 || ''}`}>Works</div>
      <Link to="/contacts" className={`${classes.contacts3} ${props.classes?.contacts3 || ''}`}>Contacts</Link>
      <Ellipse1Icon className={`${classes.ellipse1} ${props.classes?.ellipse1 || ''}`} />
      <Ellipse2Icon className={`${classes.ellipse2} ${props.classes?.ellipse2 || ''}`} />
      <Ellipse3Icon className={`${classes.ellipse3} ${props.classes?.ellipse3 || ''}`} />
      <Vector1Icon className={`${classes.vector1} ${props.classes?.vector1 || ''}`} />
      <Ellipse1Icon2 className={`${classes.ellipse12} ${props.classes?.ellipse12 || ''}`} />
      <Ellipse2Icon2 className={`${classes.ellipse22} ${props.classes?.ellipse22 || ''}`} />
      <Ellipse3Icon2 className={`${classes.ellipse32} ${props.classes?.ellipse32 || ''}`} />
      <Vector1Icon2 className={`${classes.vector12} ${props.classes?.vector12 || ''}`} />
      
      <a className={`${classes.phonelink1}`} target={"_blank"} href='tel:+380 665 217 036'>+380 665217036</a>
      <a className={`${classes.phonelink2}`} target={"_blank"} href='tel:+380 984 183 093'>+380 984183093</a>
      <a className={`${classes.emaillink}`} target={"_blank"} href='mailto:askold4525@gmail.com'>askold4525@gmail.com</a>
      <a className={`${classes.tglink}`} target={"_blank"} href='https://t.me/@samkov_anton'>@samkov_anton</a>
      <ClarityPhoneHandsetSolidIcon
        className={`${classes.clarityPhoneHandsetSolid} ${props.classes?.clarityPhoneHandsetSolid || ''}`}
      />
      <ClarityPhoneHandsetSolidIcon2
        className={`${classes.clarityPhoneHandsetSolid2} ${props.classes?.clarityPhoneHandsetSolid2 || ''}`}
      />
      <AntDesignMailFilledIcon
        className={`${classes.antDesignMailFilled} ${props.classes?.antDesignMailFilled || ''}`}
      />
      <BxlTelegramIcon className={`${classes.bxlTelegram} ${props.classes?.bxlTelegram || ''}`} />
    </div>
  );
});

export default Contacts