import { Link } from 'react-router';
import { Button } from './components/ui/button';

function App() {
  return (
    <Button asChild>
      <Link to='/auth/login'>Login</Link>
    </Button>
  );
}

export default App;
