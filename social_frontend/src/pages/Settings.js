import React, { useState } from 'react';

function Settings() {
	const [settings, setSettings] = useState({
		notifications: true,
		emailUpdates: false,
		darkMode: false,
		privacy: 'public',
		language: 'en',
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setSettings((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	return (
		<div className="page-container fade-in">
			<div className="page-header">
				<h1 className="page-title">Settings</h1>
				<p className="page-description">Manage your account preferences</p>
			</div>

			<div className="card">
				<h2 className="mb-3">Account Settings</h2>
				<div className="form-group">
					<label className="form-label">Email</label>
					<input
						type="email"
						className="form-input"
						value="alex.morgan@example.com"
						disabled
					/>
				</div>
				<div className="form-group">
					<label className="form-label">Username</label>
					<input
						type="text"
						className="form-input"
						value="@alexmorgan"
						disabled
					/>
				</div>
				<button className="button button-secondary">Change Password</button>
			</div>

			<div className="card mt-4">
				<h2 className="mb-3">Preferences</h2>
				<div className="form-group">
					<label className="form-label">Privacy</label>
					<select
						name="privacy"
						className="form-input"
						value={settings.privacy}
						onChange={handleChange}
					>
						<option value="public">Public Account</option>
						<option value="private">Private Account</option>
						<option value="friends">Friends Only</option>
					</select>
				</div>

				<div className="form-group">
					<label className="form-label">Language</label>
					<select
						name="language"
						className="form-input"
						value={settings.language}
						onChange={handleChange}
					>
						<option value="en">English</option>
						<option value="es">Spanish</option>
						<option value="fr">French</option>
						<option value="de">German</option>
					</select>
				</div>

				<div className="form-group">
					<label className="form-label d-flex" style={{ marginBottom: '1rem' }}>
						<div style={{ flex: 1 }}>
							Push Notifications
							<div className="text-secondary" style={{ fontSize: '0.9rem' }}>
								Receive notifications about new posts and comments
							</div>
						</div>
						<label className="switch">
							<input
								type="checkbox"
								name="notifications"
								checked={settings.notifications}
								onChange={handleChange}
							/>
							<span className="slider"></span>
						</label>
					</label>

					<label className="form-label d-flex" style={{ marginBottom: '1rem' }}>
						<div style={{ flex: 1 }}>
							Email Updates
							<div className="text-secondary" style={{ fontSize: '0.9rem' }}>
								Receive weekly digest and important updates
							</div>
						</div>
						<label className="switch">
							<input
								type="checkbox"
								name="emailUpdates"
								checked={settings.emailUpdates}
								onChange={handleChange}
							/>
							<span className="slider"></span>
						</label>
					</label>

					<label className="form-label d-flex">
						<div style={{ flex: 1 }}>
							Dark Mode
							<div className="text-secondary" style={{ fontSize: '0.9rem' }}>
								Switch to dark theme
							</div>
						</div>
						<label className="switch">
							<input
								type="checkbox"
								name="darkMode"
								checked={settings.darkMode}
								onChange={handleChange}
							/>
							<span className="slider"></span>
						</label>
					</label>
				</div>
			</div>

			<div className="card mt-4">
				<h2 className="mb-3">Danger Zone</h2>
				<p className="text-secondary mb-3">
					Once you delete your account, there is no going back. Please be certain.
				</p>
				<button className="button" style={{ backgroundColor: 'var(--error-color)', color: 'white' }}>
					Delete Account
				</button>
			</div>
		</div>
	);
}

export default Settings; 