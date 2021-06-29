import React from "react";
import './home.css'
import rock_vibes from '../../images/rock_vibes.PNG';
import Head_Shot from '../../images/Head Shot.PNG'

import {Grid} from "@material-ui/core"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} className="topLeftPanel" style={{height: '500px'}}>
                        <h1 className="topLeftItem" style={{marginBottom: "1em", marginTop: '1em'}}>Hi, I'm Jeffrey Xu</h1>
                        <h3 className="topLeftItem" style={{marginBottom: "1em"}}>Computer Science + Mathematics @ TAMU</h3>
                        <h4 className="topLeftItem">Software Engineering</h4>
                        <h4 className="topLeftItem">Data Science/Machine Learning/AI</h4>
                        <h4 className="topLeftItem" style={{marginBottom: "5em"}}>Cybersecurity</h4>

                        <div className="homeCircle"></div>
                        <div className="homeCircle" style={{background: '#FDCA40'}}></div>
                        <div className="homeCircle" style={{background: '#546747'}}></div>
                    </Grid>
                    <Grid item xs={12} sm={6} className="topRightPanel" style={{height: '500px'}}>
                        <img src={rock_vibes} height='500px' className={'topRightImg'}></img>
                    </Grid>
                    <Grid item xs={12} sm={6} className="bottomLeftPanel" style={{height: '500px'}}>
                        <img src={Head_Shot} className="homeHeadShot"></img>
                    </Grid>
                    <Grid item xs={12} sm={6} className="bottomRightPanel" style={{height: '500px'}}>
                        <h1 style={{fontWeight: 'normal', textAlign: 'center'}}>About Me</h1>
                        <p style={{paddingLeft: '3em', paddingRight: '3em'}}> My name is Jeffrey Xu and I am currently a student at 
                        Texas A&M University as a honors Computer Science and Applied Mathematics major while also pursuing minors 
                        in Statistics and Cybersecurity. I’m interested in Machine Learning/AI/Data Science, Software Engineering, 
                        Cybersecurity, Networks/Systems and advanced mathematics. I’m a member of the Aggie Coding Club, Aggie Web 
                        Developers and the TAMU Cybersecurity club. I’m currently an undergraduate researcher at the UrbanResiliance.AI 
                        lab led by Dr. Ali Mostafavi. </p>
                    </Grid>
                </Grid> 
            </div>
        )
    }
}

export default Home;