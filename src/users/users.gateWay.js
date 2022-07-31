const baseUrl = "https://api.github.com/users";

const getUserData = (userName) => {
  const userData = fetch(`${baseUrl}/${userName}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error();
  });

  return userData;
}

export default getUserData;