import { Palette } from 'lucide-react';

interface LogoProps {
  color: 'light' | 'dark';
}

const Logo = ({ color = 'dark' }: LogoProps) => {
  return (
    <div className="flex items-center">
      <Palette className={color === 'light' ? 'text-white' : 'text-primary-600'} size={28} />
      <span 
        className={`ml-2 text-xl font-bold ${
          color === 'light' ? 'text-white' : 'text-secondary-900'
        }`}
      >
        Westy<span className="text-primary-600">Creative</span>
      </span>
    </div>
  );
};

export default Logo;