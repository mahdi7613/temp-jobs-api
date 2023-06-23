const epxress = require("express");
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = epxress.Router();

router.route("/").post(createJob).get(getAllJobs);

router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
