import right from '../images/right.png'

function ShowAll(props)
{
    return (
        <div className=' w-100 d-flex justify-content-between align-items-center  mb-5'>
            <h2>{props.text} <span className='blue' >{props.textBlue}</span></h2>
            <div className='showall'><a href="#" className=' text-decoration-none ' >Show all jobs  <img src={right} alt="" /></a> </div>
        </div>
    )
}
export default ShowAll