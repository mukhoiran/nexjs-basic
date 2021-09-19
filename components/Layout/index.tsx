import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <head>
        <title>
          NextJS Basic |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website NextJS Basic" />
      </head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
