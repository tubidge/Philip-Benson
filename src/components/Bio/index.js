import React from "react";

const Bio = props => {
    return (
        <div>
            {/* Get picture working */}
            <img id="profile_pic" src="../../images/Phil-Benson.jpg" alt="Philip Benson" height="193px" width="175px" />

            <p id="p1">
                My name is Phil, welcome to my website. Here I will be showcasing my web development projects as I build
                my portfolio,
                slowly but surely convincing those who visit (and myself) that I actually know what I am doing. You can
                find my contact info and links to my LinkedIn and GitHub profiles on the <em>Contact</em> page.
            </p>

            <p id="p2">
                I graduated from the University of Utah's Web Development Bootcamp in July 2019. Through this program I
                learned
                many skills and technologies, including: JavaScript, React, Express.js, Node.js, jQuery, API/JSON, Ajax,
                HTML, CSS, Bootstrap, Materialize, MySQL, Sequelize,
                MongoDB, Firebase, GitHub.
            </p>

            <p id="p3">
                Hopefully before too long you will find something on this site worth your time.
            </p>
        </div>
    )
}

export default Bio;