// GLP Health Landing Page Generator
// This file generates a weight loss/health landing page similar to the example shown

import fs from 'fs';
import path from 'path';
import { generateBMICalculator, generateMealPlanner, generateTopTenWeightLossMeds } from './health-tools.js';

// Blog post data - we'll use this to generate individual blog post pages
const blogPosts = {
  "dont-fall-for-fad-diets": {
    title: "Don't Fall for Fad Diets",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Get the real truth about what works for diets, and learn some healthy weight-loss strategies that actually work.",
    externalUrl: "https://www.webmd.com/diet/features/why-do-we-keep-falling-for-fad-diets",
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
    externalUrl: "https://www.healthline.com/nutrition/high-protein-low-carb-diet",
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
    externalUrl: "https://www.medicalnewstoday.com/articles/low-carb-high-protein-diet",
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
  },
  "mediterranean-diet-clinches-2025-gold": {
    title: "Mediterranean Diet Clinches 2025 Gold, Experts Urge Caution",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Despite its top ranking, health professionals recommend personalized dietary approaches for individual needs.",
    externalUrl: "https://www.usnews.com/wellness/food/articles/mediterranean-diet",
    content: `
      <h2>The Mediterranean Diet Takes the Spotlight</h2>
      <p>U.S. News & World Report's Mediterranean Diet highlights the Mediterranean diet's repeat position as the top diet of 2025 in U.S. News & World Report. The prestigious endorsement celebrates the diet's consistent popularity and evidence-based approach to nutrition and lifestyle.</p>
      
      <p>The Mediterranean pattern emphasizes the diet's acclaimed approach to healthy eating, focusing on fruits, vegetables, grains, olive oil, nuts, and seeds, making it more than just a temporary eating plan but a sustainable way of eating.</p>
      
      <h2>Why the Mediterranean Diet Stands Out</h2>
      <p>Since 2018, the Mediterranean diet has consistently won top honors for its balanced approach to nutrition and lifestyle. It encourages the consumption of healthy fats, particularly from olive oil, and draws 65% of calories from plant sources like fruits, vegetables, and whole grains.</p>
      
      <p>By limiting processed and red meat, especially fatty varieties like sausage, the diet helps reduce the risk of heart disease. Regular physical activity is also a key component, promoting overall well-being and longevity.</p>
      
      <h2>A New Rating System for Diets</h2>
      <p>U.S. News & World Report introduced a fresh approach to their 2025 diet rankings by adopting a 5-star scale based on popular consumer rating platforms. This change allows individuals to better personalize their dietary choices based on their health priorities and goals.</p>
      
      <p>The Mediterranean, DASH, and flexitarian diets each scored four stars, making them highly recommended for both health benefits and ease of following. This new rating system provides a more nuanced view of diet effectiveness, helping people make informed decisions.</p>
      
      <h2>Comparing Top Diets: DASH and Flexitarian</h2>
      <p>The DASH diet, which stands for Dietary Approaches to Stop Hypertension, focuses on reducing salt intake to lower blood pressure. It shares similarities with the Mediterranean diet in preventing plant-based foods and limiting saturated fats and sugars.</p>
      
      <p>The other close runner-up, the flexitarian diet offers a more flexible approach by allowing occasional meat or poultry consumption within a primarily vegetarian framework. Both diets emphasize whole, unprocessed foods and can be adapted to various cultural and personal preferences.</p>
      
      <h2>Diets for Specific Health Conditions</h2>
      <p>The 2025 report also evaluated diets tailored to specific health issues such as arthritis, fatty liver disease, and diabetes-linked symptoms. The Mediterranean diet received high ratings for conditions like IBS, GERD, and cognitive health, showcasing its versatility in addressing various health concerns.</p>
      
      <p>These specialized diet provisions targeted approaches to help manage their health difficulties by making reasonable lifestyle changes that can reduce symptoms in certain individuals. These specialized diets provide targeted strategies to help manage their health conditions effectively.</p>
      
      <h2>Expert Opinions and Personalized Approaches</h2>
      <p>Despite the rankings, experts emphasize the importance of personalization in dietary choices. Dr. Stephanie Palmer from Mayo Clinic advocates the whole food, plant-based approach outlined in these top diets but stresses the need for some customization.</p>
      
      <p>Nutritionists agree that what works for one person might not work for another. Ideally, people should work with physicians and nutritionists to determine the best dietary approach for specific health conditions. This personalized guidance ensures that dietary choices are both effective and sustainable for long-term health benefits.</p>
      
      <h2>Conclusion</h2>
      <p>The Mediterranean diet's top ranking in the 2025 U.S. News & World Report underscores its enduring health and comprehensive approach to healthy living. With its emphasis on antioxidants, whole foods, and a balanced lifestyle, it serves as a model for sustainable eating habits.</p>
      
      <p>By adopting its principles, individuals can enhance their well-being and enjoy a healthier, more balanced way of life. However, experts still emphasize that personalization is key to successful dietary changes.</p>
    `
  },
  "omad-diet-exposed": {
    title: "OMAD Diet Exposed: The Shocking Truth Behind One Meal a Day",
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Public figures promote OMAD for quick weight loss, but research reveals potential risks and limited benefits.",
    externalUrl: "https://www.eatthis.com/omad-diet-one-meal-a-day-risks/",
    content: `
      <h2>Celebrity Endorsement of OMAD</h2>
      <p>British Prime Minister Rishi Sunak and iconic singer Bruce Springsteen have recently joined the ranks of public figures advocating for the one meal a day (OMAD) diet. This trend is capturing attention as more celebrities tout its weight loss benefits. Their endorsement has brought the OMAD diet into the spotlight, sparking curiosity and discussion among the general public.</p>
      
      <h2>Understanding the OMAD Diet</h2>
      <p>The OMAD diet is a form of intermittent fasting where individuals fast for 23 hours each day and consume all their daily calories in a single meal within a one-hour window. Advocates claim the simplicity of the diet makes it easy to follow, as there are no strict calorie restrictions or nutritional guidelines. Instead, the focus is on fitting all necessary nutrients into one balanced meal each day.</p>
      
      <h2>Promises and Potential Benefits</h2>
      <p>Proponents of the OMAD diet argue that it leads to rapid and sustained weight loss by creating a calorie deficit. They also suggest that the extended fasting period can trigger ketosis, a process where the body burns stored fat for energy instead of glucose. Additionally, some claim that the OMAD diet can promote better overall health and even delay the aging process.</p>
      
      <h2>Scientific Evidence and Research</h2>
      <p>Research on the OMAD diet is still limited, with most studies focusing on animals or small human trials. A notable study from 2022 involving 139 patients with obesity found that while intermittent fasting methods like OMAD can lead to weight loss, they are not significantly more effective than traditional calorie-restricted diets over the long term. This suggests that the benefits of OMAD may not surpass those of more established dieting approaches.</p>
      
      <h2>Challenges and Downsides</h2>
      <p>One major concern with the OMAD diet is the risk of nutritional deficiencies, as consuming all daily nutrients in a single meal can be challenging. Extended fasting periods can also lead to extreme hunger and cravings, potentially causing individuals to make unhealthy food choices. Moreover, the restrictive nature of the diet makes it difficult to maintain over time, leading to feelings of deprivation and social isolation.</p>
      
      <h2>Conclusion</h2>
      <p>While the OMAD diet has gained popularity through celebrity endorsements and promises of quick weight loss, it may not be the sustainable solution many seek. Long-term success in weight management typically involves gradual lifestyle changes and balanced eating habits. As research continues, it's important to approach the OMAD diet with caution and consider more established methods for achieving and maintaining a healthy weight.</p>
    `
  },
  "intermittent-fasting-approach": {
    title: "Intermittent Fasting: A Time-Restricted Approach to Weight Loss",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "New research reveals this eating pattern may offer benefits beyond weight control, including improved metabolic health and longevity.",
    externalUrl: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting-what-is-it-and-how-does-it-work",
    content: `
      <h2>Understanding Intermittent Fasting</h2>
      <p>Intermittent fasting has emerged as one of the most popular dietary approaches in recent years. Unlike traditional diets that focus on what to eat, intermittent fasting is all about when you eat. This approach alternates between periods of eating and fasting, creating a pattern that may help improve metabolic health and support weight loss efforts.</p>
      
      <h2>Common Intermittent Fasting Methods</h2>
      <p>Several intermittent fasting protocols have gained popularity, each with its own approach to timing meals:</p>
      
      <h3>16/8 Method (Time-Restricted Eating)</h3>
      <p>This most common approach involves fasting for 16 hours and eating during an 8-hour window each day. Many people achieve this by skipping breakfast and eating from noon to 8 PM. Research shows this method may help reduce body weight by 3-8% over 3-24 weeks and decrease body fat percentage significantly.</p>
      
      <h3>5:2 Diet (Modified Alternate-Day Fasting)</h3>
      <p>With this protocol, individuals eat normally for five days of the week while limiting calories to 500-600 on two non-consecutive days. Studies demonstrate this approach can be equally effective for weight loss as continuous calorie restriction while potentially offering additional metabolic benefits.</p>
      
      <h3>Eat-Stop-Eat</h3>
      <p>This method involves a 24-hour fast once or twice weekly. For example, not eating from dinner one day until dinner the next day. This approach appears effective for weight management when combined with regular physical activity and healthy eating during non-fasting periods.</p>
      
      <h2>The Science Behind Intermittent Fasting</h2>
      <p>Dr. Mark Mattson, a neuroscientist at Johns Hopkins Medicine with 25 years of research on intermittent fasting, explains that the practice triggers several beneficial metabolic changes:</p>
      
      <h3>Metabolic Switching</h3>
      <p>After several hours without food, the body depletes its glucose stores and begins burning fat for energy—a process called metabolic switching. This shift appears to activate pathways that enhance cellular stress resistance, repair, and removal of damaged molecules.</p>
      
      <h3>Hormone Regulation</h3>
      <p>Intermittent fasting may improve insulin sensitivity and increase levels of human growth hormone (HGH), which facilitates fat burning and muscle gain. Research indicates these hormonal changes can increase metabolic rate by 3.6-14% in the short term.</p>
      
      <h2>Beyond Weight Loss: Additional Health Benefits</h2>
      <p>Studies published in prestigious journals like the New England Journal of Medicine suggest intermittent fasting may offer wide-ranging health benefits:</p>
      
      <ul>
        <li><strong>Heart Health:</strong> Improvements in blood pressure, resting heart rate, cholesterol profiles, and triglycerides</li>
        <li><strong>Brain Function:</strong> Enhanced working memory, verbal memory, and cognitive function</li>
        <li><strong>Inflammation Reduction:</strong> Decreased markers of systemic inflammation</li>
        <li><strong>Cellular Repair:</strong> Activation of autophagy, the body's process for removing damaged cellular components</li>
        <li><strong>Type 2 Diabetes Prevention:</strong> Improved insulin sensitivity and blood sugar control</li>
      </ul>
      
      <h2>Is Intermittent Fasting Right for Everyone?</h2>
      <p>Despite its potential benefits, intermittent fasting isn't suitable for everyone. Those who should avoid this approach include:</p>
      
      <ul>
        <li>Children and adolescents under 18</li>
        <li>Pregnant or breastfeeding women</li>
        <li>People with type 1 diabetes who take insulin</li>
        <li>Individuals with a history of eating disorders</li>
        <li>Those with certain medical conditions requiring consistent food intake</li>
      </ul>
      
      <p>For others who can safely practice intermittent fasting, Dr. Mattson notes that the adjustment period typically takes 2-4 weeks as the body adapts to the new eating pattern. After this transition, many people report feeling better and find the approach sustainable long-term.</p>
      
      <h2>Practical Implementation</h2>
      <p>For those interested in trying intermittent fasting, healthcare professionals suggest starting gradually. Begin with a 12-hour fasting window and gradually extend it to 16 hours. During eating periods, focus on nutrient-dense foods like fruits, vegetables, lean proteins, healthy fats, and complex carbohydrates.</p>
      
      <p>Staying hydrated during fasting periods is essential. Water, black coffee, and unsweetened tea are permitted and can help manage hunger sensations while providing minimal calories.</p>
      
      <h2>Conclusion</h2>
      <p>Intermittent fasting represents a promising approach to weight management and overall health promotion for many individuals. However, as with any dietary change, it's advisable to consult with healthcare providers before beginning, especially for those with pre-existing health conditions.</p>
      
      <p>While research continues to reveal the full extent of intermittent fasting's benefits, current evidence suggests it may offer a sustainable alternative to traditional dieting for those seeking to improve their metabolic health and manage their weight effectively.</p>
    `
  },
  "plant-based-diets-beyond-the-hype": {
    title: "Plant-Based Diets: Beyond the Hype",
    image: "https://images.unsplash.com/photo-1512621776951-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Explore the benefits of plant-based diets and debunk common myths about their limitations.",
    externalUrl: "https://www.harvardhealth.org/healthy-eating/plant-based-diets-beyond-the-hype",
    content: `
      <h2>The Rise of Plant-Based Diets</h2>
      <p>Plant-based diets have gained popularity in recent years, with many people adopting them for various reasons, including health, environmental, and ethical concerns. This dietary approach focuses on consuming a majority of foods derived from plants, such as fruits, vegetables, whole grains, legumes, and nuts, while limiting or eliminating animal products.</p>
      
      <h2>Benefits of Plant-Based Diets</h2>
      <p>Numerous studies have demonstrated the health benefits of plant-based diets, including:</p>
      
      <h3>Weight Loss and Management</h3>
      <p>Plant-based diets are often associated with weight loss due to their lower calorie content and higher fiber content compared to animal-based diets. This can lead to increased feelings of fullness and reduced calorie intake.</p>
      
      <h3>Heart Health</h3>
      <p>Plant-based diets have been shown to lower blood pressure, improve cholesterol levels, and reduce the risk of heart disease. This is likely due to the high consumption of fruits, vegetables, and whole grains, which are rich in fiber, vitamins, and minerals.</p>
      
      <h3>Diabetes Prevention and Management</h3>
      <p>Plant-based diets can help prevent and manage type 2 diabetes by improving insulin sensitivity, lowering blood sugar levels, and reducing the risk of complications.</p>
      
      <h3>Cancer Prevention</h3>
      <p>Studies suggest that plant-based diets may lower the risk of certain types of cancer, particularly colorectal cancer, due to their high fiber content and antioxidant properties.</p>
      
      <h3>Environmental Impact</h3>
      <p>Reducing meat consumption has a significant positive impact on the environment, as livestock farming is a major contributor to greenhouse gas emissions and water pollution.</p>
      
      <h2>Common Myths About Plant-Based Diets</h2>
      <p>Despite the numerous benefits, there are still misconceptions about plant-based diets. Let's debunk some of the most common myths:</p>
      
      <h3>Myth 1: Plant-Based Diets Lack Protein</h3>
      <p>Plant-based diets can provide adequate protein if properly planned. Sources of plant-based protein include legumes (beans, lentils), nuts and seeds, whole grains, and certain vegetables (such as soy products and leafy greens).</p>
      
      <h3>Myth 2: Plant-Based Diets Lack Calcium</h3>
      <p>Plant-based diets can provide sufficient calcium through sources such as leafy green vegetables, fortified plant-based milks, and calcium-rich nuts and seeds.</p>
      
      <h3>Myth 3: Plant-Based Diets Lack Vitamin B12</h3>
      <p>Vitamin B12 is primarily found in animal products, but fortified plant-based foods and supplements can provide adequate amounts for vegans and vegetarians.</p>
      
      <h3>Myth 4: Plant-Based Diets Are Difficult to Follow</h3>
      <p>With a bit of planning and preparation, plant-based diets can be easy to follow. There are numerous resources available online, including meal plans, recipes, and cooking guides.</p>
      
      <h2>Conclusion</h2>
      <p>Plant-based diets offer numerous health benefits, including weight loss, improved heart health, diabetes prevention, and cancer prevention. They also have a positive impact on the environment. While there are some misconceptions about plant-based diets, they can provide adequate protein, calcium, and vitamin B12 with proper planning.</p>
      
      <p>If you're considering a plant-based diet, it's important to consult with a healthcare professional to ensure it's appropriate for your individual needs and health goals.</p>
    `
  },
  "the-surprising-link-between-sleep-and-weight-management": {
    title: "The Surprising Link Between Sleep and Weight Management",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Discover how getting enough sleep can help you manage your weight more effectively.",
    externalUrl: "https://www.sleepfoundation.org/articles/sleep-and-weight-management",
    content: `
      <h2>The Connection Between Sleep and Weight Management</h2>
      <p>Sleep plays a crucial role in weight management, yet many people overlook its importance. Research has shown that inadequate sleep can lead to weight gain, while getting enough sleep can help with weight loss and maintenance.</p>
      
      <h2>How Sleep Affects Weight</h2>
      <p>Sleep affects weight through several mechanisms:</p>
      
      <h3>1. Regulation of Appetite Hormones</h3>
      <p>Lack of sleep can disrupt the balance of appetite-regulating hormones, leading to increased hunger and cravings for high-calorie foods. This can result in overeating and weight gain.</p>
      
      <h3>2. Disrupted Circadian Rhythms</h3>
      <p>Sleep deprivation can throw off your body's internal clock, or circadian rhythm, which can lead to disrupted eating patterns and increased calorie intake.</p>
      
      <h3>3. Reduced Physical Activity</h3>
      <p>Inadequate sleep can lead to decreased energy levels, making it harder to engage in physical activity, which is essential for weight management.</p>
      
      <h2>The Role of Sleep in Weight Loss</h2>
      <p>Getting enough sleep can support weight loss efforts in several ways:</p>
      
      <h3>1. Improved Appetite Control</h3>
      <p>Adequate sleep can help regulate appetite hormones, making it easier to control hunger and resist cravings.</p>
      
      <h3>2. Enhanced Metabolism</h3>
      <p>Sufficient sleep can boost metabolism, leading to increased calorie burning and fat oxidation.</p>
      
      <h3>3. Increased Energy for Exercise</h3>
      <p>Getting enough sleep can provide the energy needed for physical activity, which is crucial for weight management.</p>
      
      <h2>How Much Sleep Do You Need?</h2>
      <p>The amount of sleep needed for optimal health varies among individuals, but most experts recommend:</p>
      <ul>
        <li>Adults: 7-9 hours per night</li>
        <li>Children (ages 6-13): 9-11 hours per night</li>
        <li>Teenagers (ages 14-17): 8-10 hours per night</li>
      </ul>
      
      <h2>Tips for Better Sleep and Weight Management</h2>
      <ul>
        <li>Establish a regular sleep schedule</li>
        <li>Create a sleep-friendly environment</li>
        <li>Limit screen time before bed</li>
        <li>Practice relaxation techniques (e.g., meditation, yoga)</li>
        <li>Maintain a healthy diet</li>
        <li>Engage in regular physical activity</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The link between sleep and weight management is undeniable. Inadequate sleep can lead to weight gain, while getting enough sleep can support weight loss and maintenance. By prioritizing sleep, regulating appetite hormones, and engaging in regular physical activity, you can improve your overall health and weight management efforts.</p>
    `
  },
  "protein-timing-weight-loss": {
    title: "Protein Timing: Does When You Eat Matter for Weight Loss?",
    image: "https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "New study challenges conventional wisdom about protein consumption timing, revealing optimal windows for muscle growth and fat loss.",
    externalUrl: "https://www.health.harvard.edu/staying-healthy/protein-at-every-meal-may-help-preserve-muscle-strength-as-you-age",
    content: `
      <h2>The Importance of Protein Timing</h2>
      <p>Protein is an essential macronutrient that plays a crucial role in weight management and overall health. While the amount of protein you consume is important, when you eat it may also affect your weight loss efforts.</p>
      
      <h2>How Protein Affects Weight Loss</h2>
      <p>Protein has several benefits for weight loss:</p>
      
      <h3>1. Increased Satiety</h3>
      <p>Protein is more satiating than carbohydrates or fats, meaning it helps you feel fuller for longer, which can lead to reduced calorie intake.</p>
      
      <h3>2. Preservation of Lean Muscle Mass</h3>
      <p>During weight loss, it's essential to preserve lean muscle mass to maintain a healthy metabolism. Protein is crucial for muscle building and repair.</p>
      
      <h3>3. Thermic Effect of Food</h3>
      <p>Protein has a higher thermic effect of food (TEF) compared to carbohydrates or fats, meaning your body burns more calories digesting protein.</p>
      
      <h2>The Role of Protein Timing</h2>
      <p>Protein timing refers to when you consume protein in relation to your meals. Research has shown that the timing of protein intake can influence weight loss and muscle gain:</p>
      
      <h3>1. Post-Exercise</h3>
      <p>Consuming protein after exercise can enhance muscle protein synthesis and support muscle growth and repair.</p>
      
      <h3>2. Spread Throughout the Day</h3>
      <p>Distributing protein evenly throughout the day can help maintain muscle protein synthesis and support weight loss.</p>
      
      <h3>3. Larger Meals</h3>
      <p>Including protein in larger meals may be more beneficial for weight loss than smaller, more frequent meals.</p>
      
      <h2>Conclusion</h2>
      <p>Protein timing can play a role in weight loss and overall health, but the evidence is not conclusive. While consuming protein is essential for weight management, the timing of protein intake may not have a significant impact on weight loss outcomes. It's more important to focus on overall calorie intake, portion control, and regular physical activity.</p>
      
      <p>If you're interested in learning more about protein timing and its potential benefits, consult with a healthcare professional or registered dietitian.</p>
    `
  },
  "low-carb-heart-health-benefits": {
    title: "Low-Carb Diet's Surprising Boost: Heart Health Improves in Overweight Individuals",
    image: "https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "New research shows that high unsaturated fat, low-carb diets may reduce cardiovascular disease risk independently of weight loss.",
    externalUrl: "https://health.clevelandclinic.org/keto-diet-and-heart-disease",
    content: `
      <h2>Study Overview</h2>
      <p>Researchers have found that a low-carb diet high in unsaturated fats may improve cardiovascular health in overweight individuals. Published in the American Journal of Clinical Nutrition, the study focused on the effects of carbohydrate restriction on heart disease risk factors. By targeting both weight loss and heart health, the study offers new insights into effective dietary strategies for those struggling with obesity.</p>
      
      <h2>Participants and Methodology</h2>
      <p>The study involved 164 overweight and obese participants, mainly women aged between 18 and 65. Initially, all participants followed low-calorie diets that reduced their body weight by about 12%. After weight loss, they were randomly assigned to diets where 20%, 40%, or 60% of their calories came from carbohydrates, while protein intake remained constant at 20%. This controlled approach allowed researchers to isolate the effects of varying carb levels on health.</p>
      
      <h2>Diet Plans Implemented</h2>
      <p>Participants were provided with meals tailored to their assigned diet plans for five months, ensuring consistent adherence and stable body weights. The low-carb diets emphasized unsaturated fats, aiming to replace the calories from carbohydrates. By maintaining protein levels, the study focused on how fat intake, rather than protein, influenced cardiovascular health. This setup helped determine the specific benefits of reducing carbohydrate intake.</p>
      
      <h2>Key Findings</h2>
      <p>The study revealed that participants on the low-carb diets experienced higher total energy expenditure, burning approximately 200 more calories per day compared to those on high-carb diets. Importantly, there were no negative changes in LDL cholesterol levels, often referred to as 'bad' cholesterol. Additionally, the low-carb group saw a significant 15% reduction in lipoprotein(a), a marker linked to heart disease.</p>
      
      <h2>Health Implications</h2>
      <p>Beyond cholesterol, the low-carb diet also improved other health markers. Participants showed a decrease in triglyceride insulin resistance scores, lowering their risk for Type 2 diabetes and premature coronary heart disease. Adiponectin levels, a protein hormone involved in insulin sensitivity, increased, further supporting metabolic health. These changes suggest that a low-carb, high unsaturated fat diet can positively affect multiple aspects of heart health.</p>
      
      <h2>Conclusion and Recommendations</h2>
      <p>The study concludes that reducing carbohydrate intake can lower the risk of cardiovascular disease, independent of body weight. The findings are consistent with other studies showing benefits of low-carb diets on various cardiometabolic factors. Researchers recommend further large-scale trials to confirm these results. Based on the study's parameters, a Mediterranean-style low-carb diet rich in unsaturated fats is considered the best choice for improving heart health in overweight individuals.</p>
    `
  },
  "anti-inflammatory-foods-weight-loss": {
    title: "Anti-Inflammatory Foods That Aid Weight Loss",
    image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Discover how chronic inflammation may be sabotaging your weight loss goals and which foods can help fight inflammation while supporting healthy weight management.",
    externalUrl: "https://www.webmd.com/diet/anti-inflammatory-diet-road-to-good-health",
    content: `
      <h2>The Inflammation-Weight Connection</h2>
      <p>Emerging research has established a compelling connection between chronic inflammation and difficulty losing weight. While acute inflammation is a normal immune response that helps the body heal, chronic low-grade inflammation has been identified as a significant factor in obesity and metabolic dysfunction. This persistent inflammatory state can disrupt hormonal signaling, alter metabolism, and contribute to weight gain or plateau.</p>
      
      <p>According to Dr. Barry Sears, biochemist and creator of the Zone Diet, "Obesity is not simply a problem of excess calories, but rather a problem of increased inflammation. This creates a vicious cycle where inflammation promotes weight gain, and excess fat tissue produces more inflammatory compounds."</p>
      
      <h2>How Inflammation Affects Weight</h2>
      <p>Chronic inflammation impacts weight regulation through several mechanisms:</p>
      
      <h3>Insulin Resistance</h3>
      <p>Inflammatory cytokines like TNF-alpha and IL-6 can impair insulin signaling, leading to insulin resistance. When cells become resistant to insulin, glucose remains in the bloodstream rather than being used for energy, prompting the body to store more fat and making weight loss more difficult.</p>
      
      <h3>Leptin Resistance</h3>
      <p>Leptin, often called the "satiety hormone," signals to the brain that you're full. Inflammation can cause leptin resistance, where the brain no longer responds properly to leptin signals, leading to increased hunger and reduced metabolic rate—a double challenge for weight management.</p>
      
      <h3>Disrupted Gut Health</h3>
      <p>Inflammation can alter gut microbiome composition and compromise intestinal barrier function, contributing to what's commonly called "leaky gut." These changes can affect nutrient absorption, hormone regulation, and even cravings, all of which influence weight control.</p>
      
      <h2>Top Anti-Inflammatory Foods for Weight Loss</h2>
      <p>Fortunately, many foods have natural anti-inflammatory properties that can help combat chronic inflammation while supporting weight loss goals:</p>
      
      <h3>Fatty Fish</h3>
      <p>Salmon, mackerel, sardines, and other fatty fish are rich in omega-3 fatty acids EPA and DHA, which have potent anti-inflammatory effects. Research published in the British Journal of Nutrition found that omega-3 supplementation reduced inflammatory markers and improved body composition when combined with moderate exercise.</p>
      
      <h3>Berries</h3>
      <p>Blueberries, strawberries, raspberries, and blackberries contain anthocyanins and other polyphenols that combat inflammation. A study in the Journal of Nutrition showed that blueberry consumption reduced inflammatory markers and insulin resistance in adults with metabolic syndrome.</p>
      
      <h3>Leafy Greens</h3>
      <p>Spinach, kale, collards, and other leafy greens are rich in vitamins, minerals, and antioxidants like vitamin K and folate. These nutrients help neutralize free radicals and reduce inflammation. Their high fiber content also promotes satiety and supports healthy digestion.</p>
      
      <h3>Nuts and Seeds</h3>
      <p>Walnuts, almonds, flaxseeds, and chia seeds provide healthy fats, protein, and fiber—a combination that helps regulate appetite and metabolism. Walnuts specifically contain alpha-linolenic acid (ALA), an omega-3 fatty acid with anti-inflammatory properties.</p>
      
      <h3>Turmeric</h3>
      <p>This bright yellow spice contains curcumin, a compound with powerful anti-inflammatory effects. Research from Tufts University found that curcumin may suppress fat tissue growth and increase fat-burning through its anti-inflammatory mechanisms. For better absorption, consume turmeric with black pepper, which contains piperine that enhances curcumin bioavailability.</p>
      
      <h3>Extra Virgin Olive Oil</h3>
      <p>The monounsaturated fats in olive oil have been shown to reduce inflammation, and its oleocanthal compound has effects similar to ibuprofen. Studies from the Predimed trial indicate that Mediterranean diets rich in olive oil support weight management and reduce inflammatory markers.</p>
      
      <h3>Fermented Foods</h3>
      <p>Yogurt, kefir, sauerkraut, kimchi, and other fermented foods contain probiotics that support gut health. A healthy gut microbiome has been linked to reduced inflammation and improved weight management. Research in the British Journal of Nutrition found that certain probiotic strains can reduce abdominal fat and weight gain.</p>
      
      <h2>Implementing an Anti-Inflammatory Diet</h2>
      <p>To maximize the benefits of anti-inflammatory foods for weight loss, nutritionists recommend the following strategies:</p>
      
      <h3>Focus on Whole Foods</h3>
      <p>Build your diet around minimally processed foods in their natural state. Whole foods generally contain more anti-inflammatory compounds and fewer pro-inflammatory ingredients than processed alternatives.</p>
      
      <h3>Balance Macronutrients</h3>
      <p>Include quality protein, healthy fats, and complex carbohydrates at each meal. This balance helps stabilize blood sugar and insulin levels, which is crucial for reducing inflammation and supporting weight management.</p>
      
      <h3>Create Colorful Plates</h3>
      <p>Different colored fruits and vegetables contain different phytonutrients with anti-inflammatory properties. Aim for at least 5-7 servings daily and include a rainbow of colors to ensure you're getting a wide range of beneficial compounds.</p>
      
      <h3>Minimize Pro-Inflammatory Foods</h3>
      <p>Reduce or eliminate foods known to promote inflammation, including:</p>
      <ul>
        <li>Refined sugars and carbohydrates</li>
        <li>Processed meats and fried foods</li>
        <li>Trans fats and excessive omega-6 fats</li>
        <li>Artificial additives and preservatives</li>
        <li>Excessive alcohol</li>
      </ul>
      
      <h2>Beyond Diet: Lifestyle Factors</h2>
      <p>While anti-inflammatory foods form the foundation of an inflammation-fighting approach to weight management, several lifestyle factors also play crucial roles:</p>
      
      <h3>Regular Physical Activity</h3>
      <p>Moderate exercise reduces inflammatory markers while supporting weight loss. However, excessive high-intensity exercise can temporarily increase inflammation, so balance is key.</p>
      
      <h3>Adequate Sleep</h3>
      <p>Research shows that sleep deprivation increases inflammatory markers and disrupts hunger hormones. Aim for 7-9 hours of quality sleep nightly.</p>
      
      <h3>Stress Management</h3>
      <p>Chronic stress triggers inflammation through elevated cortisol levels. Practices like meditation, yoga, and deep breathing can help mitigate this response.</p>
      
      <h2>Conclusion</h2>
      <p>Addressing chronic inflammation through diet represents a powerful approach to overcoming weight loss resistance and supporting overall health. By emphasizing anti-inflammatory foods while minimizing pro-inflammatory ones, you can help break the inflammation-weight gain cycle and create an internal environment conducive to reaching and maintaining a healthy weight.</p>
      
      <p>As with any dietary approach, consistency is key. Rather than viewing an anti-inflammatory diet as a temporary fix, consider it a sustainable lifestyle that supports not only weight management but also long-term health and disease prevention.</p>
    `
  },
  "gut-health-weight-management": {
    title: "The Role of Gut Health in Weight Management",
    image: "https://images.unsplash.com/photo-1583525693097-5ac6f6726659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Research from the NIH Human Microbiome Project reveals how your gut bacteria may control your weight more than your willpower does.",
    externalUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5082693/",
    content: `
      <h2>The Gut Microbiome: Your Internal Weight Management System</h2>
      <p>The human gut hosts trillions of microorganisms collectively known as the gut microbiome—a complex ecosystem that scientists now recognize as a key regulator of metabolism, appetite, and body weight. Research from the NIH Human Microbiome Project and other major studies has revealed that the composition of gut bacteria differs significantly between individuals with obesity and those of normal weight, suggesting these microscopic organisms play a far greater role in weight regulation than previously understood.</p>
      
      <p>Dr. Rob Knight, microbiome researcher and professor at UC San Diego, explains: "We're discovering that gut microbes influence virtually every aspect of our health, including our weight. The exciting implication is that by modifying our gut bacteria, we may be able to influence weight regulation without relying solely on willpower-based approaches."</p>
      
      <h2>How Gut Bacteria Influence Weight</h2>
      <p>Multiple mechanisms connect gut microbiota to weight regulation:</p>
      
      <h3>Energy Harvest</h3>
      <p>Different bacterial populations extract varying amounts of energy from food. Research published in Nature found that individuals with obesity tend to have gut bacteria that are more efficient at harvesting energy from food, potentially extracting an additional 150-200 calories daily from the same amount of food compared to lean individuals.</p>
      
      <h3>Appetite Regulation</h3>
      <p>Gut microbes influence the production of hormones that regulate hunger and satiety. For example, certain bacterial strains stimulate production of GLP-1 and PYY, hormones that signal fullness, while others impact ghrelin, the "hunger hormone." These signals directly affect how much we eat and when we feel satisfied.</p>
      
      <h3>Metabolic Rate</h3>
      <p>Studies show gut bacteria affect metabolic rate through various mechanisms, including the regulation of brown adipose tissue (which burns calories to generate heat) and modulation of bile acid metabolism, which influences fat absorption and energy expenditure.</p>
      
      <h3>Inflammation</h3>
      <p>An imbalanced gut microbiome can trigger systemic inflammation through a process involving increased intestinal permeability (leaky gut). This chronic low-grade inflammation affects insulin sensitivity and fat storage, promoting weight gain and interfering with weight loss efforts.</p>
      
      <h3>Blood Sugar Control</h3>
      <p>Gut bacteria influence glucose metabolism and insulin sensitivity. Research from the Weizmann Institute demonstrates that the same foods cause different blood sugar responses in different individuals, largely due to variations in gut microbiota, which in turn affects fat storage.</p>
      
      <h2>The Microbiome-Weight Research Landscape</h2>
      <p>Several groundbreaking studies highlight the connection between gut health and weight:</p>
      
      <h3>Fecal Transplant Studies</h3>
      <p>Perhaps the most compelling evidence comes from fecal transplant studies. When researchers transferred gut bacteria from obese mice to lean, germ-free mice, the recipients gained significant weight despite no change in their diet. Similarly, when bacteria from lean mice were transferred to obese mice, the obese mice lost weight. Human studies have shown similar results, with recipients of fecal transplants often adopting metabolic characteristics of their donors.</p>
      
      <h3>Antibiotic Research</h3>
      <p>Studies show that early-life antibiotic exposure, which disrupts gut bacteria development, is associated with increased risk of childhood obesity. Farm animals are regularly given antibiotics to promote weight gain—an unintended consequence now recognized in humans as well.</p>
      
      <h3>Twin Studies</h3>
      <p>Research examining identical twins with different body compositions found that the microbiome, rather than genetics, better predicted body fat percentage. When gut bacteria from these twins were transplanted into mice, the animals' weights changed to match their human donors, further confirming causality.</p>
      
      <h2>Optimizing Gut Health for Weight Management</h2>
      <p>Based on current research, several strategies can help cultivate a gut microbiome that supports healthy weight:</p>
      
      <h3>Dietary Fiber</h3>
      <p>Fiber serves as food (prebiotic) for beneficial gut bacteria. The American Gut Project found that individuals consuming 30+ different plant foods weekly had significantly more diverse gut microbiomes than those consuming fewer than 10. Aim for a variety of:</p>
      <ul>
        <li>Vegetables and fruits</li>
        <li>Whole grains</li>
        <li>Legumes</li>
        <li>Nuts and seeds</li>
      </ul>
      
      <h3>Fermented Foods</h3>
      <p>A Stanford study published in Cell showed that consuming fermented foods increased microbiome diversity and reduced inflammatory markers. Include regular servings of:</p>
      <ul>
        <li>Yogurt (unsweetened)</li>
        <li>Kefir</li>
        <li>Sauerkraut</li>
        <li>Kimchi</li>
        <li>Kombucha</li>
        <li>Tempeh</li>
      </ul>
      
      <h3>Polyphenol-Rich Foods</h3>
      <p>Polyphenols found in colorful plant foods act as prebiotics and help beneficial bacteria thrive. Rich sources include:</p>
      <ul>
        <li>Berries</li>
        <li>Extra virgin olive oil</li>
        <li>Green tea</li>
        <li>Dark chocolate (70%+ cacao)</li>
        <li>Red wine (in moderation)</li>
      </ul>
      
      <h3>Probiotic Supplements</h3>
      <p>While food sources are preferable, certain probiotic strains show promise for weight management. A meta-analysis in the International Journal of Food Sciences and Nutrition found that supplementation with Lactobacillus gasseri, Lactobacillus rhamnosus, and Bifidobacterium lactis was associated with reduced weight and fat mass.</p>
      
      <h3>Intermittent Fasting</h3>
      <p>Time-restricted eating appears to benefit the gut microbiome by allowing periods of "rest" for gut bacteria. Studies show this eating pattern increases microbial diversity and reduces intestinal permeability.</p>
      
      <h3>Reduce Ultra-Processed Foods</h3>
      <p>Emulsifiers, artificial sweeteners, and preservatives in highly processed foods have been shown to disrupt the gut microbiome and promote inflammation. A diet high in ultra-processed foods is associated with less diverse gut bacteria and higher obesity rates.</p>
      
      <h2>Beyond Diet: Lifestyle Factors for Gut Health</h2>
      <p>Several non-dietary factors also influence gut microbiome composition:</p>
      
      <h3>Regular Physical Activity</h3>
      <p>Exercise independently affects gut bacteria composition, increasing beneficial species like Akkermansia muciniphila, which is associated with improved metabolic health. Even moderate activity like walking appears beneficial for gut diversity.</p>
      
      <h3>Stress Management</h3>
      <p>Chronic stress negatively impacts gut bacteria through the gut-brain axis. Practices like meditation, yoga, and mindfulness can help maintain a healthy microbiome.</p>
      
      <h3>Sleep Quality</h3>
      <p>Poor sleep disrupts the gut microbiome, while the microbiome itself influences sleep quality, creating a bidirectional relationship. Prioritizing 7-9 hours of quality sleep supports both gut health and weight management.</p>
      
      <h2>Conclusion</h2>
      <p>The emerging science of the gut microbiome represents a paradigm shift in our understanding of weight management. Rather than viewing weight regulation solely through the lens of calories and willpower, this research suggests that cultivating a healthy gut ecosystem may be equally important.</p>
      
      <p>While this field is still evolving, the current evidence offers hope for new approaches to weight management that focus on nurturing beneficial gut bacteria rather than simply restricting calories. By adopting dietary and lifestyle practices that support gut health, individuals may be able to work with their internal biology rather than against it, potentially making weight management more sustainable and less dependent on constant vigilance and restriction.</p>
    `
  },
  "mindful-eating-weight-loss": {
    title: "Mindful Eating Techniques for Sustainable Weight Loss",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    excerpt: "Clinical psychologists reveal how this ancient practice can help break emotional eating patterns and reduce caloric intake without feelings of deprivation.",
    externalUrl: "https://www.apa.org/topics/mindful-eating",
    content: `
      <h2>Beyond Dieting: The Mindful Eating Revolution</h2>
      <p>In a world saturated with diet plans focused on what to eat, mindful eating shifts the focus to how we eat. This approach, rooted in Buddhist contemplative practices but validated by modern psychological research, addresses the fundamental behaviors and thought patterns that drive food decisions rather than simply restricting food choices.</p>
      
      <p>Dr. Jean Kristeller, professor emeritus of psychology at Indiana State University and founder of the Center for Mindful Eating, explains: "Mindful eating isn't another diet. It's a fundamentally different approach that develops awareness of physical hunger and satiety cues, emotional triggers for eating, and the development of a more balanced relationship with food."</p>
      
      <h2>The Psychology of Mindless Eating</h2>
      <p>Before understanding mindful eating, it's important to recognize the opposite: mindless eating patterns that contribute to weight gain and poor nutritional choices:</p>
      
      <h3>Environmental Triggers</h3>
      <p>Research by Dr. Brian Wansink, former director of the Cornell Food and Brand Lab, demonstrates how environmental cues dramatically influence food consumption. His studies found that people eat:</p>
      <ul>
        <li>41% more food when served in larger containers</li>
        <li>35% more when eating from larger plates</li>
        <li>71% more candy when the bowl is visible and proximate</li>
        <li>Significantly more when distracted by television or screens</li>
      </ul>
      
      <h3>Emotional Eating</h3>
      <p>Many people use food to manage emotions rather than physical hunger. Studies show approximately 40% of people increase food intake during periods of stress, often reaching for high-calorie "comfort foods" that provide temporary emotional relief but contribute to weight gain and diminished physical well-being.</p>
      
      <h3>Habitual Patterns</h3>
      <p>Neuroscience research reveals that approximately 45% of daily behaviors, including eating behaviors, are habitual—performed automatically with minimal conscious awareness. These autopilot eating patterns become deeply ingrained neural pathways that resist change through willpower alone.</p>
      
      <h2>Research-Backed Benefits of Mindful Eating</h2>
      <p>Clinical studies demonstrate multiple mechanisms through which mindful eating supports healthy weight management:</p>
      
      <h3>Reduced Binge Eating</h3>
      <p>A seminal study published in the Journal of Consulting and Clinical Psychology found that participants who completed a 10-week mindfulness-based eating awareness program experienced a 95% reduction in binge eating episodes. Follow-up studies show these benefits persist long-term, with many participants maintaining improvements for 3+ years.</p>
      
      <h3>Decreased Emotional Eating</h3>
      <p>Research from Ohio State University found that mindful eating practices reduced emotional eating scores by an average of 37% compared to control groups. Participants reported greater ability to recognize emotional triggers and respond with non-food coping strategies.</p>
      
      <h3>Improved Satiety Recognition</h3>
      <p>A study in the Journal of the Academy of Nutrition and Dietetics demonstrated that mindful eating training enhanced participants' ability to accurately recognize and respond to natural hunger and fullness signals. This improved interoceptive awareness was associated with reduced caloric intake and greater meal satisfaction.</p>
      
      <h3>Better Food Choices</h3>
      <p>Research published in the American Journal of Health Promotion found that individuals trained in mindful eating naturally gravitated toward healthier food choices without specific dietary rules. The increased awareness appeared to enhance sensitivity to the body's responses to different foods, leading to preferences for foods that provided sustained energy rather than short-term pleasure.</p>
      
      <h3>Weight Loss Maintenance</h3>
      <p>While many approaches achieve short-term weight loss, mindful eating shows promise for long-term maintenance. A 2017 review in Obesity Reviews found that mindfulness interventions were associated with greater weight loss maintenance at 18-month follow-up compared to conventional approaches.</p>
      
      <h2>Core Mindful Eating Practices</h2>
      <p>Based on clinical research, several key practices form the foundation of mindful eating:</p>
      
      <h3>Hunger-Fullness Awareness</h3>
      <p>Learning to recognize genuine physical hunger and respond to subtle satiety cues represents a cornerstone practice. The hunger-fullness scale (rating from 1-10) helps individuals identify optimal eating windows—beginning meals at approximately 3/10 (definitely hungry but not ravenous) and stopping at 7/10 (satisfied but not uncomfortably full).</p>
      
      <h3>Sensory-Based Eating</h3>
      <p>This practice involves fully engaging the senses while eating—noticing colors, textures, aromas, flavors, and sounds of food. Research shows this sensory awareness increases meal satisfaction while naturally slowing eating pace, which allows the brain's satiety signals (which typically take 20 minutes to register) to properly activate.</p>
      
      <h3>Emotional Awareness</h3>
      <p>Developing the capacity to recognize emotional triggers for eating and creating a pause between trigger and response enables better self-regulation. The HALT technique (asking if you're Hungry, Angry, Lonely, or Tired) helps identify whether physical hunger or emotional needs are driving eating urges.</p>
      
      <h3>Non-Judgment</h3>
      <p>Cultivating an attitude of curiosity and compassion rather than criticism toward eating behaviors helps break the perfectionism-rebellion cycle that undermines many traditional diets. Research shows self-compassion is associated with healthier eating behaviors and reduced weight cycling.</p>
      
      <h2>Implementing Mindful Eating</h2>
      <p>Clinical psychologists recommend several practical strategies for incorporating mindful eating into daily life:</p>
      
      <h3>Start with One Mindful Meal</h3>
      <p>Rather than attempting to transform all eating habits simultaneously, begin with one mindful meal or snack daily. Create optimal conditions by removing distractions, sitting at a table, using proper dishware, and allowing adequate time.</p>
      
      <h3>Conduct Food Experiments</h3>
      <p>Compare the experience of eating the same food mindfully versus mindlessly. Notice differences in satisfaction, quantity consumed, and post-meal physical sensations. These direct experiences build motivation more effectively than abstract knowledge.</p>
      
      <h3>Implement the 5-5-5 Practice</h3>
      <p>Before eating, take 5 deep breaths to activate the parasympathetic nervous system. Spend the first 5 minutes of the meal eating in complete silence, focusing exclusively on sensory experience. After eating, spend 5 minutes noticing physical sensations and satisfaction level before deciding whether to continue eating.</p>
      
      <h3>Create Environmental Supports</h3>
      <p>Modify your environment to promote mindful choices: use smaller plates, keep counters clear of visible food, pre-portion snacks, and establish a designated eating area free of screens and other distractions.</p>
      
      <h3>Practice Mindful Shopping and Cooking</h3>
      <p>Extend mindfulness to the entire food process—shopping with awareness of hunger status and intentions, preparing food with full attention to sensory aspects, and serving appropriate portions based on actual hunger levels rather than habit.</p>
      
      <h2>Overcoming Common Challenges</h2>
      <p>Several obstacles typically emerge when adopting mindful eating practices:</p>
      
      <h3>Time Constraints</h3>
      <p>For busy individuals, clinical psychologists recommend "mindful moments"—brief but fully present experiences with food, even if the entire meal can't be eaten mindfully. Starting with just three mindful bites at the beginning of each meal can establish the pattern.</p>
      
      <h3>Social Pressure</h3>
      <p>When eating with others who eat quickly or encourage overconsumption, mindful eaters can use inconspicuous practices like putting down utensils between bites, periodically checking in with hunger levels, and remembering personal intentions for health.</p>
      
      <h3>Deeply Ingrained Habits</h3>
      <p>Habit research indicates that establishing new neural pathways requires approximately 66 days of consistent practice, with a range of 18-254 days depending on individual differences and habit complexity. Persistence and self-compassion during this transition period are essential.</p>
      
      <h2>Conclusion</h2>
      <p>While no single approach works for everyone, mindful eating represents a scientifically validated alternative to traditional dieting that addresses the psychological roots of eating behavior rather than merely imposing rules and restrictions. By cultivating awareness of physical hunger, learning to distinguish between emotional and physical needs, and developing a non-judgmental relationship with food, individuals can establish sustainable eating patterns that support both physical health and psychological well-being.</p>
      
      <p>As Dr. Kristeller notes, "The goal of mindful eating isn't perfect eating, but rather a compassionate and aware relationship with food that honors both physical needs and the pleasure of eating." This balanced approach offers a promising path for those seeking freedom from the cycle of restrictive dieting while supporting healthy weight management and overall wellness.</p>
    `
  }
  // Additional blog posts can be added here
};

