import del from 'del';

// Config =====>
import path from '../config/path.js';

// Clear directory "./app" =====>
export default () => {
  return del(path.root);
}