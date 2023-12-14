//output needed
//find_obj={
//user_name:'thomas,
//user_address_personal_city:'kottayam
//user_address_personal_area:'west
//etc...
//}

let user = {
  name: "thomas",
  address: {
    personal: {
      city: "kottayam",
      area: "west",
    },
    office: {
      city: "ekm",
      area: {
        landmark: "okok",
        pin: 5656,
        obj: {
          key: "value",
        },
      },
    },
  },
};

let findobj = {};

function recurr(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      recurr(obj[key], parent + "_" + key);
    } else {
      findobj[parent + "_" + key] = obj[key];
    }
  }
}

recurr(user, "user");

console.log(findobj);
