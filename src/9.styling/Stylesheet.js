import React from 'react'
import "./styling.css"
import styles from "./appStyle.module.css"

function Stylesheet(props) {
    const {primary} = props
    let className = primary ? 'primary' : 'error'

    return (      
        <div>
            <h1 className={className}>StyleSheet class Applied</h1>
            <h2 className="success">Applied success class</h2>
            <h2 className="error">Applied error class</h2>
            <div className="primary enlarge-text">
                This element is having multiple classes
            </div>
            <h1 className={styles.success}>We tried using CSS Modules </h1>
        </div>
    )
}

export default Stylesheet
