import ButtonFullTime from './ButtonFullTime'
import Tag from './Tag'

function Job(props)
{
    return(
        <div className=' p-3 job'>
                    <div className=' d-flex justify-content-between mb-3 '>
                        <img src={props.logo} alt="" />
                        <ButtonFullTime/>
                    </div>
                    <h6>
                        {props.poste}
                    </h6>
                    <div className='mb-2'>
                        <p>{props.entreprise} <span className='dot'>.</span> {props.adresse}</p>
                    </div>
                    <p> {props.description}</p>
                    <div className=' mt-3 '>
                        {
                            props.tags.map((tag)=>{
                                if(tag=='Design')
                                    {
                                        return  <Tag text="Design" color="green"/>
                                    }
                                    else if (tag=='Marketing')
                                        {
                                            return  <Tag text="Marketing" color="orange"/>
                                        }
                                        else if(tag=='Business'){
                                            return  <Tag text="Business"/>
                                        }
                                        else if(tag=='Technology')
                                            {
                                                return <Tag text="Technology" color="red"/>
                                            }
                            })
                           
                      }

                    </div>
                </div>
    )
}
export default Job