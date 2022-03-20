import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({ loading = false, blind = false }) => {
  return loading ? (
    <div className={styles.loaderWrapp}>
      <div className={styles["lds-spinner"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  ) : null;
};

export default Loader;
