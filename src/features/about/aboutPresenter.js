// aboutPresenter.js
import { getAboutContent } from "./aboutModel.js";
import { AboutView } from "./aboutView.js";
import "../../assets/styles/styles.css";
import { protectPage } from "../../../src/firebase/authGuard.js";

protectPage();

const AboutPresenter = () => {
  const init = () => {
    const content = getAboutContent();
    AboutView.render(content);
  };

  return { init };
};

AboutPresenter().init();

export default AboutPresenter;
