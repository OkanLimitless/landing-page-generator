// GLP Health Landing Page Generator
// This file generates a weight loss/health landing page similar to the example shown

// Blog post data - we'll use this to generate individual blog post pages
const blogPosts = {
  "dont-fall-for-fad-diets": {
    title: "Don't Fall for Fad Diets",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Get the real truth about what works for diets, and learn some healthy weight-loss strategies that actually work.",
    content: `
      <h2>The Truth About Fad Diets</h2>
      <p>Fad diets often promise quick weight loss by promoting a specific food or nutrient, or by severely restricting certain food groups. While these diets may lead to short-term weight loss, they are rarely sustainable in the long term and can even be harmful to your health.</p>
      
      <p>Most fad diets share some common characteristics:</p>
      <ul>
        <li>They promise rapid weight loss</li>
        <li>They eliminate one or more entire food groups</li>
        <li>They have strict rules about food combinations</li>
        <li>They often lack scientific evidence to support their claims</li>
      </ul>
      
      <h2>Why Fad Diets Don't Work Long-Term</h2>
      <p>The initial weight loss from fad diets is often due to water loss, not fat loss. When you severely restrict calories or eliminate entire food groups, your body may go into "starvation mode," slowing down your metabolism to conserve energy. This makes it harder to lose weight in the long run.</p>
      
      <p>Additionally, restrictive diets are difficult to maintain over time. Once you return to your normal eating habits, the weight often comes back, sometimes even more than you lost initially – this is known as "yo-yo dieting."</p>
      
      <h2>Healthy Weight Loss Strategies That Actually Work</h2>
      <p>Instead of following fad diets, focus on making sustainable lifestyle changes:</p>
      
      <h3>1. Eat a balanced diet</h3>
      <p>Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet. Avoid severely restricting any food group unless directed by a healthcare professional.</p>
      
      <h3>2. Practice portion control</h3>
      <p>Even healthy foods can contribute to weight gain if eaten in excessive amounts. Learn to recognize appropriate portion sizes and listen to your body's hunger and fullness cues.</p>
      
      <h3>3. Stay hydrated</h3>
      <p>Drinking water before meals can help you feel fuller and potentially eat less. Sometimes thirst is mistaken for hunger, leading to unnecessary snacking.</p>
      
      <h3>4. Incorporate regular physical activity</h3>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days per week.</p>
      
      <h3>5. Get enough sleep</h3>
      <p>Poor sleep is associated with increased hunger and cravings, particularly for high-calorie, high-carbohydrate foods. Adults should aim for 7-9 hours of quality sleep per night.</p>
      
      <h2>Conclusion</h2>
      <p>Instead of falling for the next fad diet that promises quick results, focus on developing healthy habits that you can maintain long-term. Remember that healthy weight loss is typically 1-2 pounds per week. Consult with healthcare professionals, such as doctors, dietitians, or nutritionists, for personalized advice on weight management.</p>
    `
  },
  "high-protein-low-carb-diets-for-weight-loss": {
    title: "High-Protein, Low-Carb Diets for Weight Loss",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    excerpt: "Research shows these popular diet plans can help you lose weight significantly and fast too. Plan out how best to use these 5 varieties of modern diets.",
    content: `
      <h2>Understanding High-Protein, Low-Carb Diets</h2>
      <p>High-protein, low-carbohydrate diets have gained significant popularity as effective weight loss strategies. These dietary approaches typically involve reducing carbohydrate intake while increasing protein consumption, which can lead to several metabolic changes that favor weight loss.</p>
      
      <h2>How High-Protein, Low-Carb Diets Work</h2>
      <p>These diets work through several mechanisms:</p>
      
      <h3>1. Reduced hunger and increased satiety</h3>
      <p>Protein is highly satiating, meaning it helps you feel full longer than carbohydrates or fats. This can naturally lead to reduced calorie intake.</p>
      
      <h3>2. Higher thermic effect of food</h3>
      <p>Your body burns more calories digesting protein compared to carbohydrates or fats. This increased energy expenditure can contribute to weight loss.</p>
      
      <h3>3. Preservation of lean muscle mass</h3>
      <p>Higher protein intake helps preserve lean muscle during weight loss, which is important for maintaining a healthy metabolism.</p>
      
      <h3>4. Reduced insulin levels</h3>
      <p>Lower carbohydrate intake can lead to reduced insulin levels, which may promote fat burning and reduce fat storage.</p>
      
      <h2>5 Popular High-Protein, Low-Carb Diet Variations</h2>
      
      <h3>1. The Ketogenic Diet</h3>
      <p>The keto diet is very low in carbohydrates (typically under 50g per day), moderate in protein, and high in fat. It forces the body into a state of ketosis, where it burns fat for fuel instead of carbohydrates.</p>
      <p><strong>Best for:</strong> People who prefer a structured approach and can commit to significant dietary changes.</p>
      
      <h3>2. The Atkins Diet</h3>
      <p>This diet begins with a very low-carb phase and gradually increases carbohydrate intake over time. It emphasizes protein and fat while limiting carbohydrates to manage insulin levels.</p>
      <p><strong>Best for:</strong> Those who want a phased approach to carb restriction with clear guidelines.</p>
      
      <h3>3. The Paleo Diet</h3>
      <p>Based on foods presumably eaten during the Paleolithic era, this diet emphasizes whole foods like lean meats, fish, fruits, vegetables, nuts, and seeds while avoiding processed foods, grains, and dairy.</p>
      <p><strong>Best for:</strong> People focused on whole foods who want to eliminate processed items.</p>
      
      <h3>4. The South Beach Diet</h3>
      <p>This diet distinguishes between "good" and "bad" carbohydrates and fats. It emphasizes lean proteins, low-glycemic carbohydrates, and healthy fats.</p>
      <p><strong>Best for:</strong> Those looking for a less restrictive approach to carb management.</p>
      
      <h3>5. The Zone Diet</h3>
      <p>This diet aims for a specific ratio of macronutrients: 40% carbohydrates, 30% protein, and 30% fat. It focuses on controlling inflammation and insulin levels.</p>
      <p><strong>Best for:</strong> People who prefer balanced macronutrient intake rather than severe restriction.</p>
      
      <h2>Potential Benefits Beyond Weight Loss</h2>
      <p>High-protein, low-carb diets may offer additional health benefits:</p>
      <ul>
        <li>Improved blood sugar control</li>
        <li>Reduced triglycerides</li>
        <li>Increased HDL (good) cholesterol</li>
        <li>Reduced blood pressure</li>
        <li>Potential benefits for certain neurological conditions</li>
      </ul>
      
      <h2>Considerations and Potential Drawbacks</h2>
      <p>While effective for many people, these diets may not be suitable for everyone:</p>
      <ul>
        <li>They can be difficult to maintain long-term</li>
        <li>May lead to nutrient deficiencies if not properly planned</li>
        <li>Can cause side effects like constipation, headaches, and bad breath</li>
        <li>Not recommended for people with certain kidney conditions</li>
        <li>May require careful planning for athletes with high energy needs</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>High-protein, low-carb diets can be effective weight loss strategies for many people. The best approach depends on your personal preferences, lifestyle, and health needs. Before starting any new diet, especially if you have existing health conditions, it's advisable to consult with a healthcare professional.</p>
    `
  },
  "high-protein-low-carb-diets": {
    title: "High-Protein, Low-Carb Diets",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Learn how this diet method can help you achieve quick weight loss while preserving muscle mass.",
    content: `
      <h2>The Science Behind High-Protein, Low-Carb Diets</h2>
      <p>High-protein, low-carbohydrate diets have gained substantial popularity in the weight loss and fitness communities. This nutritional approach focuses on maximizing protein intake while significantly reducing carbohydrate consumption, creating a metabolic environment that may promote more efficient fat loss.</p>
      
      <h2>How Protein Supports Weight Loss</h2>
      
      <h3>Increased Satiety</h3>
      <p>Protein is the most satiating macronutrient, meaning it helps you feel fuller for longer periods compared to equivalent amounts of carbohydrates or fats. This natural appetite suppression can lead to reduced overall calorie consumption without feeling deprived.</p>
      
      <h3>Higher Thermic Effect</h3>
      <p>The thermic effect of food (TEF) refers to the energy required to digest, absorb, and process nutrients. Protein has a significantly higher TEF (20-30%) compared to carbohydrates (5-10%) or fats (0-3%). This means your body burns more calories processing protein than it does processing other macronutrients.</p>
      
      <h3>Muscle Preservation</h3>
      <p>When losing weight, one risk is the loss of lean muscle mass alongside fat. Adequate protein intake helps preserve muscle tissue during a caloric deficit, ensuring that more of the weight lost comes from fat stores rather than valuable muscle.</p>
      
      <h2>The Role of Carbohydrate Restriction</h2>
      
      <h3>Insulin Management</h3>
      <p>Carbohydrates trigger insulin release, a hormone that promotes fat storage and blocks fat breakdown. By reducing carbohydrate intake, you can lower insulin levels, potentially making it easier for your body to access and burn stored fat.</p>
      
      <h3>Glycogen Depletion</h3>
      <p>Restricting carbohydrates leads to lower glycogen stores (stored carbohydrates in muscles and liver). As these stores deplete, your body increasingly turns to fat as its primary fuel source.</p>
      
      <h3>Water Weight Reduction</h3>
      <p>Each gram of glycogen is stored with approximately 3 grams of water. As glycogen stores deplete on a low-carb diet, you'll lose water weight, which can be motivating in the early stages of a diet.</p>
      
      <h2>Implementing a High-Protein, Low-Carb Diet</h2>
      
      <h3>Protein Recommendations</h3>
      <p>For weight loss while preserving muscle mass, aim for 1.6-2.2 grams of protein per kilogram of body weight daily. Good protein sources include:</p>
      <ul>
        <li>Lean meats (chicken, turkey, lean beef)</li>
        <li>Fish and seafood</li>
        <li>Eggs</li>
        <li>Greek yogurt</li>
        <li>Cottage cheese</li>
        <li>Plant-based options (tofu, tempeh, legumes)</li>
        <li>Protein supplements (whey, casein, plant-based proteins)</li>
      </ul>
      
      <h3>Carbohydrate Guidelines</h3>
      <p>Carbohydrate restrictions vary based on the specific dietary approach:</p>
      <ul>
        <li><strong>Moderate restriction:</strong> 100-150g per day</li>
        <li><strong>Low-carb:</strong> 50-100g per day</li>
        <li><strong>Very low-carb/ketogenic:</strong> 20-50g per day</li>
      </ul>
      <p>Prioritize high-fiber, nutrient-dense carbohydrate sources:</p>
      <ul>
        <li>Non-starchy vegetables</li>
        <li>Berries and other low-sugar fruits</li>
        <li>Small amounts of legumes</li>
      </ul>
      
      <h3>Healthy Fat Intake</h3>
      <p>Include sufficient healthy fats to maintain energy levels and hormonal health:</p>
      <ul>
        <li>Avocados</li>
        <li>Olive oil</li>
        <li>Nuts and seeds</li>
        <li>Fatty fish (salmon, mackerel)</li>
      </ul>
      
      <h2>Potential Benefits</h2>
      <ul>
        <li>Efficient fat loss</li>
        <li>Preserved muscle mass</li>
        <li>Reduced hunger</li>
        <li>Improved blood glucose control</li>
        <li>Better lipid profiles (in many cases)</li>
        <li>Potential reduction in inflammation</li>
      </ul>
      
      <h2>Considerations and Precautions</h2>
      <ul>
        <li>May require careful planning to ensure micronutrient adequacy</li>
        <li>Can be challenging for vegetarians/vegans (though not impossible)</li>
        <li>May cause initial "low-carb flu" as the body adapts</li>
        <li>Not suitable for everyone, particularly those with certain kidney conditions</li>
        <li>Should be approached cautiously by athletes with high carbohydrate requirements</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>High-protein, low-carb diets offer an effective approach to weight management, particularly for preserving muscle mass during fat loss. However, the optimal diet is one you can maintain long-term. Consider working with a healthcare provider or registered dietitian to develop a personalized approach that suits your specific health needs and lifestyle.</p>
    `
  }
  // Additional blog posts can be added here
};

