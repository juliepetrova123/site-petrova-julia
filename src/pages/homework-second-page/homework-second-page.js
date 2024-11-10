import React from 'react';
import Menu from '../../components/menu/menu.js';
import Footer from "../../components/footer/footer";
import './style.css';

export const HomeworkSecondPage = () => {
    return (
        <body>
        <Menu/>
        <div className="animation-block">
            <label className="label">
                <input type="checkbox" id="toggle" className="toggle"/>
                <div id="containerAnimation" className="container-animation">
                    <svg id="animation-brand" className="animation-brand" version="1.0"
                         xmlns="http://www.w3.org/2000/svg"
                         width="200px" height="200px" viewBox="0 0 200.000000 200.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <g id="animatedLetterU" transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M214 349 c-39 -11 -72 -47 -89 -96 -10 -29 -19 -39 -39 -41 -26 -3
                            -26 -3 -26 67 0 64 -2 71 -20 71 -19 0 -20 -7 -20 -150 0 -143 1 -150 20 -150
                            18 0 20 7 20 65 0 65 0 65 29 65 23 0 30 -5 34 -29 15 -71 96 -121 168 -101
                            141 39 128 280 -16 303 -16 3 -44 1 -61 -4z m87 -39 c64 -35 64 -185 0 -220
                            -40 -21 -87 -12 -115 21 -37 44 -37 134 0 178 28 33 75 42 115 21z"
                            />
                            <animateMotion
                                begin="containerAnimation.mouseover"
                                restart="never"
                                dur="5s"
                                path="M0 0.813522H8.37187C12.1593 0.813522 15.7509 2.49642 18.1747
                                5.40676V5.40676C20.5985 8.3171 24.1901 10 27.9775 10H31.253H35.8522C39.2283
                                10 42.5487 10.8604 45.5 12.5V12.5C48.4513 14.1396 51.7717 15 55.1478
                                15H65H74.1897C79.2363 15 84.1231 16.7693 88 20L88.4671 20.3892C92.0421 23.3685
                                96.5486 25 101.202 25V25C105.31 25 109.318 26.2718 112.674 28.6407L114.911
                                30.22C120.992 34.5123 125.155 41.0117 126.509 48.3307L128.499 59.0774C128.832
                                60.8785 129 62.7064 129 64.5381V71.3483C129 78.1417 126.694 84.734 122.46
                                90.0465L121.077 91.7819C119.967 93.1745 118.735 94.4654 117.397 95.6395L114.412
                                98.2564C109.917 102.198 104.347 104.707 98.4163 105.461L31.253 114"
                                fill="freeze"
                            />
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="scale"
                                from="1 1"
                                to="1.5 1.5"
                                begin="containerAnimation.mouseover"
                                restart="never"
                                fill="freeze"
                                dur="5s"
                                values="1 1; 2.6 2.6"
                                keyTimes="0; 1"
                                additive="sum"/>
                            <animate id="colorAnim" attributeName="fill" from="black" to="lightblue" dur="3s"
                                     begin="toggle.click"/>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0"
                                to="360"
                                dur="0.2s"
                                begin="colorAnim.endEvent"
                                additive="sum"/>
                            <circle r="12" fill="orange" opacity="0">
                                <animateMotion id="motionAnim"
                                               dur="3s"
                                               begin="toggle.click"
                                               restart="whenNotActive"
                                               path="M214 349 c-39 -11 -72 -47 -89 -96 -10 -29 -19 -39 -39 -41 -26 -3
                                            -26 -3 -26 67 0 64 -2 71 -20 71 -19 0 -20 -7 -20 -150 0 -143 1 -150 20 -150
                                            18 0 20 7 20 65 0 65 0 65 29 65 23 0 30 -5 34 -29 15 -71 96 -121 168 -101
                                            141 39 128 280 -16 303 -16 3 -44 1 -61 -4z"
                                />
                                <animate attributeName="opacity" from="0" to="1" begin="motionAnim.beginEvent"
                                         dur="0.01s" fill="freeze"/>
                                <animate attributeName="opacity" from="1" to="0" begin="motionAnim.endEvent"
                                         dur="0.0001s" fill="freeze"/>
                            </circle>
                        </g>
                        <g id="animatedLetterP"
                           transform="translate(160.000000,195.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path
                                d="M108 345 c-3 -4 -4 -68 -2 -143 4 -111 7 -138 19 -140 13 -3 15 17 15 125 l0 128 75 0 75 1 0 -129 c0 -117 2 -128 18 -125 15 3 17 18 17 143 l0 140 -106 3 c-58 1 -108 0 -111 -3z"/>
                            <animateMotion
                                begin="containerAnimation.mouseover"
                                restart="never"
                                dur="5s"
                                path="M-12 -6.9091L-16.367 -5.0491C-19.084 -3.4662-23.082 -2.6503-27.122 -2.6503H-28.152C-31.363
                                 -2.6503-34.553 -2.1348-37.601 -1.1235L-39.399 -0.5269C-42.447 0.4845-45.637 1 -48.848 1H-54H-77.3522H-93.5167C-96.6415
                                  1-99.7471 0.4882-102.7212 -0.5531L-122.7673 -6.9091L-127.4422 -8.8424C-134.8091 -11.8891-140.6605 -17.7426-143.7044
                                  -25.1106L-145.7359 -30.027L-150.8643 -45.4687C-151.6165 -47.7336-152 -50.1047-152 -52.4912V-52.4912C-152 -59.7651-148.4492
                                  -66.5809-142.4882 -70.75L-140.6488 -72.0353C-139.5178 -72.8262-138.3269 -73.5279-137.087 -74.1339L-125.3935 -79.8494C-123.6468
                                  -80.703-121.8213 -81.3849-119.9428 -81.8853L-104.4969 -85.9896"
                                fill="freeze"
                            />
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="scale"
                                from="1 1"
                                to="1.5 1.5"
                                begin="containerAnimation.mouseover"
                                restart="never"
                                fill="freeze"
                                dur="5s"
                                values="1 1; 2.6 2.6"
                                keyTimes="0; 1"
                                additive="sum"
                            />
                            <animate id="colorAnim" attributeName="fill" from="black" to="blue" dur="3s"
                                     begin="toggle.click"/>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0"
                                to="360"
                                dur="0.2s"
                                begin="colorAnim.endEvent"
                                additive="sum"/>
                            <circle r="12" fill="orange" opacity="0">
                                <animateMotion id="motionAnim" dur="3s" begin="toggle.click" restart="whenNotActive"
                                               path="M108 345 c-3 -4 -4 -68 -2 -143 4 -111 7 -138 19 -140 13 -3
                                           15 17 15 125 l0 128 75 0 75 1 0 -129 c0 -117 2 -128 18 -125 15 3
                                           17 18 17 143 l0 140 -106 3 c-58 1 -108 0 -111 -3z"
                                />
                                <animate attributeName="opacity" from="0" to="1" begin="motionAnim.beginEvent"
                                         dur="0.01s" fill="freeze"/>
                                <animate attributeName="opacity" from="1" to="0" begin="motionAnim.endEvent"
                                         dur="0.0001s" fill="freeze"/>
                            </circle>
                        </g>
                    </svg>

                    <div className="pic-container">
                        <img className="pic" src="../../images/my_photo.jpeg"/>
                        <div className="pic-text">
                            Юлия Петрова
                        </div>
                    </div>
                </div>
            </label>
        </div>
        <Footer/>
        </body>
    );
};
