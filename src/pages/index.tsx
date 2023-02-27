import Head from 'next/head'
import styles from '../styles/pages/_home.module.scss'
// import { useEffect, useState } from 'react'
import logo from '../../public/Disney+_logo.svg'
import detailsSrc from '../../public/1.jpg'
import exclusiveSrc from '../../public/2.jpg'
import Image from 'next/image'

import { BsFilm } from 'react-icons/bs'
import { MdOutlineDevices } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { RiTwitterLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

export default function Home() {
  // const [res, setRes] = useState(null)

  // const load = async () => {
  //   // top rated
  //   // const res = await fetch(
  //   //   'https://api.themoviedb.org/3/movie/top_rated?api_key=b32d3cdb082983f9721d6e0cf0975d67&language=en-US&page=1'
  //   // )
  //   // genere list
  //   // const res = await fetch(
  //   //   'https://api.themoviedb.org/3/genre/movie/list?api_key=b32d3cdb082983f9721d6e0cf0975d67&language=en-US'
  //   // )
  //   // const m = await res.json()
  //   // console.log(m)
  // }
  // useEffect(() => {
  //   load()
  // }, [])

  return (
    <>
      <Head>
        <title>Diseny+</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <section className={styles['landing-page']}>
          <header>
            <span className={styles['login-btn']}>
              <button>Log In</button>
            </span>
            <span className={styles.language}>
              <p>Choose language</p>
              <select name="" id="">
                <option value="">English</option>
                <option value="">Hebrew</option>
              </select>
            </span>
          </header>
          <div className={styles.container}>
            <div>
              <span>
                <Image src={logo} alt="" />
              </span>
              <p> + More than you&apos;d ever imagine </p>
              <div>
                <button>Sign Up Now</button>
                <span>&gt;</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles['grid-container']}>
          <div>
            <span className="logo">
              <BsFilm />
            </span>
            <h2>The greatest stories ever told</h2>
            <h3>
              Explore thousands of hours of TV series, movies and originals,
              from all the wonderful worlds of Disney+.
            </h3>
          </div>
          <div>
            <span className="logo">
              <MdOutlineDevices />
            </span>
            <h2>Available on selected devices</h2>
            <h3>Stream on up to four screens at once on compatible devices.</h3>
          </div>
          <div>
            <span className="logo">
              <BsPeopleFill />
            </span>
            <h2>Easy-to-use parental controls</h2>
            <h3>Keep your family safe with our intuitive parental controls.</h3>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.details}>
          <h2>Watch the way you want</h2>
          <h3>Discover the world&apos;s greatest stories, all in one place.</h3>
          <div>
            <Image src={detailsSrc} alt="" />
          </div>
        </section>

        <section className={styles.exclusive}>
          <h2>Exclusive originals</h2>
          <h3>
            TV series, movies and documentaries you can&apos;t see anywhere
            else, from the world&apos;s greatest storytellers.
          </h3>
          <div>
            <Image src={exclusiveSrc} alt="" />
          </div>
        </section>

        <section className={styles['grid-container']}>
          <div>
            <span className="logo">
              <BsFilm />
            </span>
            <h2>TV</h2>
            <h3>Amazon Fire TV</h3>
            <h3>Android TV</h3>
            <h3>AppleTV</h3>
            <h3>Chromecast</h3>
            <h3>LG TV</h3>
            <h3>Samsung</h3>
          </div>
          <div>
            <span className="logo">
              <MdOutlineDevices />
            </span>
            <h2>Computer</h2>
            <h3>Chrome OS</h3>
            <h3>MacOS</h3>
            <h3>Windows PC</h3>
          </div>
          <div>
            <span className="logo">
              <BsPeopleFill />
            </span>
            <h2>Mobile & Tablet</h2>
            <h3>Android Phones & Tablets</h3>
            <h3>iPhone and iPad</h3>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.actions}>
            <div>
              <h4>Company</h4>
              <ul>
                <li>Supported Devices</li>
                <li>Interest based Ads</li>
              </ul>
            </div>

            <div>
              <h4>View Website in</h4>
              <ul>
                <li>English</li>
                <li>עברית</li>
              </ul>
            </div>
            <div>
              <h4>Need Help?</h4>
              <ul>
                <li>Help</li>
                <li>Feedback</li>
              </ul>
            </div>

            <div className={styles.contact}>
              <h4>Connect with Us</h4>
              <ul>
                <li>
                  <span>
                    <FiFacebook />
                  </span>
                </li>
                <li>
                  <span>
                    <RiTwitterLine />
                  </span>
                </li>
                <li>
                  <span>
                    <BsInstagram />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.left}>
              <ul>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Cancel Subscription Help</li>
                <li>Subscriber Agreement</li>
                <li>EMEA Privacy Rights</li>
                <li>Manage Preferences</li>
              </ul>
            </div>
            <div className={styles.right}></div>
          </div>
        </footer>
      </main>
    </>
  )
}
