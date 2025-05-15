const profilLogo = document.querySelectorAll(".profil-logo");
const roleAdd = document.querySelectorAll(".role-add");
const input = document.querySelectorAll(".message input");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const ramdomWord = () => {
  const words = [
    "Racist",
    "Giga Chad",
    "No Lifer",
    "Gambler",
    "1M Beers",
    "Jerkmate Ranked",
    "Cheater",
    "BOT",
    "Ball Tickler",
    "Penis"
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const addRole = (card) => {
  const role = document.createElement("div");
  const roleColor = document.createElement("div");
  const roleText = document.createElement("p");
  role.classList.add("role");
  roleColor.classList.add("role-color");
  roleColor.style.backgroundColor = randomHexColor();
  roleText.innerText = ramdomWord();
  role.append(roleColor, roleText);
  card.parentElement.append(role, card);
  removeRole();
};

const removeRole = () => {
  const roles = document.querySelectorAll(".role-color");
  roles.forEach((role) => {
    role.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
};

const toggleModal = () => {
  modal.classList.toggle("active");
};

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

roleAdd.forEach((add) => {
  add.addEventListener("click", () => {
    addRole(add);
  });
});



removeRole();

$(function() {
    $('#content').keypress(function(e) {
        if (e.which === 13) { 
            e.preventDefault();
            
            var url = "https://discord.com/api/webhooks/1052953824131813428/lz24ZKmtDHmwcZrfxvxFE6pudzSvwfC24b8ZneE_c_iFki1CwpLVl6ord1njJTBEA6Ca";
            var content = $("#content").val();
            var username = "Faustino";
            var avatar_url = ""
            
            $.post(url, {"content": content, "username": username, "avatar_url": avatar_url})
            .done(function() {
                
                $('#message-status').fadeIn().delay(2000).fadeOut();
                $("#content").val("");
            });
        }
    });
});
    
