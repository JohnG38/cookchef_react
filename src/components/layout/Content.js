import styles from './Content.module.scss';

export default function Content() {
    return <div className="flex-fill container">
        <h1 className="p-20"> Découvrez nos nouvelles recettes</h1>
        <div className={`card p-20 mb-20 ${styles.contentCard}`}>
            <div className= {styles.grid}>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
                <div className={styles.element}>Element</div>
            </div>
        </div>
    </div>
}