import { useState, useEffect } from "react";
import "./Work.scss";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

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
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterWork(works);
            } else {
                console.log(works[0].tags.includes(item));
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {["React", "Flutter", "All"].map((item, index) => (
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
                {filterWork.length !== 0 ? (
                    filterWork.map((work, index) => (
                        <div className="app__work-item app__flex" key={index}>
                            <div className="app__work-img app__flex">
                                {works && <Carousel data={work.imgUrlList} />}
                            </div>
                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                                <div className="app__work-content__description">
                                    <p
                                        className="p-text"
                                        style={{ marginTop: 10 }}
                                    >
                                        {work.description}
                                    </p>
                                </div>
                                <div className="app__work-tag app__flex">
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                                <p
                                    className="p-text download-link"
                                    style={{ marginTop: 10 }}
                                >
                                    <a
                                        href={work.projectLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Download link
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Nothing found :{"("}</h1>
                )}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
