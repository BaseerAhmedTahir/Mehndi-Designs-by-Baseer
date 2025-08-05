import React, { useState } from 'react';
import { Sparkles, Stars } from 'lucide-react';
import { fal } from '@fal-ai/client';

// Utility function to add watermark logo to generated image
const addWatermark = async (imageUrl: string, logoPath: string): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      resolve(imageUrl); // Return original if canvas context fails
      return;
    }

    const mainImage = new Image();
    const logoImage = new Image();
    
    // Set crossOrigin for external images to avoid CORS issues
    mainImage.crossOrigin = 'anonymous';
    
    let imagesLoaded = 0;
    const totalImages = 2;
    
    const onImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        try {
          // Set canvas dimensions to match the main image
          canvas.width = mainImage.width;
          canvas.height = mainImage.height;
          
          // Draw the main image first
          ctx.drawImage(mainImage, 0, 0);
          
          // Calculate logo size and position (bottom-right corner with padding)
          const logoScale = 0.15; // 15% of original logo size
          const logoWidth = logoImage.width * logoScale;
          const logoHeight = logoImage.height * logoScale;
          const padding = 20;
          
          const logoX = canvas.width - logoWidth - padding;
          const logoY = canvas.height - logoHeight - padding;
          
          // Add semi-transparent background for logo visibility
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(logoX - 10, logoY - 10, logoWidth + 20, logoHeight + 20);
          
          // Draw the logo
          ctx.drawImage(logoImage, logoX, logoY, logoWidth, logoHeight);
          
          // Convert canvas to data URL
          const watermarkedImageUrl = canvas.toDataURL('image/png');
          resolve(watermarkedImageUrl);
        } catch (error) {
          console.error('Error adding watermark:', error);
          resolve(imageUrl); // Return original image if watermarking fails
        }
      }
    };
    
    const onImageError = () => {
      console.error('Error loading image for watermarking');
      resolve(imageUrl); // Return original image if loading fails
    };
    
    // Load both images
    mainImage.onload = onImageLoad;
    mainImage.onerror = onImageError;
    logoImage.onload = onImageLoad;
    logoImage.onerror = onImageError;
    
    mainImage.src = imageUrl;
    logoImage.src = logoPath;
  });
};

// Configure Fal.ai client
fal.config({
  credentials: import.meta.env.VITE_FAL_API_KEY,
});

