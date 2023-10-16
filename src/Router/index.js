import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Login from '../Components/Login';
import Createanaccount from '../Components/Createanaccount';
import Home from '../Components/Home';
// import Showparkingspace1 from '../Components/Showparkingspace1';
// import Showparkingspace2 from '../Components/Showparkingspace2';
// import Showparkingspace4 from '../Components/Showparkingspace4';
// import Showparkingspace5 from '../Components/Showparkingspace5';
// import Showparkingspace6 from '../Components/Showparkingspace6';
// import Showparkingspace7 from '../Components/Showparkingspace7';
// import Showparkingspace8 from '../Components/Showparkingspace8';
// import Showparkingspace9 from '../Components/Showparkingspace9';
// import Showparkingspace3 from '../Components/Showparkingspace3';
import About from '../Components/About';
import ContactUs from '../Components/ContactUs';
import Location from '../Components/Location';
// import ParkingplaceK1 from '../Components/ParkingplaceK1';
// import ParkingplaceM1 from '../Components/ParkingplaceM1';
// import ParkingplaceI1 from '../Components/ParkingplaceI1';
// import ParkingplaceN1 from '../Components/ParkingplaceN1';
// import ParkingplaceS1 from '../Components/ParkingplaceS1';
// import ParkingplaceJP1 from '../Components/ParkingplaceJP1';
// import ParkingplaceK2 from '../Components/ParkingplaceK2';
// import ParkingplaceK3 from '../Components/ParkingplaceK3';
// import ParkingplaceK4 from '../Components/ParkingplaceK4';
// import ParkingplaceHSR1 from '../Components/ParkingplaceHSR1';
// import ParkingplaceHSR2 from '../Components/ParkingplaceHSR2';
// import ParkingplaceJP3 from '../Components/ParkingplaceJP3';
// import ParkingplaceS3 from '../Components/ParkingplaceS3';
// import ParkingplaceN3 from '../Components/ParkingplaceN3';
// import ParkingplaceI3 from '../Components/ParkingplaceI3';
// import ParkingplaceN2 from '../Components/ParkingplaceN2';
// import ParkingplaceS2 from '../Components/ParkingplaceS2';
// import ParkingplaceJP2 from '../Components/ParkingplaceJP2';
// import ParkingplaceI2 from '../Components/ParkingplaceI2';
// import ParkingplaceHSR3 from '../Components/ParkingplaceHSR3';
// import ParkingplaceM2 from '../Components/ParkingplaceM2';
// import ParkingplaceM3 from '../Components/ParkingplaceM3';
import Parkingrid from '../Components/Parkingrid';
import Maps from '../Components/maps';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/homepage"><HomePage /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/createanaccount"><Createanaccount /></Route>
				<Route exact path="/"><Home /></Route>
				{/* <Route exact path="/showparkingspace1"><Showparkingspace1 /></Route>
				<Route exact path="/showparkingspace2"><Showparkingspace2 /></Route>
				<Route exact path="/showparkingspace4"><Showparkingspace4 /></Route>
				<Route exact path="/showparkingspace5"><Showparkingspace5 /></Route>
				<Route exact path="/showparkingspace6"><Showparkingspace6 /></Route>
				<Route exact path="/showparkingspace7"><Showparkingspace7 /></Route>
				<Route exact path="/showparkingspace8"><Showparkingspace8 /></Route>
				<Route exact path="/showparkingspace9"><Showparkingspace9 /></Route>
				<Route exact path="/showparkingspace3"><Showparkingspace3 /></Route> */}
				<Route exact path="/about"><About /></Route>
				<Route exact path="/contactus"><ContactUs /></Route>
				<Route exact path="/location"><Location /></Route>
				{/* <Route exact path="/parkingplacek1"><ParkingplaceK1 /></Route>
				<Route exact path="/parkingplacem1"><ParkingplaceM1 /></Route>
				<Route exact path="/parkingplacei1"><ParkingplaceI1 /></Route>
				<Route exact path="/parkingplacen1"><ParkingplaceN1 /></Route>
				<Route exact path="/parkingplaces1"><ParkingplaceS1 /></Route>
				<Route exact path="/parkingplacejp1"><ParkingplaceJP1 /></Route>
				<Route exact path="/parkingplacek2"><ParkingplaceK2 /></Route>
				<Route exact path="/parkingplacek3"><ParkingplaceK3 /></Route>
				<Route exact path="/parkingplacek4"><ParkingplaceK4 /></Route>
				<Route exact path="/parkingplacehsr1"><ParkingplaceHSR1 /></Route>
				<Route exact path="/parkingplacehsr2"><ParkingplaceHSR2 /></Route>
				<Route exact path="/parkingplacejp3"><ParkingplaceJP3 /></Route>
				<Route exact path="/parkingplaces3"><ParkingplaceS3 /></Route>
				<Route exact path="/parkingplacen3"><ParkingplaceN3 /></Route>
				<Route exact path="/parkingplacei3"><ParkingplaceI3 /></Route>
				<Route exact path="/parkingplacen2"><ParkingplaceN2 /></Route>
				<Route exact path="/parkingplaces2"><ParkingplaceS2 /></Route>
				<Route exact path="/parkingplacejp2"><ParkingplaceJP2 /></Route>
				<Route exact path="/parkingplacei2"><ParkingplaceI2 /></Route>
				<Route exact path="/parkingplacehsr3"><ParkingplaceHSR3 /></Route>
				<Route exact path="/parkingplacem2"><ParkingplaceM2 /></Route>
				<Route exact path="/parkingplacem3"><ParkingplaceM3 /></Route> */}
				<Route exact path="/parkingrid"><Parkingrid /></Route>
				<Route exact path="/maps"><Maps /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;