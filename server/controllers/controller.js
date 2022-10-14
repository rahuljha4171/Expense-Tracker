import model from "../models/model.js";

export const createCategories = async (req, res) => {
  const Create = new model.Categories({
    type: "SIP",
    color: "#9d4edd",
  });

  await Create.save((error) => {
    if (!error) {
      return res.json(Create);
    } else {
      return res
        .status(400)
        .json({ message: `Error while crate categories ${error}` });
    }
  });
};

export const getCategories = async (req, res) => {
  const data = await model.Categories.find({});

  let filter = data.map((v) =>
    Object.assign(
      {},
      {
        type: v.type,
        color: v.color,
      }
    )
  );

  return res.json(filter);
};
// Transaction
export const createTransaction = async (req, res) => {
  const { name, type, amount } = req.body;

  const create = new model.Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });
  await create.save((error) => {
    if (!error) {
      return res.json(create);
    } else {
      return res.status(400).json({ message: error });
    }
  });
};

export const getTransaction = async (req, res) => {
  const data = await model.Transaction.find({});

  return res.json(data);
};

export const deleteTransaction = async (req, res) => {
  const data = await model.Transaction.deleteOne(req.body, (error) => {
    if (!error) {
      res.json("Record Deleted!");
    }
  })
    .clone()
    .catch((error) => {
      res.json("Error while deleting Transaction History");
    });
};

export const getLabels = async (req, res) => {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categoriesInfo",
      },
    },
    {
      $unwind: "$categoriesInfo",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categoriesInfo["color"],
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json(`Lookup Collection Error: ${error}`);
    });
};
