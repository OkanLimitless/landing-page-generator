// Health tools generator functions for the landing page

// Generate BMI Calculator page
export const generateBMICalculator = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMI Calculator | ${brandName}</title>
  <meta name="description" content="Use our free BMI Calculator to find out your Body Mass Index and determine if you're at a healthy weight.">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&family=Lato:wght@400;700&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Outfit:wght@400;500;700&family=Poppins:wght@400;500;700&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Custom styles -->
  ${customStyles}
  
  <!-- Image error handling and responsive improvements -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    .fallback-image-container {
      position: relative;
      overflow: hidden;
    }
    
    .fallback-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s ease;
    }
    
    .fallback-message {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
    }
    
    .fallback-image-container img.error + .fallback-message {
      display: flex;
    }
    
    /* Fix for consistent widths */
    .container {
      width: 100%;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Better mobile view */
    @media (max-width: 640px) {
      .mobile-stack {
        flex-direction: column !important;
      }
      
      .mobile-full-width {
        width: 100% !important;
      }
      
      .mobile-text-center {
        text-align: center !important;
      }
      
      .mobile-padding {
        padding: 1rem !important;
      }
    }
    
    /* Fancy BMI indicator */
    .bmi-scale {
      position: relative;
      height: 8px;
      background: linear-gradient(to right, 
        #3b82f6 0%, #3b82f6 20%,  /* Underweight: blue */
        #10b981 20%, #10b981 40%, /* Normal: green */
        #f59e0b 40%, #f59e0b 60%, /* Overweight: yellow */
        #ef4444 60%, #ef4444 100% /* Obese: red */
      );
      border-radius: 4px;
      margin: 2rem 0;
    }
    
    .bmi-marker {
      position: absolute;
      top: -8px;
      width: 8px;
      height: 24px;
      background-color: #1e293b;
      border-radius: 4px;
      transform: translateX(-50%);
      transition: left 0.5s ease;
    }
    
    .bmi-categories {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      font-size: 0.75rem;
      color: #6b7280;
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
</head>
<body class="font-sans bg-gray-50 text-gray-800">
  ${navbar}

  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-900">BMI Calculator</h1>
      
      <p class="text-lg mb-6 text-center max-w-2xl mx-auto">Calculate your Body Mass Index (BMI) to determine if you're at a healthy weight.</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 mobile-padding order-2 lg:order-1">
          <h2 class="text-xl font-semibold mb-6 text-indigo-800">Enter Your Information</h2>
          
          <form id="bmi-form" class="space-y-4">
            <div>
              <label for="height" class="block text-sm font-medium text-gray-700 mb-1">Height</label>
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <input type="number" id="feet" placeholder="Feet" min="1" max="8" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div class="w-1/2">
                  <input type="number" id="inches" placeholder="Inches" min="0" max="11" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
              </div>
            </div>
            
            <div>
              <label for="weight" class="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
              <input type="number" id="weight" placeholder="Weight in pounds" min="50" max="500" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Gender (optional)</label>
              <div class="flex space-x-4">
                <div class="flex items-center">
                  <input type="radio" id="male" name="gender" value="male" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
                  <label for="male" class="ml-2 text-sm text-gray-700">Male</label>
                </div>
                <div class="flex items-center">
                  <input type="radio" id="female" name="gender" value="female" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
                  <label for="female" class="ml-2 text-sm text-gray-700">Female</label>
                </div>
              </div>
            </div>
            
            <div>
              <label for="age" class="block text-sm font-medium text-gray-700 mb-1">Age (optional)</label>
              <input type="number" id="age" placeholder="Your age" min="18" max="100" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            
            <button type="submit" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">Calculate BMI</button>
          </form>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 mobile-padding order-1 lg:order-2">
          <h2 class="text-xl font-semibold mb-6 text-indigo-800">Your Results</h2>
          
          <div id="bmi-result" class="hidden">
            <div class="text-center mb-6">
              <p class="text-sm text-gray-500 mb-1">Your BMI</p>
              <p id="bmi-value" class="text-5xl font-bold text-indigo-600">--</p>
              <p id="bmi-category" class="mt-2 font-medium text-xl">--</p>
            </div>
            
            <div class="mt-8">
              <div class="bmi-scale">
                <div id="bmi-marker" class="bmi-marker" style="left: 0%;"></div>
              </div>
              <div class="bmi-categories">
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-md mt-6">
              <h3 class="font-medium mb-2 text-indigo-800">What does this mean?</h3>
              <p id="bmi-explanation" class="text-sm text-gray-700">Your BMI indicates your weight in relation to your height. It's a useful screening tool, but doesn't diagnose body fatness or health.</p>
            </div>
          </div>
          
          <div id="bmi-initial" class="flex flex-col items-center justify-center py-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p class="text-gray-500">Enter your height and weight to see your BMI results</p>
          </div>
          
          <div class="fallback-image-container mt-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Healthy lifestyle" 
              class="w-full h-auto"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'; this.classList.add('error');"
            />
            <div class="fallback-message">
              <p>Image currently unavailable</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 class="text-xl font-semibold mb-4 text-indigo-800">Understanding Your BMI</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="font-medium text-lg mb-3 text-indigo-700">BMI Categories:</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                <span><strong>Below 18.5:</strong> Underweight</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span><strong>18.5 - 24.9:</strong> Normal weight</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                <span><strong>25 - 29.9:</strong> Overweight</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                <span><strong>30 and above:</strong> Obesity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-medium text-lg mb-3 text-indigo-700">Limitations of BMI:</h3>
            <ul class="space-y-1 list-disc list-inside text-gray-700">
              <li>Doesn't distinguish between muscle and fat</li>
              <li>May overestimate body fat in athletes</li>
              <li>May underestimate body fat in older adults</li>
              <li>Doesn't account for differences between ethnicities</li>
              <li>Doesn't provide information about body fat distribution</li>
            </ul>
          </div>
        </div>
        
        <p class="text-gray-700">BMI is just one indicator of health. For a more comprehensive assessment, consult with a healthcare professional who can consider other factors like waist circumference, blood pressure, cholesterol levels, and family history.</p>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h3 class="font-medium text-lg mb-3 text-indigo-700">What's Next?</h3>
          <p class="text-gray-700 mb-4">Based on your BMI results, you might consider:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-md">
              <h4 class="font-medium mb-2 text-blue-800">If Underweight</h4>
              <p class="text-sm text-gray-700">Speak with a healthcare provider to rule out underlying conditions and develop a healthy weight gain plan.</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-md">
              <h4 class="font-medium mb-2 text-yellow-800">If Overweight</h4>
              <p class="text-sm text-gray-700">Focus on sustainable lifestyle changes including a balanced diet and regular physical activity.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-md">
              <h4 class="font-medium mb-2 text-red-800">If Obese</h4>
              <p class="text-sm text-gray-700">Consider consulting with healthcare providers about comprehensive weight management strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  ${footer}

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const bmiForm = document.getElementById('bmi-form');
      const bmiResult = document.getElementById('bmi-result');
      const bmiInitial = document.getElementById('bmi-initial');
      const bmiValue = document.getElementById('bmi-value');
      const bmiCategory = document.getElementById('bmi-category');
      const bmiMarker = document.getElementById('bmi-marker');
      const bmiExplanation = document.getElementById('bmi-explanation');
      
      // Handle form submission
      bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const feet = parseInt(document.getElementById('feet').value) || 0;
        const inches = parseInt(document.getElementById('inches').value) || 0;
        const weight = parseInt(document.getElementById('weight').value);
        
        // Validate inputs
        if (!weight || (feet === 0 && inches === 0)) {
          alert('Please enter valid height and weight values');
          return;
        }
        
        // Calculate height in inches
        const heightInches = (feet * 12) + inches;
        
        // Calculate BMI: (weight in pounds / (height in inches)²) × 703
        const bmi = (weight / (heightInches * heightInches)) * 703;
        const roundedBMI = Math.round(bmi * 10) / 10;
        
        // Display result
        bmiValue.textContent = roundedBMI;
        
        // Determine BMI category and marker position
        let category, categoryColor, explanation, markerPosition;
        
        if (bmi < 18.5) {
          category = 'Underweight';
          categoryColor = 'text-blue-600';
          markerPosition = Math.max((bmi / 18.5) * 20, 2); // 0-20% of scale
          explanation = 'Being underweight can be associated with nutritional deficiencies and other health issues. Consider consulting with a healthcare provider.';
        } else if (bmi < 25) {
          category = 'Normal weight';
          categoryColor = 'text-green-600';
          markerPosition = 20 + ((bmi - 18.5) / 6.5) * 20; // 20-40% of scale
          explanation = 'Your weight is within the normal range for your height. Maintain a balanced diet and regular physical activity.';
        } else if (bmi < 30) {
          category = 'Overweight';
          categoryColor = 'text-yellow-600';
          markerPosition = 40 + ((bmi - 25) / 5) * 20; // 40-60% of scale
          explanation = 'Being overweight may increase your risk for certain health conditions. Consider healthy lifestyle changes.';
        } else {
          category = 'Obese';
          categoryColor = 'text-red-600';
          markerPosition = Math.min(60 + ((bmi - 30) / 10) * 40, 98); // 60-100% of scale
          explanation = 'Obesity is associated with an increased risk of various health conditions. Consider consulting with a healthcare provider.';
        }
        
        // Update the UI
        bmiCategory.textContent = category;
        bmiCategory.className = \`mt-2 font-medium text-xl \${categoryColor}\`;
        bmiMarker.style.left = \`\${markerPosition}%\`;
        bmiExplanation.textContent = explanation;
        
        // Show results
        bmiInitial.classList.add('hidden');
        bmiResult.classList.remove('hidden');
      });
      
      // Handle image errors
      const images = document.querySelectorAll('img:not([onerror])');
      images.forEach(img => {
        img.onerror = function() {
          const fallback = img.dataset.fallback || 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
          this.src = fallback;
          this.classList.add('error');
        };
      });
    });
  </script>
</body>
</html>`;
};

// Generate Meal Planner page
export const generateMealPlanner = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
  // Create a default styling if customStyles is not provided
  const styles = `
    <style>
      body {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
    </style>
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meal Planner | ${brandName}</title>
  <meta name="description" content="Create a personalized meal plan based on your dietary preferences, calorie needs, and health goals.">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  ${styles}
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
</head>
<body class="font-sans bg-gray-50 text-gray-800">
  ${navbar}

  <main class="container mx-auto px-4 py-12">
    <section class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-900">Personalized Meal Planner</h1>
      <p class="text-lg mb-10 text-center max-w-2xl mx-auto">Create a customized meal plan based on your dietary preferences, calorie needs, and health goals.</p>
      
      <div class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <h2 class="text-xl font-semibold mb-6 text-indigo-800">Your Meal Preferences</h2>
        
        <form id="meal-planner-form" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="calories" class="block text-sm font-medium text-gray-700 mb-1">Daily Calorie Target</label>
              <select id="calories" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="1200">1200 calories</option>
                <option value="1500">1500 calories</option>
                <option value="1800" selected>1800 calories</option>
                <option value="2000">2000 calories</option>
                <option value="2200">2200 calories</option>
                <option value="2500">2500 calories</option>
              </select>
            </div>
            
            <div>
              <label for="diet-type" class="block text-sm font-medium text-gray-700 mb-1">Diet Type</label>
              <select id="diet-type" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="balanced" selected>Balanced</option>
                <option value="low-carb">Low Carb</option>
                <option value="high-protein">High Protein</option>
                <option value="keto">Keto</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Gluten-free</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Dairy-free</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Nut-free</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Shellfish-free</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Soy-free</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Egg-free</span>
              </label>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Meal Structure</label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <label class="flex items-center">
                <input type="checkbox" checked class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Breakfast</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Morning Snack</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" checked class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Lunch</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Afternoon Snack</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" checked class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Dinner</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Evening Snack</span>
              </label>
            </div>
          </div>
          
          <div class="pt-2">
            <button type="submit" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">Generate Meal Plan</button>
          </div>
        </form>
      </div>
      
      <div id="meal-plan-result" class="hidden">
        <h2 class="text-2xl font-bold mb-6 text-center text-indigo-900">Your 7-Day Meal Plan</h2>
        
        <!-- Day tabs -->
        <div class="flex overflow-x-auto mb-6 pb-2">
          <button class="day-tab active flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-indigo-600 text-white" data-day="1">Day 1</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="2">Day 2</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="3">Day 3</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="4">Day 4</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="5">Day 5</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="6">Day 6</button>
          <button class="day-tab flex-shrink-0 px-4 py-2 font-medium rounded-t-lg focus:outline-none bg-gray-200 hover:bg-gray-300 transition-colors" data-day="7">Day 7</button>
        </div>
        
        <!-- Sample meal plan for Day 1 -->
        <div class="day-content bg-white rounded-lg shadow-lg p-6 mb-8" data-day="1">
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-2 text-indigo-800">Breakfast</h3>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-1/4">
                <img src="https://source.unsplash.com/random/300x200/?oatmeal" alt="Breakfast" class="w-full h-40 object-cover rounded-lg">
              </div>
              <div class="md:w-3/4">
                <h4 class="font-medium text-lg mb-1">Greek Yogurt Parfait with Berries and Granola</h4>
                <p class="text-gray-600 mb-3">A protein-packed breakfast that will keep you satisfied until lunch.</p>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">320 calories</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">20g protein</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">42g carbs</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">8g fat</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-2 text-indigo-800">Lunch</h3>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-1/4">
                <img src="https://source.unsplash.com/random/300x200/?salad" alt="Lunch" class="w-full h-40 object-cover rounded-lg">
              </div>
              <div class="md:w-3/4">
                <h4 class="font-medium text-lg mb-1">Mediterranean Chickpea Salad</h4>
                <p class="text-gray-600 mb-3">Fresh vegetables, chickpeas, and feta cheese with a lemon herb dressing.</p>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">420 calories</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">15g protein</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">52g carbs</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">18g fat</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-2 text-indigo-800">Dinner</h3>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-1/4">
                <img src="https://source.unsplash.com/random/300x200/?salmon" alt="Dinner" class="w-full h-40 object-cover rounded-lg">
              </div>
              <div class="md:w-3/4">
                <h4 class="font-medium text-lg mb-1">Baked Salmon with Roasted Vegetables</h4>
                <p class="text-gray-600 mb-3">Omega-3 rich salmon with a variety of colorful roasted vegetables.</p>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">480 calories</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">35g protein</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">25g carbs</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">28g fat</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 border-t border-gray-200 pt-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-indigo-800">Daily Summary</h3>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">1,800 calories</span>
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div class="bg-blue-50 p-3 rounded-lg">
                <p class="text-sm text-gray-500 mb-1">Protein</p>
                <p class="font-bold text-blue-600">85g</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <p class="text-sm text-gray-500 mb-1">Carbs</p>
                <p class="font-bold text-green-600">165g</p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <p class="text-sm text-gray-500 mb-1">Fat</p>
                <p class="font-bold text-yellow-600">59g</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Placeholder for other days -->
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="2">
          <p class="text-center text-gray-500 py-8">Day 2 meal plan will be displayed here</p>
        </div>
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="3">
          <p class="text-center text-gray-500 py-8">Day 3 meal plan will be displayed here</p>
        </div>
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="4">
          <p class="text-center text-gray-500 py-8">Day 4 meal plan will be displayed here</p>
        </div>
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="5">
          <p class="text-center text-gray-500 py-8">Day 5 meal plan will be displayed here</p>
        </div>
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="6">
          <p class="text-center text-gray-500 py-8">Day 6 meal plan will be displayed here</p>
        </div>
        <div class="day-content hidden bg-white rounded-lg shadow-lg p-6 mb-8" data-day="7">
          <p class="text-center text-gray-500 py-8">Day 7 meal plan will be displayed here</p>
        </div>
        
        <div class="flex justify-center">
          <button id="download-plan" class="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors font-medium">Download Meal Plan</button>
        </div>
      </div>
    </section>
  </main>

  ${footer}

  <script>
    document.getElementById('meal-planner-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show the meal plan result
      document.getElementById('meal-plan-result').classList.remove('hidden');
      
      // Scroll to results
      document.getElementById('meal-plan-result').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Tab functionality
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');
    
    dayTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        dayTabs.forEach(t => {
          t.classList.remove('active', 'bg-indigo-600', 'text-white');
          t.classList.add('bg-gray-200', 'hover:bg-gray-300');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active', 'bg-indigo-600', 'text-white');
        tab.classList.remove('bg-gray-200', 'hover:bg-gray-300');
        
        // Hide all content
        dayContents.forEach(content => {
          content.classList.add('hidden');
        });
        
        // Show corresponding content
        const day = tab.getAttribute('data-day');
        const content = document.querySelector(\`.day-content[data-day="\${day}"]\`);
        content.classList.remove('hidden');
      });
    });
    
    // Download plan button - demo only
    document.getElementById('download-plan').addEventListener('click', function() {
      alert('In a real application, this would download a PDF of your meal plan. This is a demo version.');
    });
  </script>
</body>
</html>`;
};

