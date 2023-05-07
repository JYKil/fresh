import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  let name = 'Kilga'
  let link = 'http://google.com'
  return (
    <main>
      <h4 className='title'>Kilga fresh</h4>
      <p className='title-sub'>by dev {name}</p>
      <article style={{ textAlign: 'center'}}><a href='{link}'>링크</a></article>
    </main>
  )
}


