import Link from 'next/link';
import Image from 'next/image';
import '../../styles/diet.scss';

export default function AllRecipesPage() {
  const recipes = [
    {
      name: "Chia Pudding Dessert",
      image: "/chia_pudding.png",
      carbs: "Net Carbs: 11g",
      link: "/diet/chia-pudding"
    },
    {
      name: "Eggplant Burrata",
      image: "/eggplant.png",
      carbs: "Net Carbs: 0g",
      link: "/diet/eggplant-burrata"
    }
  ];

  return (
    <main className="all-recipes-page">
      <h1 className="all-recipes-heading">All Recipes</h1>
      
      <div className="all-recipes-description">
        <p>Explore our collection of diabetic-friendly recipes, specially crafted to support your T1D journey with delicious, low-carb options.</p>
      </div>
      
      <div className="all-recipes-grid">
        {recipes.map((recipe, index) => (
          <Link href={recipe.link} key={index} className="all-recipes-card">
            <div className="all-recipes-card-image">
              <Image 
                src={recipe.image} 
                alt={recipe.name} 
                width={200}
                height={200}
                className="all-recipes-img" 
              />
            </div>
            <div className="all-recipes-card-content">
              <h2 className="all-recipes-card-title">{recipe.name}</h2>
              <p className="all-recipes-card-carbs">{recipe.carbs}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="diet-recipe-back">
        <Link href="/">&larr; Back to Home</Link>
      </div>
    </main>
  );
} 