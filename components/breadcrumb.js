import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  return (
    <div>
      <span onClick={() => router.push('/')}>Home</span><span> / </span>
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {index > 0 && <span> / </span>}
          <span onClick={() => router.push(`/${pathSegments.slice(0, index + 1).join('/')}`)}>
            {segment}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
