import React from 'react';
import samanthaImg from '../../assets/png/samantha.png';
import { Link, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const sidebarNavLinks = [
  'dashboard',
  'expenses',
  'wallets',
  'summary',
  'accounts',
  'settings',
];
export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink, index) => (
                <li className={styles.sidebarNavItem} key={index}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
