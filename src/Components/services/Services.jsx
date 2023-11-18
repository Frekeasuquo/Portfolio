import { useRef } from 'react';
import './services.scss'
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        y: 0,

        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div 
            className='services' 
            variants={variants} 
            initial="initial" 
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className='textContainer' variants={variants}>
                <p>I focus on turning your ideas 
                    <br/> into real life products.
                </p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <div className='title'>
                    <img src="people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{ color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>What we do?</button>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div className='box' whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Local Artisan Marketplace</h2>
                    <p>
                        Build a platform that connects local artisans and craftsmen with buyers interested in unique, handmade products. Include features for showcasing products, secure transactions, and community events.
                    </p>
                    <button><a href="#Contact">GO</a></button>
                </motion.div>
                <motion.div className='box' whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Skill-sharing Platform</h2>
                    <p>
                        Develop a platform where users can share their skills and knowledge through one-on-one sessions or workshops. This could include anything from coding and design to cooking and music lessons.
                    </p>
                    <button><a href="#Contact">GO</a></button>
                </motion.div>
                <motion.div className='box' whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Local Services Marketplace</h2>
                    <p>
                        Create a platform where local service providers (plumbers, electricians, tutors, etc.) can list their services, and users can find and hire them. Include features like reviews, ratings, and secure payment options.
                    </p>
                    <button><a href="#Contact">GO</a></button>
                </motion.div>
                <motion.div className='box' whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Personal Finance and Budgeting App</h2>
                    <p>
                        Develop an app that provides personalized financial advice, budget tracking, and investment insights. Include features for goal setting and financial education.
                    </p>
                    <button><a href="#Contact">GO</a></button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Services;