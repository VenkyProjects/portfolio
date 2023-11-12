import styles from './styles.module.css';
import SocialMedia from './SocialMedia';
import React, { useState, useEffect, useRef } from 'react';

const FlowingText = ({ words, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const currentWordIndexRef = useRef(0);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex === words[currentWordIndexRef.current].length) {
          currentIndex = 0;

          // Move to the next word in the array
          currentWordIndexRef.current = (currentWordIndexRef.current + 1) % words.length;

          return '';
        } else {
          currentIndex++;
          return words[currentWordIndexRef.current].slice(0, currentIndex+1);
        }
      });
    }, speed);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [words, speed]);

  return <div>{`${displayText}`}</div>;
};

const ResumeButton = () => {
  const resumeLink = 'https://drive.google.com/file/d/1Gn6rhCX0GKmJ_kyaB3RGjMea5_2eepuk/view?usp=sharing';

  const openResume = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <button className={styles.resumeButton} onClick={openResume}>
      View Resume
    </button>
  );
};

function Portfolio(){
  const words = ['freelancer', 'developer', 'designer'];
  return(
      <div className={styles.top}>
          <div className={styles.main}>
              <div className={styles.name}>Sunke Venkateswarlu</div>
              <p>I'm <FlowingText words={words} speed={300} /></p>
              <div>
                <SocialMedia/>
                <ResumeButton/>
              </div>
          </div>
      </div>
  );
};
export default Portfolio;