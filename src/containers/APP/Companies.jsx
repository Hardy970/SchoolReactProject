import { useState } from 'react'
import './App.css'
import SousH from '../../components/sousHeads/SousH'
import Title from '../../components/Title/Title'
import Parag from '../../components/Parag/Parag'
import Liste from '../../components/liste/Liste'
import Listetwo from '../../components/listetwo/Listetwo'
import Listethree from '../../components/Listethree/Listethree'
import Article from '../../components/article/Article'
import Article1 from '../../components/article copy/Article'
import Article2 from '../../components/article copy 2/Article'
import Article3 from '../../components/article copy 3/Article'
import Article4 from '../../components/article copy 4/Article'
import Article5 from '../../components/article copy 5/Article'
import Article6 from '../../components/article copy 6/Article'
import Avfoot from '../../components/avfoot/Avfoot'




function Companies() {

  const [titles, setTitle] = useState([
    {
      name:'Description',
    },
    {
      name:'Responsibilities',
    },
    {
      name:'Who You Are',
    },
    {
      name:'Nice-To-Haves',
    },
    {
      name:'About this role',
    },
    {
      name:'July 31, 2021',
    },
    {
      name:'July 1, 2021',
    },
    {
      name:'Full-Time',
    },
    {
      name:'$75-$85k USD',
    },
    {
      name:'Categories',
    },
    {
      name:'Required Skills',
    },
    {
      name:'Social Media Assistant',
    },
    {
      name:'Brand Designer',
    },
    {
      name:'Interactive Developer',
    },
    {
      name:'HR Manager',
    },
    {
      name:'Social Media Assistant',
    },
    {
      name:'Brand Designer',
    },
    {
      name:'Interactive Developer',
    },
    {
      name:'HR Manager',
    }
    
  ]);

  const [parag, setaParag] = useState([
    {
      text:'Stripe is for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels.creating content, filing effective ways to engage the community and incentivize others to engage on our channels'
    },
    {
      text:'Apply Before',
    },
    {
      text:'Job Posted On',
    },
    {
      text:'Job Type',
    },
    {
      text:'Salary',
    },
    {
      text:'Marketing',
    },
    {
      text:'Design',
    },
    {
      text:'Project Management',
    },
    {
      text:'Copywriting',
    },
    {
      text:'Social Media Marketing',
    },
    {
      text:'English',
    },
    {
      text:'Copy Editing',
    },
    {
      text:'Read more about Stripe',
    },
    {
      text:'Nomad . Paris, France',
    },
    {
      text:'Dropbox . SanFrancisco,USA',
    },
    {
      text:'Terraform . Hamburg,Germany',
    },
    {
      text:'Packer . Lucern,Switzerland',
    },
    {
      text:'Notify . Paris,France',
    },
    {
      text:'Maze . SanFrancisco,USA',
    },
    {
      text:'Udacity . Hamburg,Germany',
    },
    {
      text:'Webflow . Lucern,Switzerland',
    },
    {
      text:'Full- Time',
    },
    
  ]);

  const [artiles, setArticle] = useState([
    {
      name:' We believe in thriving communities and that starts with our team being happy and healthy.',
    },
    {
      name:'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
    },
    {
      name:"We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
    },
    {
      name:'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
    },
    {
      name:'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.',
    },
    {
      name:"We’re grateful for all the time and energy each team member puts into getting to work every day.",
    },
    {
      name:'We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ',
    },
    {
      name:'This job comes with several perks and benefits',
    }
  ]);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      
      <div className="card">
        <div className="soush">
        <SousH/>
       </div>

       <div className="dfx">
        <div className="one">
          <div>
         <Title name={titles[0].name}/>
         <Parag text={parag[0].text}/>
         </div>
         <div>
         <Title name={titles[1].name}/>
         <Liste/>
         </div>
         <div>
         <Title name={titles[2].name}/>
         <Listetwo/>
         </div>
         <div>
         <Title name={titles[3].name}/>
         <Listethree/>
         </div>
        </div>
        <div className="two">
        <Title name={titles[4].name}/>
        <div>

        </div>
        <div className='txted'>
            <div>
              <Parag text={parag[1].text}/>
              <Parag text={parag[2].text}/>
              <Parag text={parag[3].text}/>
              <Parag text={parag[4].text}/>
            </div>
            <div className='gras'>
            <Title name={titles[5].name}/>
            <Title name={titles[6].name}/>
            <Title name={titles[7].name}/>
            <Title name={titles[8].name}/>
            </div>
        </div>
        <div className='trait'></div>
        <div className="gories">
          <Title name={titles[9].name}/>
        
        <div className="cat">
          <p className='ca'><Parag text={parag[5].text}/></p>
          <p className='cath'><Parag text={parag[6].text}/></p>
        </div>
        </div>
        <div className='traits'></div>
        <div>
          <Title name={titles[10].name}/>
        
        <div >
          <div className="onee">
          <p className="four"><Parag text={parag[7].text}/></p>
          <p className="five"><Parag text={parag[8].text}/></p>
          </div>
          <div className="twoo">
          <p className="six"><Parag text={parag[9].text}/></p>
          <p className="seven"><Parag text={parag[10].text}/></p>
          </div>
          <p className="three"><Parag text={parag[11].text}/></p>
        </div>
        </div>

        </div>

       </div>
       <div className='traitss'></div>

       <div className="act">
        <div className='disp'>
        <p className='champio'><Article/></p>
        <p className='champio'><Article1/></p>
        <p className='champio'><Article2/></p>
        <p className='champio'><Article3/></p>
        </div>
        <div className='disps'>
        <Article4/>
        <Article5/>
        <Article6/>
        <p className='cache'><Article6/></p>
        </div>
       </div>
       <div className='nv1'>


        <div className='nc'>
        <div className='img5'><img  src="" alt="" /></div>
        <div className='nb'>
         <Title name={titles[11].name}/>
        <p className='vnb'><Parag text={parag[12].text}/></p>
        </div>
        </div>


        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            </div>

        </div>
        </div>


        <div className='yeare'>

        <div className='foottr'>
            <h1>Similiar jobs</h1>
            <p className='dexc'>show all jobs</p>
        </div>

          <div className='container'>

            <div className='divone'>

                    <Avfoot/>
                    <Avfoot/>
                    <Avfoot/>
                    <Avfoot/>

            </div>

            <div className='divtwo'>

            <div></div>
            <Avfoot/>
            <Avfoot/>
            <Avfoot/>
            <Avfoot/>

            </div>

          </div>

       

       </div>

       <div className='foooter'>

       </div>






      </div>
      
     
      
      
    </>
  )
}

export default Companies
