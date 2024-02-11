import Link from 'next/link';
import Image from 'next/image';

const Button = ({ link, label, color, type }) => {
  return (
    <div>
      <Link href={link}>
        <button className={`${type} ${color}`}>{label}</button>
      </Link>
    </div>
  );
};

const IconButton = ({ link, src }) => {
  return (
    <div>
      <Link href={link}>
        <div>
          <Image src={`${src}`} width={32} height={32} objectFit="cover" />
        </div>
      </Link>
    </div>
  );
};

export { Button, IconButton };
