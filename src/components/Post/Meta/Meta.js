// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { useSiteMetadata } from '../../../hooks';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date, links }: Props) => {
  const { author } = useSiteMetadata();
  return ( 
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} by {author.name} 
      </p>
          {Object.entries(links).filter(link => link[1]).map((link) => (
             <a href={link[1]} class={styles['svg']}>
             <object data={`../media/${link[0]}.svg`} width="20" height="20" type="image/svg+xml"/>
             </a> 
          ))}
    </div>
  );
};

export default Meta;
