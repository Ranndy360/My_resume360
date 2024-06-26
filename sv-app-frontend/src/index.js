import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Header from './components/header/Header';  
import Home from './pages/Home';
import AboutMe from './pages/sections/aboutMe/aboutMe';
import Education from './pages/sections/education/education';
import ReactFullpage from '@fullpage/react-fullpage';


const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  "#ff5f45",
  "#cdf8ff",
  "#bffff3",
  "#d1cef9",
  "orange",
  "blue",
  "purple",
  "yellow"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Ranndy360"
        },
        {
          text: "Section 2"
        },
        {
          text: "Section 3"
        }
      ]
    };
  }

  // onLeave(origin, destination, direction) {
  //   console.log("onLeave", { origin, destination, direction });
  //   // arguments are mapped in order of fullpage.js callback arguments do something
  //   // with the event
  // }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div className="menu"><Header/></div>
    );

    return (
      <div className="App font-mono">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["firstPage", "secondPage", "thirdPage"]}
          sectionSelector={SECTION_SEL}
          //onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
                <div key="Home" className="custom-section" >
                  <Home/>
                </div>
                <div key="About" className="custom-section" >                  
                  <AboutMe/>
                </div> 
                <div key="Education" className="custom-section" >
                  <Education/>
                </div> 
              {/* {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                  <div className="slide">
                    <h3>{text}</h3>
                  </div>
                </div>
              ))} */}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

