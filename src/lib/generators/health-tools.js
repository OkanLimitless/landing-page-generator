// Health tools generator functions for the landing page

// Generate BMI Calculator page
export const generateBMICalculator = (brandName, navbar, footer, customStyles, googleTag) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMI Calculator | ${brandName}</title>
  <meta name="description" content="Use our free BMI Calculator to find out your Body Mass Index and determine if you're at a healthy weight.">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag || ''}
</head>
<body class="font-sans bg-gray-50 text-gray-800">
  ${navbar}

  <main class="container mx-auto px-4 py-12">
    <section class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-900">BMI Calculator</h1>
      
      <p class="text-lg mb-6 text-center">Calculate your Body Mass Index (BMI) to determine if you're at a healthy weight.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
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
            
            <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium">Calculate BMI</button>
          </form>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-indigo-800">Your Results</h2>
          
          <div id="bmi-result" class="hidden">
            <div class="text-center mb-4">
              <p class="text-sm text-gray-500 mb-1">Your BMI</p>
              <p id="bmi-value" class="text-4xl font-bold text-indigo-600">--</p>
            </div>
            
            <div id="bmi-category" class="text-center mb-6 font-medium text-lg">--</div>
            
            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
              <h3 class="font-medium mb-2">BMI Categories:</h3>
              <ul class="text-sm space-y-1 text-gray-600">
                <li><span class="font-medium text-blue-600">Below 18.5:</span> Underweight</li>
                <li><span class="font-medium text-green-600">18.5 - 24.9:</span> Normal weight</li>
                <li><span class="font-medium text-yellow-600">25 - 29.9:</span> Overweight</li>
                <li><span class="font-medium text-red-600">30 and above:</span> Obesity</li>
              </ul>
            </div>
          </div>
          
          <div id="bmi-initial" class="text-center py-8">
            <p class="text-gray-500 italic">Enter your height and weight to see your BMI results</p>
          </div>
        </div>
      </div>
      
      <div class="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-4 text-indigo-800">Understanding Your BMI</h2>
        <p class="mb-4">BMI (Body Mass Index) is a calculation that uses your height and weight to estimate how much body fat you have. While BMI doesn't directly measure body fat, it can be a useful screening tool to identify potential weight problems.</p>
        <p class="mb-4">Keep in mind that BMI is just one factor in determining your overall health. It doesn't account for factors like muscle mass, bone density, age, sex, and ethnicity. Athletes, for example, may have a high BMI due to increased muscle mass rather than body fat.</p>
        <p>For a more comprehensive assessment of your health, consult with a healthcare professional.</p>
      </div>
    </section>
  </main>

  ${footer}

  <script>
    document.getElementById('bmi-form').addEventListener('submit', function(e) {
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
      document.getElementById('bmi-value').textContent = roundedBMI;
      
      // Determine BMI category
      let category;
      let categoryColor;
      
      if (bmi < 18.5) {
        category = 'Underweight';
        categoryColor = 'text-blue-600';
      } else if (bmi < 25) {
        category = 'Normal weight';
        categoryColor = 'text-green-600';
      } else if (bmi < 30) {
        category = 'Overweight';
        categoryColor = 'text-yellow-600';
      } else {
        category = 'Obese';
        categoryColor = 'text-red-600';
      }
      
      document.getElementById('bmi-category').textContent = category;
      document.getElementById('bmi-category').className = \`text-center mb-6 font-medium text-lg \${categoryColor}\`;
      
      // Show results
      document.getElementById('bmi-initial').classList.add('hidden');
      document.getElementById('bmi-result').classList.remove('hidden');
    });
  </script>
</body>
</html>`;
};

// Generate Meal Planner page
export const generateMealPlanner = (brandName, navbar, footer, customStyles, googleTag) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meal Planner | ${brandName}</title>
  <meta name="description" content="Create a personalized meal plan based on your dietary preferences, calorie needs, and health goals.">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
  
  <!-- Google tag for conversion tracking -->
  ${googleTag || ''}
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