import LinkedinIcon from "../assets/Linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Footer() {
  return (
    <footer className="flex container mx-auto flex justify-between items-center text-center py-6 border-t border-gray-700 text-gray-400">
      
      <div className="margin-left">
       <span>Meu contato:<br/>  88 99912-9315</span>
     </div>
      <div className="flex flex-col">
       <span>Email:<br/> rafaelmartinsgaldino2020@gmail.com</span>
     </div>
      <div className="flex gap">
          <a
            href="http://www.linkedin.com/in/rafaelmgaldino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/rafaelmgaldino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
        </div>
    </footer>
    
  );
}

export default Footer;
