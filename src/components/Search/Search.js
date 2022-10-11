import styles from "./Search.module.css";
const SearchBar = ({ onChange, value }) => {
  return (
    <div className={styles.formControl}>
      <div>search for : </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by Name ....."
      />
    </div>
  );
};

export default SearchBar;
