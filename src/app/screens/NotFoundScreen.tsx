import { useNavigate } from 'react-router';
import { Button } from '../components/Button';

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center max-w-[390px] mx-auto px-6">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="mb-2">Page Not Found</h1>
        <p className="text-[#666666] text-[14px] mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button variant="primary" onClick={() => navigate('/home')}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
