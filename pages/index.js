import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/Home/Hero'
import Enjoyable from '../components/Home/Enjoyable'
import Locally from '../components/Home/Locally'
import Menu from '../components/Home/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Enjoyable />
      <Locally />
      <Menu />
    </div>
  )
}