// Helper function to generate a blog post page
const generateBlogPost = (post, brandName, primaryColor) => {
  // Get the slug from the blog post object keys
  const slug = Object.keys(blogPosts).find(key => blogPosts[key].title === post.title);
  
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

    .read-more-link {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      padding: 1rem;
      border-left: 4px solid #818cf8;
      background-color: #f9fafb;
    }

    .read-more-link img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    .read-more-link a {
      color: #4f46e5;
      font-weight: 600;
      text-decoration: none;
    }

    .read-more-link a:hover {
      text-decoration: underline;
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

        <!-- External Article Link -->
        <div class="read-more-link">
          <img src="https://img.icons8.com/material-outlined/24/4f46e5/external-link.png" alt="External link icon">
          <a href="${post.externalUrl}" target="_blank" rel="noopener noreferrer">
            Read the full article
          </a>
        </div>
      </article>
      
      <!-- Related Articles -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${Object.entries(blogPosts)
            .filter(([blogSlug]) => blogSlug !== slug)
            .slice(0, 3)
            .map(([blogSlug, relatedPost]) => `
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <a href="${blogSlug}.html">
                  <img src="${relatedPost.image}" alt="${relatedPost.title}" class="w-full h-48 object-cover">
                </a>
                <div class="p-4">
                  <a href="${blogSlug}.html" class="block text-lg font-bold text-gray-800 hover:text-indigo-600 mb-2">
                    ${relatedPost.title}
                  </a>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-3">
                    ${relatedPost.excerpt}
                  </p>
                  <a href="${blogSlug}.html" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
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

  <!-- Footer -->
  <footer class="bg-indigo-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-8 md:mb-0">
          <div class="relative h-8 w-32 mb-4">
            <h2 class="text-xl font-bold tracking-tight text-white">
              <span class="text-white">${brandName.split('-')[0]}</span>
              <span class="text-purple-300">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
            </h2>
          </div>
          <p class="text-gray-300 text-sm max-w-xs">
            Your trusted source for nutrition, diet, and health information to help you make better lifestyle choices.
          </p>
          <div class="mt-4 flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="index.html#articles" class="text-gray-300 hover:text-white text-sm transition-colors">Articles</a></li>
              <li><a href="index.html#diet-plans" class="text-gray-300 hover:text-white text-sm transition-colors">Diet Plans</a></li>
              <li><a href="index.html#recipes" class="text-gray-300 hover:text-white text-sm transition-colors">Recipes</a></li>
              <li><a href="index.html#about-us" class="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Nutrition Calculator</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Meal Planner</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="privacy.html" class="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="terms.html" class="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Contact</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white text-sm transition-colors flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-indigo-800 text-center text-sm text-gray-400">
        <p>© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
        <div class="mt-2 flex justify-center space-x-4">
          <a href="privacy.html" class="hover:text-purple-300 transition-colors">Privacy</a>
          <a href="terms.html" class="hover:text-purple-300 transition-colors">Terms</a>
          <a href="contact.html" class="hover:text-purple-300 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
};

export const generateGLPPage = (data) => {
  // Generate random styles for each generation
  const generateRandomColor = () => {
    const colors = [
      '#4a90e2', '#5c6bc0', '#7e57c2', '#ab47bc', 
      '#ec407a', '#ef5350', '#ff7043', '#ffca28',
      '#26a69a', '#66bb6a', '#9ccc65', '#d4e157',
      '#4f46e5', '#8b5cf6', '#4338ca', '#7e22ce',
      '#06b6d4', '#0891b2', '#059669', '#10b981'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Choose a random layout style (1-3)
  const layoutStyle = Math.floor(Math.random() * 3) + 1;
  
  // Generate random hero image URLs
  const heroImageOptions = [
    'https://images.unsplash.com/photo-1512621776951-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  ];
  
  // Generate random background image URLs
  const backgroundImageOptions = [
    'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];
  
  // Generate random CTA button text options
  const ctaButtonTextOptions = [
    'Get Started',
    'Take Action Now',
    'Learn More',
    'Discover Your Plan',
    'Start Your Journey',
    'See Diet Plans',
    'Begin Now'
  ];
  
  // Random color selection
  const primaryColor = data.primaryColor || generateRandomColor();
  const secondaryColor = generateRandomColor();
  
  const {
    brandName = 'GLP-1',
    heroTitle = 'Transform Your Health Journey',
    heroDescription = 'Discover science-backed nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.',
    heroImageUrl = heroImageOptions[Math.floor(Math.random() * heroImageOptions.length)],
    backgroundImageUrl = backgroundImageOptions[Math.floor(Math.random() * backgroundImageOptions.length)],
    ctaButtonText = ctaButtonTextOptions[Math.floor(Math.random() * ctaButtonTextOptions.length)],
    targetUrl = '#',
    gtagId = '',
    newsletterHeading = 'Get Nutrition and Diet Tips in Your Inbox',
    trackingScript = ''
  } = data;

  // Define custom styles for the page based on layout style
  let customStyles = '';
  
  // Different style variations based on the layout
  switch(layoutStyle) {
    case 1:
      // Modern gradient style
      customStyles = `
        <style>
          body {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          .hero-button {
            background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
          }
          .hero-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(79, 70, 229, 0.4);
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          @media (max-width: 768px) {
            .hero-content-mobile {
              text-align: center;
            }
            .hero-button-mobile {
              width: 100%;
              justify-content: center;
            }
          }
        </style>
      `;
      break;
    
    case 2:
      // Clean minimalist style
      customStyles = `
        <style>
          body {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          .hero-section {
            background-color: ${primaryColor}10;
          }
          .hero-button {
            background-color: ${primaryColor};
            color: white;
            transition: all 0.2s ease;
            box-shadow: none;
            border: 2px solid ${primaryColor};
          }
          .hero-button:hover {
            background-color: transparent;
            color: ${primaryColor};
          }
          .section-title {
            border-bottom: 2px solid ${primaryColor};
            display: inline-block;
            padding-bottom: 8px;
          }
          .card-hover {
            transition: all 0.2s ease;
            border: 1px solid transparent;
          }
          .card-hover:hover {
            border-color: ${primaryColor};
          }
          @media (max-width: 768px) {
            .hero-content-mobile {
              text-align: center;
            }
            .hero-button-mobile {
              width: 100%;
              justify-content: center;
            }
          }
        </style>
      `;
      break;
    
    case 3:
      // Bold modern style
      customStyles = `
        <style>
          body {
            font-family: 'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          .hero-button {
            background: ${primaryColor};
            transition: all 0.3s ease;
            box-shadow: 5px 5px 0px ${secondaryColor};
            border: none;
            border-radius: 0;
          }
          .hero-button:hover {
            transform: translate(2px, 2px);
            box-shadow: 3px 3px 0px ${secondaryColor};
          }
          .section-title {
            position: relative;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 4px;
            background-color: ${primaryColor};
          }
          .card-hover {
            transition: transform 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          @media (max-width: 768px) {
            .hero-content-mobile {
              text-align: center;
            }
            .hero-button-mobile {
              width: 100%;
              justify-content: center;
            }
          }
        </style>
      `;
      break;
  }
  
  // Define Google Tag Manager script if gtagId is provided
  const googleTag = gtagId ? `
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagId.split('/')[0]}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId.split('/')[0]}');
  </script>` : '';
  
  // Define conversion tracking script
  const conversionTracking = `
  <script>
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      if (typeof gtag !== 'undefined' && '${gtagId}') {
        gtag('event', 'conversion', {
          'send_to': '${gtagId}',
          'event_callback': callback
        });
        return false;
      } else {
        return true;
      }
    }
  </script>
  `;

  // Generate the navbar component
  const navbar = `
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
        <a href="index.html#nutrition" class="hover:text-purple-300 transition-colors py-2 px-1">Healthy Eating & Nutrition</a>
        <a href="index.html#calorie-counting" class="hover:text-purple-300 transition-colors py-2 px-1">Calorie Counting</a>
        <a href="index.html#best-worst" class="hover:text-purple-300 transition-colors py-2 px-1">Best & Worst Diets</a>
        <a href="about.html" class="hover:text-purple-300 transition-colors py-2 px-1">About Us</a>
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
  `;

  // Generate the hero section component with different layouts
  let heroSection = '';
  
  switch(layoutStyle) {
    case 1:
      // Standard hero layout with image on right
      heroSection = `
      <section class="relative">
        <!-- Background image with lower opacity -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          <div 
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('${backgroundImageUrl}');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              filter: brightness(0.4); /* Increased darkness for better text contrast */
            "
          ></div>
        </div>
        
        <div class="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
          <div class="flex flex-col-reverse md:flex-row items-center">
            <!-- Right side on mobile, left side on desktop - Healthy Food Bowl -->
            <div class="w-full md:w-1/2 p-4 mt-8 md:mt-0">
              <div class="max-w-sm mx-auto md:ml-0 md:mr-auto bg-white rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="${heroImageUrl}" 
                  alt="Healthy Bowl with Vegetables and Proteins" 
                  class="w-full h-auto"
                />
              </div>
            </div>
            
            <!-- Left side on mobile, right side on desktop - Text Content -->
            <div class="w-full md:w-1/2 text-white text-center md:text-left hero-content-mobile">
              <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                ${heroTitle}
              </h1>
              <p class="text-gray-100 mb-8 max-w-lg mx-auto md:mx-0 text-lg">
                ${heroDescription}
              </p>
              <a 
                href="top-ten-weight-loss-meds.html"
                onclick="gtag_report_conversion('top-ten-weight-loss-meds.html')"
                class="inline-flex items-center justify-center hero-button hero-button-mobile text-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-lg w-full sm:w-auto">
                ${ctaButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Category Nav -->
        <div class="bg-white shadow-md border-t border-gray-100 relative z-10">
          <div class="container mx-auto px-4">
            <div class="flex overflow-x-auto py-3 gap-6 text-sm text-gray-700">
              <a href="index.html#best-worst" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Weight Loss & Obesity
              </a>
              <a href="index.html#nutrition" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Fitness & Exercise
              </a>
              <a href="meal-planner.html" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                Food & Recipes
              </a>
              <a href="index.html#nutrition" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Nutrition Science
              </a>
              <a href="index.html#diet-plans" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Diet Plans & Programs
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
      
    case 2:
      // Centered hero layout with image on top
      heroSection = `
      <section class="relative hero-section">
        <div class="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
          <div class="flex flex-col items-center">
            <!-- Top image -->
            <div class="w-full max-w-md mb-8">
              <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="${heroImageUrl}" 
                  alt="Healthy Food" 
                  class="w-full h-auto"
                />
              </div>
            </div>
            
            <!-- Text Content centered -->
            <div class="w-full max-w-2xl text-center">
              <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                ${heroTitle}
              </h1>
              <p class="text-gray-700 mb-8 mx-auto text-lg max-w-xl">
                ${heroDescription}
              </p>
              <a 
                href="top-ten-weight-loss-meds.html"
                onclick="gtag_report_conversion('top-ten-weight-loss-meds.html')"
                class="inline-flex items-center justify-center hero-button text-white font-medium py-4 px-8 rounded-md transition-all duration-300 text-lg">
                ${ctaButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Category Nav -->
        <div class="bg-white shadow-md border-t border-gray-100 relative z-10">
          <div class="container mx-auto px-4">
            <div class="flex overflow-x-auto py-3 gap-6 text-sm text-gray-700 justify-center">
              <a href="index.html#best-worst" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                Weight Loss & Obesity
              </a>
              <a href="index.html#nutrition" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                Fitness & Exercise
              </a>
              <a href="meal-planner.html" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                Food & Recipes
              </a>
              <a href="index.html#nutrition" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                Nutrition Science
              </a>
              <a href="index.html#diet-plans" class="whitespace-nowrap flex items-center hover:text-indigo-600 transition-colors">
                Diet Plans
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
      
    case 3:
      // Full-width background image with overlaid content
      heroSection = `
      <section class="relative">
        <!-- Background image with lower opacity -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          <div 
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('${backgroundImageUrl}');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              filter: brightness(0.3);
            "
          ></div>
        </div>
        
        <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div class="md:max-w-3xl mx-auto text-center">
            <!-- Centered content with accent border -->
            <div class="p-8 rounded-lg border-l-4 border-r-4" style="border-color: ${primaryColor}; background-color: rgba(0,0,0,0.5);">
              <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                ${heroTitle}
              </h1>
              <p class="text-gray-200 mb-8 text-xl max-w-2xl mx-auto">
                ${heroDescription}
              </p>
              
              <!-- Image between text and button -->
              <div class="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-white">
                <img 
                  src="${heroImageUrl}" 
                  alt="Healthy Food" 
                  class="w-full h-full object-cover"
                />
              </div>
              
              <a 
                href="top-ten-weight-loss-meds.html"
                onclick="gtag_report_conversion('top-ten-weight-loss-meds.html')"
                class="inline-flex items-center justify-center hero-button text-white font-bold py-4 px-10 text-lg">
                ${ctaButtonText}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Category Nav -->
        <div class="bg-white shadow-md relative z-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 md:grid-cols-5 divide-x divide-gray-200">
              <a href="index.html#best-worst" class="py-4 text-center hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                Weight Loss
              </a>
              <a href="index.html#nutrition" class="py-4 text-center hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                Exercise
              </a>
              <a href="meal-planner.html" class="py-4 text-center hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                Recipes
              </a>
              <a href="index.html#nutrition" class="hidden md:block py-4 text-center hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                Nutrition
              </a>
              <a href="index.html#diet-plans" class="hidden md:block py-4 text-center hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                Diets
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
  }

  // Generate featured section - Popular Diet Plans
  let popularDietPlansSection = '';
  
  switch(layoutStyle) {
    case 1:
      // Standard grid layout
      popularDietPlansSection = `
        <section id="diet-plans" class="py-12 bg-gray-50">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Popular Diet Plans</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <!-- Diet Plan 1 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Don't Fall for Fad Diets</h3>
                  <p class="text-gray-600 mb-4">Discover why most fad diets fail in the long run and what science tells us about sustainable weight loss approaches.</p>
                  <a href="dont-fall-for-fad-diets.html" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 2 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">High-Protein, Low-Carb Diets for Weight Loss</h3>
                  <p class="text-gray-600 mb-4">A detailed look at how high-protein, low-carb diets work and whether they're right for your lifestyle.</p>
                  <a href="high-protein-low-carb-diets-for-weight-loss.html" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 3 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1550138667-b5b2ae84af9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Mediterranean Diet Clinches 2025 Gold</h3>
                  <p class="text-gray-600 mb-4">Experts urge caution despite the Mediterranean diet's recognition as the gold standard for heart health and weight management.</p>
                  <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 4 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Rapid Weight Loss: Is It Safe?</h3>
                  <p class="text-gray-600 mb-4">Medical professionals weigh in on the dangers of fast weight loss programs and offer safer alternatives.</p>
                  <a href="rapid-weight-loss-is-it-safe.html" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
      break;
      
    case 2:
      // Minimalist layout with border accents
      popularDietPlansSection = `
        <section id="diet-plans" class="py-16">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-2 section-title">Popular Diet Plans</h2>
            <p class="text-center text-gray-600 mb-12">Evidence-based approaches to sustainable weight management</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <!-- Diet Plan 1 -->
              <div class="flex flex-col md:flex-row overflow-hidden card-hover bg-white rounded">
                <div class="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="h-full w-full object-cover">
                </div>
                <div class="md:w-3/5 p-6">
                  <h3 class="text-xl font-semibold mb-2">Don't Fall for Fad Diets</h3>
                  <p class="text-gray-600 mb-4">Discover why most fad diets fail in the long run and what science tells us about sustainable weight loss.</p>
                  <a href="dont-fall-for-fad-diets.html" class="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors text-sm rounded">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 2 -->
              <div class="flex flex-col md:flex-row overflow-hidden card-hover bg-white rounded">
                <div class="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="h-full w-full object-cover">
                </div>
                <div class="md:w-3/5 p-6">
                  <h3 class="text-xl font-semibold mb-2">High-Protein, Low-Carb Diets</h3>
                  <p class="text-gray-600 mb-4">A detailed look at how high-protein, low-carb diets work and whether they're right for your lifestyle.</p>
                  <a href="high-protein-low-carb-diets-for-weight-loss.html" class="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors text-sm rounded">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 3 -->
              <div class="flex flex-col md:flex-row overflow-hidden card-hover bg-white rounded">
                <div class="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1550138667-b5b2ae84af9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="h-full w-full object-cover">
                </div>
                <div class="md:w-3/5 p-6">
                  <h3 class="text-xl font-semibold mb-2">Mediterranean Diet Clinches Gold</h3>
                  <p class="text-gray-600 mb-4">Experts urge caution despite the Mediterranean diet's recognition as a gold standard for health.</p>
                  <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors text-sm rounded">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 4 -->
              <div class="flex flex-col md:flex-row overflow-hidden card-hover bg-white rounded">
                <div class="md:w-2/5">
                  <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="h-full w-full object-cover">
                </div>
                <div class="md:w-3/5 p-6">
                  <h3 class="text-xl font-semibold mb-2">Rapid Weight Loss: Is It Safe?</h3>
                  <p class="text-gray-600 mb-4">Medical professionals weigh in on the dangers of fast weight loss programs and safer alternatives.</p>
                  <a href="rapid-weight-loss-is-it-safe.html" class="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors text-sm rounded">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
      break;
      
    case 3:
      // Bold modern layout with cards
      popularDietPlansSection = `
        <section id="diet-plans" class="py-16 bg-gray-100">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16 section-title">Popular Diet Plans</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <!-- Diet Plan 1 -->
              <div class="bg-white p-0 overflow-hidden card-hover rounded-lg">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="w-full h-56 object-cover">
                  <div class="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent w-full h-full opacity-50"></div>
                  <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="text-2xl font-bold">Don't Fall for Fad Diets</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-700 mb-6">Discover why most fad diets fail in the long run and what science tells us about sustainable weight loss approaches.</p>
                  <a href="dont-fall-for-fad-diets.html" class="inline-flex items-center font-semibold text-${primaryColor.replace('#', '')} hover:underline">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <!-- Diet Plan 2 -->
              <div class="bg-white p-0 overflow-hidden card-hover rounded-lg">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="w-full h-56 object-cover">
                  <div class="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent w-full h-full opacity-50"></div>
                  <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="text-2xl font-bold">High-Protein, Low-Carb Diets</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-700 mb-6">A detailed look at how high-protein, low-carb diets work and whether they're right for your lifestyle and goals.</p>
                  <a href="high-protein-low-carb-diets-for-weight-loss.html" class="inline-flex items-center font-semibold text-${primaryColor.replace('#', '')} hover:underline">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <!-- Diet Plan 3 -->
              <div class="bg-white p-0 overflow-hidden card-hover rounded-lg">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1550138667-b5b2ae84af9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="w-full h-56 object-cover">
                  <div class="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent w-full h-full opacity-50"></div>
                  <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="text-2xl font-bold">Mediterranean Diet Clinches Gold</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-700 mb-6">Experts urge caution despite the Mediterranean diet's recognition as the gold standard for heart health.</p>
                  <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-flex items-center font-semibold text-${primaryColor.replace('#', '')} hover:underline">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <!-- Diet Plan 4 -->
              <div class="bg-white p-0 overflow-hidden card-hover rounded-lg">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Diet Plan" class="w-full h-56 object-cover">
                  <div class="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent w-full h-full opacity-50"></div>
                  <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="text-2xl font-bold">Rapid Weight Loss: Is It Safe?</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-700 mb-6">Medical professionals weigh in on the dangers of fast weight loss programs and offer safer alternatives.</p>
                  <a href="rapid-weight-loss-is-it-safe.html" class="inline-flex items-center font-semibold text-${primaryColor.replace('#', '')} hover:underline">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
      break;
  }

  // Generate the newsletter section with different layouts
  let newsletterSection = '';
  
  switch(layoutStyle) {
    case 1:
      // Gradient background with image side-by-side
      newsletterSection = `
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
                  Stay informed about the latest diet trends, useful nutrition advice, and healthy recipes that can transform your health.
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
      break;
      
    case 2:
      // Rest of case 2 implementation
    case 3:
      // Rest of case 3 implementation
  }

  // Generate the footer with different layouts
  let footer = '';
  
  switch(layoutStyle) {
    case 1:
      // Standard footer with grid layout
      footer = `
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
                <li><a href="index.html" class="hover:text-purple-300 transition-colors">Home</a></li>
                <li><a href="index.html#diet-plans" class="hover:text-purple-300 transition-colors">Articles</a></li>
                <li><a href="index.html#diet-plans" class="hover:text-purple-300 transition-colors">Diet Plans</a></li>
                <li><a href="meal-planner.html" class="hover:text-purple-300 transition-colors">Recipes</a></li>
                <li><a href="about.html" class="hover:text-purple-300 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-white font-medium mb-4">Resources</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="bmi-calculator.html" class="hover:text-purple-300 transition-colors">BMI Calculator</a></li>
                <li><a href="meal-planner.html" class="hover:text-purple-300 transition-colors">Meal Planner</a></li>
                <li><a href="index.html#diet-plans" class="hover:text-purple-300 transition-colors">Blog</a></li>
                <li><a href="top-ten-weight-loss-meds.html" class="hover:text-purple-300 transition-colors">Weight Loss Options</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-white font-medium mb-4">Legal</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="terms.html" class="hover:text-purple-300 transition-colors">Terms of Use</a></li>
                <li><a href="privacy.html" class="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
                <li><a href="disclaimer.html" class="hover:text-purple-300 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-indigo-800 text-center text-sm text-gray-400">
            <p>© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
            <div class="mt-2 flex justify-center space-x-4">
              <a href="privacy.html" class="hover:text-purple-300 transition-colors">Privacy</a>
              <a href="terms.html" class="hover:text-purple-300 transition-colors">Terms</a>
              <a href="contact.html" class="hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      `;
      break;
      
    case 2:
      // Minimal clean footer with horizontal layout
      footer = `
      <footer class="bg-gray-900 text-gray-400">
        <div class="container mx-auto px-4 py-12">
          <div class="flex flex-col md:flex-row justify-between mb-8">
            <div class="mb-8 md:mb-0 md:w-1/3">
              <h2 class="text-xl font-bold mb-4 text-white">
                ${brandName}
              </h2>
              <p class="text-sm max-w-md">
                Trusted nutrition data and health information to help you make informed decisions about your diet and lifestyle.
              </p>
            </div>
            
            <div class="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                  <li><a href="index.html#diet-plans" class="hover:text-white transition-colors">Articles</a></li>
                  <li><a href="meal-planner.html" class="hover:text-white transition-colors">Recipes</a></li>
                  <li><a href="about.html" class="hover:text-white transition-colors">About</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-white font-medium mb-4 text-sm uppercase tracking-wider">Tools</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="bmi-calculator.html" class="hover:text-white transition-colors">BMI Calculator</a></li>
                  <li><a href="meal-planner.html" class="hover:text-white transition-colors">Meal Planner</a></li>
                  <li><a href="top-ten-weight-loss-meds.html" class="hover:text-white transition-colors">Weight Loss Guide</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-white font-medium mb-4 text-sm uppercase tracking-wider">Legal</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="terms.html" class="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="privacy.html" class="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="disclaimer.html" class="hover:text-white transition-colors">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
            <div class="mt-4 md:mt-0 flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      `;
      break;
      
    case 3:
      // Modern bold footer
      footer = `
      <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-4">
          <!-- Top section with logo and social -->
          <div class="py-10 border-b border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-2 mb-6 md:mb-0">
              <h2 class="text-2xl font-bold">
                ${brandName}
              </h2>
            </div>
            
            <div class="flex space-x-6">
              <a href="#" class="hover:text-${primaryColor.replace('#', '')} transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="hover:text-${primaryColor.replace('#', '')} transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" class="hover:text-${primaryColor.replace('#', '')} transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Middle section with links -->
          <div class="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4">About</h3>
              <ul class="space-y-3">
                <li><a href="index.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Home</a></li>
                <li><a href="about.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">About Us</a></li>
                <li><a href="index.html#diet-plans" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Blog</a></li>
                <li><a href="contact.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Articles</h3>
              <ul class="space-y-3">
                <li><a href="dont-fall-for-fad-diets.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Fad Diets</a></li>
                <li><a href="high-protein-low-carb-diets-for-weight-loss.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Low-Carb Diets</a></li>
                <li><a href="mediterranean-diet-clinches-2025-gold.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Mediterranean Diet</a></li>
                <li><a href="rapid-weight-loss-is-it-safe.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Rapid Weight Loss</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Tools</h3>
              <ul class="space-y-3">
                <li><a href="bmi-calculator.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">BMI Calculator</a></li>
                <li><a href="meal-planner.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Meal Planner</a></li>
                <li><a href="top-ten-weight-loss-meds.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Weight Loss Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Legal</h3>
              <ul class="space-y-3">
                <li><a href="terms.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Terms of Use</a></li>
                <li><a href="privacy.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Privacy Policy</a></li>
                <li><a href="disclaimer.html" class="hover:text-${primaryColor.replace('#', '')} transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <!-- Bottom section with copyright -->
          <div class="py-6 border-t border-gray-700 text-center text-sm">
            <p>© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
      `;
      break;
  }

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

  // Generate additional content sections
  const nutritionTipsSection = `
    <section id="nutrition" class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Healthy Eating & Nutrition</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Portion Control</h3>
            <p class="text-gray-600">Learn how proper portion sizing can help you maintain a healthy weight without sacrificing the foods you love.</p>
            <a href="faq.html" class="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">Learn more →</a>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Macronutrients 101</h3>
            <p class="text-gray-600">Understand the role of proteins, carbohydrates, and fats in your diet and how to balance them for optimal health.</p>
            <a href="faq.html" class="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">Learn more →</a>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Meal Timing</h3>
            <p class="text-gray-600">Discover whether when you eat matters as much as what you eat, and strategies for timing meals for energy and weight management.</p>
            <a href="faq.html" class="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const calorieCountingSection = `
    <section id="calorie-counting" class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Calorie Counting</h2>
        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="flex flex-col md:flex-row items-center mb-8">
            <div class="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img src="https://images.unsplash.com/photo-1508098682722-e99c643e7f3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Healthy meals" class="rounded-lg shadow-md">
            </div>
            <div class="md:w-2/3">
              <h3 class="text-2xl font-semibold mb-4">Do Calories Really Matter?</h3>
              <p class="text-gray-700 mb-4">While calories are not the only factor in weight management, they play a significant role. Understanding your caloric needs based on your age, gender, activity level, and goals is essential for effective weight management.</p>
              <p class="text-gray-700">Our calorie calculator tools and guides can help you determine your needs without obsessing over every number.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="text-lg font-semibold mb-2">BMI Calculator</h4>
              <p class="text-gray-700 mb-4">Calculate your Body Mass Index (BMI) to get a general idea of your weight status based on your height and weight.</p>
              <a href="bmi-calculator.html" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">Try BMI Calculator</a>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="text-lg font-semibold mb-2">Meal Planner</h4>
              <p class="text-gray-700 mb-4">Create personalized meal plans based on your caloric needs, dietary preferences, and weight goals.</p>
              <a href="meal-planner.html" class="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm">Try Meal Planner</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const bestWorstDietsSection = `
    <section id="best-worst" class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Best & Worst Diets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 class="text-xl font-semibold mb-4 text-green-700">Top-Rated Approaches</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-medium">Mediterranean Diet:</span>
                  <p class="text-gray-600 text-sm mt-1">Emphasizes plant-based foods, healthy fats, and moderate protein intake. Consistently ranked as one of the healthiest eating patterns.</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-medium">DASH Diet:</span>
                  <p class="text-gray-600 text-sm mt-1">Designed to help lower blood pressure and promote heart health through balanced nutrition and reduced sodium intake.</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-medium">Flexitarian Diet:</span>
                  <p class="text-gray-600 text-sm mt-1">A mostly vegetarian diet that allows occasional meat consumption, balancing the benefits of plant-based eating with flexibility.</p>
                </div>
              </li>
            </ul>
            <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-block mt-6 text-green-600 hover:text-green-800 font-medium">Learn more about top diets →</a>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 class="text-xl font-semibold mb-4 text-red-700">Approaches to Avoid</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-medium">Extreme Detox Diets:</span>
                  <p class="text-gray-600 text-sm mt-1">Often eliminate essential nutrients and can lead to metabolic slowdown, muscle loss, and nutritional deficiencies.</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-medium">Highly Restrictive Fad Diets:</span>
                  <p class="text-gray-600 text-sm mt-1">Promising quick results but typically unsustainable and potentially harmful to long-term metabolic health.</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-medium">Single Food Diets:</span>
                  <p class="text-gray-600 text-sm mt-1">Diets focused on a single food (like cabbage soup or grapefruit) lack nutritional diversity and are impossible to maintain.</p>
                </div>
              </li>
            </ul>
            <a href="dont-fall-for-fad-diets.html" class="inline-block mt-6 text-red-600 hover:text-red-800 font-medium">Learn more about diets to avoid →</a>
          </div>
        </div>
      </div>
    </section>
  `;

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
  ${customStyles}
  
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
      ${nutritionTipsSection}
      ${calorieCountingSection}
      ${bestWorstDietsSection}
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
    'bmi-calculator.html': generateBMICalculator(brandName, navbar, footer, customStyles, googleTag),
    'meal-planner.html': generateMealPlanner(brandName, navbar, footer, customStyles, googleTag),
    'top-ten-weight-loss-meds.html': generateTopTenWeightLossMeds(brandName, navbar, footer, customStyles, googleTag, targetUrl),
    'privacy.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy | ${brandName}</title>
  <meta name="description" content="Privacy Policy for ${brandName}">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div class="prose prose-slate max-w-none">
        <p class="mb-4">Last Updated: ${new Date().toLocaleDateString()}</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p class="mb-4">Welcome to ${brandName}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
        <p class="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Identity Data includes first name, last name, username or similar identifier.</li>
          <li>Contact Data includes email address and telephone numbers.</li>
          <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li>Usage Data includes information about how you use our website, products and services.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
        <p class="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-4">4. Data Security</h2>
        <p class="mb-4">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">5. Contact Us</h2>
        <p class="mb-4">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p class="mb-4">Email: privacy@${brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
      </div>
    </div>
  </main>
  
  ${footer}
</body>
</html>
    `,
    'terms.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terms of Use | ${brandName}</title>
  <meta name="description" content="Terms of Use for ${brandName}">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-6">Terms of Use</h1>
      
      <div class="prose prose-slate max-w-none">
        <p class="mb-4">Last Updated: ${new Date().toLocaleDateString()}</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p class="mb-4">By accessing and using the ${brandName} website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">2. Use License</h2>
        <p class="mb-4">Permission is granted to temporarily download one copy of the materials on ${brandName}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on ${brandName}'s website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-4">3. Disclaimer</h2>
        <p class="mb-4">The materials on ${brandName}'s website are provided "as is". ${brandName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">4. Limitations</h2>
        <p class="mb-4">In no event shall ${brandName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ${brandName}'s website, even if ${brandName} or a ${brandName} authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2 class="text-xl font-semibold mt-6 mb-4">5. Governing Law</h2>
        <p class="mb-4">These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        
        <h2 class="text-xl font-semibold mt-6 mb-4">6. Contact Us</h2>
        <p class="mb-4">If you have any questions about these Terms of Use, please contact us at:</p>
        <p class="mb-4">Email: terms@${brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
      </div>
    </div>
  </main>
  
  ${footer}
</body>
</html>
    `,
    'contact.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | ${brandName}</title>
  <meta name="description" content="Contact ${brandName} for any questions or inquiries">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div class="prose prose-slate max-w-none mb-8">
        <p>We'd love to hear from you! Please fill out the form below with your inquiry and we'll get back to you as soon as possible.</p>
      </div>
      
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" id="first-name" name="first-name" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" id="last-name" name="last-name" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
          </div>
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div>
          <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send Message
          </button>
        </div>
      </form>
      
      <div class="mt-12 border-t border-gray-200 pt-8">
        <h2 class="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-md font-medium text-gray-900">Email</h3>
              <p class="mt-1 text-sm text-gray-600">contact@${brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-md font-medium text-gray-900">Phone</h3>
              <p class="mt-1 text-sm text-gray-600">(800) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  ${footer}

  <script>
    // Simple form handling - prevent default form submission
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('form');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form and no data will be sent.');
      });
    });
  </script>
</body>
</html>
    `,
    'about.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | ${brandName}</title>
  <meta name="description" content="Learn more about ${brandName} and our mission to help people achieve their weight and wellness goals.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-6">About Us</h1>
      
      <div class="prose prose-slate max-w-none mb-8">
        <p>Welcome to ${brandName}, your trusted source for science-based nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.</p>
        <p>Our team of nutrition experts is dedicated to providing you with the latest research-backed information and practical advice to help you make informed decisions about your diet and lifestyle.</p>
        <p>Whether you're looking to lose weight, improve your health, or simply learn more about nutrition, we're here to help you every step of the way.</p>
      </div>
      
      <div class="bg-indigo-100 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Our Mission</h2>
        <p>Our mission is to empower individuals to make sustainable lifestyle changes that lead to long-term weight loss and improved health. We believe that a healthy diet and regular exercise are key components of a balanced lifestyle.</p>
      </div>
      
      <div class="bg-green-100 p-6 rounded-lg shadow-md mt-6">
        <h2 class="text-xl font-semibold mb-4">Our Approach</h2>
        <p>We take a personalized approach to nutrition, considering your individual needs, preferences, and goals. Our diet plans are designed to be sustainable and enjoyable, with a focus on balanced nutrition and portion control.</p>
      </div>
      
      <div class="bg-yellow-100 p-6 rounded-lg shadow-md mt-6">
        <h2 class="text-xl font-semibold mb-4">Our Expertise</h2>
        <p>Our team includes registered dietitians, nutritionists, and health professionals with extensive experience in weight management and nutrition. We stay up-to-date with the latest research and trends in the field.</p>
      </div>
      
      <div class="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
        <h2 class="text-xl font-semibold mb-4">Our Guarantee</h2>
        <p>We're confident in our ability to help you achieve your goals. That's why we offer a 100% satisfaction guarantee. If you're not happy with our service, we'll work with you to find a solution.</p>
      </div>
    </div>
  </main>
  
  ${footer}
</body>
</html>
    `,
    'faq.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ | ${brandName}</title>
  <meta name="description" content="Frequently asked questions about our nutrition advice, diet plans, and weight loss strategies.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom styles -->
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  ${navbar}
  
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div class="prose prose-slate max-w-none mb-8">
        <p>Here are some common questions we receive about our nutrition advice, diet plans, and weight loss strategies. If you have a question that isn't answered here, please don't hesitate to contact us.</p>
      </div>
      
      <div class="bg-indigo-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">What is a balanced diet?</h2>
        <p>A balanced diet includes a variety of foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats. The key is to eat a variety of foods in moderation and to listen to your body's hunger and fullness cues.</p>
      </div>
      
      <div class="bg-green-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">How much protein should I eat?</h2>
        <p>The amount of protein you need depends on your individual needs and goals. Generally, aim for 0.8-1.2 grams of protein per kilogram of body weight daily. For example, if you weigh 150 pounds, you would aim for 60-90 grams of protein per day.</p>
      </div>
      
      <div class="bg-yellow-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">What's the difference between low-carb and keto diets?</h2>
        <p>Both low-carb and keto diets involve significantly reducing carbohydrate intake. However, keto diets are much lower in carbohydrates, typically under 50 grams per day, and focus on increasing fat intake to enter a state of ketosis. Low-carb diets may allow for a higher carbohydrate intake, but still involve significantly reducing overall carbohydrate consumption.</p>
      </div>
      
      <div class="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">How long should I fast for intermittent fasting?</h2>
        <p>The length of your fasting periods depends on your personal preferences and goals. Some people choose to fast for 16 hours, while others fast for 18 hours. The key is to find a fasting schedule that works for you and that you can stick to long-term.</p>
      </div>
      
      <div class="bg-purple-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">How much exercise should I do?</h2>
        <p>The amount of exercise you should do depends on your individual fitness level and goals. Aim for at least 150 minutes of moderate-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days per week.</p>
      </div>
      
      <div class="bg-pink-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">How can I stay motivated to stick to a new diet?</h2>
        <p>Staying motivated can be challenging, but there are several strategies you can use to stay on track. Set realistic goals, find a diet that you enjoy, and consider working with a dietitian or nutritionist for personalized advice.</p>
      </div>
    </div>
  </main>
  
  ${footer}
</body>
</html>
    `,
    ...blogPostPages
  };
}; 