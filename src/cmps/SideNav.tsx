import styles from '../styles/cmps/_side-nav.module.scss'

import Image from 'next/image'

import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { SlScreenDesktop } from 'react-icons/sl'
import { TbMovie } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'

import { useState } from 'react'
import Link from 'next/link'

export default function SideNav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <aside
      onMouseOver={() => {
        !isNavOpen && setIsNavOpen(true)
      }}
      onMouseLeave={() => {
        isNavOpen && setIsNavOpen(false)
      }}
      className={
        isNavOpen
          ? styles['side-nav'] + ' ' + styles['nav-open']
          : styles['side-nav']
      }
    >
      <nav>
        <div>
          <Link href="mypage">
            <span>
              <Image
                alt=""
                loader={() =>
                  'https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/11.png'
                }
                src={
                  'https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/11.png'
                }
                width="20"
                height="20"
              />
            </span>
            {isNavOpen && <p>My Space</p>}
          </Link>
        </div>
        <div>
          <Link href="explore">
            <span>
              <AiOutlineSearch />
            </span>
            {isNavOpen && <p>Search</p>}
          </Link>
        </div>
        <div>
          <Link href="./home">
            <span>
              <AiOutlineHome />
            </span>
            {isNavOpen && <p>Home</p>}
          </Link>
        </div>
        <div>
          <Link href="shows">
            <span>
              <SlScreenDesktop />
            </span>
            {isNavOpen && <p>Series</p>}
          </Link>
        </div>
        <div>
          <Link href="movies">
            <span>
              <TbMovie />
            </span>
            {isNavOpen && <p>Movies</p>}
          </Link>
        </div>
        <div>
          <Link href="originals">
            <span>
              <BsStars />
            </span>
            {isNavOpen && <p>Originals</p>}
          </Link>
        </div>
      </nav>
    </aside>
  )
}
