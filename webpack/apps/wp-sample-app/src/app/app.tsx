// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {WpSampleLib} from "@webpack/wp-sample-lib";

export function App() {
  return (
    <div>
      <WpSampleLib />
    </div>
  );
}

export default App;
