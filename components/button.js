import Link from 'next/link';
import Image from 'next/image';

const Button = ({ link, label, color, type }) => {
  return (
    <div>
      <Link href={link} className={`${type} ${color}`}>
        {label}
      </Link>
    </div>
  );
};


export default Button;
