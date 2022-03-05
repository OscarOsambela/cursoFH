const Events = require("../models/events");

const getEvents = async (req, res) => {
  const events_ = await Events.find().populate("user", "name");
  res.json({
    ok: true,
    msg: events_,
  });
};

const createEvents = async (req, res) => {
  //const { title, notes, start, end, user } = req.body;
  const event_ = new Events(req.body);
  try {
    event_.user = req.uid;
    const eventSave = await event_.save();
    res.json({
      ok: true,
      msg: eventSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please connect with your administrator",
    });
  }
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
