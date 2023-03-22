import React, { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkProps = Omit<MuiLinkProps, 'href'> &
  Omit<NextLinkProps, 'as' | 'passHref' | 'children'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, locale, ...muiProps },
  ref
) {
  return (
    <NextLink
      passHref
      href={href}
      scroll={scroll}
      locale={locale}
      shallow={shallow}
      replace={replace}
    >
      <MuiLink ref={ref} {...muiProps} />
    </NextLink>
  );
});