// Helper function to generate a blog post page
const generateBlogPost = (post, brandName, primaryColor) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | ${brandName}</title>
  <meta name="description" content="${post.excerpt}">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    .blog-content h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      color: #1f2937;
    }
    
    .blog-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 1.25rem;
      margin-bottom: 0.75rem;
      color: #374151;
    }
    
    .blog-content p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .blog-content ul {
      list-style-type: disc;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .blog-content li {
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body class="bg-gray-50">
  <!-- Header/Navbar -->
  <header class="bg-indigo-900/90 text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <a href="index.html" class="flex items-center space-x-2">
        <div class="relative h-8 w-16">
          <h2 class="text-xl font-bold tracking-tight text-white">
            <span class="text-white">${brandName.split('-')[0]}</span>
            <span class="text-purple-300">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
          </h2>
        </div>
      </a>
      
      <nav class="hidden md:flex items-center space-x-4 text-sm">
        <a href="index.html#diet-plans" class="hover:text-purple-300 transition-colors py-2 px-1">Popular Diet Plans</a>
        <a href="index.html#weight-resources" class="hover:text-purple-300 transition-colors py-2 px-1">Healthy Weight Resources</a>
        <a href="index.html#nutrition" class="hover:text-purple-300 transition-colors py-2 px-1">Healthy Eating & Nutrition</a>
        <a href="index.html#calorie-counting" class="hover:text-purple-300 transition-colors py-2 px-1">Calorie Counting</a>
        <a href="index.html#best-worst" class="hover:text-purple-300 transition-colors py-2 px-1">Best & Worst Diets</a>
      </nav>
      
      <div class="flex items-center space-x-3">
        <a href="index.html#newsletter" class="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-1.5 px-4 rounded-full transition-colors">
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

  <!-- Blog Content -->
  <main class="container mx-auto px-4 py-8 md:py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Featured Image -->
      <div class="rounded-lg overflow-hidden shadow-lg mb-8">
        <img src="${post.image}" alt="${post.title}" class="w-full h-auto object-cover">
      </div>
      
      <!-- Title and Meta -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${post.title}</h1>
        <p class="text-lg text-gray-600 mb-4">${post.excerpt}</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>Certified Health Expert</span>
          <span class="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>
      
      <!-- Article Content -->
      <article class="prose prose-lg max-w-none blog-content bg-white rounded-lg shadow-md p-6 md:p-8">
        ${post.content}
      </article>
      
      <!-- Related Articles -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${Object.entries(blogPosts)
            .filter(([slug]) => slug !== Object.keys(blogPosts).find(key => blogPosts[key].title === post.title))
            .slice(0, 3)
            .map(([slug, relatedPost]) => `
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <a href="${slug}.html">
                  <img src="${relatedPost.image}" alt="${relatedPost.title}" class="w-full h-48 object-cover">
                </a>
                <div class="p-4">
                  <a href="${slug}.html" class="block text-lg font-bold text-gray-800 hover:text-indigo-600 mb-2">
                    ${relatedPost.title}
                  </a>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-3">
                    ${relatedPost.excerpt}
                  </p>
                  <a href="${slug}.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
    </div>
  </main>
  
  <!-- Simple Footer -->
  <footer class="bg-indigo-900 text-gray-300 py-6">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm">© 2023 ${brandName} | <a href="privacy.html" class="hover:text-white">Privacy Policy</a> | <a href="terms.html" class="hover:text-white">Terms of Service</a></p>
    </div>
  </footer>
</body>
</html>
  `;
};

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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
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
  <section id="diet-plans" class="mb-16">
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
          <a href="dont-fall-for-fad-diets.html" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            Don't Fall for Fad Diets
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Get the real truth about what works for diets, and learn some healthy weight-loss strategies that actually work.
          </p>
          <a href="dont-fall-for-fad-diets.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
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
          <a href="high-protein-low-carb-diets-for-weight-loss.html" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            High-Protein, Low-Carb Diets for Weight Loss
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Research shows these popular diet plans can help you lose weight significantly and fast too. Plan out how best to use these 5 varieties of modern diets.
          </p>
          <a href="high-protein-low-carb-diets-for-weight-loss.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <a href="high-protein-low-carb-diets.html" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            High-Protein, Low-Carb Diets
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Learn how this diet method can help you achieve quick weight loss while preserving muscle mass.
          </p>
          <a href="high-protein-low-carb-diets.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Read More →
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <a href="rapid-weight-loss-is-it-safe.html" class="block text-xl font-bold text-gray-800 hover:text-indigo-600 mb-2">
            Rapid Weight Loss: Is It Safe?
          </a>
          <p class="text-gray-600 text-sm mb-4">
            Learn about rapid weight loss pros & cons, and the real truth about whether weight loss.
          </p>
          <a href="rapid-weight-loss-is-it-safe.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
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

  // Generate all blog post pages
  const blogPostPages = {};
  Object.entries(blogPosts).forEach(([slug, post]) => {
    blogPostPages[`${slug}.html`] = generateBlogPost(post, brandName, primaryColor);
  });
  
  // Add a placeholder for the "Rapid Weight Loss" article if it doesn't exist yet
  if (!blogPostPages['rapid-weight-loss-is-it-safe.html']) {
    const placeholderPost = {
      title: "Rapid Weight Loss: Is It Safe?",
      image: "https://images.unsplash.com/photo-1511072215123-bce20d9afcb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Learn about rapid weight loss pros & cons, and the real truth about whether weight loss.",
      content: `
        <h2>Understanding Rapid Weight Loss</h2>
        <p>Rapid weight loss, often defined as losing more than 2 pounds per week, can be tempting for those eager to see quick results. However, it's important to understand both the potential benefits and the risks associated with losing weight quickly.</p>
        
        <h2>Potential Risks of Rapid Weight Loss</h2>
        
        <h3>Muscle Loss</h3>
        <p>When you lose weight quickly, you're likely losing a significant amount of muscle along with fat. This can slow your metabolism and make it harder to maintain your weight loss in the long term.</p>
        
        <h3>Nutritional Deficiencies</h3>
        <p>Very low-calorie diets that lead to rapid weight loss often don't provide all the essential nutrients your body needs. This can lead to deficiencies in vitamins, minerals, and other important nutrients.</p>
        
        <h3>Gallstones</h3>
        <p>Rapid weight loss is a known risk factor for the development of gallstones. This is particularly true when weight loss exceeds 3 pounds per week.</p>
        
        <h3>Metabolic Slowdown</h3>
        <p>Your body may adapt to severe calorie restriction by slowing your metabolism, making it harder to continue losing weight and easier to regain weight later.</p>
        
        <h2>When Rapid Weight Loss Might Be Appropriate</h2>
        <p>In some situations, medical professionals may recommend more rapid weight loss:</p>
        
        <h3>Medical Supervision</h3>
        <p>Under direct supervision of healthcare providers, very low-calorie diets or other rapid weight loss methods may be used for specific health reasons.</p>
        
        <h3>Preparation for Surgery</h3>
        <p>Doctors may recommend quick weight loss before certain procedures to reduce surgical risks.</p>
        
        <h3>Obesity-Related Health Crises</h3>
        <p>When severe obesity is causing immediate health threats, faster weight loss may be justified despite the risks.</p>
        
        <h2>Healthier Approaches to Weight Loss</h2>
        
        <h3>Set Realistic Goals</h3>
        <p>Aim for losing 1-2 pounds per week, which is generally considered safe and sustainable.</p>
        
        <h3>Focus on Nutrition</h3>
        <p>Rather than severely restricting calories, focus on eating nutrient-dense foods that keep you satisfied while providing essential vitamins and minerals.</p>
        
        <h3>Incorporate Physical Activity</h3>
        <p>Regular exercise helps preserve muscle mass during weight loss and improves overall health.</p>
        
        <h3>Prioritize Protein</h3>
        <p>Adequate protein intake helps minimize muscle loss during weight loss.</p>
        
        <h3>Stay Hydrated</h3>
        <p>Proper hydration supports overall health and may help manage hunger.</p>
        
        <h2>Warning Signs to Watch For</h2>
        <p>If you experience any of the following while losing weight rapidly, consult a healthcare provider:</p>
        <ul>
          <li>Fatigue or weakness</li>
          <li>Hair loss</li>
          <li>Constant hunger or food obsession</li>
          <li>Irregular menstrual cycles</li>
          <li>Difficulty concentrating</li>
          <li>Feeling cold frequently</li>
          <li>Mood changes</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>While rapid weight loss may seem appealing, a slower, more sustainable approach is typically safer and more effective in the long run. Focus on developing healthy habits that you can maintain indefinitely rather than seeking quick fixes. Always consult with healthcare professionals before beginning any weight loss program, especially if you have existing health conditions.</p>
      `
    };
    
    blogPostPages['rapid-weight-loss-is-it-safe.html'] = generateBlogPost(placeholderPost, brandName, primaryColor);
  }

  // Main page HTML
  const mainPageHtml = `
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

  // Return both the main page and blog posts
  return {
    'index.html': mainPageHtml,
    ...blogPostPages
  };
}; 