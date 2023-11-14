import { useState, useEffect } from "react";
import "./Work.scss";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { animate, motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";
import Carousel from "../../utils/Carousel/Carousel";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';
        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    });

    const handleWorkFilter = (item) => {};

    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {["Web App", "Mobile App", "All"].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item ? "item-active" : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            {works && <Carousel data={work.imgUrlList} />}
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description}
                            </p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Work;
