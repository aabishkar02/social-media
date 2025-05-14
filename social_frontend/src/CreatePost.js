// CreatePost.js
import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
	const [newPost, setNewPost] = useState({
		title: "",
		content: "",
		file: null,
	});
	const [notification, setNotification] = useState({
		show: false,
		message: "",
		type: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewPost({ ...newPost, [name]: value });
	};

	const handleFileChange = (event) => {
		setNewPost({ ...newPost, file: event.target.files[0] });
	};

	const handlePostSubmit = () => {
		const formData = new FormData();
		formData.append("title", newPost.title);
		formData.append("content", newPost.content);
		if (newPost.file) {
			formData.append("file", newPost.file);
		}

		axios
			.post("http://localhost:5000/api/posts", formData)
			.then((response) => {
				setNewPost({ title: "", content: "", file: null });
				setNotification({
					show: true,
					message: "Post created successfully!",
					type: "success",
				});
				setTimeout(() => setNotification({ ...notification, show: false }), 3000);
			})
			.catch((error) => {
				console.error("Error creating post:", error);
				setNotification({
					show: true,
					message: "Error creating post. Please try again.",
					type: "error",
				});
				setTimeout(() => setNotification({ ...notification, show: false }), 3000);
			});
	};

	return (
		<div className="create-post-container">
			<div className="create-post-card">
				<h2>Create a New Post</h2>
				<div className="form-group">
					<input
						type="text"
						className="modern-input"
						placeholder="Title"
						name="title"
						value={newPost.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<textarea
						className="modern-textarea"
						placeholder="What's on your mind?"
						name="content"
						value={newPost.content}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div className="form-group">
					<label className="file-input-label">
						<span className="file-input-text">
							{newPost.file ? newPost.file.name : "Choose a file"}
						</span>
						<input
							type="file"
							className="file-input"
							onChange={handleFileChange}
						/>
					</label>
				</div>
				<button className="modern-button" onClick={handlePostSubmit}>
					Create Post
				</button>
			</div>
			{notification.show && (
				<div className={`notification ${notification.type}`}>
					{notification.message}
				</div>
			)}
		</div>
	);
}

export default CreatePost;