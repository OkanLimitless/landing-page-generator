// GLP Health Landing Page Generator
// This file generates a weight loss/health landing page similar to the example shown

import fs from 'fs';
import path from 'path';
import { generateBMICalculator, generateMealPlanner, generateTopTenWeightLossMeds, generateAboutPage, generateContactPage, generateFAQPage } from './health-tools.js';

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
      <p>Protein is highly satiating, meaning it helps you feel fuller for longer than carbohydrates or fats. This can naturally lead to reduced calorie intake.</p>
      
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

// Add a utility function for image error handling
const getImageWithFallback = (imageUrl, fallbackUrl, altText) => {
  if (!imageUrl || imageUrl.trim() === '') {
    return fallbackUrl;
  }
  return `${imageUrl}`;
};

// Generate trust signals section with medical disclaimers and badges
const generateTrustSignalsSection = (primaryColor) => {
  return `
  <section id="trust-signals" class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Trusted Health Information</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <!-- Trust Badge 1 -->
          <div class="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Science-Backed</h3>
            <p class="text-sm text-gray-600">All information reviewed by medical professionals</p>
          </div>
          
          <!-- Trust Badge 2 -->
          <div class="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Regularly Updated</h3>
            <p class="text-sm text-gray-600">Content regularly updated with latest research</p>
          </div>
          
          <!-- Trust Badge 3 -->
          <div class="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Trusted by 10,000+</h3>
            <p class="text-sm text-gray-600">Users rely on our guidance every month</p>
          </div>
          
          <!-- Trust Badge 4 -->
          <div class="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Evidence-Based</h3>
            <p class="text-sm text-gray-600">Recommendations based on clinical research</p>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div class="flex items-start">
            <div class="hidden md:block flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-${primaryColor.replace('#', '').substring(0, 6)}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Medical Disclaimer</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The information provided on this website is intended for general informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.
              </p>
              <p class="text-gray-700 text-sm mt-2 leading-relaxed">
                Weight management approaches should be personalized based on individual health status and goals. What works for one person may not be appropriate for another. Before starting any diet, exercise program, or weight loss regimen, please consult with a healthcare professional, particularly if you have any pre-existing health conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
};

// Helper function to generate a blog post page
const generateBlogPost = (post, brandName, primaryColor) => {
  // Define generateRandomColor function inside generateBlogPost to ensure it's available
  const generateRandomColor = () => {
    const colors = [
      '#4f46e5', '#8b5cf6', '#4338ca', '#7e22ce',
      '#06b6d4', '#0891b2', '#059669', '#10b981',
      '#f97316', '#ea580c', '#c2410c', '#a3e635',
      '#84cc16', '#65a30d', '#14b8a6', '#0d9488',
      '#0369a1', '#0284c7', '#0891b2', '#7c3aed',
      '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
      '#f43f5e', '#ef4444', '#3b82f6', '#6366f1'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const secondaryColor = generateRandomColor();
  
  // Generate a random layout style for the blog post
  const blogLayoutStyle = Math.floor(Math.random() * 3) + 1;
  
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
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
      .blog-content h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        color: ${primaryColor};
      }
      .blog-content h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 1.25rem;
        margin-bottom: 0.75rem;
      }
      .blog-content p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      .blog-content ul, .blog-content ol {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
      }
      .blog-content li {
        margin-bottom: 0.5rem;
      }
      .blog-content a {
        color: ${primaryColor};
        text-decoration: underline;
      }
      
      /* Image error handling */
      img {
        transition: opacity 0.3s ease;
      }
      
      img.error {
        opacity: 0.7;
      }
      
      .fallback-container {
        position: relative;
        overflow: hidden;
      }
      
      .fallback-message {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.6);
        color: white;
        text-align: center;
        padding: 1rem;
      }
      
      img.error + .fallback-message {
        display: flex;
      }
    </style>
  </head>
  <body class="bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a href="index.html" class="text-xl font-semibold text-gray-800">${brandName}</a>
          <div class="flex space-x-4">
            <a href="index.html" class="text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} px-3 py-2">Home</a>
            <a href="index.html#diet-plans" class="text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} px-3 py-2">Diet Plans</a>
            <a href="index.html#nutrition-tips" class="text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} px-3 py-2">Nutrition</a>
            <a href="bmi-calculator.html" class="text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} px-3 py-2">BMI Calculator</a>
            <a href="about.html" class="text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} px-3 py-2">About Us</a>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">${post.title}</h1>
        
        <div class="mb-6 text-gray-600 flex items-center">
          <span>${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span class="mx-2">•</span>
          <span>5 min read</span>
        </div>
        
        <div class="fallback-container mb-8">
          <img 
            src="${post.image}" 
            alt="${post.title}" 
            class="w-full h-[400px] object-cover rounded-lg shadow-md"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'; this.classList.add('error');"
          />
          <div class="fallback-message">
            <p>Image currently unavailable</p>
          </div>
        </div>
        
        <!-- Blog layout varies based on random style -->
        ${blogLayoutStyle === 1 ? `
        <div class="bg-white rounded-lg shadow-sm p-8 blog-content">
          ${post.content}
        </div>
        ` : blogLayoutStyle === 2 ? `
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-3">
            <div class="bg-white rounded-lg shadow-sm p-8 blog-content">
              ${post.content}
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 class="text-lg font-semibold mb-4">Related Articles</h3>
              <ul class="space-y-4">
                <li>
                  <a href="dont-fall-for-fad-diets.html" class="text-${primaryColor.replace('#', '').substring(0, 6)} hover:underline">Don't Fall for Fad Diets</a>
                </li>
                <li>
                  <a href="high-protein-low-carb-diets.html" class="text-${primaryColor.replace('#', '').substring(0, 6)} hover:underline">High-Protein, Low-Carb Diets</a>
                </li>
                <li>
                  <a href="mediterranean-diet-clinches-2023-gold.html" class="text-${primaryColor.replace('#', '').substring(0, 6)} hover:underline">Mediterranean Diet Clinches 2023 Gold</a>
                </li>
                <li>
                  <a href="rapid-weight-loss-is-it-safe.html" class="text-${primaryColor.replace('#', '').substring(0, 6)} hover:underline">Is Rapid Weight Loss Safe?</a>
                </li>
              </ul>
              
              <div class="mt-8 pt-4 border-t border-gray-200">
                <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                <p class="text-gray-600 text-sm mb-4">Get the latest nutrition and diet tips in your inbox.</p>
                <form class="space-y-3">
                  <input type="email" placeholder="Your email" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" required />
                  <button type="submit" class="w-full py-2 bg-${primaryColor.replace('#', '').substring(0, 6)} text-white rounded-md text-sm">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        ` : `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="bg-gradient-to-r from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} py-6 px-8 text-white mb-0">
            <p class="font-medium mb-0">${post.excerpt}</p>
          </div>
          <div class="p-8 blog-content">
            ${post.content}
          </div>
        </div>
        `}
        
        <div class="mt-12 flex justify-between items-center">
          <a href="index.html" class="inline-flex items-center text-${primaryColor.replace('#', '').substring(0, 6)} hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          <a href="top-ten-weight-loss-meds.html" class="bg-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Explore Weight Loss Options
          </a>
        </div>
      </div>
    </main>
    
    <footer class="bg-indigo-900 text-white py-8 mt-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-6 md:mb-0">
            <div class="text-xl font-bold mb-4">
              <span class="text-white">${brandName.split('-')[0]}</span>
              <span class="text-purple-300">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
            </div>
            <p class="text-gray-300 text-sm max-w-xs">
              Your trusted source for nutrition, diet, and health information to help you make better lifestyle choices.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="index.html" class="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="index.html#diet-plans" class="text-gray-300 hover:text-white text-sm transition-colors">Diet Plans</a></li>
                <li><a href="bmi-calculator.html" class="text-gray-300 hover:text-white text-sm transition-colors">BMI Calculator</a></li>
                <li><a href="meal-planner.html" class="text-gray-300 hover:text-white text-sm transition-colors">Meal Planner</a></li>
                <li><a href="about.html" class="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Support</h3>
              <ul class="space-y-2">
                <li><a href="privacy.html" class="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="terms.html" class="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-6 border-t border-indigo-800 text-center text-sm text-gray-400">
          <p>© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <script>
      // Image error handling
      document.addEventListener('DOMContentLoaded', function() {
        // Form handling
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

export const generateGLPPage = (data) => {
  // Generate random styles for each generation
  const generateRandomColor = () => {
    const colors = [
      // Original colors
      '#4a90e2', '#5c6bc0', '#7e57c2', '#ab47bc', 
      '#ec407a', '#ef5350', '#ff7043', '#ffca28',
      '#26a69a', '#66bb6a', '#9ccc65', '#d4e157',
      '#4f46e5', '#8b5cf6', '#4338ca', '#7e22ce',
      '#06b6d4', '#0891b2', '#059669', '#10b981',
      // Additional colors for more variety
      '#f97316', '#ea580c', '#c2410c', '#a3e635',
      '#84cc16', '#65a30d', '#14b8a6', '#0d9488',
      '#0369a1', '#0284c7', '#0891b2', '#7c3aed',
      '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
      '#f43f5e', '#ef4444', '#3b82f6', '#6366f1'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Choose a random layout style (1-3)
  const layoutStyle = Math.floor(Math.random() * 3) + 1;
  
  // Generate random hero image URLs - expanded collection
  const heroImageOptions = [
    // Original options
    'https://images.unsplash.com/photo-1512621776951-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    // Additional options
    'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1574056568753-3f9d276d4c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  ];
  
  // Generate random background image URLs - expanded collection
  const backgroundImageOptions = [
    // Original options
    'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    // Additional options
    'https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1557682250-f4ba47c7983e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];
  
  // Generate random font families
  const fontFamilyOptions = [
    "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Raleway', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    "'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  ];
  
  // Generate random CTA button text options
  const ctaButtonTextOptions = [
    'Get Started',
    'Take Action Now',
    'Learn More',
    'Discover Your Plan',
    'Start Your Journey',
    'See Diet Plans',
    'Begin Now',
    'View Weight Loss Options',
    'Explore Solutions',
    'Find Your Plan',
    'Get Results',
    'Take The First Step'
  ];
  
  // IMPORTANT: Always use random values for these visual elements, ignoring any user input
  // Random color selection (force random, not from data)
  const primaryColor = generateRandomColor();
  let secondaryColor = generateRandomColor();
  
  // Ensure sufficient contrast between primary and secondary colors
  while (isSimilarColor(primaryColor, secondaryColor)) {
    secondaryColor = generateRandomColor();
  }
  
  // Helper function to check if colors are too similar
  function isSimilarColor(color1, color2) {
    // Simple check - more sophisticated contrast checks could be implemented
    return color1.substring(1, 4) === color2.substring(1, 4);
  }
  
  // Randomly select hero image, background image, and button text with error handling
  const randomHeroImage = heroImageOptions[Math.floor(Math.random() * heroImageOptions.length)];
  const fallbackHeroImage = "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const randomBackgroundImage = backgroundImageOptions[Math.floor(Math.random() * backgroundImageOptions.length)];
  const fallbackBackgroundImage = "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
  const randomButtonText = ctaButtonTextOptions[Math.floor(Math.random() * ctaButtonTextOptions.length)];
  const randomFont = fontFamilyOptions[Math.floor(Math.random() * fontFamilyOptions.length)];
  
  // Extract other data from the input
  const {
    brandName = 'GLP-1',
    heroTitle = 'Transform Your Health Journey',
    heroDescription = 'Discover science-backed nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.',
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
            font-family: ${randomFont};
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
            font-family: ${randomFont};
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
            font-family: ${randomFont};
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
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold tracking-tight text-gray-900 inline-block">
              <a href="index.html" class="flex items-center hover:text-${primaryColor.replace('#', '').substring(0, 6)}">
                <span class="text-indigo-600">${brandName.split('-')[0]}</span>
                <span class="text-purple-600">${brandName.includes('-') ? '-' + brandName.split('-')[1] : ''}</span>
              </a>
            </h1>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <a href="index.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">Home</a>
          <a href="about.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">About</a>
          <a href="bmi-calculator.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">BMI Calculator</a>
          <a href="meal-planner.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">Meal Planner</a>
          <a href="faq.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">FAQ</a>
          <a href="contact.html" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)}">Contact</a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${primaryColor.replace('#', '').substring(0, 6)}" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="sm:hidden mobile-menu hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a href="index.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">Home</a>
        <a href="about.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">About</a>
        <a href="bmi-calculator.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">BMI Calculator</a>
        <a href="meal-planner.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">Meal Planner</a>
        <a href="faq.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">FAQ</a>
        <a href="contact.html" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50">Contact</a>
      </div>
    </div>
  </nav>
  
  <script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });
  </script>
  `;

  // Generate the hero section component with different layouts and image error handling
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
              background-image: url('${randomBackgroundImage}'), url('${fallbackBackgroundImage}');
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
                  src="${randomHeroImage}" 
                  alt="Healthy Bowl with Vegetables and Proteins" 
                  class="w-full h-auto"
                  onerror="this.onerror=null; this.src='${fallbackHeroImage}';"
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
                ${randomButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Category Nav -->
        <div class="bg-white shadow-md z-10 relative">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 md:grid-cols-5 divide-x divide-gray-200">
              <a href="index.html#best-worst" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Weight Loss
              </a>
              <a href="index.html#nutrition" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Exercise
              </a>
              <a href="meal-planner.html" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Recipes
              </a>
              <a href="index.html#nutrition" class="hidden md:block py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Nutrition
              </a>
              <a href="index.html#diet-plans" class="hidden md:block py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Diets
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
      
    case 2:
      // Centered hero layout
      heroSection = `
      <section class="relative py-24 md:py-32">
        <!-- Background color gradient -->
        <div class="absolute inset-0 z-0">
          <div class="w-full h-full" style="background: linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}10);"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              ${heroTitle}
            </h1>
            <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              ${heroDescription}
            </p>
            
            <!-- Hero image in the center -->
            <div class="relative max-w-md mx-auto mb-10 bg-white rounded-xl overflow-hidden shadow-xl">
              <img 
                src="${randomHeroImage}" 
                alt="Healthy Lifestyle" 
                class="w-full h-auto"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <a 
              href="top-ten-weight-loss-meds.html"
              onclick="gtag_report_conversion('top-ten-weight-loss-meds.html')"
              class="inline-flex hero-button py-4 px-8 text-lg font-medium rounded">
              ${randomButtonText}
            </a>
          </div>
        </div>
        
        <!-- Nav pills style -->
        <div class="mt-16 bg-white shadow-sm z-10 relative">
          <div class="container mx-auto px-4">
            <div class="flex justify-center space-x-2 py-4 overflow-x-auto">
              <a href="index.html#best-worst" class="px-4 py-2 rounded-full border border-gray-200 hover:border-${primaryColor.replace('#', '').substring(0, 6)} hover:text-${primaryColor.replace('#', '').substring(0, 6)} transition-colors">
                Weight Loss
              </a>
              <a href="index.html#nutrition" class="px-4 py-2 rounded-full border border-gray-200 hover:border-${primaryColor.replace('#', '').substring(0, 6)} hover:text-${primaryColor.replace('#', '').substring(0, 6)} transition-colors">
                Exercise
              </a>
              <a href="meal-planner.html" class="px-4 py-2 rounded-full border border-gray-200 hover:border-${primaryColor.replace('#', '').substring(0, 6)} hover:text-${primaryColor.replace('#', '').substring(0, 6)} transition-colors">
                Recipes
              </a>
              <a href="index.html#nutrition" class="px-4 py-2 rounded-full border border-gray-200 hover:border-${primaryColor.replace('#', '').substring(0, 6)} hover:text-${primaryColor.replace('#', '').substring(0, 6)} transition-colors hidden md:inline-block">
                Nutrition
              </a>
              <a href="index.html#diet-plans" class="px-4 py-2 rounded-full border border-gray-200 hover:border-${primaryColor.replace('#', '').substring(0, 6)} hover:text-${primaryColor.replace('#', '').substring(0, 6)} transition-colors hidden md:inline-block">
                Diets
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
              background-image: url('${randomBackgroundImage}'), url('${fallbackBackgroundImage}');
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
                  src="${randomHeroImage}" 
                  alt="Healthy Food" 
                  class="w-full h-full object-cover"
                  onerror="this.onerror=null; this.src='${fallbackHeroImage}';"
                />
              </div>
              
              <a 
                href="top-ten-weight-loss-meds.html"
                onclick="gtag_report_conversion('top-ten-weight-loss-meds.html')"
                class="inline-flex items-center justify-center hero-button text-white font-bold py-4 px-10 text-lg">
                ${randomButtonText}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Category Nav -->
        <div class="bg-white shadow-md relative z-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 md:grid-cols-5 divide-x divide-gray-200">
              <a href="index.html#best-worst" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Weight Loss
              </a>
              <a href="index.html#nutrition" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Exercise
              </a>
              <a href="meal-planner.html" class="py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Recipes
              </a>
              <a href="index.html#nutrition" class="hidden md:block py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
                Nutrition
              </a>
              <a href="index.html#diet-plans" class="hidden md:block py-4 text-center hover:text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-gray-50 transition-colors">
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
                  <a href="dont-fall-for-fad-diets.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} text-white px-4 py-2 rounded hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 2 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">High-Protein, Low-Carb Diets for Weight Loss</h3>
                  <p class="text-gray-600 mb-4">A detailed look at how high-protein, low-carb diets work and whether they're right for your lifestyle.</p>
                  <a href="high-protein-low-carb-diets-for-weight-loss.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} text-white px-4 py-2 rounded hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 3 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1550138667-b5b2ae84af9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Mediterranean Diet Clinches 2025 Gold</h3>
                  <p class="text-gray-600 mb-4">Experts urge caution despite the Mediterranean diet's recognition as the gold standard for heart health and weight management.</p>
                  <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} text-white px-4 py-2 rounded hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 transition-colors text-sm">Read More</a>
                </div>
              </div>
              
              <!-- Diet Plan 4 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Diet Plan" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Rapid Weight Loss: Is It Safe?</h3>
                  <p class="text-gray-600 mb-4">Medical professionals weigh in on the dangers of fast weight loss programs and offer safer alternatives.</p>
                  <a href="rapid-weight-loss-is-it-safe.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} text-white px-4 py-2 rounded hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 transition-colors text-sm">Read More</a>
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
                  <a href="dont-fall-for-fad-diets.html" class="inline-block px-4 py-2 border border-${primaryColor.replace('#', '').substring(0, 6)} text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)} hover:text-white transition-colors text-sm rounded">Read More</a>
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
                  <a href="high-protein-low-carb-diets-for-weight-loss.html" class="inline-block px-4 py-2 border border-${primaryColor.replace('#', '').substring(0, 6)} text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)} hover:text-white transition-colors text-sm rounded">Read More</a>
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
                  <p class="text-gray-600 mb-4">Experts urge caution despite the Mediterranean diet's recognition as a gold standard for heart health.</p>
                  <a href="mediterranean-diet-clinches-2025-gold.html" class="inline-block px-4 py-2 border border-${primaryColor.replace('#', '').substring(0, 6)} text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)} hover:text-white transition-colors text-sm rounded">Read More</a>
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
                  <a href="rapid-weight-loss-is-it-safe.html" class="inline-block px-4 py-2 border border-${primaryColor.replace('#', '').substring(0, 6)} text-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)} hover:text-white transition-colors text-sm rounded">Read More</a>
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

  // Generate the nutrition tips section
  let nutritionTipsSection = '';
  
  switch(layoutStyle) {
    case 1:
      // Standard layout
      nutritionTipsSection = `
      <section id="nutrition-tips" class="py-12 md:py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Essential Nutrition Tips for Weight Loss</h2>
            <p class="text-gray-600 max-w-3xl mx-auto">Simple yet effective nutrition strategies that can help you achieve your weight loss goals in a healthy and sustainable way.</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Tip 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Focus on Protein</h3>
                <p class="text-gray-600">Increasing your protein intake can boost metabolism, reduce appetite, and help you lose body fat without losing muscle.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Aim for 25-30% of your calories from protein sources like lean meats, fish, eggs, dairy, and legumes.
                </div>
              </div>
            </div>
            
            <!-- Tip 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Eat Whole Foods</h3>
                <p class="text-gray-600">Whole foods are more filling, contain more nutrients, and are less likely to trigger overeating compared to processed foods.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Shop the perimeter of the grocery store where whole foods like fruits, vegetables, and fresh proteins are typically located.
                </div>
              </div>
            </div>
            
            <!-- Tip 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Practice Mindful Eating</h3>
                <p class="text-gray-600">Paying attention to how and what you eat can help you consume fewer calories and enjoy your food more.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Eat slowly, without distractions, and stop when you're 80% full to avoid overeating.
                </div>
              </div>
            </div>
            
            <!-- Tip 4 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Meal Prep</h3>
                <p class="text-gray-600">Preparing meals in advance ensures you have healthy options ready when hunger strikes, reducing the temptation of fast food.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Set aside a few hours each week to prep meals and snacks for busy days.
                </div>
              </div>
            </div>
            
            <!-- Tip 5 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Watch Liquid Calories</h3>
                <p class="text-gray-600">Beverages can contribute a significant amount of calories to your diet without providing the same feeling of fullness as solid foods.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Stick to water, unsweetened tea, or black coffee most of the time, and limit sugary drinks and alcohol.
                </div>
              </div>
            </div>
            
            <!-- Tip 6 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="w-12 h-12 bg-${primaryColor.replace('#', '').substring(0, 6)} rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Balance Your Plate</h3>
                <p class="text-gray-600">A balanced meal should include protein, complex carbohydrates, healthy fats, and plenty of vegetables for optimal nutrition.</p>
                <div class="mt-4 text-sm">
                  <span class="font-medium">Tip:</span> Use the plate method: fill half your plate with vegetables, one quarter with protein, and one quarter with whole grains.
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <a href="top-ten-weight-loss-meds.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Explore Weight Loss Medications
            </a>
          </div>
        </div>
      </section>
      `;
      break;
    
    case 2:
      // Centered layout with alternating sections
      nutritionTipsSection = `
      <section id="nutrition-tips" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-${primaryColor.replace('#', '').substring(0, 6)} font-semibold text-sm uppercase tracking-wider">SCIENCE-BACKED ADVICE</span>
            <h2 class="text-3xl font-bold mt-2 mb-4">Smart Nutrition for Effective Weight Loss</h2>
            <p class="text-gray-600">These evidence-based nutrition tips can help you create sustainable eating habits that support weight loss while maintaining your health.</p>
          </div>
          
          <div class="max-w-4xl mx-auto space-y-12">
            <!-- Tip 1 -->
            <div class="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${primaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">01</div>
                <h3 class="text-xl font-semibold">Prioritize Protein</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Research shows that protein helps control hunger hormones, preserves muscle mass during weight loss, and requires more energy to digest compared to carbs and fats. Aim for lean protein sources with every meal, such as eggs, chicken, fish, tofu, or Greek yogurt.</p>
              </div>
            </div>
            
            <!-- Tip 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${secondaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">02</div>
                <h3 class="text-xl font-semibold">Fiber Is Your Friend</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Dietary fiber slows digestion, promotes fullness, and helps regulate blood sugar. Studies show people who eat more fiber tend to have lower body weights. Focus on vegetables, fruits, legumes, and whole grains to boost your daily fiber intake to the recommended 25-30 grams.</p>
              </div>
            </div>
            
            <!-- Tip 3 -->
            <div class="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${primaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">03</div>
                <h3 class="text-xl font-semibold">Control Portions</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Even healthy foods can contribute to weight gain when portion sizes are too large. Use smaller plates, measure servings initially to train your eye, and use your hand as a portable portion guide (palm for protein, fist for veggies, cupped hand for carbs).</p>
              </div>
            </div>
            
            <!-- Tip 4 -->
            <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${secondaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">04</div>
                <h3 class="text-xl font-semibold">Strategic Meal Timing</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">When you eat can be almost as important as what you eat. Recent research supports time-restricted eating (limiting food intake to an 8-10 hour window) for improved metabolic health. Also, eating more calories earlier in the day may improve weight loss compared to larger evening meals.</p>
              </div>
            </div>
          </div>
          
          <div class="mt-16 text-center">
            <a href="top-ten-weight-loss-meds.html" class="inline-block bg-gradient-to-r from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300">
              Discover Weight Loss Solutions
            </a>
          </div>
        </div>
      </section>
      `;
      break;

      
    case 3:
      // Modern layout with cards
      nutritionTipsSection = `
      <section id="nutrition-tips" class="py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12">
            <div class="max-w-xl">
              <h2 class="text-3xl font-bold mb-3">Evidence-Based Nutrition Tips</h2>
              <p class="text-gray-600">Separating nutrition facts from fiction to help you make better food choices for sustainable weight management.</p>
            </div>
            <a href="top-ten-weight-loss-meds.html" class="mt-6 md:mt-0 text-${primaryColor.replace('#', '').substring(0, 6)} font-medium hover:underline flex items-center">
              Explore weight loss solutions
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Tip 1 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">1</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Choose Nutrient-Dense Foods</h3>
                <p class="text-gray-700">Focus on foods that provide maximum nutritional value for their calories. Vegetables, fruits, lean proteins, and whole grains deliver essential vitamins, minerals, and fiber while keeping calorie counts reasonable.</p>
              </div>
            </div>
            
            <!-- Tip 2 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">2</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Monitor Calorie Density</h3>
                <p class="text-gray-700">Foods with low calorie density let you eat larger portions while consuming fewer calories. Water-rich foods like soups, salads, and fruits can help you feel full without excess calories.</p>
              </div>
            </div>
            
            <!-- Tip 3 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">3</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Include Healthy Fats</h3>
                <p class="text-gray-700">Not all fats are created equal. Monounsaturated and polyunsaturated fats from sources like avocados, nuts, seeds, and olive oil support heart health and can help control hunger.</p>
              </div>
            </div>
            
            <!-- Tip 4 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">4</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Stay Hydrated</h3>
                <p class="text-gray-700">Drinking water before meals can reduce hunger and help you consume fewer calories. Sometimes thirst signals are mistaken for hunger, so try drinking water first when cravings strike.</p>
              </div>
            </div>
            
            <!-- Tip 5 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">5</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Plan for Indulgences</h3>
                <p class="text-gray-700">Sustainable weight loss includes planned treats. The 80/20 approach—eating nutritious foods 80% of the time and allowing yourself treats 20% of the time—can help prevent feelings of deprivation.</p>
              </div>
            </div>
            
            <!-- Tip 6 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">6</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Cook at Home</h3>
                <p class="text-gray-700">Home-cooked meals typically contain fewer calories, less sodium, and less fat than restaurant meals. Taking control of your ingredients is a powerful way to improve your diet quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
  }

  // Generate the calorie counting section
  let calorieCountingSection = '';
  
  switch(layoutStyle) {
    case 1:
      // Standard layout
      calorieCountingSection = `
      <section id="calorie-counting" class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Calorie Counting 101</h2>
            <p class="text-gray-600 max-w-3xl mx-auto">Understanding the basics of energy balance and how to properly track your calorie intake for effective weight management.</p>
          </div>
          
          <div class="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto">
            <div class="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Person tracking calories" class="rounded-lg shadow-md w-full">
            </div>
            
            <div class="lg:w-1/2 space-y-6">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-${primaryColor.replace('#', '').substring(0, 6)} mb-3">What Are Calories?</h3>
                <p class="text-gray-700">Calories are simply a unit of energy. Your body needs energy to function, and it gets this energy from the food and beverages you consume. Different macronutrients provide different amounts of calories:</p>
                <ul class="mt-2 space-y-1 text-gray-600">
                  <li>• Carbohydrates: 4 calories per gram</li>
                  <li>• Protein: 4 calories per gram</li>
                  <li>• Fat: 9 calories per gram</li>
                  <li>• Alcohol: 7 calories per gram</li>
                </ul>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-semibold text-${primaryColor.replace('#', '').substring(0, 6)} mb-3">Energy Balance</h3>
                <p class="text-gray-700">Weight management comes down to energy balance:</p>
                <ul class="mt-2 space-y-1 text-gray-600">
                  <li>• To lose weight: Consume fewer calories than you burn</li>
                  <li>• To maintain weight: Consume the same number of calories as you burn</li>
                  <li>• To gain weight: Consume more calories than you burn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
    
    case 2:
      // Centered layout with alternating sections
      calorieCountingSection = `
      <section id="calorie-counting" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-${primaryColor.replace('#', '').substring(0, 6)} font-semibold text-sm uppercase tracking-wider">SCIENCE-BACKED ADVICE</span>
            <h2 class="text-3xl font-bold mt-2 mb-4">Smart Nutrition for Effective Weight Loss</h2>
            <p class="text-gray-600">These evidence-based nutrition tips can help you create sustainable eating habits that support weight loss while maintaining your health.</p>
          </div>
          
          <div class="max-w-4xl mx-auto space-y-12">
            <!-- Tip 1 -->
            <div class="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${primaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">01</div>
                <h3 class="text-xl font-semibold">Prioritize Protein</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Research shows that protein helps control hunger hormones, preserves muscle mass during weight loss, and requires more energy to digest compared to carbs and fats. Aim for lean protein sources with every meal, such as eggs, chicken, fish, tofu, or Greek yogurt.</p>
              </div>
            </div>
            
            <!-- Tip 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${secondaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">02</div>
                <h3 class="text-xl font-semibold">Fiber Is Your Friend</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Dietary fiber slows digestion, promotes fullness, and helps regulate blood sugar. Studies show people who eat more fiber tend to have lower body weights. Focus on vegetables, fruits, legumes, and whole grains to boost your daily fiber intake to the recommended 25-30 grams.</p>
              </div>
            </div>
            
            <!-- Tip 3 -->
            <div class="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${primaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">03</div>
                <h3 class="text-xl font-semibold">Control Portions</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">Even healthy foods can contribute to weight gain when portion sizes are too large. Use smaller plates, measure servings initially to train your eye, and use your hand as a portable portion guide (palm for protein, fist for veggies, cupped hand for carbs).</p>
              </div>
            </div>
            
            <!-- Tip 4 -->
            <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl overflow-hidden shadow-md">
              <div class="md:w-1/3 bg-${secondaryColor.replace('#', '').substring(0, 6)} p-8 text-white">
                <div class="text-3xl font-bold mb-2">04</div>
                <h3 class="text-xl font-semibold">Strategic Meal Timing</h3>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700">When you eat can be almost as important as what you eat. Recent research supports time-restricted eating (limiting food intake to an 8-10 hour window) for improved metabolic health. Also, eating more calories earlier in the day may improve weight loss compared to larger evening meals.</p>
              </div>
            </div>
          </div>
          
          <div class="mt-16 text-center">
            <a href="top-ten-weight-loss-meds.html" class="inline-block bg-gradient-to-r from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300">
              Discover Weight Loss Solutions
            </a>
          </div>
        </div>
      </section>
      `;
      break;
      
    case 3:
      // Modern layout with cards
      calorieCountingSection = `
      <section id="calorie-counting" class="py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12">
            <div class="max-w-xl">
              <h2 class="text-3xl font-bold mb-3">Evidence-Based Nutrition Tips</h2>
              <p class="text-gray-600">Separating nutrition facts from fiction to help you make better food choices for sustainable weight management.</p>
            </div>
            <a href="top-ten-weight-loss-meds.html" class="mt-6 md:mt-0 text-${primaryColor.replace('#', '').substring(0, 6)} font-medium hover:underline flex items-center">
              Explore weight loss solutions
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Tip 1 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">1</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Choose Nutrient-Dense Foods</h3>
                <p class="text-gray-700">Focus on foods that provide maximum nutritional value for their calories. Vegetables, fruits, lean proteins, and whole grains deliver essential vitamins, minerals, and fiber while keeping calorie counts reasonable.</p>
              </div>
            </div>
            
            <!-- Tip 2 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">2</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Monitor Calorie Density</h3>
                <p class="text-gray-700">Foods with low calorie density let you eat larger portions while consuming fewer calories. Water-rich foods like soups, salads, and fruits can help you feel full without excess calories.</p>
              </div>
            </div>
            
            <!-- Tip 3 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">3</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Include Healthy Fats</h3>
                <p class="text-gray-700">Not all fats are created equal. Monounsaturated and polyunsaturated fats from sources like avocados, nuts, seeds, and olive oil support heart health and can help control hunger.</p>
              </div>
            </div>
            
            <!-- Tip 4 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">4</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Stay Hydrated</h3>
                <p class="text-gray-700">Drinking water before meals can reduce hunger and help you consume fewer calories. Sometimes thirst signals are mistaken for hunger, so try drinking water first when cravings strike.</p>
              </div>
            </div>
            
            <!-- Tip 5 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">5</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Plan for Indulgences</h3>
                <p class="text-gray-700">Sustainable weight loss includes planned treats. The 80/20 approach—eating nutritious foods 80% of the time and allowing yourself treats 20% of the time—can help prevent feelings of deprivation.</p>
              </div>
            </div>
            
            <!-- Tip 6 -->
            <div class="relative bg-gradient-to-br from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)} rounded-xl overflow-hidden shadow-lg p-1">
              <div class="bg-white rounded-lg p-6 h-full">
                <div class="absolute top-4 right-4 w-8 h-8 bg-${primaryColor.replace('#', '').substring(0, 6)}/10 rounded-full flex items-center justify-center text-${primaryColor.replace('#', '').substring(0, 6)}">
                  <span class="font-bold">6</span>
                </div>
                <h3 class="text-xl font-bold mt-3 mb-4">Cook at Home</h3>
                <p class="text-gray-700">Home-cooked meals typically contain fewer calories, less sodium, and less fat than restaurant meals. Taking control of your ingredients is a powerful way to improve your diet quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
      break;
  }

  // Generate the best and worst diets section
  let bestWorstDietsSection = `
  <section id="best-worst-diets" class="py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Best & Worst Diets Compared</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">Not all diets are created equal. Here's a science-based comparison of popular approaches to weight loss.</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Best Diets -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-green-500 text-white py-3 px-6">
            <h3 class="text-xl font-bold">Top-Rated Approaches</h3>
          </div>
          <div class="p-6">
            <ul class="space-y-4">
              <li class="flex">
                <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-semibold">Mediterranean Diet</span>
                  <p class="text-sm text-gray-600 mt-1">Emphasizes fruits, vegetables, whole grains, olive oil, and lean proteins. Has strong research supporting heart health and sustainable weight loss.</p>
                </div>
              </li>
              <li class="flex">
                <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-semibold">DASH Diet</span>
                  <p class="text-sm text-gray-600 mt-1">Designed to lower blood pressure, this balanced approach emphasizes fruits, vegetables, and low-fat dairy while limiting sodium.</p>
                </div>
              </li>
              <li class="flex">
                <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span class="font-semibold">Flexitarian Diet</span>
                  <p class="text-sm text-gray-600 mt-1">Emphasizes plant foods but allows occasional meat, offering flexibility and balanced nutrition for sustainable weight management.</p>
                </div>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600">These approaches share common elements: emphasis on whole foods, reasonable portions, and sustainable lifestyle changes rather than severe restrictions.</p>
            </div>
          </div>
        </div>
        
        <!-- Worst Diets -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-red-500 text-white py-3 px-6">
            <h3 class="text-xl font-bold">Approaches to Avoid</h3>
          </div>
          <div class="p-6">
            <ul class="space-y-4">
              <li class="flex">
                <svg class="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-semibold">Extreme Low-Calorie Diets</span>
                  <p class="text-sm text-gray-600 mt-1">Very low-calorie diets (under 1,000 calories) can lead to muscle loss, nutrient deficiencies, and metabolic damage.</p>
                </div>
              </li>
              <li class="flex">
                <svg class="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-semibold">Detox Diets & Cleanses</span>
                  <p class="text-sm text-gray-600 mt-1">These offer no proven benefits beyond what your liver and kidneys already do naturally, and may cause energy crashes and nutrient deficiencies.</p>
                </div>
              </li>
              <li class="flex">
                <svg class="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span class="font-semibold">Most "Fad" Diets</span>
                  <p class="text-sm text-gray-600 mt-1">Diets that eliminate entire food groups or make extreme claims typically lead to short-term results followed by weight regain.</p>
                </div>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600">Warning signs of problematic diets include promises of rapid weight loss, elimination of whole food groups, rigid rules, and lack of peer-reviewed research.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <a href="top-ten-weight-loss-meds.html" class="inline-block bg-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 text-white font-medium py-3 px-8 rounded-md transition duration-300">
          Explore Medical Weight Loss Options
        </a>
      </div>
    </div>
  </section>
  `;

  // Generate the newsletter section
  let newsletterSection = `
  <section id="newsletter" class="py-12 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Get Your Free Nutrition Guide</h2>
        <p class="text-gray-600 mb-10">Sign up for our newsletter to receive exclusive tips, recipes, and updates straight to your inbox.</p>
        
        <form class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <button type="submit" class="w-full md:w-auto bg-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 text-white font-medium py-3 px-8 rounded-md shadow-sm hover:shadow-lg transition duration-300 sm:text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
  `;

  // Generate the footer
  const footer = `
  <footer class="bg-gray-800 text-white pt-12 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About</h3>
          <p class="text-gray-300 text-sm">
            ${brandName} provides science-based information on nutrition, weight management, and healthy living. Our mission is to help you make informed decisions about your health.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Tools</h3>
          <ul class="space-y-2">
            <li><a href="bmi-calculator.html" class="text-gray-300 hover:text-white text-sm transition-colors">BMI Calculator</a></li>
            <li><a href="meal-planner.html" class="text-gray-300 hover:text-white text-sm transition-colors">Meal Planner</a></li>
            <li><a href="top-ten-weight-loss-meds.html" class="text-gray-300 hover:text-white text-sm transition-colors">Top 10 Weight Loss Medications</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li><a href="about.html" class="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
            <li><a href="faq.html" class="text-gray-300 hover:text-white text-sm transition-colors">FAQ</a></li>
            <li><a href="contact.html" class="text-gray-300 hover:text-white text-sm transition-colors">Contact Us</a></li>
            <li><a href="privacy.html" class="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            <li><a href="terms.html" class="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-400 text-sm">© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
        <p class="text-gray-500 text-xs mt-2">
          Disclaimer: The information provided on this website is for general informational purposes only and should not be considered as medical advice. Always consult with a qualified healthcare professional before making any dietary or lifestyle changes.
        </p>
      </div>
    </div>
  </footer>
  `;

  // Generate the final HTML
  
  // Main page HTML with randomized content section order
  // Always keep the hero at the top, but randomize other content sections
  
  // Create an array of content sections
  const contentSections = [];
  
  // Only add each section if it exists and is unique
  if (bestWorstDietsSection) {
    contentSections.push({ id: 'best-worst', content: bestWorstDietsSection });
  }
  
  if (nutritionTipsSection) {
    // Check for duplicate content to prevent the same section appearing twice
    if (!contentSections.some(section => section.content.includes('Evidence-Based Nutrition Tips'))) {
      contentSections.push({ id: 'nutrition-tips', content: nutritionTipsSection });
    }
  }
  
  if (popularDietPlansSection) {
    contentSections.push({ id: 'diet-plans', content: popularDietPlansSection });
  }
  
  if (calorieCountingSection) {
    contentSections.push({ id: 'calorie-counting', content: calorieCountingSection });
  }
  
  // Add an ID to each section for proper linking
  contentSections.forEach(section => {
    if (!section.content.includes('id="')) {
      section.content = section.content.replace('<section', `<section id="${section.id}"`);
    }
  });
  
  // Shuffle the array using Fisher-Yates algorithm for better randomization
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Shuffle the content sections
  const shuffledSections = shuffleArray([...contentSections]);
    
  // Join the shuffled content sections
  const randomizedContentSections = shuffledSections.map(section => section.content).join('\n');
  
  // Main page HTML
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brandName} | Science-Based Weight Loss & Nutrition Advice</title>
  <meta name="description" content="Discover science-backed nutrition advice, personalized diet plans, and expert guidance to help you achieve your weight and wellness goals.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&family=Lato:wght@400;700&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Outfit:wght@400;500;700&family=Poppins:wght@400;500;700&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Custom styles -->
  ${customStyles}
  
  <!-- Image error handling -->
  <style>
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
    
    .fallback-image-container .fallback-message {
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
    
    /* Standard responsive image container */
    .responsive-image {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    
    /* Fix for consistent section widths */
    section > .container {
      width: 100%;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Ensure consistent padding */
    .content-section {
      padding: 4rem 0;
    }
    
    /* Improved contrast for text on colored backgrounds */
    .text-on-color {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    
    /* Consistent CTA button styling */
    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s ease;
      text-align: center;
    }
    
    /* Fix for mobile responsiveness */
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
  
  ${trackingScript || ''}
</head>
<body class="min-h-screen bg-gradient-to-b from-indigo-900/10 to-white">
  ${navbar}
  ${heroSection}
  
  <div class="bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      ${randomizedContentSections}
    </div>
  </div>
  
  ${generateTrustSignalsSection(primaryColor)}
  
  <section id="newsletter" class="py-12 bg-gradient-to-r from-${primaryColor.replace('#', '').substring(0, 6)} to-${secondaryColor.replace('#', '').substring(0, 6)}">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Get Science-Based Nutrition Tips</h2>
        <p class="text-lg mb-8 opacity-90">Join our newsletter and receive expert advice on weight management, nutrition, and healthy living.</p>
        
        <form class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <button type="submit" class="w-full md:w-auto bg-${primaryColor.replace('#', '').substring(0, 6)} hover:bg-${primaryColor.replace('#', '').substring(0, 6)}/90 text-white font-medium py-3 px-8 rounded-md shadow-sm hover:shadow-lg transition duration-300 sm:text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
  
  ${footer}
  
  <script>
    // Image error handling
    document.addEventListener('DOMContentLoaded', function() {
      // Handle image errors
      const images = document.querySelectorAll('img:not([onerror])');
      images.forEach(img => {
        img.onerror = function() {
          // Use data-fallback if available, otherwise use a default image
          const fallback = img.dataset.fallback || 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
          this.src = fallback;
          this.classList.add('fallback-image');
        };
      });
      
      // Form handling - prevent default form submission
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for subscribing! This is a demo form.');
        });
      });
      
      // Add consistent spacing to sections if needed
      const contentSections = document.querySelectorAll('section:not(.hero-section):not(#newsletter)');
      contentSections.forEach(section => {
        if (!section.classList.contains('py-12') && !section.classList.contains('py-16')) {
          section.classList.add('content-section');
        }
      });
    });
  </script>
</body>
</html>
  `;

  // Generate blog posts pages
  const blogPostPages = {};
  
  // Loop through the blog posts and generate a page for each one
  for (const [slug, post] of Object.entries(blogPosts)) {
    blogPostPages[`${slug}.html`] = generateBlogPost(post, brandName, primaryColor);
  }
  
  // Check if "rapid-weight-loss-is-it-safe" blog post exists, if not, create it
  if (!blogPostPages["rapid-weight-loss-is-it-safe.html"]) {
    const rapidWeightLossPost = {
      title: "Rapid Weight Loss: Is It Safe?",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      excerpt: "Medical professionals weigh in on the dangers of fast weight loss programs and offer safer alternatives.",
      content: `
        <h2>Understanding Rapid Weight Loss</h2>
        <p>Rapid weight loss is typically defined as losing more than 2 pounds per week. While quick results can be motivating, losing weight too quickly can have serious health consequences.</p>
        
        <h2>The Risks of Losing Weight Too Quickly</h2>
        
        <h3>Muscle Loss</h3>
        <p>When you lose weight rapidly, you're not just losing fat—you're also losing muscle mass. This can slow your metabolism and make it harder to maintain weight loss in the long term.</p>
        
        <h3>Nutritional Deficiencies</h3>
        <p>Very low-calorie diets often don't provide all the nutrients your body needs. This can lead to deficiencies in essential vitamins and minerals, causing problems like hair loss, brittle nails, and weakened immune function.</p>
        
        <h3>Gallstones</h3>
        <p>Rapid weight loss is a known risk factor for developing gallstones. When you lose weight quickly, your liver secretes extra cholesterol into the bile, which can form into stones.</p>
        
        <h3>Metabolic Slowdown</h3>
        <p>Your body adapts to severe calorie restriction by slowing your metabolism to conserve energy. This "metabolic adaptation" can make it increasingly difficult to continue losing weight and easier to regain it once you stop the diet.</p>
        
        <h3>Psychological Effects</h3>
        <p>Crash diets can lead to an unhealthy relationship with food, triggering disordered eating patterns, food obsession, and a cycle of losing and regaining weight (yo-yo dieting).</p>
        
        <h2>When Rapid Weight Loss Might Be Appropriate</h2>
        <p>In some specific medical situations, rapid weight loss may be prescribed under close medical supervision:</p>
        <ul>
          <li>Preparation for surgery</li>
          <li>Severe obesity with immediate health risks</li>
          <li>Certain medical conditions where quick weight loss would be beneficial</li>
        </ul>
        <p>These scenarios should always be managed by healthcare professionals with regular monitoring.</p>
        
        <h2>Healthier Approaches to Weight Loss</h2>
        
        <h3>Set Realistic Goals</h3>
        <p>Aim for a gradual weight loss of 1-2 pounds per week. This pace is sustainable and primarily comes from fat loss rather than muscle and water loss.</p>
        
        <h3>Focus on Nutrition, Not Just Calories</h3>
        <p>Emphasize nutrient-dense whole foods like vegetables, fruits, lean proteins, whole grains, and healthy fats. This ensures you're getting essential nutrients while creating a modest calorie deficit.</p>
        
        <h3>Include Regular Physical Activity</h3>
        <p>Combine cardiovascular exercise with strength training to preserve muscle mass while losing fat. Aim for at least 150 minutes of moderate activity per week plus strength training 2-3 times weekly.</p>
        
        <h3>Address Behavioral Factors</h3>
        <p>Work on recognizing emotional eating triggers, practicing mindful eating, and developing healthy coping mechanisms that don't involve food.</p>
        
        <h3>Consider Professional Support</h3>
        <p>Working with registered dietitians, certified personal trainers, or behavioral therapists can provide personalized guidance and accountability.</p>
        
        <h2>Conclusion</h2>
        <p>While the allure of rapid weight loss is understandable, the potential health risks typically outweigh the benefits. Sustainable weight management is a long-term commitment that involves gradual changes to eating and exercise habits. Remember that healthy weight loss focuses on improving overall health, not just changing the number on the scale.</p>
      `
    };
    
    blogPostPages["rapid-weight-loss-is-it-safe.html"] = generateBlogPost(rapidWeightLossPost, brandName, primaryColor);
  }

  // Return all the pages
  return {
    'index.html': html,
    'bmi-calculator.html': generateBMICalculator(brandName, navbar, footer, customStyles, googleTag),
    'meal-planner.html': generateMealPlanner(brandName, navbar, footer, customStyles, googleTag),
    'top-ten-weight-loss-meds.html': generateTopTenWeightLossMeds(brandName, navbar, footer, customStyles, googleTag, targetUrl),
    'about.html': generateAboutUsPage(brandName, navbar, footer, customStyles, googleTag),
    'contact.html': generateContactPage(brandName, navbar, footer, customStyles, googleTag),
    'faq.html': generateFAQPage(brandName, navbar, footer, customStyles, googleTag),
    ...blogPostPages
  };
}; 