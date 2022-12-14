const Button = ({
  setLang,
  filteredLang,
}: {
  setLang: React.Dispatch<React.SetStateAction<string>>;
  filteredLang: string;
}): JSX.Element => {
  return <button onClick={() => setLang(filteredLang)}>{filteredLang}</button>;
};

export default Button;
