"use client"
import React, {useState, useEffect} from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     // const res = await fetch("http://localhost:3000/api/posts", {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
    
  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const data = await res.json()
    
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const session = useSession()
  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  if (error) return <div>échec du chargement</div>
  if (isLoading) return <div>chargement...</div>

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard