import { useNavigate } from 'react-router';
import { ContinueLearningCard } from '../components/ContinueLearningCard';
import { BottomSpacer } from '../components/BottomSpacer';
import { ArrowLeft } from 'lucide-react';

export function ContinueLearningListScreen() {
  const navigate = useNavigate();

  // Mock data for courses in progress
  const coursesInProgress = [
    {
      id: '1',
      title: 'How to Price Homemade Food',
      progress: 60,
      rating: 4.6,
      duration: 45
    },
    {
      id: '2',
      title: 'Social Media Marketing Basics',
      progress: 30,
      rating: 4.8,
      duration: 60
    },
    {
      id: '3',
      title: 'Building Your Brand Story',
      progress: 85,
      rating: 4.7,
      duration: 40
    },
    {
      id: '4',
      title: 'Food Safety & Hygiene Standards',
      progress: 15,
      rating: 4.9,
      duration: 50
    },
    {
      id: '5',
      title: 'Customer Communication Skills',
      progress: 50,
      rating: 4.5,
      duration: 35
    }
  ];

  const handleResumeCourse = (courseId: string) => {
    navigate(`/learning/content/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-[#E0E0E0] sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate('/learning')} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Continue Learning</h2>
        </div>
      </div>
      
      <div className="pt-6 pb-6 px-6 space-y-4">
        {coursesInProgress.map((course) => (
          <ContinueLearningCard
            key={course.id}
            title={course.title}
            progress={course.progress}
            rating={course.rating}
            duration={course.duration}
            onResume={() => handleResumeCourse(course.id)}
          />
        ))}
        <BottomSpacer />
      </div>
    </div>
  );
}