// GLP Health Landing Page Generator
// This file generates a weight loss/health landing page similar to the example shown

export const generateGLPPage = (data) => {
  const {
    brandName = 'GLP-1',
    heroTitle = 'Transform Your Health Journey',
    heroDescription = 'Discover science-backed nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.',
    heroImageUrl = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    backgroundImageUrl = 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ctaButtonText = 'Get Started',
    targetUrl = '#',
    gtagId = '',
    primaryColor = '#4f46e5',
    newsletterHeading = 'Get Nutrition and Diet Tips in Your Inbox',
    trackingScript = ''
  } = data;

  // Generate the navbar component
  const navbar = `
  <header class="bg-indigo-900/90 text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center space-x-2">
        <div class="relative h-8 w-16">
          <h2 class="text-xl font-bold tracking-tight text-white">
            <span class="text-white">${brandName.split('-')[0]}</span>
            <span class="text-purple-300">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
          </h2>
        </div>
      </a>
      
      <nav class="hidden md:flex items-center space-x-4 text-sm">
        <a href="#" class="hover:text-purple-300 transition-colors py-2 px-1">Popular Diet Plans</a>
        <a href="#" class="hover:text-purple-300 transition-colors py-2 px-1">Healthy Weight Resources</a>
        <a href="#" class="hover:text-purple-300 transition-colors py-2 px-1">Healthy Eating & Nutrition</a>
        <a href="#" class="hover:text-purple-300 transition-colors py-2 px-1">Calorie Counting</a>
        <a href="#" class="hover:text-purple-300 transition-colors py-2 px-1">Best & Worst Diets</a>
      </nav>
      
      <div class="flex items-center space-x-3">
        <a href="#newsletter" class="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-1.5 px-4 rounded-full transition-colors">
          Subscribe
        </a>
        <button class="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
  `;

  // Generate the hero section component
  const heroSection = `
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div 
        class="w-full h-full bg-cover bg-center"
        style="
          background-image: url('${backgroundImageUrl}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.6);
        "
      ></div>
    </div>
    
    <div class="container mx-auto px-4 pt-14 pb-20 md:pt-20 md:pb-32 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left side - Healthy Food Bowl -->
        <div class="w-full md:w-1/2 p-4">
          <div class="max-w-sm mx-auto md:ml-0 md:mr-auto bg-white rounded-lg overflow-hidden shadow-xl">
            <img 
              src="${heroImageUrl}" 
              alt="Healthy Bowl with Vegetables and Proteins" 
              class="w-full h-auto"
            />
          </div>
        </div>
        
        <!-- Right side - Text Content -->
        <div class="w-full md:w-1/2 text-white mt-8 md:mt-0">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
            ${heroTitle}
          </h1>
          <p class="text-gray-200 mb-6 max-w-lg">
            ${heroDescription}
          </p>
          <a 
            href="${targetUrl}"
            onclick="gtag_report_conversion('${targetUrl}')"
            class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            ${ctaButtonText}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Category Nav -->
    <div class="bg-white shadow-md border-t border-gray-100 relative z-10">
      <div class="container mx-auto px-4">
        <div class="flex overflow-x-auto py-3 gap-6 text-sm text-gray-700">
          <div class="whitespace-nowrap flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            We give Loss & Clarity
          </div>
          <div class="whitespace-nowrap flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Guides & Tutorials
          </div>
          <div class="whitespace-nowrap flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
            Food & Recipes
          </div>
          <div class="whitespace-nowrap flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Nutrition Science
          </div>
          <div class="whitespace-nowrap flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Diet Plans & Programs
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  // Generate featured section - Popular Diet Plans
  const popularDietPlansSection = `
  <section class="mb-16">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-800 flex items-center">
        <span class="text-indigo-600 mr-2">1</span> OF 5 / 
        <span class="text-indigo-600 uppercase text-sm font-bold ml-2">Popular Diet Plans</span>
      </h2>
      <a href="#" class="bg-indigo-600 text-white text-xs font-medium py-1 px-3 rounded-full">
        View All
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <a href="#" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            Don't Fall for Fad Diets
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Get the real truth about what works for diets, and learn some healthy weight-loss strategies that actually work.
          </p>
          <a href="#" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
      
      <div class="md:row-span-2 bg-white rounded-lg shadow-md overflow-hidden">
        <div class="md:h-64 relative">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Woman running outdoors"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <a href="#" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            High-Protein, Low-Carb Diets for Weight Loss
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Research shows these popular diet plans can help you lose weight significantly and fast too. Plan out how best to use these 5 varieties of modern diets.
          </p>
          <a href="#" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <a href="#" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            High-Protein, Low-Carb Diets
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Learn how this diet method can help you achieve quick weight loss while preserving muscle mass.
          </p>
          <a href="#" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <a href="#" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            Rapid Weight Loss: Is It Safe?
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Learn about rapid weight loss pros & cons, and the real truth about whether weight loss.
          </p>
          <a href="#" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
    </div>
  </section>
  `;

  // Add Google Ads conversion tracking if gtagId is provided
  const conversionTracking = gtagId ? `
  <script>
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        'send_to': '${gtagId}',
        'event_callback': callback
      });
      return false;
    }
  </script>
  ` : '';

  // Generate the newsletter section
  const newsletterSection = `
  <section id="newsletter" class="bg-white py-12 md:py-16">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden shadow-xl">
        <div class="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Healthy meal prep containers" 
                class="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div class="text-white">
            <h2 class="text-2xl font-bold mb-4">${newsletterHeading}</h2>
            <p class="mb-6 opacity-90">
              To stay informed about the latest diet trends, useful nutrition advice, and healthy recipes that can transform your health.
            </p>
            <form class="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  class="w-full p-3 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <button 
                type="submit" 
                class="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  // Generate the footer
  const footer = `
  <footer class="bg-indigo-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-xl font-bold mb-4 text-white">
            <span class="text-white">${brandName.split('-')[0]}</span>
            <span class="text-purple-300">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
          </h2>
          <p class="text-sm mb-4">
            Your trusted source for nutrition data, diet and health information as well as healthy recipes and expert advice.
          </p>
          <p class="text-xs">
            ${brandName} is a division of Health Care Hub, LLC.
          </p>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-purple-300 transition-colors">Home</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Articles</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Diet Plans</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Resources</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-purple-300 transition-colors">BMI Calculator</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Meal Planner</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Support</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-purple-300 transition-colors">Terms of Use</a></li>
          </ul>
          
          <h3 class="text-white font-medium mt-6 mb-4">Connect With Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2023 - All rights reserved.</p>
        <div class="flex mt-4 md:mt-0">
          <a href="#" class="mr-4 hover:text-purple-300 transition-colors">Privacy</a>
          <a href="#" class="hover:text-purple-300 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
  `;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brandName} | Science-Based Weight Loss & Nutrition Advice</title>
  <meta name="description" content="Discover science-backed nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

    /* Custom styles for primary color */
    .custom-btn {
      background-color: ${primaryColor};
    }
    .custom-btn:hover {
      background-color: ${primaryColor}dd;
    }
    .custom-text {
      color: ${primaryColor};
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${gtagId ? `
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagId.split('/')[0]}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId.split('/')[0]}');
  </script>` : ''}
  
  ${conversionTracking}
  
  <!-- Custom tracking script -->
  ${trackingScript || ''}
</head>
<body class="min-h-screen bg-gradient-to-b from-indigo-900/10 to-white">
  ${navbar}
  ${heroSection}
  
  <div class="bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      ${popularDietPlansSection}
      
      <!-- Additional content sections would go here -->
      <!-- For brevity, we're not adding all 5 sections but could be expanded -->
    </div>
  </div>
  
  ${newsletterSection}
  ${footer}
  
  <script>
    // Simple form handling - prevent default form submission
    document.addEventListener('DOMContentLoaded', function() {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for subscribing! This is a demo form.');
        });
      });
    });
  </script>
</body>
</html>
  `;
}; 