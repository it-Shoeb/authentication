const getHome = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.error(error);
  }
};

export default getHome;
