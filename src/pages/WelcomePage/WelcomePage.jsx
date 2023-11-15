import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import css from "./WelcomPage.module.css";
import Container from "../../components/Container/Container";
import Icon from "../../components/ComponIcon/Icon";

import VideoInfo from '../../components/ButtonInfo/VideoInfo';
import CalInfo from "../../components/ButtonInfo/Calinfo"

const WelcomePage = () => {
  return (
    <Container>
      <div className={css.logo}>
        <Logo />{' '}
      </div>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyText}>body</span> shape
          with Power Pulse
        </h1>
        <div className={css.icon}>
          <Icon className={css.exerciseArrowSvg} iconId="icon-line" />
        </div>
        <div className={css.buttonWrapper}>
          <Link className={css.link} to="/signup">
            <Button type="submit" className={css.buttonSignUp} text="Sign Up" />
          </Link>
          <Link to="/signin">
            <Button type="submit" className={css.buttonSignIn} text="Sign In" />
          </Link>
        </div>
        <div className={css.polygon}>
          <VideoInfo />
        </div>

        <div className={css.runner}>
          <CalInfo />
        </div>
      </div>

      <BackgroundImage />
    </Container>
  );
};

export default WelcomePage;
