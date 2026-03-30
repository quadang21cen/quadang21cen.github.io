/**
 * Custom BlogPostItem: remove default list-view bottom margin.
 */

import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';

export default function BlogPostItem({children, className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title} = metadata;

  const handleClick = (event) => {
    if (isBlogPostPage) return;
    const target = event.target;
    if (target && target.closest && target.closest('a')) return;
    window.location.href = permalink;
  };

  const handleKeyDown = (event) => {
    if (isBlogPostPage) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = permalink;
    }
  };

  return (
    <BlogPostItemContainer
      className={clsx(className, !isBlogPostPage && 'blog-card')}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={!isBlogPostPage ? 'link' : undefined}
      tabIndex={!isBlogPostPage ? 0 : undefined}
      aria-label={!isBlogPostPage ? `Open ${title}` : undefined}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
