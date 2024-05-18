
function Tag(props)
{
    let style
    if(props.color=="orange")
        {
            style={
                color: "#FFB836",
                padding: "4px 16px",
                backgroundColor: "rgba(235, 133, 51, 0.1)",
                fontSize: "14px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "30px",
                marginRight:"7px"
            }
        }
        else if(props.color=="green"){ 
            style={
                color: "#56CDAD",
                padding: "4px 16px",
                backgroundColor: "rgba(86, 205, 173, 0.1)",
                fontSize: "14px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "30px",
            } 
        }
        else if(props.color=="red"){ 
            style={
                color: "#FF6550",
                padding: "4px 16px",
                backgroundColor: "rgba(255, 101, 80, 0.1)",
                fontSize: "14px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "30px",
            } 
        }
        else {
            style={
                color: "#4640DE",
                padding: "4px 16px",
                backgroundColor: "rgba(70, 64, 222, 0.1)",
                fontSize: "14px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "30px",
            }
        }
    return (
        <button style={style}>{props.text}</button>
    )
}
export default Tag