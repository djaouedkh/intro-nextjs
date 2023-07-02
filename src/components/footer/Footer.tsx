import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 DjaouedKhatir. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Djaoued Khatir Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Djaoued Khatir Instagram Account" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Djaoued Khatir Twitter Account" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Djaoued Khatir Youtube Account" />
      </div>
    </div>
  )
}

export default Footer