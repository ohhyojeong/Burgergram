import { useNavigate, useParams } from 'react-router-dom';
import FeedDetail from '../components/FeedDetail';

export default function FeedDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <FeedDetail key={id} feedId={id} onClose={() => navigate('/')} isFullPage />;
}
