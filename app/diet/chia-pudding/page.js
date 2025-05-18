import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/diet.scss';

export default function ChiaPuddingPage() {
  return (
    <main className="diet-recipe-detail">
      <Image 
        src="/chia_pudding.png" 
        alt="Chia Pudding Dessert" 
        width={260} 
        height={260} 
        className="diet-recipe-detail-img" 
        priority 
      />
      
      <div className="diet-recipe-full-image">
        <Image 
          src="/chia_pudding_recipe.png" 
          alt="Chia Pudding Recipe" 
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