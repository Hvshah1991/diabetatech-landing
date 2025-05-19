import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function WadaSambharPage() {
  return (
    <main className="diet-recipe-detail">
      <Image 
        src="/wada_sambhar.jpg" 
        alt="Meduwada and Sambhar" 
        width={260} 
        height={260} 
        className="diet-recipe-detail-img" 
        priority 
      />
      
      <div className="diet-recipe-full-image">
        <Image 
          src="/wada_sambhar_recipe_inst.png" 
          alt="Meduwada and Sambhar Recipe" 
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