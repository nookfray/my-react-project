const Profile = () => {
    return (
        <div className="content">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="img" className="banner"/>

            <div className="user_info">
                ava + description
            </div>
            <h3 className="title">My posts</h3>
            <div className="all_posts">
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;