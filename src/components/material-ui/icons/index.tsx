import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined';
import InfoIcon from '@material-ui/icons/Info';
import Icon from '@material-ui/core/Icon';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CodeIcon from '@material-ui/icons/Code';
import MenuIcon from '@material-ui/icons/Menu';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PlaceIcon from '@material-ui/icons/Place';

export const PORTFOLIO_ICON: JSX.Element = (
  <BurstModeOutlinedIcon />
);

export const IPHONE_ICON: JSX.Element = (
  <PhoneIphoneIcon />
);

export const CLOSE_ICON: JSX.Element = (
  <HighlightOffIcon />
);

export const MENU_ICON: JSX.Element = (
  <MenuIcon />
);

export const MENU: JSX.Element = (
  <span className="iconify menu-core-icon" data-icon="bx:bx-menu-alt-left" data-inline="false"></span>
);

export const OPEN_IN_NEW_ICON: JSX.Element = (
  <OpenInNewIcon />
);

export const CODE_ICON: JSX.Element = (
  <CodeIcon />
);

export const FLIGHT_TAKE_OFF_ICON: JSX.Element = (
  <FlightTakeoffIcon />
);

export const ARROW_FORWARD_IOS_ICON: JSX.Element = (
  <ArrowRightIcon />
);

export const INSTAGRAM_ICON: JSX.Element = (
  <InstagramIcon />
);

export const FACEBOOK_ICON: JSX.Element = (
  <FacebookIcon />
);

export const EMAIL_ICON: JSX.Element = (
  <MailOutlineIcon />
);

export const ALTERNATE_EMAIL_ICON: JSX.Element = (
  <AlternateEmailIcon />
);

export const FORMAT_SHAPES_ICON: JSX.Element = (
  <FormatShapesIcon />
);

export const EMOJI_FLAGS_ICON: JSX.Element = (
  <EmojiFlagsIcon />
);

export const BEACH_ACCESS_ICON: JSX.Element = (
  <BeachAccessIcon />
);

export const PLACE_ICON: JSX.Element = (
  <PlaceIcon />
);

export const SPACING: JSX.Element = (
  <>
    &nbsp;
  </>
);

export const TOP_DRAWER_MENU = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    pathname: '/',
  },
  {
    icon: PORTFOLIO_ICON,
    label: 'Portfolio',
    pathname: '/portfolio',
  },
  {
    icon: <StorefrontOutlinedIcon />,
    label: 'Services',
    pathname: '/services',
  },
];

export const BOTTOM_DRAWER_MENU = [
  {
    icon: <InfoIcon />,
    label: 'About',
    pathname: '/about',
  },
  {
    icon: <ContactPhoneIcon />,
    label: 'Contact',
    pathname: '/contact',
  },
  {
    icon: <StorefrontOutlinedIcon />,
    label: 'Hire Me',
    pathname: '/hire-me',
  },
];

export const FIRST_HOME_FORM = {
  NAME: <PersonOutlineIcon />,
  EMAIL: <AlternateEmailIcon />,
  PHONE: <PhoneIphoneIcon />,
};

export const FOOTER_SOCIAL_ICON = [
  {
    icon: <GitHubIcon />,
    url: 'https://www.github.com/kevinshirley',
  },
  {
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/kevin-shirley',
  },
];
