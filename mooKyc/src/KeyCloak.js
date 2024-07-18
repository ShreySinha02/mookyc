import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
// const keycloak = Keycloak({
//   url: "https://auth.smartmoo.com/auth",
//   realm: "smartmooone",
//   clientId: "smartmoo-app"
// });

const keycloak =new Keycloak({
  url: "https://auth-uat.smartmoo.com/auth",
  realm: "smartmooone",
  clientId: "smartmoo-app"

});

export default keycloak;