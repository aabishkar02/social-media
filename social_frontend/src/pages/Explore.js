import React from 'react';

const categories = [
	{ id: 1, name: 'Photography', icon: '📸', count: '2.4k posts' },
	{ id: 2, name: 'Design', icon: '🎨', count: '1.8k posts' },
	{ id: 3, name: 'Technology', icon: '💻', count: '3.2k posts' },
	{ id: 4, name: 'Travel', icon: '✈️', count: '1.5k posts' },
	{ id: 5, name: 'Music', icon: '🎵', count: '2.1k posts' },
	{ id: 6, name: 'Food', icon: '🍳', count: '1.9k posts' },
];

const trendingPosts = [
	{
		id: 1,
		title: 'Minimal Workspace Setup',
		author: 'Sarah Chen',
		likes: 234,
		category: 'Design',
		image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500',
	},
	{
		id: 2,
		title: 'Morning Coffee Routine',
		author: 'James Wilson',
		likes: 189,
		category: 'Lifestyle',
		image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
	},
	{
		id: 3,
		title: 'Urban Photography Guide',
		author: 'Elena Martinez',
		likes: 312,
		category: 'Photography',
		image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500',
	},
];

function Explore() {
	return (
		<div className="page-container fade-in">
			<div className="page-header">
				<h1 className="page-title">Explore</h1>
				<p className="page-description">Discover trending topics and popular posts</p>
			</div>

			<section className="mb-4">
				<h2 className="mb-3">Popular Categories</h2>
				<div className="grid">
					{categories.map((category) => (
						<div key={category.id} className="card">
							<div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
								{category.icon}
							</div>
							<h3 className="mb-1">{category.name}</h3>
							<p className="text-secondary">{category.count}</p>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="mb-3">Trending Posts</h2>
				<div className="grid">
					{trendingPosts.map((post) => (
						<div key={post.id} className="card">
							<img
								src={post.image}
								alt={post.title}
								style={{
									width: '100%',
									height: '200px',
									objectFit: 'cover',
									borderRadius: 'var(--border-radius)',
									marginBottom: '1rem',
								}}
							/>
							<h3 className="mb-1">{post.title}</h3>
							<p className="text-secondary mb-2">By {post.author}</p>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<span className="text-secondary">{post.category}</span>
								<span>❤️ {post.likes}</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Explore; 