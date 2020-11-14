import Axios from "axios";
// import React from "react";

export default function pingDiscord(content, i) {
  let insults = [
    "You mew ape wafer-cake!",
    "You mew candle-waster nut-hook!",
    "You fawn varlet Dewberry!",
    "You fawn earth-vexing fustilarian!",
    "You mammer bug-bear apple-john!",
    "You mew ape wafer-cake!",
    "You fobbing bilbo pigeon egg!",
    "You mew fut biddy!",
    "You paunch pigeon egg bilbo!",
    "You fobbing bilbo carbuncle!",
    "You paunch true-penny carbuncle!",
    "You mew pigeon egg ape!",
    "You fawn harpy bombast!",
    "You mew scut fitchew!",
    "You mew pigeon egg fitchew!",
    "You fobbing ape fustilarian!",
    "You fawn angel Dewberry!",
    "You fawn biddy bully!",
    "You mew fitchew bombard!",
    "You fobbing pigeon egg true-penny!",
  ];

  // I know this is not the best practice for handling webhook keys.
  // This should be in a bot somewhere in the cloud
  Axios.post("https://discord.com/api/webhooks/777083046699597865/AJ-ln1_JHVhLrtOV4f97nZOkNP2NM7q-XHwsVFIvaREHiYfhjmSiHNKcU_OfUFhukJ8_", {
    content: content + " " + insults[Math.floor(Math.random() * 20)],
  })
    .then(function (response) {
      console.log("discord ping success");
    })
    .catch(function (error) {
      console.log("discord ping failed");
    });
  // console.log(content);
}
