import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchForm;
