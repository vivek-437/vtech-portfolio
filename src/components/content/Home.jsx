import React,{useState,useEffect} from "react";


const Home = () => {
  const [word, setWord] = useState("");
  const [options, setOptions] = useState(["python", "javascript", "reactjs"]);
  const [pointer, setPointer] = useState({ wordPoint: 0, letterPoint: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      let getWord = options[pointer.wordPoint];

      if (pointer.letterPoint === 0 && word === getWord) {
        if (pointer.wordPoint + 1 === options.length) {
          setPointer({ ...pointer, wordPoint: 0 });
        } else {
          setPointer({ ...pointer, wordPoint: pointer.wordPoint + 1 });
        }
        setWord("");
      } else if (
        getWord.length !== pointer.letterPoint &&
        word !== getWord
      ) {
        setPointer({ ...pointer, letterPoint: pointer.letterPoint + 1 });
      } else {
        setWord(getWord);
        setPointer({ ...pointer, letterPoint: pointer.letterPoint - 1 });
      }
    }, 300);

    return () => clearInterval(timer);
  });
  return (
    
    <>
      <div className="container conhome">
        {/* <img src={homebg} alt="error" /> */}
        {/* <div className="scrolly"> */}
        <div className="Hcontent">
{/* <LeftNavBar/> */}
          <div className="reset">
          <h3>Welcome To My Website</h3>
          <h1>I'm Vivek Gupta .</h1>
          <p>
            My  goal is to become Full Stack Developer🔥🔥.I love to write
            program and enjoy doing  it.<br/>  I 'm really dedicated & passionate
            towards my work ...
          </p>

          <div className="rewrite">
            <span >I Like To Code In</span>
            <p className="clear">{options[pointer.wordPoint].slice(0,pointer.letterPoint)}</p>
            <span className="line">|</span>
          </div>
          <div className="socialMedia">
            <ul>
              <a
                href="https://instagram.com/______patcher_____"
                target="blank"
                rel="icon"
                className="insta"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Vivek-Gupta/100028261200134/"
                target="blank"
                rel="icon"
                className="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://github.com/vivek-437"
                target="blank"
                rel="icon"
                className="github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-gupta-207a6a210/"
                target="blank"
                rel="icon"
                className="linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>

      </div>   
    </>
  );
};

export default Home;
