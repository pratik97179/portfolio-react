import {
    BsTwitter,
    BsInstagram,
    BsGithub,
    BsStackOverflow,
    BsLinkedin,
} from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div className="">
                <a
                    href="https://github.com/pratik97179"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
            </div>
            <a
                href="https://stackoverflow.com/users/16734599/pratik97179"
                target="_blank"
                rel="noreferrer"
            >
                <div className="">
                    <BsStackOverflow />
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/pratiknathtiwari/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="">
                    <BsLinkedin />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
