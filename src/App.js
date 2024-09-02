import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/containers/Navbar';
import Landing from './Components/pages/Landing';
import Registration from './Components/pages/Registration';
import About from './Components/pages/About';
import OurMission from './Components/pages/OurMission';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Footer from './Components/containers/Footer';
import Email from './Components/pages/Email';
import Feedback from './Components/pages/Feedback';
import Contact from './Components/pages/Contact';
import Blog from './Components/pages/Blog';
import GeneratedEmail from './Components/pages/GeneratedEmail';

const firebaseConfig = {
	apiKey: 'AIzaSyDdbup3HIex3dE9phf5-EUMDKHj_FUlL-k',
	authDomain: 'testaccess-web.firebaseapp.com',
	projectId: 'testaccess-web',
	storageBucket: 'testaccess-web.appspot.com',
	messagingSenderId: '549900795374',
	appId: '1:549900795374:web:6153ff273a08cf236422ff',
	measurementId: 'G-G8E8H54TK6',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className='flex-1 overflow-y-auto'>
				<Routes>
					<Route path='*' element={<Landing />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/about' element={<About />} />
					<Route path='/our-mission' element={<OurMission />} />
					<Route
						path='/generated-email'
						element={<GeneratedEmail />}
					/>
					<Route path='/email' element={<Email />} />
					<Route path='/feedback' element={<Feedback />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/blog' element={<Blog />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
};
