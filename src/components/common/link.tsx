import React from 'react';
import Link from 'next/link';

function NextLink(props: any) {
  const { children, href, className, as } = props;
  return (
    <Link as={as} href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default NextLink;
