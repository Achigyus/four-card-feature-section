import './App.css'
import magnifyingIcon from './assets/icon-supervisor.svg'
import homepageIcon from './assets/icon-team-builder.svg'
import lightBulbIcon from './assets/icon-karma.svg'
import computerIcon from './assets/icon-calculator.svg'

function App() {

  return (
    <div className="container">
      <header className="four_card_feature_header">
        <h1 className="four_card_feature_title">
          <span>Reliable, efficient delivery</span><br />Powered by Technology
        </h1>
        <p className="four_card_feature_header_title_desc">Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful</p>
      </header>
      <main className="four_card_feature_main">
        <div className="four_card_feature_card_container">
          <div className="four_card_feature_card light_blue">
            <h2 className="four_card_feature_card_title">Supervisor</h2>
            <p className="four_card_feature_card_desc">Monitors activity to identify project roadblocks</p>
            <div className="four_card_feature_card_img_container">
              <img src={magnifyingIcon} alt="magnifying glass icon" className="four_card_feature_card_img" />
            </div>
          </div>

          <div className="four_card_feature_card red">
            <h2 className="four_card_feature_card_title">Team Builder</h2>
            <p className="four_card_feature_card_desc">Scans our talent network to create the optimal team for your project</p>
            <div className="four_card_feature_card_img_container">
              <img src={homepageIcon} alt="homepage icon" className="four_card_feature_card_img" />
            </div>
          </div>

          <div className="four_card_feature_card orange">
            <h2 className="four_card_feature_card_title">Karma</h2>
            <p className="four_card_feature_card_desc">Regularly evaluates our talent to ensure quality</p>
            <div className="four_card_feature_card_img_container">
              <img src={lightBulbIcon} alt="light bulb icon" className="four_card_feature_card_img" />
            </div>
          </div>

          <div className="four_card_feature_card dark_blue">
            <h2 className="four_card_feature_card_title">Calculator</h2>
            <p className="four_card_feature_card_desc">Uses data from past projects to provide better delivery estimates</p>
            <div className="four_card_feature_card_img_container">
              <img src={computerIcon} alt="computer icon" className="four_card_feature_card_img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
