import axios from "axios";

export default async (req, res) => {
  try {
    console.log("sending post");
    if (req.method === "POST") {
      let response = await axios({
        url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.humanKey}`,
        method: "post",
        mode: "cors",
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            Origin: "http://localhost:6262",
          },
        },
      });
      let { data } = response;
      res.status(200).send({ message: "Success", data });
    } else {
      // Handle any other HTTP method
      res.status(400).send({ message: "Failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(null);
  }
};
