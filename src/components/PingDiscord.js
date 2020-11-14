import Axios from "axios";
// import React from "react";

export default function PingDiscord(content) {
  // I know this is not the best practice for handling webhook keys.
  // This should be in a bot somewhere in the cloud
  Axios.post("https://discord.com/api/webhooks/777083046699597865/AJ-ln1_JHVhLrtOV4f97nZOkNP2NM7q-XHwsVFIvaREHiYfhjmSiHNKcU_OfUFhukJ8_", {
    content: content,
  })
    .then(function (response) {
      console.log("discord ping success");
    })
    .catch(function (error) {
      console.log("discord ping failed");
    });
  // console.log(content);
}
