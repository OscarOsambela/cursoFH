const getEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "crear eventos",
  });
};

const updateEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "actualizar eventos",
  });
};

const deleteEvents = (req, res) => {
  res.json({
    ok: true,
    msg: "eliminar eventos",
  });
};

module.exports = {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents,
};
