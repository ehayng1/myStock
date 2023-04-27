export default getId = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    let uniqueId = user.uid;
    return uniqueId;
  }
};
