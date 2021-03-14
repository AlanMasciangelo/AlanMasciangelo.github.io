// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { useSiteMetadata } from '../../../hooks';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => {
  const { author } = useSiteMetadata();
  return ( 
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} by {author.name} 
        {/* <div className={styles['author']}>
          <Link to="/">
            <img
              src={withPrefix(author.photo)}
              className={styles['author__photo']}
              width="44"
              height="44"
              alt={author.name}
            />
          </Link>
        </div> */}
      </p>
    </div>
  );
};

export default Meta;
