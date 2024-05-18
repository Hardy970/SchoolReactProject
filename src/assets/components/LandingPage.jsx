import line from '../images/vector.svg'
import search from '../images/icon-search.png'
import location from '../images/icon-location.png'
import vodafoneLogo from '../images/vodafone-logo.png'
import intelLogo from '../images/intel-3.png'
import teslaLogo from '../images/teslaLogo.png'
import amdaLogo from '../images/amdLogo.png'
import talkiLogo from '../images/talkitLogo.png'
import design from '../images/design.png'
import sales from '../images/sales.png'
import businness from '../images/business.png'
import human from '../images/human.png'
import marketing from '../images/marketing.png'
import engineering from '../images/engineering.png'
import technology from '../images/technology.png'
import finance from '../images/finance.png'
import dashboard from '../images/dashboard.png'
import jobLogo1 from '../images/jobs-logo1.png'
import jobLogo2 from '../images/jobLogo2.png'
import jobLogo3 from '../images/jobLogo3.png'
import jobLogo4 from '../images/jobLogo4.png'
import jobLogo5 from '../images/jobLogo5.png'
import jobLogo6 from '../images/jobLogo6.png'
import jobLogo7 from '../images/jobLogo7.png'
import jobLogo8 from '../images/jobLogo8.png'



import ShowAll from './ShowAll'
import Category from './Category'
import Job from './Job'
function LandingPage()
{
    return(
        <main className='landing'>
                <section className='mt-1 second-bg w-100 section1 '>
        <div className='mcontainer mb-0  '>
          <div className=' section1-block1  mb-0 pb-5'>
          <p>
            <h1 className=' fw-semibold '>Discover <br /> more than <br /> <span className='blue'>5000+ Jobs</span> </h1>
            <img src={line} alt="" />
            <p className='mb-0'>
            Great platform for the job seeker that searching for <br /> new career heights and passionate about startups.
            </p>
          </p>
          </div>
          <div className=' w-75 bg-white search-block  mt-0 '>
            <div className='mt-0 ml-3 d-flex  justify-content-between mr-2 p-4' >
                <div className=''>
                  <img src={search} alt="" className='mx-3'/>
                  <input type='search' placeholder='Job title or keyword'  className='minput'/>
                </div>
                <div>
                  <img src={location} alt="" className='mx-3'/>
                  <select name="" id="" className='minput '>
                    <option value="">Florence,Italy</option>
                  </select>
                </div>
                <button>Search my job</button>
            </div>
            <div className='min-div second-bg mborder-bottom'>
                <p> <br />Popular : UI Designer, UX Researcher, Android, Admin</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section2 mcontainer d-flex flex-column  justify-content-around  '>
          <p>Companies we helped grow</p>
          <div className=' d-flex justify-content-between '>
              <img src={vodafoneLogo} alt="" />
              <img src={intelLogo} alt="" />
              <img src={teslaLogo} alt="" />
              <img src={amdaLogo} alt="" />
              <img src={talkiLogo} alt="" />
          </div>
      </section>
      <section className='mcontainer mt-5 mb-5'>
        <ShowAll text="Explore by" textBlue="category"/>
        <div className='mcontainer w-100 row mt-4 categoryContainer'>
            <Category logo={design} nom="Design" nombreDeJobs="235"/>
            <Category logo={sales} nom="Sales" nombreDeJobs="756"/>
            <Category logo={marketing} nom="Marketing" nombreDeJobs="140"/>
            <Category logo={finance} nom="Finance" nombreDeJobs="325"/>
            <Category logo={technology} nom="Technology" nombreDeJobs="436"/>
            <Category logo={engineering} nom="Engineering" nombreDeJobs="542"/>
            <Category logo={businness} nom="Businness" nombreDeJobs="211"/>
            <Category logo={human} nom="Human Resource" nombreDeJobs="346"/>

        </div>
      </section>
      <section className='sectionImageOnBlock mcontainer'>
            <img src={dashboard} alt="" className='mdashboard'/>
            <div className=' m-5 my-5'>
                <h2 className=' text-white '>Start posting <br /> jobs today</h2>
                <p className=' mt-4'>Start posting jobs for only $10.</p>
                <button className=' mt-4'>Sign Up For Free</button>
            </div>
      </section>
      <section className='mcontainer mt-5 mb-5'>
            <ShowAll text="Featured" textBlue="jobs"/>
            <div className='w-100 mt-4 jobContainer'>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo1} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>
                <Job poste="Brand Designer" entreprise="Dropbox" adresse="San Fransisco, US" logo={jobLogo2} description="Dropbox is looking for Brand Designer to help the team t ..." tags={["Design","Business"]}/>
                <Job poste="Email Marketing" entreprise="Pitch" adresse="Berlin,Germany" logo={jobLogo3} description="Pitch is looking for Customer Manager to join marketing t ..." tags={["Marketing"]}/>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo4} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo5} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo6} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo7} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>
                <Job poste="Email Marketing" entreprise="Revolut" adresse="Madrid,Spain" logo={jobLogo8} description="Revolut is looking for Email Marketing to help team ma ..." tags={["Marketing","Design"]}/>

            </div>
      </section>
      </main>
    )
}

export default LandingPage