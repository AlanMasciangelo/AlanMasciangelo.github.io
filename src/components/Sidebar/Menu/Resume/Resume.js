// @flow strict
import React from 'react'
import styles from '../Menu.module.scss';

const Resume = () => (
    <li className={styles['menu__list-item']} key='Resume'>
        <a href={`downloads/Resume.pdf`} 
        download 
        className={styles['menu__list-item-link']} 
        activeClassName={styles['menu__list-item-link--active']}>
            Resume
        </a>
    </li>
);

export default Resume;