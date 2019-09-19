
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(waitListData);
  });

  app.post("/api/tables", function(req, res) {


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
