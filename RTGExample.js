import "./styles.css";
import { CSSTransition } from 'react-transition-group'

export default function App() {
  return (
    <CSSTransition>
      <div className="example">
        This is an example animation
      </div>
    </CSSTransition>
  );
}
