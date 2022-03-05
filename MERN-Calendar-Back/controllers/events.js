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

const updateEvents = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const newEvent = await Events.findById(eventId);
    if (!newEvent) {
      return res.status(404).json({
        ok: false,
        msg: "Event don´t exist",
      });
    }
    if (newEvent.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "You don´t permission for changes in events",
      });
    }
    const updateEvent = {
      ...req.body,
      user: uid,
    };
    const eventUpdated = await Events.findOneAndUpdate(eventId, updateEvent, {
      new: true,
    });
    res.json({
      ok: true,
      eventId: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please connect with your administrator",
    });
  }
};

const deleteEvents = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const delEvent = await Events.findById(eventId);
    if (!delEvent) {
      return res.status(404).json({
        ok: false,
        msg: "Event don´t exist",
      });
    }
    if (delEvent.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "You don´t permission for delete events",
      });
    }
    await Events.findByIdAndDelete(eventId);
    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please connect with your administrator",
    });
  }
};

module.exports = {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents,
};
