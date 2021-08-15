import { useEffect, useState } from "react";
import styles from './Page.module.scss'

export const Page = (props) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <div 
      className={styles.Page}
      style={{opacity}}
      >
      {props.children}
    </div>
  )
}