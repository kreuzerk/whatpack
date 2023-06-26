import styles from './wp-sample-lib.module.scss';

/* eslint-disable-next-line */
export interface WpSampleLibProps {}

export function WpSampleLib(props: WpSampleLibProps) {
  return (
    <div className={styles['container']}>
     <h1>Welcome to wp-sample-lib!</h1>
    </div>
  );
}

export default WpSampleLib;