// Generate Top Ten Weight Loss Medications page
export const generateTopTenWeightLossMeds = (brandName, navbar, footer, customStyles = '', googleTag = '', affiliateLink = '#') => {
  // Set default affiliate link if empty
  affiliateLink = affiliateLink || 'https://hit.prowellnessroute.com/C5SxvyuMoC';

  // Define medication data
  const medications = [
    {
      id: 1,
      name: "Mounjaro",
      subtitle: "Tirzepatide",
      benefits: [
        "First FDA-approved GLP-1 and GIP dual agonist for type 2 diabetes",
        "Proven to help you lose up to 22.5% of body weight in clinical trials",
        "Recent studies show best weight loss results among all medications"
      ],
      rating: 4.9,
      reviews: 124
    },
    {
      id: 2,
      name: "Saxenda",
      subtitle: "Liraglutide",
      benefits: [
        "FDA approved for chronic weight management",
        "5% or greater weight loss results",
        "Proven appetite suppression"
      ],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: "Wegovy",
      subtitle: "Semaglutide",
      benefits: [
        "Weekly self-injection (GLP-1 receptor)",
        "Up to 15% body weight reduction",
        "Similar to Ozempic but specifically approved for weight loss"
      ],
      rating: 4.8,
      reviews: 112
    },
    {
      id: 4,
      name: "Qsymia",
      subtitle: "Phentermine-Topiramate",
      benefits: [
        "Combination of appetite suppressant and seizure medication",
        "Reduced food cravings and hunger",
        "FDA approved for long-term use"
      ],
      rating: 4.5,
      reviews: 95
    },
    {
      id: 5,
      name: "Orlistat",
      subtitle: "Xenical/Alli",
      benefits: [
        "Prevents fat absorption in intestines",
        "Available as prescription (Xenical) or over-the-counter (Alli)",
        "Long safety record"
      ],
      rating: 4.3,
      reviews: 78
    },
    {
      id: 6,
      name: "Zepbound",
      subtitle: "Tirzepatide",
      benefits: [
        "New FDA-approved version of Mounjaro",
        "Once-weekly injection",
        "Specifically approved for weight loss"
      ],
      rating: 4.6,
      reviews: 65
    },
    {
      id: 7,
      name: "Rybelsus",
      subtitle: "Oral Semaglutide",
      benefits: [
        "Works similarly to Wegovy/Ozempic",
        "Available as a daily pill instead of injection",
        "First oral GLP-1 receptor"
      ],
      rating: 4.4,
      reviews: 72
    },
    {
      id: 8,
      name: "Plenity",
      subtitle: "Gelesis100",
      benefits: [
        "Not technically a medication",
        "FDA-cleared as a device in pill form",
        "Expands in stomach to help you feel full"
      ],
      rating: 4.2,
      reviews: 68
    },
    {
      id: 9,
      name: "Naltrexone-Bupropion",
      subtitle: "Contrave",
      benefits: [
        "Combination anti-addiction and antidepressant medication",
        "Works on brain pathways associated with hunger and cravings",
        "Moderate weight loss results"
      ],
      rating: 4.0,
      reviews: 83
    },
    {
      id: 10,
      name: "Phentermine",
      subtitle: "Adipex-P, Lomaira",
      benefits: [
        "Short-term appetite suppressant",
        "One of the oldest weight loss medications still in use",
        "Approved only for short-term use"
      ],
      rating: 3.7,
      reviews: 96
    }
  ];

  // Helper function to generate star ratings
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return `
      ${'<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>'.repeat(fullStars)}
      ${halfStar ? '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>' : ''}
      ${'<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>'.repeat(emptyStars)}
    `;
  };

  // Extract Google Tag ID parts if available
  const gtagIdMatch = googleTag.match(/id=([^"&]+)/);
  const gtagId = gtagIdMatch ? gtagIdMatch[1] : '';
  const [gtagAccount, gtagLabel] = gtagId.split('/');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 10 Weight Loss Medications | ${brandName}</title>
    <meta name="description" content="Explore the top 10 weight loss medications ranked by effectiveness, safety, and user satisfaction.">
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom styles -->
    ${customStyles || ''}
    
    <style>
      /* Loading animation styles */
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .loading-text {
        margin-top: 20px;
        font-size: 18px;
        color: #333;
      }
    </style>
    
    <!-- Google tag for conversion tracking -->
    ${googleTag ? `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagId}');

      // Conversion tracking function with loading animation
      function gtag_report_conversion(url) {
        // Show loading overlay
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.display = 'flex';

        gtag('event', 'conversion', {
          'send_to': '${gtagAccount}/${gtagLabel}',
          'event_callback': function() {
            if (url) {
              // Add a small delay for better UX
              setTimeout(function() {
                window.location = url;
              }, 800);
            }
          }
        });
        return false;
      }
    </script>
    ` : ''}
  </head>
  <body class="font-sans">
    <!-- Loading Overlay -->
    <div id="loading-overlay" class="loading-overlay">
      <div class="text-center">
        <div class="loading-spinner mx-auto"></div>
        <div class="loading-text">Finding the best match for you...</div>
      </div>
    </div>

    ${navbar}
    
    <!-- Desktop View -->
    <div class="desktop-view">
      <!-- ... existing desktop header ... -->
      
      <!-- Desktop Hero Section -->
      <div class="desktop-hero">
        <div class="desktop-hero-content">
          <!-- ... existing hero content ... -->
          <div class="desktop-hero-text">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Compare Weight Loss Injections 2025
            </h1>
            
            <p class="text-lg text-gray-700 mb-6">
              Compare top weight-loss injections including Ozempic®, Wegovy®, GLP-1 injectables, and other popular weight-loss medications.
            </p>
            
            <div class="mb-6">
              <div class="editors-choice-badge">
                Editor's Choice - March 2025
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Desktop Rankings Section -->
      <div class="bg-white py-12">
        <div class="container mx-auto px-4">
          <!-- First Item with Most Popular -->
          <div class="mb-10 bg-white rounded-lg border border-gray-200 p-6 shadow-md">
            <!-- ... existing content ... -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <!-- ... existing benefits ... -->
              </div>
              <div class="flex justify-end items-center">
                <a href="${affiliateLink}" 
                   onclick="return gtag_report_conversion('${affiliateLink}');"
                   class="visit-site-btn bg-green-600 hover:bg-green-700">
                  Visit Site →
                </a>
              </div>
            </div>
          </div>
          
          <!-- Additional Medication Rankings -->
          ${medications.slice(1, 5).map((med, index) => `
            <div class="mb-10 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <!-- ... existing content ... -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  ${med.benefits.map(benefit => `
                    <div class="check-item">
                      <svg class="check-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>${benefit}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="flex justify-end items-center">
                  <a href="${affiliateLink}" 
                     onclick="return gtag_report_conversion('${affiliateLink}');"
                     class="visit-site-btn bg-blue-600 hover:bg-blue-700">
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <!-- Mobile View -->
    <div class="mobile-view">
      <!-- ... existing mobile content ... -->
      <!-- CTA Button -->
      <div class="flex justify-center mb-8">
        <a href="${affiliateLink}"
           onclick="return gtag_report_conversion('${affiliateLink}');"
           class="next-step-btn text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2">
          <span>NEXT STEP</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
      
      <!-- Most Popular Section -->
      <section id="top-medications" class="py-8 bg-white">
        <!-- ... existing content ... -->
        <div class="max-w-5xl mx-auto px-4 py-6">
          ${medications.map(med => `
            <div class="mb-8 border rounded-lg overflow-hidden shadow-md med-card">
              <!-- ... existing content ... -->
              <div class="p-5 bg-white">
                <ul class="mb-5 space-y-3">
                  ${med.benefits.map(benefit => `
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>${benefit}</span>
                    </li>
                  `).join('')}
                </ul>
                <button onclick="return gtag_report_conversion('${affiliateLink}');" class="get-offer-btn bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium w-full text-center shadow-sm">Get Offer</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
      
      <!-- Call to Action Section -->
      <section class="bg-blue-100 py-12">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to start your weight loss journey?</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">Join thousands of patients who have successfully lost weight with GLP-1 medications. Take the first step today!</p>
          <a href="${affiliateLink}"
             onclick="return gtag_report_conversion('${affiliateLink}');"
             class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Take the Quiz →
          </a>
        </div>
      </section>
    </div>
    
    ${footer}
  </body>
</html>`;
};

// Generate About Us page 
export const generateAboutUsPage = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | ${brandName}</title>
  <meta name="description" content="Learn about our team of health professionals dedicated to providing science-based nutrition and weight loss guidance.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Custom styles -->
  ${customStyles}
  
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
    
    /* Image fallback handling */
    .fallback-image {
      opacity: 0.7;
    }
    
    .team-member-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 9999px;
    }
    
    @media (max-width: 640px) {
      .mobile-stack {
        flex-direction: column !important;
      }
      
      .mobile-full-width {
        width: 100% !important;
      }
      
      .mobile-text-center {
        text-align: center !important;
      }
      
      .mobile-center {
        margin-left: auto !important;
        margin-right: auto !important;
      }
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-6 text-indigo-900">About ${brandName}</h1>
      
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Our Mission</h2>
        <p class="text-gray-700 mb-6">At ${brandName}, our mission is to provide reliable, science-based information and tools to help people make informed decisions about their nutrition, weight management, and overall health. We believe that everyone deserves access to accurate health information that can help them achieve their wellness goals.</p>
        
        <div class="relative h-64 w-full rounded-lg overflow-hidden mb-6">
          <img 
            src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Our mission - helping people achieve health goals" 
            class="w-full h-full object-cover"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'; this.classList.add('fallback-image');"
          />
        </div>
        
        <h3 class="text-xl font-semibold mb-3 text-indigo-700">Our Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-semibold text-indigo-900 mb-2">Evidence-Based</h4>
            <p class="text-gray-700 text-sm">We prioritize information backed by scientific research and clinical studies.</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800 mb-2">Empowering</h4>
            <p class="text-gray-700 text-sm">We provide tools and knowledge that empower people to take control of their health.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-2">Inclusive</h4>
            <p class="text-gray-700 text-sm">We believe health information should be accessible and applicable to people of all backgrounds.</p>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mb-3 text-indigo-700">Our Approach</h3>
        <p class="text-gray-700 mb-4">We take a holistic approach to health and nutrition, recognizing that successful weight management involves more than just counting calories. Our content explores the complex interplay between diet, exercise, sleep, stress, and other lifestyle factors that impact your health.</p>
        <p class="text-gray-700 mb-4">Unlike many health websites that promote quick fixes or fad diets, we focus on sustainable strategies backed by scientific evidence. Our goal is to help you develop healthy habits that you can maintain for life.</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-indigo-800">Our Expert Team</h2>
        <p class="text-gray-700 mb-8">Our content is reviewed and developed by a dedicated team of health professionals, including registered dietitians, nutritionists, and healthcare providers with expertise in weight management and preventive health.</p>
        
        <div class="space-y-8">
          <!-- Team Member 1 -->
          <div class="flex flex-col md:flex-row items-center md:items-start mobile-stack">
            <div class="md:mr-6 mb-4 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Sarah Johnson" 
                class="team-member-image mobile-center"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'; this.classList.add('fallback-image');"
              />
            </div>
            <div class="text-center md:text-left mobile-text-center">
              <h3 class="text-xl font-semibold text-indigo-800">Dr. Sarah Johnson, MD</h3>
              <p class="text-indigo-600 mb-2">Medical Director</p>
              <p class="text-gray-700 mb-3">Dr. Johnson is board-certified in Internal Medicine with a focus on preventive health and nutrition. She has over 15 years of experience helping patients manage their weight and improve their overall health through lifestyle modifications.</p>
              <p class="text-gray-600 text-sm italic">"My goal is to translate complex medical research into practical advice that people can use to make meaningful changes in their lives."</p>
            </div>
          </div>
          
          <!-- Team Member 2 -->
          <div class="flex flex-col md:flex-row items-center md:items-start mobile-stack">
            <div class="md:mr-6 mb-4 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Michael Rodriguez" 
                class="team-member-image mobile-center"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'; this.classList.add('fallback-image');"
              />
            </div>
            <div class="text-center md:text-left mobile-text-center">
              <h3 class="text-xl font-semibold text-indigo-800">Michael Rodriguez, RD</h3>
              <p class="text-indigo-600 mb-2">Lead Registered Dietitian</p>
              <p class="text-gray-700 mb-3">Michael specializes in medical nutrition therapy for weight management and metabolic health. He holds a Master's degree in Nutrition Science and has worked with diverse populations to develop personalized nutrition plans.</p>
              <p class="text-gray-600 text-sm italic">"There's no one-size-fits-all approach to nutrition. I'm passionate about helping people find sustainable eating patterns that work for their unique needs and preferences."</p>
            </div>
          </div>
          
          <!-- Team Member 3 -->
          <div class="flex flex-col md:flex-row items-center md:items-start mobile-stack">
            <div class="md:mr-6 mb-4 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Emily Chen" 
                class="team-member-image mobile-center"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'; this.classList.add('fallback-image');"
              />
            </div>
            <div class="text-center md:text-left mobile-text-center">
              <h3 class="text-xl font-semibold text-indigo-800">Dr. Emily Chen, PhD</h3>
              <p class="text-indigo-600 mb-2">Nutrition Researcher</p>
              <p class="text-gray-700 mb-3">Dr. Chen has a PhD in Nutritional Sciences and specializes in the relationship between diet, metabolism, and weight management. Her research has been published in top scientific journals and focuses on evidence-based approaches to sustainable weight loss.</p>
              <p class="text-gray-600 text-sm italic">"My mission is to bridge the gap between scientific research and practical application. I'm committed to separating nutrition facts from fads."</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Our Editorial Process</h2>
        <p class="text-gray-700 mb-4">We're committed to providing accurate, up-to-date information that you can trust. Here's how we ensure the quality of our content:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-semibold text-indigo-800 mb-2">Research-Based Content</h3>
            <p class="text-gray-700 text-sm">Our articles are based on peer-reviewed research from reputable scientific journals and authoritative health organizations like the NIH, WHO, and Mayo Clinic.</p>
          </div>
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-semibold text-indigo-800 mb-2">Expert Review</h3>
            <p class="text-gray-700 text-sm">All content is reviewed by our team of healthcare professionals to ensure accuracy and adherence to current medical guidelines.</p>
          </div>
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-semibold text-indigo-800 mb-2">Regular Updates</h3>
            <p class="text-gray-700 text-sm">We regularly review and update our content to reflect the latest research and recommendations in nutrition and weight management.</p>
          </div>
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-semibold text-indigo-800 mb-2">Clear Citations</h3>
            <p class="text-gray-700 text-sm">We provide references to the sources we use so you can verify information and explore topics in greater depth if desired.</p>
          </div>
        </div>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <h3 class="font-semibold text-yellow-800 mb-2">Medical Disclaimer</h3>
          <p class="text-gray-700 text-sm">The information on our website is educational in nature and not intended as medical advice. Always consult with a qualified healthcare provider before making significant changes to your diet or exercise routine, especially if you have underlying health conditions.</p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Professional Affiliations</h2>
        <p class="text-gray-700 mb-6">We're proud to be affiliated with leading organizations in health and nutrition:</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="p-4">
            <div class="text-3xl font-bold text-indigo-800 mb-2">ANA</div>
            <p class="text-gray-600 text-sm">American Nutrition Association</p>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-indigo-800 mb-2">AND</div>
            <p class="text-gray-600 text-sm">Academy of Nutrition and Dietetics</p>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-indigo-800 mb-2">OMA</div>
            <p class="text-gray-600 text-sm">Obesity Medicine Association</p>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-indigo-800 mb-2">ACLM</div>
            <p class="text-gray-600 text-sm">American College of Lifestyle Medicine</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  ${footer}
  
  <script>
    // Handle image errors
    document.addEventListener('DOMContentLoaded', function() {
      const images = document.querySelectorAll('img:not([onerror])');
      images.forEach(img => {
        img.onerror = function() {
          const fallback = img.dataset.fallback || 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80';
          this.src = fallback;
          this.classList.add('fallback-image');
        };
      });
    });
  </script>
</body>
</html>`;
};

// Generate Contact Us page
export const generateContactPage = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | ${brandName}</title>
  <meta name="description" content="Get in touch with our team of health professionals. We're here to answer your questions about nutrition and weight management.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Custom styles -->
  ${customStyles}
  
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
    
    @media (max-width: 640px) {
      .mobile-order-reverse {
        flex-direction: column-reverse !important;
      }
      
      .mobile-full-width {
        width: 100% !important;
      }
    }
    
    /* Form styles */
    .form-input:focus, .form-textarea:focus {
      outline: none;
      ring: 2px;
      ring-color: rgba(79, 70, 229, 0.5);
      border-color: #6366f1;
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-900">Contact Us</h1>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="flex flex-col md:flex-row mobile-order-reverse">
          <!-- Contact Form -->
          <div class="md:w-2/3 p-8">
            <h2 class="text-2xl font-semibold mb-6 text-indigo-800">Send Us a Message</h2>
            <p class="text-gray-700 mb-6">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
            
            <form id="contact-form" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="first-name" name="first-name" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md" required>
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="last-name" name="last-name" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md" required>
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md" required>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" name="subject" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" class="form-textarea w-full px-4 py-2 border border-gray-300 rounded-md" required></textarea>
              </div>
              
              <div class="flex items-start">
                <input type="checkbox" id="privacy-policy" name="privacy-policy" class="mt-1 h-4 w-4 text-indigo-600" required>
                <label for="privacy-policy" class="ml-2 block text-sm text-gray-700">
                  I have read and agree to the <a href="privacy.html" class="text-indigo-600 hover:underline">Privacy Policy</a> and consent to having my data processed.
                </label>
              </div>
              
              <div>
                <button type="submit" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">Send Message</button>
              </div>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="md:w-1/3 bg-indigo-700 text-white p-8">
            <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-md font-medium">Email</h3>
                  <p class="mt-1 text-sm text-indigo-200">info@${brandName.toLowerCase().replace(/\s+|[^a-zA-Z0-9]/g, '')}.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-md font-medium">Phone</h3>
                  <p class="mt-1 text-sm text-indigo-200">(888) 555-0123</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-md font-medium">Office</h3>
                  <p class="mt-1 text-sm text-indigo-200">
                    123 Health Avenue<br>
                    Suite 456<br>
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-md font-medium">Hours</h3>
                  <p class="mt-1 text-sm text-indigo-200">
                    Monday-Friday: 9am-5pm EST<br>
                    Saturday: 10am-2pm EST<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-md font-medium mb-3">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold mb-6 text-indigo-800">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-indigo-700 mb-2">How quickly can I expect a response to my inquiry?</h3>
              <p class="text-gray-700">We aim to respond to all inquiries within 1-2 business days. For urgent matters, please call our customer service line.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-indigo-700 mb-2">Can I schedule a consultation with one of your health professionals?</h3>
              <p class="text-gray-700">Yes, we offer virtual consultations with our registered dietitians. Please indicate your interest in the contact form, and we'll provide you with information about availability and rates.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-indigo-700 mb-2">Do you offer personalized meal plans?</h3>
              <p class="text-gray-700">While our site provides general meal planning tools, we also offer customized meal plans developed by our dietitians for an additional fee. Contact us for more information.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-indigo-700 mb-2">I found an error on your website. Who should I contact?</h3>
              <p class="text-gray-700">We appreciate your help in maintaining the accuracy of our content. Please use the contact form and select "Feedback" as the subject to report any errors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  ${footer}
  
  <script>
    // Handle form submission - for demo purposes only
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Validate form
          const isValid = form.checkValidity();
          if (!isValid) {
            form.reportValidity();
            return;
          }
          
          // Show success message (in a real implementation, this would send the form data to a server)
          alert('Thank you for your message! This is a demo form. In a production environment, this would be submitted to our team.');
          
          // Reset form
          form.reset();
        });
      }
    });
  </script>
</body>
</html>`;
};

// Generate FAQ page with focused content
export const generateFAQPage = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frequently Asked Questions | ${brandName}</title>
  <meta name="description" content="Get answers to common questions about weight loss programs and how we can help you find the best one for your needs.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Custom styles -->
  ${customStyles}
  
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
    
    .faq-item {
      transition: all 0.3s ease;
    }
    
    .faq-item:hover {
      transform: translateX(5px);
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-900">Frequently Asked Questions</h1>
      
      <div class="space-y-6">
        <!-- FAQ Item 1 -->
        <div class="bg-white rounded-lg shadow-md p-6 faq-item">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800">How does the medication matching process work?</h3>
          <p class="text-gray-700">Our process is simple: First, you'll complete a quick assessment about your health history and goals. Then, we'll match you with FDA-approved medications that align with your profile. Finally, you'll receive personalized recommendations based on your specific needs.</p>
        </div>
        
        <!-- FAQ Item 2 -->
        <div class="bg-white rounded-lg shadow-md p-6 faq-item">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800">What information do I need to provide?</h3>
          <p class="text-gray-700">You'll need to provide basic information about your health history, current medications, and weight loss goals. This helps us ensure we match you with the most appropriate options.</p>
        </div>
        
        <!-- FAQ Item 3 -->
        <div class="bg-white rounded-lg shadow-md p-6 faq-item">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800">Is the assessment free?</h3>
          <p class="text-gray-700">Yes, our assessment is completely free. You only need to provide payment information if you decide to proceed with a recommended medication after reviewing your matches.</p>
        </div>
        
        <!-- FAQ Item 4 -->
        <div class="bg-white rounded-lg shadow-md p-6 faq-item">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800">How long does the process take?</h3>
          <p class="text-gray-700">The initial assessment takes about 2 minutes to complete. After that, you'll receive your personalized medication matches immediately.</p>
        </div>
        
        <!-- FAQ Item 5 -->
        <div class="bg-white rounded-lg shadow-md p-6 faq-item">
          <h3 class="text-xl font-semibold mb-2 text-indigo-800">What happens after I get my matches?</h3>
          <p class="text-gray-700">After receiving your matches, you can review detailed information about each medication, including how it works, potential benefits, and what to expect. You can then choose to proceed with the option that best fits your needs.</p>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-bold mb-4 text-indigo-900">Ready to Find Your Match?</h2>
        <p class="text-gray-700 mb-6">Take our free assessment now and get personalized medication recommendations in minutes.</p>
        <a href="top-ten-weight-loss-meds.html" class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
          Start Free Assessment
        </a>
      </div>
    </div>
  </main>
  
  ${footer}
</body>
</html>`;
};