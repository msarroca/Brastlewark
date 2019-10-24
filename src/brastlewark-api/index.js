const getApiInfo = async () => {
  const response = await fetch(
    `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`
  );
  const json = await response.json();
  const people = await json.Brastlewark;
  return people;
};

export default getApiInfo;
