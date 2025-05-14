// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './App.css';

function App() {
	return (
		<Router>
			<div className="app-container">
				<nav className="modern-nav">
					<div className="nav-content">
						<Link to="/" className="nav-brand">
							Minimalist
						</Link>
						<ul className="nav-links">
							<li>
								<NavLink to="/" end>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/explore">
									Explore
								</NavLink>
							</li>
							<li>
								<NavLink to="/create">
									Create
								</NavLink>
							</li>
							<li>
								<NavLink to="/profile">
									Profile
								</NavLink>
							</li>
							<li>
								<NavLink to="/settings">
									Settings
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/explore" element={<Explore />} />
						<Route path="/create" element={<CreatePost />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;