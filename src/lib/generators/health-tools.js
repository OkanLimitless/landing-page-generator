// Health tools generator functions for the landing page

// Generate BMI Calculator page
export const generateBMICalculator = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
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
  <title>BMI Calculator | ${brandName}</title>
  <meta name="description" content="Use our free BMI Calculator to find out your Body Mass Index and determine if you're at a healthy weight.">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  ${styles}
  
  <!-- Google tag for conversion tracking -->
  ${googleTag}
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
export const generateTopTenWeightLossMeds = (brandName, navbar, footer, customStyles = '', googleTag = '') => {
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
      ${halfStar ? '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-path="inset(0 50% 0 0)" stroke-width="1"></path><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="none" stroke="currentColor" stroke-width="1" clip-path="inset(0 0 0 50%)"></path></svg>' : ''}
      ${'<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>'.repeat(emptyStars)}
    `;
  };
  
  // Create HTML for the page
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
      body {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      .med-card {
        transition: transform 0.2s ease-in-out;
      }
      .med-card:hover {
        transform: translateY(-5px);
      }
      .rating-stars {
        display: flex;
      }
      .get-offer-btn {
        transition: all 0.2s ease;
      }
      .get-offer-btn:hover {
        transform: scale(1.03);
      }
    </style>
    
    <!-- Google tag for conversion tracking -->
    ${googleTag || ''}
  </head>
  <body class="font-sans bg-gray-50 text-gray-800">
    ${navbar}
    
    <!-- Header section -->
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 py-8 md:py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Top 10 Weight Loss Medications</h1>
            <p class="text-white text-lg mb-6">Medically reviewed and ranked by our team of experts</p>
            <div class="bg-white bg-opacity-20 rounded-lg p-3 inline-block text-white">
              <span class="font-medium">Last Updated:</span> ${new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
            </div>
          </div>
          <div class="md:w-1/2">
            <img src="https://placehold.co/600x400/4A90E2/FFFFFF/png?text=Weight+Loss+Solutions" alt="Weight loss medication" class="w-full rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Top 10 medications list -->
    <div class="max-w-5xl mx-auto px-4 py-12">
      ${medications.map(med => `
        <div class="mb-8 border rounded-lg overflow-hidden shadow-md med-card">
          <div class="bg-blue-100 p-4">
            <div class="flex items-start">
              <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl mr-4 flex-shrink-0">${med.id}</div>
              <div>
                <h2 class="text-xl font-bold">${med.name}</h2>
                <p class="text-gray-600">${med.subtitle}</p>
              </div>
              <div class="ml-auto flex items-center">
                <div class="hidden md:flex rating-stars mr-2">
                  ${generateStars(med.rating)}
                </div>
                <div class="text-right">
                  <div class="font-bold text-lg">${med.rating}/5</div>
                  <span class="text-sm text-gray-500">(${med.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5 bg-white">
            <ul class="mb-5 space-y-3">
              ${med.benefits.map(benefit => `
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>${benefit}</span>
                </li>
              `).join('')}
            </ul>
            <button class="get-offer-btn bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium w-full text-center shadow-sm">Get Offer</button>
          </div>
        </div>
      `).join('')}
    </div>
    
    <!-- FAQ Section -->
    <div class="max-w-5xl mx-auto px-4 py-8 mb-12">
      <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <!-- FAQ items -->
      <div class="space-y-8">
        <div class="border-b pb-6">
          <h3 class="text-xl font-semibold mb-3">How do weight loss medications work?</h3>
          <p class="text-gray-700">Weight loss medications work through various mechanisms depending on the specific drug. GLP-1 receptor agonists like Saxenda and Wegovy reduce appetite by mimicking hormones that target areas of the brain involved in appetite regulation. Other medications may work by preventing fat absorption, increasing metabolism, or reducing cravings. The most effective modern weight loss medications like Mounjaro and Zepbound work by targeting multiple hormone pathways simultaneously.</p>
        </div>
        
        <div class="border-b pb-6">
          <h3 class="text-xl font-semibold mb-3">Are weight loss medications safe?</h3>
          <p class="text-gray-700">When prescribed by a doctor and taken as directed, weight loss medications can be safe for most people. However, all medications carry potential side effects and risks. Common side effects may include nausea, constipation, headaches, and insomnia. Some weight loss medications may not be suitable for those with certain medical conditions such as heart disease, thyroid disorders, or pregnancy. Always consult with a healthcare provider for personalized medical advice.</p>
        </div>
        
        <div class="border-b pb-6">
          <h3 class="text-xl font-semibold mb-3">How much weight can I expect to lose?</h3>
          <p class="text-gray-700">Weight loss results vary significantly based on the medication, individual factors, and lifestyle changes. GLP-1 medications like Wegovy (semaglutide) can lead to an average weight loss of 15% of body weight over 68 weeks, while newer dual-agonist medications like Mounjaro (tirzepatide) may help some people lose up to 22.5% of their initial weight. Traditional medications like Qsymia typically produce more modest results of 5-10% weight loss. Individual results will vary, and medications work best when combined with diet and exercise.</p>
        </div>
        
        <div class="border-b pb-6">
          <h3 class="text-xl font-semibold mb-3">Will insurance cover weight loss medications?</h3>
          <p class="text-gray-700">Insurance coverage for weight loss medications varies widely based on your specific plan, the medication prescribed, and whether you meet certain medical criteria. Some plans may cover FDA-approved weight loss medications if you have obesity (BMI ≥30) or overweight (BMI ≥27) with at least one weight-related condition like high blood pressure or type 2 diabetes. Many newer medications like Mounjaro and Wegovy face coverage challenges, but manufacturers often offer savings cards for eligible patients. Check with your insurance provider for specific coverage details.</p>
        </div>
        
        <div class="border-b pb-6">
          <h3 class="text-xl font-semibold mb-3">Do I need to diet and exercise while taking these medications?</h3>
          <p class="text-gray-700">Yes. While weight loss medications can be effective tools, they work best when combined with healthy lifestyle changes including improved diet and regular physical activity. Most clinical studies showing significant weight loss results included participants following a reduced-calorie diet and exercise plan alongside medication. These lifestyle modifications not only enhance weight loss results but also improve overall health outcomes and may help maintain weight loss over time.</p>
        </div>
      </div>
    </div>
    
    <!-- Methodology Section -->
    <div class="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-lg mb-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Methodology</h2>
      <p class="text-gray-700 mb-8 text-center">Our rankings are based on our proprietary evaluation process, analyzing the following criteria:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">Efficacy</h3>
          <p class="text-gray-700">We consider the real-world results and clinical studies of each medication for safe and effective weight loss.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">Safety Profile</h3>
          <p class="text-gray-700">We evaluate the risk of side effects, contraindications, and long-term safety concerns for each medication.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">Ease of Use</h3>
          <p class="text-gray-700">We consider administration methods (pill vs. injection), frequency of dosing, and storage requirements.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">Cost & Accessibility</h3>
          <p class="text-gray-700">We analyze pricing, insurance coverage, availability, and patient assistance programs.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">User Experience</h3>
          <p class="text-gray-700">We incorporate user reviews and feedback regarding side effects, adherence, and overall satisfaction.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-lg mb-2">Medical Consensus</h3>
          <p class="text-gray-700">We consider recommendations from medical organizations and prescribing patterns among healthcare providers.</p>
        </div>
      </div>
    </div>
    
    ${footer}
  </body>
</html>`;
}; 