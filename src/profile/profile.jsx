import React from "react";
import PropTypes from "prop-types";
function Profile({fullName, bio, profession, handleName }){
    return(
<div  style={{position:"relative" ,padding:100 ,display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#ececec"}}>
        {handleName(fullName)}
        <img src="/images/profil-pic.jpg" alt="" style={{height:350, width:300,position:"absolute", left:"10vw", top:20, borderRadius:10 }} />

    <div style={{display:"flex", flexDirection:"column", height:"60vh", width:"50vw",borderRadius:10, backgroundColor:"#fff", paddingLeft:"30%", paddingRight:"3%"  }}>
    <h1>{fullName}</h1>
    <h3 style={{ }}>{profession}</h3>
    <p style={{fontFamily:"NotoSerif serif"}} >{bio}</p>
    </div>
    
</div>
    )

}
Profile.defaultProps = {
    fullName: "Name",
    profession:"Job",
    bio:"About"
  };
  Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.func,
  };
export default Profile;