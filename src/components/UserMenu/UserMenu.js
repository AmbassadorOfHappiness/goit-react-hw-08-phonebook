import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>

      <Button
        variant="contained"
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </Button>
    </div>
  );
}
