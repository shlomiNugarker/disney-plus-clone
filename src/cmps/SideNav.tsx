import styles from '../styles/cmps/_side-nav.module.scss'

import Image from 'next/image'

import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { SlScreenDesktop } from 'react-icons/sl'
import { TbMovie } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'

import { useState } from 'react'
import Link from 'next/link'

type Props = {
  pageName?: string
}

export default function SideNav({ pageName }: Props) {
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
            <span className={pageName === 'mypage' ? styles.selected : ''}>
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
                unoptimized={true}
              />
              {isNavOpen && <p>My Space</p>}
            </span>
          </Link>
        </div>
        <div>
          <Link href="explore">
            <span className={pageName === 'explore' ? styles.selected : ''}>
              <AiOutlineSearch />
              {isNavOpen && <p>Search</p>}
            </span>
          </Link>
        </div>
        <div>
          <Link href="./home">
            <span className={pageName === 'home' ? styles.selected : ''}>
              <AiOutlineHome />
              {isNavOpen && <p>Home</p>}
            </span>
          </Link>
        </div>
        <div>
          <Link href="shows">
            <span className={pageName === 'shows' ? styles.selected : ''}>
              <SlScreenDesktop />
              {isNavOpen && <p>Series</p>}
            </span>
          </Link>
        </div>
        <div>
          <Link href="movies">
            <span className={pageName === 'movies' ? styles.selected : ''}>
              <TbMovie />
              {isNavOpen && <p>Movies</p>}
            </span>
          </Link>
        </div>
        <div>
          <Link href="originals">
            <span className={pageName === 'originals' ? styles.selected : ''}>
              <BsStars />
              {isNavOpen && <p>Originals</p>}
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
