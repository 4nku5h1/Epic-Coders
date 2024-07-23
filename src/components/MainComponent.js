import { Routes, Route } from 'react-router-dom';

import '../css/styles.scss';
import HomeEpicCoders from '../distributers/epiccoders/Page/Home/HomeEpicCoders';
import Home from './Home/Home';

export default function MainComponent() {
    return (
        <div className="main">
            <Routes>
                <Route path="/page-not-found" element={<h1>Page Not Found</h1>} />
                <Route path="/" element={<HomeEpicCoders />} />
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </div>
    );
}
