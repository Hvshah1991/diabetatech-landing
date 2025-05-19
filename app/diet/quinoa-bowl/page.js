import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function QuinoaBowlPage() {
  return (
    <main className="diet-recipe-detail">
      <Image 
        src="/quinoa_bowl.jpg" 
        alt="Quinoa Veggie Bowl" 
        width={260} 
        height={260} 
        className="diet-recipe-detail-img" 
        priority 
      />
      
      <div className="diet-recipe-full-image">
        <Image 
          src="/quinoa_bowl_recipe_inst.png" 
          alt="Quinoa Veggie Bowl Recipe" 
          width={800} 
          height={1000}
          className="diet-recipe-instruction-img" 
          priority 
        />
      </div>
      
      <div className="diet-recipe-back">
        <Link href="/diet">&larr; Back to Recipes</Link>
      </div>
    </main>
  );
} 