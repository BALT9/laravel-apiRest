import styles from './paneladministracion.module.css'

function PanelAdministracion() {
    return (
        <>
            <div className={styles.grid}>
                {/* Card 1: Cursos */}
                <div className={styles.card}>
                    <h3 className={styles.title}>Cursos</h3>
                    <p className={styles.value}>24</p>
                </div>

                {/* Card 2: Estudiantes */}
                <div className={styles.card}>
                    <h3 className={styles.title}>Estudiantes</h3>
                    <p className={styles.value}>850</p>
                </div>

                {/* Card 3: Profesores */}
                <div className={styles.card}>
                    <h3 className={styles.title}>Profesores</h3>
                    <p className={styles.value}>35</p>
                </div>

                {/* Card 4: Ingresos Mensuales */}
                <div className={styles.card}>
                    <h3 className={styles.title}>Ingresos Mensuales</h3>
                    <p className={styles.value}>$12,500</p>
                </div>
            </div>
        </>
    );
}

export default PanelAdministracion;