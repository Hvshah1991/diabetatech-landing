import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function EggplantBurrataPage() {
  return (
    <main className="diet-recipe-detail">
      <Image 
        src="/eggplant.png" 
        alt="Eggplant Burrata" 
        width={260} 
        height={260} 
        className="diet-recipe-detail-img" 
        priority 
      />
      
      <div className="diet-recipe-full-image">
        <Image 
          src="/eggplant_recipe.png" 
          alt="Eggplant Burrata Recipe" 
          width={800} 
          height={1000}
          className="diet-recipe-instruction-img" 
          priority 
        />
      </div>
      
      <div className="diet-recipe-back">
        <Link href="/">&larr; Back to Home</Link>
      </div>
    </main>
  );
} 