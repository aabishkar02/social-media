import React from 'react';

const userProfile = {
	name: 'Alex Morgan',
	username: '@alexmorgan',
	bio: 'Digital minimalist • Photography enthusiast • UI Designer',
	stats: {
		posts: 128,
		followers: '5.2k',
		following: 420,
	},
	posts: [
		{
			id: 1,
			image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500',
			likes: 234,
			comments: 12,
		},
		{
			id: 2,
			image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=500',
			likes: 182,
			comments: 8,
		},
		{
			id: 3,
			image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=500',
			likes: 392,
			comments: 24,
		},
	],
};

function Profile() {
	return (
		<div className="page-container fade-in">
			<div className="card" style={{ marginBottom: '2rem' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
					<div
						style={{
							width: '120px',
							height: '120px',
							borderRadius: '50%',
							backgroundColor: 'var(--background-light)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '3rem',
						}}
					>
						{userProfile.name[0]}
					</div>
					<div>
						<h1 className="page-title" style={{ marginBottom: '0.5rem' }}>
							{userProfile.name}
						</h1>
						<p className="text-secondary" style={{ marginBottom: '1rem' }}>
							{userProfile.username}
						</p>
						<p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
							{userProfile.bio}
						</p>
						<div style={{ display: 'flex', gap: '2rem' }}>
							<div>
								<strong>{userProfile.stats.posts}</strong>
								<span className="text-secondary"> Posts</span>
							</div>
							<div>
								<strong>{userProfile.stats.followers}</strong>
								<span className="text-secondary"> Followers</span>
							</div>
							<div>
								<strong>{userProfile.stats.following}</strong>
								<span className="text-secondary"> Following</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h2 className="mb-3">Posts</h2>
				<div className="grid">
					{userProfile.posts.map((post) => (
						<div key={post.id} className="card">
							<img
								src={post.image}
								alt=""
								style={{
									width: '100%',
									height: '300px',
									objectFit: 'cover',
									borderRadius: 'var(--border-radius)',
									marginBottom: '1rem',
								}}
							/>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<span>❤️ {post.likes}</span>
								<span>💬 {post.comments}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Profile; 