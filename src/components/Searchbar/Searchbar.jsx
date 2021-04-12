import SearchForm from '../SearchForm';

import styles from './Searchbar.module.scss';

const Searchbar = () => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm />
    </header>
  );
};

export default Searchbar;
