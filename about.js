async function getBadges() {
  const url =
    "https://badges.roproxy.com/v1/users/296944867/badges?limit=10&sortOrder=Desc";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data["data"];
  } catch (error) {
    console.log("something screwed up brah...");
    console.log(error);
  }
}

async function displayBadges() {}

async function getAvatar() {
  const url =
    "https://thumbnails.roproxy.com/v1/users/avatar?userIds=296944867&size=420x420&format=Png&isCircular=false";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data["data"][0].imageUrl;
  } catch (error) {
    console.log(error);
  }
}

async function displayAvatar() {
  const avatarImage = await getAvatar();
  const av = document.querySelector("#avatar");
  av.setAttribute("src", avatarImage);
}

getBadges();
displayAvatar();
