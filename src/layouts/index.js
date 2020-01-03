import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Link to="/knowledgespace/code">
        <h1 className={styles.title}>跳转到子应用</h1>
      </Link>
      {props.children}
      <div id="knowledgespace" />
    </div>
  );
}

export default BasicLayout;
