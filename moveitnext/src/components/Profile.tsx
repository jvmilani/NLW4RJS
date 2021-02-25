import styles from '../styles/pages/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1339052797036290048/9VmhQGNO_400x400.jpg" alt="Profile"/>
            <div>
                <strong>João Milani</strong>
                <p>
                <img src="icons/level.svg" alt="level"/>
                Level 1
                </p>
            </div>
        </div>
    )
}