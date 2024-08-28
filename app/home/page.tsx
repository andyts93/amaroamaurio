"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import groovyStar from '../../public/images/groovy-star.svg';
import groovySmiley from '../../public/images/groovy-smiley.svg';
import groovyHeart from '../../public/images/groovy-heart.svg';
import groovyMessage from '../../public/images/groovy-message.svg';
import groovyStarSun from '../../public/images/groovy-star-sun.svg';
import Game from "../components/game";

export default function Home() {
    const section = {
        hiddenLeft: {
            opacity: 0,
            x: -100,
        },
        hiddenRight: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    };

    const divider = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1
            }
        }
    }
    return (
        <>
            <div className="bg-cyan-50 rounded-xl overflow-hidden shadow-brutal border border-black">
                <Image src={'/images/banner-amaurio.png'} width={1477} height={981} alt="Banner" />
            </div>

            <motion.section className="bg-orange-100 rounded-xl p-6 shadow-brutal border border-black mt-8" id="storia" variants={section} initial="hiddenLeft" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-wider mb-4 uppercase">La storia</h2>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam. Ut id consectetur justo, id luctus urna. Integer non velit eu turpis tristique tempor. Ut nisi quam, finibus at ipsum at, egestas gravida nibh. Aenean eget nulla sollicitudin, pharetra felis quis, vehicula mauris. Aenean interdum ut dolor id viverra. Nulla rutrum leo vel libero accumsan, tempus malesuada quam viverra. Integer dictum venenatis justo, at congue libero efficitur vel. In sed ipsum in magna euismod auctor. Sed vestibulum risus faucibus justo iaculis pellentesque.</p>

                <p className="mb-2">Phasellus a posuere purus. Aliquam vel faucibus lectus. Praesent rhoncus pulvinar tellus quis mollis. Cras efficitur neque quis enim iaculis, commodo ultricies lorem finibus. Sed posuere arcu ac orci sagittis semper. Phasellus vitae aliquam leo. Quisque ut lorem at magna ultricies viverra sit amet in tortor. Nam ex ante, lobortis ut velit quis, lobortis gravida magna. Nulla id sapien molestie, varius nulla vel, gravida sem. Morbi auctor, justo a faucibus placerat, turpis augue molestie arcu, eu scelerisque augue odio sed felis. Curabitur quam arcu, euismod ut lacus ut, commodo fermentum lacus. Donec pharetra dapibus nibh, ac aliquam magna facilisis consequat. Quisque semper consectetur sodales. Quisque dui dui, interdum vitae arcu vitae, auctor dapibus mauris. Quisque id accumsan felis.</p>

                <p className="mb-2">Proin et tempus ipsum. Etiam euismod vestibulum urna nec porttitor. Integer non lacus et mi placerat eleifend vitae at nulla. Vivamus in risus rutrum, imperdiet elit at, tempus nisl. Maecenas bibendum maximus velit, aliquam auctor elit blandit et. Nunc feugiat eros eu ipsum finibus placerat. Sed vel turpis in sapien porta placerat. Maecenas et augue eget nisi ornare vehicula.</p>
            </motion.section>

            <motion.div variants={divider} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 mb-4">
                <Image src={groovyStar} alt="Groovy Star" className="w-32 md:w-96 mx-auto hover:scale-110 transition-all duration-500" />
            </motion.div>

            <motion.section className="bg-sky-100 rounded-xl p-6 shadow-brutal border border-black mt-8" id="ricetta" variants={section} initial="hiddenRight" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-wider mb-4 uppercase">La ricetta</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-2/3 text-justify">
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam. Ut id consectetur justo, id luctus urna. Integer non velit eu turpis tristique tempor. Ut nisi quam, finibus at ipsum at, egestas gravida nibh. Aenean eget nulla sollicitudin, pharetra felis quis, vehicula mauris. Aenean interdum ut dolor id viverra. Nulla rutrum leo vel libero accumsan, tempus malesuada quam viverra. Integer dictum venenatis justo, at congue libero efficitur vel. In sed ipsum in magna euismod auctor. Sed vestibulum risus faucibus justo iaculis pellentesque.</p>

                        <p className="mb-2">Phasellus a posuere purus. Aliquam vel faucibus lectus. Praesent rhoncus pulvinar tellus quis mollis. Cras efficitur neque quis enim iaculis, commodo ultricies lorem finibus. Sed posuere arcu ac orci sagittis semper. Phasellus vitae aliquam leo. Quisque ut lorem at magna ultricies viverra sit amet in tortor. Nam ex ante, lobortis ut velit quis, lobortis gravida magna. Nulla id sapien molestie, varius nulla vel, gravida sem. Morbi auctor, justo a faucibus placerat, turpis augue molestie arcu, eu scelerisque augue odio sed felis. Curabitur quam arcu, euismod ut lacus ut, commodo fermentum lacus. Donec pharetra dapibus nibh, ac aliquam magna facilisis consequat. Quisque semper consectetur sodales. Quisque dui dui, interdum vitae arcu vitae, auctor dapibus mauris. Quisque id accumsan felis.</p>

                        <p className="mb-2">Proin et tempus ipsum. Etiam euismod vestibulum urna nec porttitor. Integer non lacus et mi placerat eleifend vitae at nulla. Vivamus in risus rutrum, imperdiet elit at, tempus nisl. Maecenas bibendum maximus velit, aliquam auctor elit blandit et. Nunc feugiat eros eu ipsum finibus placerat. Sed vel turpis in sapien porta placerat. Maecenas et augue eget nisi ornare vehicula.</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="border border-black bg-gradient-to-br from-yellow-400 to-yellow-500 p-12 rounded-2xl hover:shadow-brutal transition-all duration-500 hover:p-6">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M57 58.3c-.2 2.1-2.1 3.7-4.1 3.7H11.1c-2.1 0-4-1.7-4.1-3.7L2 5.7C1.8 3.7 3.4 2 5.5 2h53.1c2.1 0 3.6 1.7 3.4 3.7l-5 52.6" fill="#e8e8e8"> </path> <path d="M54.1 46.1c-6.3 0-12.2 3.8-12.2 3.8s11.4-1.8 10.3-.9c-8.5 6.4-34 6.2-39 .5c-2.7-3.1 17.2 4.3 21.1-3.3H9.9c-1 0-1.8.8-1.6 1.9l1.3 9.4c.1 1 1.1 1.9 2.1 1.9h40.4c1 0 2-.8 2.1-1.9l1.3-9.4c.3-1.2.2-2-1.4-2" fill="#b2c1c0"> </path> <path d="M56.9 31.1c.1-1-.7-1.9-1.7-1.9H8.8c-1 0-1.8.8-1.7 1.9l1.1 11.3c.1 1 1 1.9 2.1 1.9h43.6c1 0 2-.8 2.1-1.9l.9-11.3" fill="#89664c"> </path> <g fill="#e8e8e8"> <path d="M18.5 55.3c-3.6-.7-7.4-4.1-7.2-1.2c.4 5 1.6 3 12.7 3s-4.3-1.5-5.5-1.8"> </path> <path d="M46.1 55.3c3.6-.7 7.4-4.1 7.2-1.2c-.4 5-1.6 3-12.7 3s4.3-1.5 5.5-1.8"> </path> </g> <path d="M53.6 41.4c0-.5 0-.9-21.6-.9c-21.7 0-21.6.4-21.6.9s-.1.9 21.6.9c21.6 0 21.6-.4 21.6-.9" opacity=".67" fill="#594640"> </path> <path d="M51.7 40.4c1 .2 2-.5 2.1-1.5l.7-5.9c.1-1.1-.7-1.9-1.7-1.9H10.3c-1.1 0-1.1.3 0 .5c0 0 5.7.3 11.3 1.4c3.9.8 5.3 2.1 9.9 3.1c4.4.9 6.6.5 10.7 1.3c5 1.1 9.5 3 9.5 3" opacity=".67" fill="#ff8736"> </path> <path d="M45.1 40.4c0 1 .8 1.9 1.7 1.9h5.5c1 0 1.9-.8 2-1.9c1-8 2.9-25.8 3.9-33.8c.1-1-.6-1.9-1.6-1.9h-9.1c-1 0-1.8.8-1.8 1.9c-.1 8.1-.4 25.9-.6 33.8" opacity=".5" fill="#ffffff"> </path> <path d="M31.9 27.7c.3-1.1 0-2.9-.6-3.9l-3.7-6.4c-.6-1-1.9-1.6-3-1.3L17.3 18c-1.1.3-2.4 1.4-2.8 2.4l-2.8 6.1c-.3.7-.4 1.7-.1 2.6h20l.3-1.4" opacity=".5" fill="#b2c1c0"> </path> <path d="M16.5 37.2c.6 1 2 1.5 3.1 1.2l8.4-2.2c1.1-.3 2.2-1.4 2.5-2.6l1.1-4.6h-20c.1.4.2.8.4 1.1l4.5 7.1" opacity=".5" fill="#ff8736"> </path> <path d="M14.1 31.7c1.3 2.3 3.1 6 4.8 5.5c1.7-.5 6.5-1.7 7.4-2c.9-.2 1.2-1.8-3.5-.5c-4.8 1.3-6-.8-7.7-3.5c-1.7-2.6-2.3-1.7-1 .5" opacity=".67" fill="#89664c"> </path> <path d="M51 27.7l-4.7-4.9c-.7-.7-2.1-1.2-3.1-1.1l-5.9.6c-1 .1-2.2 1-2.7 1.9l-2.4 5h19.5c-.1-.6-.3-1.1-.7-1.5" opacity=".5" fill="#b2c1c0"> </path> <path d="M31.7 34l5.4 5.6c.7.7 2.1 1.1 3 .8l5.2-1.6c1-.3 2.2-1.3 2.7-2.2l3.3-5.8c.2-.4.3-1 .3-1.5H32.2l-.9 1.7c-.4.9-.3 2.3.4 3" opacity=".5" fill="#ff8736"> </path> <path d="M34.4 26.6c-1.2 2.1-3.2 5.1-2.1 6.3c1.1 1.2 4.2 4.3 4.8 4.9c.6.6 1.9.2-1.2-3c-3.1-3.2-2-5-.7-7.6c1.4-2.6.4-2.7-.8-.6" opacity=".67" fill="#89664c"> </path> <path d="M42.9 31.9c0 1.9-5.5 7.3-3.8 7.5c1.2.1 3.3-5.1 5.4-6.7c1.3-1 3.4-1.3 5.1-2.1c2.1-1.1.5-1.5-2.2-.4c-1.5.6-2.9-.2-4-1h-1.8c.8.9 1.3 1.8 1.3 2.7" opacity=".5" fill="#ffce31"> </path> <path d="M42.1 27.9s-3.8-5-4.7-4.1c-.8.8 2.3 3.1 4.2 5.4h1.8c-.8-.7-1.3-1.3-1.3-1.3" fill="#ffffff"> </path> <path d="M29 34.3c.5-.7-.8-2.8-1.9-5.1h-1.2c1.2 2.7 2.3 6.1 3.1 5.1" opacity=".5" fill="#ffce31"> </path> <path d="M26.5 19.2c.2-2.7-1.1-1.3-1.6 1.9S19.7 25 19.7 25s-6.9.9-6.6 2.3c.5 1.8 8-2.5 10.9-.9c.6.3 1.2 1.5 1.8 2.8H27c-.7-1.4-1.3-2.8-1.4-3.9c-.2-1.8.7-4 .9-6.1" fill="#ffffff"> </path> <path d="M11.1 42.5c1.2 0 .7-8.4-.2-18.9c-.8-10.4-2.2-18.9-3-18.9c-1.4 0-.7 8.4.2 18.9c.8 10.4 2.2 18.9 3 18.9" fill="#ffffff" opacity=".5"> </path> </g></svg>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.div variants={divider} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 mb-4">
                <Image src={groovySmiley} alt="Groovy Smile" className="w-32 md:w-96 mx-auto hover:scale-110 transition-all duration-500" />
            </motion.div>

            <motion.section className="bg-violet-100 rounded-xl p-6 shadow-brutal border border-black mt-8" id="acquista" variants={section} initial="hiddenLeft" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-wider mb-4 uppercase">Acquista</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                        <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                        <h3 className="text-lg font-bold font-outfit">Prodotto</h3>
                        <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                        <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full hover:shadow-none transition-all duration-300">Compra ora</button>
                    </div>
                    <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                        <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                        <h3 className="text-lg font-bold  font-outfit">Prodotto</h3>
                        <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                        <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full hover:shadow-none transition-all duration-300">Compra ora</button>
                    </div>
                    <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                        <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                        <h3 className="text-lg font-bold  font-outfit">Prodotto</h3>
                        <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                        <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full hover:shadow-none transition-all duration-300">Compra ora</button>
                    </div>
                </div>
            </motion.section>

            <motion.div variants={divider} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid grid-cols-3 md:gap-12 overflow-hidden">
                <Image src={groovyHeart} alt="Groovy Heart" className="md:max-w-64 hover:scale-110 transition-all duration-500 mx-auto px-4" />
                <Image src={groovyMessage} alt="Groovy Message" className="md:max-w-64 hover:scale-110 transition-all duration-500 mx-auto px-4" />
                <Image src={groovyStarSun} alt="Groovy Star Sun" className="md:max-w-64 hover:scale-110 transition-all duration-500 mx-auto px-4" />
            </motion.div>

            <motion.section className="bg-gray-100 rounded-xl p-6 shadow-brutal border border-black mt-8" id="gioca" variants={section} initial="hiddenLeft" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-wider mb-4 uppercase">Gioca</h2>
                <Game />
            </motion.section>
        </>
    );
}
