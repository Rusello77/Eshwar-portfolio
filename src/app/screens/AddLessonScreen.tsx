import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, X, Upload, Image, Video } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function AddLessonScreen() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [steps, setSteps] = useState<string[]>(['']);
  const [mediaType, setMediaType] = useState<'photo' | 'video' | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleAddLesson = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 p-2 -ml-2 hover:bg-[#F5F5F5] rounded-full transition-colors inline-flex"
        >
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
        </button>
        <h1 className="mb-1">Add a lesson</h1>
        <p className="text-[#666666] text-[14px] mb-3">Share knowledge from your experience</p>

        {/* Level Indicator */}
        <div className="inline-flex items-center px-3 py-1 bg-[#E8F0EC] rounded-full">
          <span className="text-[12px] text-[#5A8B6F] font-medium">Intermediary</span>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {/* Title */}
        <div>
          <Input
            label="Title"
            placeholder="How to price your products correctly"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Explanation */}
        <div>
          <label className="block mb-2 text-[14px] text-[#1A1A1A]">Short explanation</label>
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Explain what this lesson is about..."
            className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
            rows={4}
          />
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Steps (optional)</h3>
            <button
              onClick={addStep}
              className="p-1 hover:bg-[#E8F0EC] rounded-full transition-colors"
            >
              <Plus className="w-5 h-5 text-[#5A8B6F]" />
            </button>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-1">
                <Input
                  placeholder={`Step ${index + 1}`}
                  value={step}
                  onChange={(e) => updateStep(index, e.target.value)}
                />
              </div>
              {steps.length > 1 && (
                <button
                  onClick={() => removeStep(index)}
                  className="p-2 mt-1 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-[#666666]" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Media */}
        <div>
          <label className="block mb-3 text-[14px] text-[#1A1A1A]">
            Add media (optional)
          </label>

          {!mediaType ? (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMediaType('photo')}
                className="p-6 bg-white border-2 border-dashed border-[#E0E0E0] rounded-2xl hover:border-[#5A8B6F] transition-colors flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-[#E8F0EC] rounded-full flex items-center justify-center">
                  <Image className="w-6 h-6 text-[#5A8B6F]" />
                </div>
                <span className="text-[14px] text-[#666666]">Photos</span>
              </button>

              <button
                onClick={() => setMediaType('video')}
                className="p-6 bg-white border-2 border-dashed border-[#E0E0E0] rounded-2xl hover:border-[#5A8B6F] transition-colors flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-[#E8F0EC] rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-[#5A8B6F]" />
                </div>
                <span className="text-[14px] text-[#666666]">Video</span>
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {mediaType === 'photo' ? (
                    <Image className="w-5 h-5 text-[#5A8B6F]" />
                  ) : (
                    <Video className="w-5 h-5 text-[#5A8B6F]" />
                  )}
                  <span className="text-[14px] font-medium text-[#1A1A1A]">
                    {mediaType === 'photo' ? 'Add Photos' : 'Add Video'}
                  </span>
                </div>
                <button
                  onClick={() => setMediaType(null)}
                  className="p-1 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-[#666666]" />
                </button>
              </div>

              <button className="w-full p-6 border-2 border-dashed border-[#E0E0E0] rounded-2xl hover:border-[#5A8B6F] transition-colors flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#E8F0EC] rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[#5A8B6F]" />
                </div>
                <span className="text-[14px] text-[#666666]">
                  {mediaType === 'photo' ? 'Upload images' : 'Upload video'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          onClick={handleAddLesson}
          className="w-full"
        >
          Add Lesson
        </Button>
      </div>

      <div className="h-24" />

      <SuccessBottomSheet
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Shared with the community 💚"
        actionLabel="View in community"
        onAction={() => navigate('/home')}
      />
    </div>
  );
}
