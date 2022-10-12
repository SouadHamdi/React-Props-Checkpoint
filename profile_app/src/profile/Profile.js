
import Image from '../Image';
import PropTypes from "prop-types";
const profileStyle = {
    
    width: '1500px',
    height: '6OOpx',
    border:  '1px solid blue',
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    fontFamily : 'calibri',
    
}
function Profile(props) {
 
    return (
        <div style={profileStyle}>
            <div>
                <h3>Full Name</h3>
                <p>{props.info.fullName}</p>
            </div>
            <hr/>
            <div> 
                <h3>Profession</h3>
                <p>{props.info.profession}</p>
            </div>
            <hr/>
            <div>
                <h3>Bio</h3>
                <p>{props.info.bio}</p>
            </div>  
            <Image>
                <img src="https://sun9-72.userapi.com/impf/c850420/v850420153/4dfe1/ihATZOdpFRA.jpg?size=483x604&quality=96&sign=9fc9dd6a9789b81b323957531873849e&type=album" alt=""/>
            </Image> 
            <button onClick={()=>props.handleName(props.info.fullName)}>Profile Name</button>
        </div>
    )
}
Profile.defaultProps = {
    fullName: "Souad hamdi",
    profession: " Developer",
    bio:
      "a QA engineer and a full stack dev  ",
  };
  
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string,
    bio: PropTypes.string,
    src: PropTypes.string,
  };

export default Profile