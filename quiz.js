const db = [123, 345, 657];

const isAuthenticated = ({ accessToken, body }) => {
  const result = db.includes(accessToken);
  if (!result) {
    console.log("accessToken is invalid");
    console.log("please login");
  } else {
    middlewareOne(body);
  }
  //   return result;
};

function middlewareTwo(body) {
  console.log("m2");
  saveDb(body);
}
function middlewareOne(body) {
  console.log("m1");
  middlewareTwo(body);
}
function saveDb(body) {
  console.log(body.title);
  console.log("-------");
  console.log(body.content);
}
function postNews(req) {
  isAuthenticated(req);
}

//"http://post" ->isAuthenticated->m1->m2-> saveDb()

// Router.post("/postnew",postNews)

const body = { title: "Wednesday", content: "Learning express" };
const accessToken = 123;
const req = { body, accessToken };
postNews(req);
