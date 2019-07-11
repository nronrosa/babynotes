var db = require("../../models");

module.exports = function (app) {
  // get all specific activity for child
  app.get("/activities/:child_id", function (req, res) {
    db.Activities.findAll({
      where: {
        ChildId: req.params.child_id
      },
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });
  // get ALL activities for a child
  app.get("/activities/:child_id", function (req, res) {
    db.Activities.findAll({
      where: {
        ChildId: req.params.id
      },
      include: [db.Child]
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });

  // get ONE activity for one child
  app.get("/activity/:id", function (req, res) {
    db.Activities.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Child]
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });

  // create one activity for a child
  app.post("/activity", function (req, res) {
    db.Activities.create({
      actList_Id: req.body.actList_Id,
      description: req.body.description,
      date: req.body.date,
      starttime: req.body.starttime,
      endtime: req.body.endtime,
      title: req.body.title,
      ChildId: req.body.ChildId,
    })
      .then(function (dbActivities) {
        res.json(dbActivities);
      });
  });

  // delete one activity for a child
  app.delete("/activity/:id", function (req, res) {
    db.Activities.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbActivities) {
      res.json(dbActivities);
    });
  });

  // update one activity for a child
  app.put("/activity/:id", function (req, res) {
    db.Activities.update(
      req.body, {
        where: {
          id: req.params.id
        }
      }).then(function (dbActivities) {
        res.json(dbActivities);
      });
  });

  
}