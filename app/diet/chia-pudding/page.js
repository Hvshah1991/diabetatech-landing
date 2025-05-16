import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function ChiaPuddingPage() {
  return (
    <main className="diet-recipe-detail">
      <h1 className="diet-recipe-detail-heading">Chia Pudding Dessert Recipe – Quick, Healthy &amp; Delicious!</h1>
      <Image src="/chia_pudding.png" alt="Chia Pudding Dessert" width={260} height={260} className="diet-recipe-detail-img" priority />
      <div className="diet-recipe-detail-content">
        <p className="diet-recipe-intro">
          Looking for a light, nutritious dessert that&apos;s as beautiful as it is tasty? This Chia Pudding Dessert is packed with fiber, protein, probiotics, and fresh fruits – making it perfect as a post-meal treat or even a refreshing breakfast!
        </p>
        <h2 className="diet-recipe-subheading">Ingredients:</h2>
        <ul className="diet-recipe-list">
          <li>1 tablespoon chia seeds</li>
          <li>4 tablespoons water (to soak chia seeds)</li>
          <li>3–4 tablespoons plain yogurt or unsweetened Greek yogurt</li>
          <li>3–4 tablespoons fresh fruits, finely chopped (e.g., apple, berries, kiwi, or any fruit of your choice)</li>
          <li>(Optional) Finely chopped nuts for crunch – almonds, walnuts, or pistachios work great</li>
        </ul>
        <h2 className="diet-recipe-subheading">Instructions:</h2>
        <ol className="diet-recipe-steps">
          <li>
            <b>Soak the chia seeds</b><br />
            In a small bowl, mix 1 tablespoon of chia seeds with 4 tablespoons of water. Let it rest for about 15–20 minutes, or until it forms a gel-like consistency.
          </li>
          <li>
            <b>Prepare the fruits</b><br />
            While the chia seeds are soaking, wash and finely chop your fruits. Choose a colorful mix like apples, blueberries, strawberries, or kiwi for extra flavor and visual appeal.
          </li>
          <li>
            <b>Layer the dessert</b>
            <ul>
              <li>In a serving glass or bowl, start with a layer of the soaked chia seeds.</li>
              <li>Add a generous layer of plain or Greek yogurt over the chia.</li>
              <li>Top with the chopped fruits.</li>
              <li>If desired, sprinkle chopped nuts on top for a nutty crunch.</li>
            </ul>
          </li>
          <li>
            <b>Serve immediately or chill for 10–15 minutes for a cooler, creamier experience.</b>
          </li>
        </ol>
        <h2 className="diet-recipe-subheading">Tips:</h2>
        <ul className="diet-recipe-list">
          <li>For extra flavor, add a drizzle of honey or maple syrup if you&apos;re not avoiding added sugar.</li>
          <li>Make it vegan by using a plant-based yogurt like coconut, almond, or soy.</li>
          <li>Add a dash of cinnamon or vanilla extract for a flavor twist.</li>
        </ul>
        <h2 className="diet-recipe-subheading">Why You&apos;ll Love This Dessert:</h2>
        <ul className="diet-recipe-list">
          <li><b>Healthy:</b> Packed with omega-3s, fiber, and antioxidants</li>
          <li><b>Quick:</b> Takes less than 10 minutes to assemble</li>
          <li><b>Customizable:</b> Use any fruits or yogurt you prefer</li>
          <li><b>Kid-friendly:</b> A fun way to sneak in nutrients</li>
        </ul>
        <h2 className="diet-recipe-subheading">Nutritional Benefits for Type 1 Diabetics</h2>
        <h3 className="diet-recipe-benefit">1. Chia Seeds – Blood Sugar Stabilizer</h3>
        <ul className="diet-recipe-list">
          <li>High in soluble fiber: Chia seeds absorb liquid and form a gel, which slows digestion and helps prevent blood sugar spikes.</li>
          <li>Rich in omega-3 fatty acids: Help reduce inflammation, which may benefit autoimmune health.</li>
          <li>Low glycemic index: Chia has minimal impact on blood glucose levels.</li>
          <li>Supports satiety: Helps reduce unnecessary snacking and keeps you fuller longer.</li>
        </ul>
        <h3 className="diet-recipe-benefit">2. Yogurt – Gut &amp; Metabolic Support</h3>
        <ul className="diet-recipe-list">
          <li>Probiotic-rich: Plain or unsweetened Greek yogurt supports gut health, which may positively impact immune regulation in T1D.</li>
          <li>Protein-packed: Protein slows glucose absorption and supports steady energy levels.</li>
          <li>Calcium &amp; Vitamin D: Beneficial for bone health, which is important in long-term diabetes care.</li>
        </ul>
        <p><b>Tip:</b> Always choose unsweetened yogurt to avoid hidden sugars.</p>
        <h3 className="diet-recipe-benefit">3. Fruits – Natural Nutrients in Moderation</h3>
        <ul className="diet-recipe-list">
          <li>Source of vitamins, antioxidants, and fiber: Helps support the immune system and overall well-being.</li>
          <li>Portion-controlled: 3–4 tbsp of finely chopped fruits provides flavor and color without overwhelming your carb intake.</li>
          <li>Berry benefits: Berries are especially good choices as they&apos;re lower in sugar and high in antioxidants.</li>
        </ul>
        <h3 className="diet-recipe-benefit">4. Optional Nuts – Healthy Fats &amp; Micronutrients</h3>
        <ul className="diet-recipe-list">
          <li>Good fats: Nuts like almonds and walnuts help improve lipid profile and reduce insulin resistance.</li>
          <li>Magnesium &amp; Zinc: Important for insulin sensitivity and immune support.</li>
        </ul>
        <h2 className="diet-recipe-subheading">Why It&apos;s Diabetic-Friendly</h2>
        <ul className="diet-recipe-list">
          <li>Low to moderate in carbs</li>
          <li>High in fiber and healthy fats</li>
          <li>Stabilizes post-meal blood sugar levels</li>
          <li>Supports gut health and reduces inflammation</li>
          <li>Easy to customize with carb-counting and insulin dosing</li>
        </ul>
      </div>
      <div className="diet-recipe-back">
        <Link href="/">&larr; Back to Home</Link>
      </div>
    </main>
  );
} 