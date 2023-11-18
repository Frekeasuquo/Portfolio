import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "E-commerce App",
        img: "https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?w=740&t=st=1700043963~exp=1700044563~hmac=3e049b71b87237cdc2b60cbd97e3a65b054ae2965edbc02724f0c5243c3875f7",
        desc: "YourMarket is a state-of-the-art e-commerce application designed to deliver a seamless and immersive shopping experience. Developed using a powerful stack comprising React, Redux, Hooks, GraphQL, Firebase, and Stripe for payment, this application redefines the way users interact with online marketplaces.",
        link: "https://mellow-halva-5b4284.netlify.app/"
    },
    {
        id: 2,
        title: "Online Journal ",
        img: "https://img.freepik.com/free-vector/wall-post-concept-illustration_114360-1022.jpg?w=740&t=st=1700044443~exp=1700045043~hmac=914d53bc400927dfb8802eeeb1b1fd7d8856ef82c83ff8e013f223cdcd10a7d2",
        desc: "An innovative blog application designed to empower content creators, writers, and influencers with a suite of cutting-edge features. Built with a commitment to excellence, Online Journal seamlessly integrates advanced technologies to provide an unparalleled blogging experience.",
        link: "https://www.google.com/"
    },
    {
        id: 3,
        title: "ShareHub",
        img: "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5432.jpg?w=740&t=st=1700044669~exp=1700045269~hmac=b9ab867d0325487aeadc6ea793cd217c45bb784a3c24e1721deb2c312d12718a",
        desc: "ShareHub is more than just a sharing application; it's a dynamic hub of connectivity and collaboration, uniting individuals and teams in a shared digital space. It redefines the way we collaborate, share ideas, and innovate together.",
        link: "https://share-7p1383hxk-frekeasuquo.vercel.app/"
    },
    {
        id: 4,
        title: "LoanApp",
        img: "https://img.freepik.com/free-vector/mobile-banking-concept-illustration_114360-17348.jpg?w=740&t=st=1700044812~exp=1700045412~hmac=7c07996701be2c6f60c6c5d2264f8859b55dbfd18cb0c8a506f742c8d770bea9",
        desc: "A sophisticated loan application designed to empower individuals with a seamless, secure, and efficient borrowing experience. With a commitment to financial inclusivity and cutting-edge technology, LoanApp stands as your trusted partner on the journey to achieving your financial goals.",
        link: "https://boctrust-r3whv8m5x-frekeasuquo.vercel.app/"
    },
    
]

const Single = ({ item}) => {

    const ref = useRef();

    const { scrollYProgress} = useScroll({      
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer' ref={ref}>
                        <img src={item.img} alt='' />
                    </div>
                    <motion.div className='textContainer' style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Visit Site
                            </a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress} = useScroll({      
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX}} className='progressBar'></motion.div>
            </div>
            {
                items.map( item => (
                    <Single item={item} key={item.id}/>
                ))
            }
        </div>
    )
}

export default Portfolio;