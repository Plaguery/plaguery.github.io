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

async function getBadgeIconUrl(badgeId) {
  const url = `https://thumbnails.roproxy.com/v1/badges/icons?badgeIds=${badgeId},0&size=150x150&format=Png&isCircular=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data["data"][0]["imageUrl"];
  } catch (error) {
    console.log(error);
  }
}

async function displayBadges() {
  const data = await getBadges();
  const badgeSection = document.querySelector("#badges");
  for (badge of data) {
    const id = badge["id"];
    const badgeUrl = `https://www.roblox.com/badges/${id}/`;

    //creates link to badge
    const link = document.createElement("a");
    link.setAttribute("href", badgeUrl);
    link.classList.add("badgeDisplay");

    //fetches badge image
    const iconUrl = await getBadgeIconUrl(id);
    var badgeIcon = document.createElement("img");
    badgeIcon.setAttribute("src", iconUrl);
    badgeIcon.setAttribute("height", "100px");
    badgeIcon.setAttribute("width", "100px");

    //add badge name
    var badgeName = document.createElement("h4");
    badgeName.textContent = badge["name"];
    badgeName.classList.add("badgeName");

    //appends to display
    link.appendChild(badgeIcon);
    link.appendChild(badgeName);

    //appends everything to document
    badgeSection.appendChild(link);
  }
}

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
  av.setAttribute("width", "50%");
  av.setAttribute("height", "auto");
}

async function onlineStatus() {
  try {
    const response = await fetch(
      "https://presence.roproxy.com/v1/presence/users",
      {
        method: "POST",
        body: JSON.stringify({
          userIds: [296944867],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data["userPresences"][0]["userPresenceType"];
  } catch (error) {
    console.log(error);
  }
}

async function displayStatus() {
  const status = await onlineStatus();
  var display = "Offline ⚫";
  switch (status) {
    case 1:
      display = "On website 🔵";
      break;
    case 2:
      display = "Ingame 🟢";
      break;
    default:
      break;
  }

  const statusSection = document.querySelector("#status");
  statusSection.textContent = display;
}

//display
displayBadges();
displayAvatar();
displayStatus();
