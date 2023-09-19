import styles from './label.module.scss';

const Label = ({ text }) => {
    return <span className={styles.customLabel}>
        {text}
    </span>
}

export default Label;
