import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function EggplantBurrataPage() {
  return (
    <main className="diet-recipe-detail">
      <h1 className="diet-recipe-detail-heading">Eggplant Burrata-Style Snack (Zero Carb, Diabetic-Friendly)</h1>
      <Image src="/eggplant.png" alt="Eggplant Burrata" width={260} height={260} className="diet-recipe-detail-img" priority />
      <div className="diet-recipe-detail-content">
        <p className="diet-recipe-intro">
          A creative, low-carb twist on classic bruschetta — this Eggplant Burrata snack replaces bread with pan-fried eggplant rounds and combines healthy fats, fiber, and fresh flavors to create a zero-carb (or nearly zero net carb) snack perfect for Type 1 diabetics.
        </p>
        <h2 className="diet-recipe-subheading">Ingredients:</h2>
        <ul className="diet-recipe-list">
          <li>1 medium eggplant, sliced into thick, round discs</li>
          <li>½ tomato, finely chopped</li>
          <li>¼ green bell pepper, finely chopped</li>
          <li>½ avocado, thinly sliced</li>
          <li>1 tablespoon green chutney (made from fresh cilantro, green chili, and ginger)</li>
          <li>½ teaspoon green chili and ginger paste</li>
          <li>Dash of fresh lemon juice</li>
          <li>Salt, to taste</li>
          <li>1–2 teaspoons olive oil, for pan-frying</li>
          <li>1–2 tablespoons shredded cheese (like mozzarella, burrata-style, or dairy-free option)</li>
        </ul>
        <h2 className="diet-recipe-subheading">Instructions:</h2>
        <ol className="diet-recipe-steps">
          <li>
            <b>Pan-fry the Eggplant</b>
            <ul>
              <li>Lightly salt the eggplant rounds and let sit for 5 minutes to release moisture (optional).</li>
              <li>Pat dry and pan-fry each side in olive oil until golden brown and soft. Set aside.</li>
            </ul>
          </li>
          <li>
            <b>Make the Fresh Salsa</b>
            <ul>
              <li>In a bowl, combine chopped tomato, green bell pepper, green chili–ginger paste, lemon juice, and a pinch of salt. Mix well.</li>
            </ul>
          </li>
          <li>
            <b>Assemble the Snack</b>
            <ul>
              <li>Spread a thin layer of green chutney over each eggplant round.</li>
              <li>Layer sliced avocado on top.</li>
              <li>Add a spoonful of the fresh salsa.</li>
              <li>Finish with a sprinkle of shredded cheese.</li>
            </ul>
          </li>
          <li>
            <b>Serve Immediately</b>
            <ul>
              <li>Enjoy warm or at room temperature. It&apos;s flavorful, filling, and doesn&apos;t spike blood sugar.</li>
            </ul>
          </li>
        </ol>
        <h2 className="diet-recipe-subheading">Nutritional Benefits for Type 1 Diabetics:</h2>
        <p>Estimated Net Carbs: ~2–4 g per serving (depends on tomato quantity)</p>
        <p><i>High in fiber, healthy fats, and flavor — with minimal glucose impact</i></p>
        <h2 className="diet-recipe-subheading">Tips:</h2>
        <ul className="diet-recipe-list">
          <li>To keep net carbs near zero, reduce tomato quantity or skip it for stricter carb control.</li>
          <li>Use dairy-free cheese or burrata alternatives if avoiding lactose.</li>
          <li>Want more crunch? Add a crushed roasted walnut or pumpkin seed topping.</li>
        </ul>
      </div>
      <div className="diet-recipe-back">
        <Link href="/">&larr; Back to Home</Link>
      </div>
    </main>
  );
} 