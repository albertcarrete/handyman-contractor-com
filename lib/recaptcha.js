import axios from "axios";
export async function validateRecaptcha(humanKey) {
  try {
    let response = await axios({
      url: "/api/recaptcha",
      method: "post",
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      },
      data: {
        humanKey: humanKey,
      },
    });
    console.log(response);
    return response.data.data.success;
  } catch (err) {
    return false;
  }
}
