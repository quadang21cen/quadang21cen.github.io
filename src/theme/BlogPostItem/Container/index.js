/**
 * Custom BlogPostItem Container: forward DOM props like onClick.
 */

import React from 'react';

export default function BlogPostItemContainer({children, className, ...props}) {
  return (
    <article className={className} {...props}>
      {children}
    </article>
  );
}
