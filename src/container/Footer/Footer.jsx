import { useState } from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message,
        };

        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        });
    };

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a
                        href="mailto:prateek.infinite.370@gmail.com"
                        className="p-text"
                    >
                        prateek.infinite.370@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:+91-9717950608" className="p-text">
                        +91-9717950608
                    </a>
                </div>

                {!isFormSubmitted ? (
                    <div className="app__footer-form app__flex">
                        <div className="app__flex">
                            <input
                                type="text"
                                className="p-text"
                                placeholder="Your name"
                                value={name}
                                name="name"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="app__flex">
                            <input
                                type="email"
                                className="p-text"
                                placeholder="Your email"
                                value={email}
                                name="email"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <textarea
                                className="p-text"
                                placeholder="Your message"
                                value={message}
                                name="message"
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="p-text"
                            onClick={handleSubmit}
                        >
                            {" "}
                            {loading ? "Sending..." : "Send message"}
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3 className="head-text">
                            Thank you for getting in touch!
                        </h3>
                    </div>
                )}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
);
