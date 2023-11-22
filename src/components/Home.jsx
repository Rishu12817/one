import React from 'react'
import vg  from "../assets/2.webp"
import {AiFillGoogleCircle, 
        AiFillAmazonCircle, 
        AiFillYoutube, 
        AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
        <div className="home">
      <main>
        <h1>TechyStar</h1>
        <p>Solutions to all your problems.</p>
      </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only one solutions to the tect problem you face every day. We are the leading tech company whose aim is to increase the problem solving ability of the childern.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
       <div>
       <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam blanditiis doloribus adipisci tempore ab enim ipsum quaerat, reprehenderit molestias eligendi autem impedit quos natus, ex laudantium, esse deleniti nobis at ullam minus! Illum, nam eum mollitia quis praesentium repellendus ex et ut deleniti delectus! Repudiandae ducimus ullam, assumenda sunt aspernatur libero! Ipsam qui sapiente perspiciatis voluptatem repellat cum mollitia, culpa consequuntur repudiandae veritatis, molestias in eligendi distinctio unde? Qui earum voluptatum et quod magni. Maiores nulla assumenda laudantium deserunt quod architecto amet animi? 
        </p>
       </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style ={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style ={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style ={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>

                <div style ={{
                    animationDelay: "0.9s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