export function HeroSection() {
  const [formData, setFormData] = useState({
    handType: 'palm',
    designType: 'default'
  });
  
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePrompt = (handType: string, designType: string) => {
    const basePromptEnd = "A photorealistic mehndi (henna) design on";
    const commonDetails = "The design shows freshly applied wet henna mehndi paste, glossy dark brown henna paste, dimensional henna paste on fair-skinned";
    const qualityDetails = "realistic wet glossy henna paste, 3D raised paste texture, fresh dark brown mehndi cone application, pristine application on clean skin, ultra detailed, soft ambient lighting, crystal clear focus, 8k uhd, hyper realistic, clean background, perfectly applied fresh henna, no stains or smudges, flawless application, stunning detail.";
    
    let designDescription = "";
    let bodyPart = "";
    let cameraAngle = "";
    
    // Design type descriptions
    switch (designType) {
      case 'bridal':
        designDescription = "The design must be a Bridal style with full coverage on the hand. It needs to be highly intricate and dense, filled with traditional wedding elements like peacocks, paisleys, and a central mandala. Incorporate fine-line details and symmetrical patterns, leaving almost no negative space.";
        break;
      case 'arabic':
        designDescription = "The design should be in the Arabic style, featuring bold outlines and a graceful, flowing diagonal pattern with large floral motifs, vines, and leaves. It must have a semi-filled look with plenty of open space, starting from the wrist and trailing towards the finger.";
        break;
      case 'floral':
        designDescription = "The design should be a Floral style with elegant flower patterns, delicate petals, and vine-like extensions. Include roses, lotus flowers, and leafy patterns with moderate coverage and graceful curves.";
        break;
      case 'minimal':
        designDescription = "The design should be a Minimal style with simple, clean lines and geometric patterns. Focus on negative space with delicate, sparse elements that create an elegant and modern look.";
        break;
      case 'diwali':
        designDescription = "The design should be a Diwali special style with traditional festival elements like diyas (oil lamps), rangoli patterns, lotus flowers, and geometric mandala designs. Include celebratory motifs with moderate to full coverage.";
        break;
      case 'eid':
        designDescription = "The design should be an Eid special style with crescent moons, stars, geometric Islamic patterns, and floral motifs. Include traditional Arabic calligraphy-inspired elements with elegant curves.";
        break;
      case 'karwa-chauth':
        designDescription = "The design should be a Karwa Chauth special style with traditional married woman motifs like kalash (water pot), moon and stars, peacocks, and intricate bridal patterns. Include symbols of love and prosperity.";
        break;
      case 'teej':
        designDescription = "The design should be a Teej special style with monsoon-inspired patterns like peacocks, swings, raindrops, and floral vines. Include traditional Rajasthani motifs with moderate coverage.";
        break;
      default:
        designDescription = "The design should be a beautiful traditional mehndi pattern with intricate details, floral motifs, and elegant curves. Include paisleys, vines, and geometric elements with balanced coverage.";
    }
    
    // Body part and camera angle
    switch (handType) {
      case 'palm':
        bodyPart = "the palm of a female hand";
        cameraAngle = "The camera angle should clearly show the entire palm of the hand.";
        break;
      case 'back':
        bodyPart = "the back of a female hand";
        cameraAngle = "The camera angle should clearly show the entire back of the hand.";
        break;
      case 'foot':
        bodyPart = "the foot of a female foot";
        cameraAngle = "The camera angle should clearly show the entire foot.";
        break;
      case 'both':
        bodyPart = "both palms of female hands";
        cameraAngle = "The camera angle should clearly show both palms side by side.";
        break;
      default:
        bodyPart = "the palm of a female hand";
        cameraAngle = "The camera angle should clearly show the entire palm of the hand.";
    }
    
    return `${designDescription} ${basePromptEnd} ${bodyPart}. ${commonDetails} ${bodyPart.includes('hand') ? 'hand' : 'foot'}, ${qualityDetails} ${cameraAngle} Image should not be blurry.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.designType === 'default') {
      setError('Please select a design type');
      return;
    }
    
    generateDesign();
  };
  
  const generateDesign = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);
    
    try {
      const prompt = generatePrompt(formData.handType, formData.designType);
      
      const input = {
        enable_safety_checker: true,
        guidance_scale: 3.5,
        image_size: "portrait_4_3" as const,
        num_images: 1,
        num_inference_steps: 28,
        prompt: prompt
      };
      
      console.log('Generating design with prompt:', prompt);
      
      const result = await fal.subscribe('fal-ai/flux/dev', {
        input: input,
        logs: true,
      });
      
      if (result.data && result.data.images && result.data.images.length > 0) {
        // Add watermark to the generated image
        const watermarkedImageUrl = await addWatermark(result.data.images[0].url, './bt.png');
        setGeneratedImageUrl(watermarkedImageUrl);
      } else {
        setError('No image was generated. Please try again.');
      }
    } catch (err) {
      console.error('Error generating design:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate design. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const sampleImages = [
    '/mehndi/uK8hPxhT0Jchn83VvrRsu.png',
    '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png',
    '/mehndi/oypkTDt7teO_8gWy-SklT.png',
    '/mehndi/iXUfo0zziwICwSLOlQ8Ah.png',
    '/mehndi/U5sbQ_T7tVBAGB92Afct-.png',
    '/mehndi/BAWZoGxlNhR23jIZDy5rz.png'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 pt-16">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <Stars className="w-24 h-24 text-purple-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Design Generator
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create Stunning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Mehndi Designs
                </span>
                Instantly
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the perfect blend of traditional henna art and modern AI technology. 
                Generate personalized mehndi designs for weddings, festivals, and special occasions 
                in seconds.
              </p>
            </div>

            {/* Design Generator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
                Generate Your Design
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="handType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Hand Type
                  </label>
                  <select
                    id="handType"
                    value={formData.handType}
                    onChange={(e) => setFormData({...formData, handType: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  >
                    <option value="palm">Palm</option>
                    <option value="back">Back Hand</option>
                    <option value="foot">Foot</option>
                    <option value="both">Both Hands</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="designType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Design Style
                  </label>
                  <select
                    id="designType"
                    value={formData.designType}
                    onChange={(e) => setFormData({...formData, designType: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  >
                    <option value="default">Select Design Type</option>
                    <option value="arabic">Arabic</option>
                    <option value="bridal">Bridal</option>
                    <option value="floral">Floral</option>
                    <option value="minimal">Minimal</option>
                    <option value="diwali">Diwali Special</option>
                    <option value="eid">Eid Special</option>
                    <option value="karwa-chauth">Karwa Chauth</option>
                    <option value="teej">Teej</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-700 hover:to-orange-600 transform hover:scale-105'
                  }`}
                >
                  {isLoading ? 'Generating Design... ⏳' : 'Generate Magical Design ✨'}
                </button>
              </form>
              
              {/* Loading State */}
              {isLoading && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-lg">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                    <span className="text-purple-700 font-medium">Creating your magical design...</span>
                  </div>
                </div>
              )}
              
              {/* Error State */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              
              {/* Generated Image */}
              {generatedImageUrl && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Generated Design</h3>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={generatedImageUrl}
                      alt="Generated Mehndi Design"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button
                      onClick={() => {
                        if (generatedImageUrl.startsWith('data:')) {
                          // For data URLs, create a blob and download
                          const link = document.createElement('a');
                          link.href = generatedImageUrl;
                          link.download = 'mehndi-design-with-logo.png';
                          link.click();
                        } else {
                          // For regular URLs
                          const link = document.createElement('a');
                          link.href = generatedImageUrl;
                          link.download = 'mehndi-design-with-logo.png';
                          link.click();
                        }
                      }}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Download with Logo
                    </button>
                    <button
                      onClick={() => generateDesign()}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      Generate Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className={`lg:w-1/2 ${generatedImageUrl ? 'hidden lg:block' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              {sampleImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Mehndi Design ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}