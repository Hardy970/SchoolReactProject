import right2 from '../images/right-black.png'

function Category(props)
{
    let style=null;
    if(props.nom=="Marketing"){
        style={
            backgroundColor:"#4640DE",
            color:"#FFFFFF"
        }
    }
    return (
        <div style={style} className=' category  d-flex h-100 flex-column  justify-content-between '>
                <div className='w-100 mx-5 my-4 h-100 '>
                <div>
                <img src={props.logo} alt="" />
                </div>
                <div>
                    <h5>{props.nom}</h5>
                    <p>{props.nombreDeJobs} jobs available  <img src={right2} alt="" className=' mx-2' /></p>
                </div>
                </div>
            </div>
    )
}
export default Category