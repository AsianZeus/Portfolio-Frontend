const FetchData = async () => {
  const res = await fetch('https://akshat-surolia-portfolio.herokuapp.com/all');
  return res.json();
};

export default FetchData;