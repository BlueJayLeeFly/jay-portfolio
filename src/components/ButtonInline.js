import styles from './ButtonInline.module.css';
import { useNavigate } from 'react-router-dom';

export default function ButtonInline({ LinkTo, children }) {
  let navigate = useNavigate();
  return (
    <div className={styles['btn-wrapper']}>
      <button
        className={styles['btn-inline']}
        onClick={() => navigate(`${LinkTo}`)}
      >
        {children}
      </button>
    </div>
  );
}
