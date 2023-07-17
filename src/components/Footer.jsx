import { ReactComponent as GithubIcon } from "../assets/github-mark.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>© {currentYear} fakafka, Inc.</p>
      <div className="github-container">
        <p>this is a fake website, made by 63r6o</p>

        <a href="https://github.com/63r6o/fakafka" target="_blank">
          <GithubIcon
            viewBox="0 0 98 96"
            height="2em"
            width="2em"
            className="github-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
