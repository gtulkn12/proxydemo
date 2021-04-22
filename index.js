const { getJobs } = require("./services");
const express = require("express");

const jobs = [{ title: "Director of Ops", salary: "50000", company: "Amazon" }];

const webApp = express();
const PORT = 3000;
webApp.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});

//GET JOBS
webApp.get("/jobs", (req, res) => {
  const { tech } = req.query;

  if (tech === undefined)
    return res.status(400).send({ error: "tech query parameter is required" });

  getJobs(tech).then((jobs) => res.send(jobs));
});

// webApp.get("/jobs", async (req, res) => {
//   const { tech } = req.query;
//   getJobs(tech).then((jobs) => res.send(jobs));
// });

//GET
webApp.get("/", (req, res) => {
  console.log("home route");
  res.send(getJobs("Python"));
});

// getJobs("Python").then((PythonJobs) => console.log(PythonJobs[0]));
// getJobs("Java").then((JavaJobs) => console.log(JavaJobs[0]));

// const pythonJobs = await getJobs;
// const javaJobs = getJobs("Java");
