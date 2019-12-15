import React from 'react';
import styles from './index.less';
const TriangleLinePage: React.FC = () => {
  return (
    <div>
      <ul className={styles.navs}>
        <li key="0" >
          dev
        </li>
        <li key="1">
          sit
        </li>
        <li key="2" className={styles.active}>
          pre
        </li>
        <li key="3">
          prod
        </li>
      </ul>
    </div>
  );
};
export default TriangleLinePage;
