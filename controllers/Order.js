const { Order } = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await Order.create(order)
      .then(async (result) => {
        await checkOrderStatus();
        return res.status(200).json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        console.log("err1", err);
        return res.status(400).json({ error: err });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.acceptOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await updateOrder(order)
      .then((result) => {
        return res.status(200).json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.assignOrder = async (req, res) => {
  try {
    const { order } = req.body;
    await updateOrder(order)
      .then((result) => {
        return res.status(200).json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        return res.status(400).json({ error: err });
      });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updateOrder = async (body) => {
  try {
    console.log(body);
    await Order.update(body, {
      where: { id: body.id },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

const checkOrderStatus = async () => {
  // setTimeout(async () => {
  //   console.log("Second response sent after 10 seconds");
  //   await Order.findAll({
  //     where: {
  //       delivery_boys_id: null,
  //     },
  //   })
  //     .then((result) => {
  //       if (result.length != 0) {
  //         console.log("notification send");
  //         const notification = "assign the order manually";
  //         io.emit("receiveNotification", notification);
  //         console.log("notification send 2");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("2", err);
  //       return err;
  //     });
  // }, 10 * 1000); // 10 seconds
};
