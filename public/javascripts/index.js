/** DIALOG */

function openModal(event, id, img, caption) {
  $(".carousselImg").attr("src", img);
  $(".carousselCaption").text(caption);
  setTimeout(() => {
    $(`.${id}`)[0].showModal();
  }, 200);
}

/** MENU SECTION */

let burgerMenuOpen = false;

function open_menu(event) {
  $(".mobile-panel").removeClass("slide-out");
  $(".mobile-panel").addClass("slide-in");
}

function closePanel(event) {
  $(".mobile-panel").removeClass("slide-in");
  $(".mobile-panel").addClass("slide-out");

  setTimeout(() => {
    $(".mobile-panel").removeClass("slide-out");
  }, 1000);
}

function toggleSubMenu(event) {
  if (burgerMenuOpen) {
    closeSubMenu(event);
  } else {
    openSubMenu(event);
  }
}

function openSubMenu(event) {
  console.log("openSubMenu");
  burgerMenuOpen = true;
  $(".mobile-sub").removeClass("collapse");
  $(".mobile-sub").addClass("extend");
  $(".plusicon").attr("visibility", "hidden");
  $(".minusicon").attr("visibility", "visible");
}

function closeSubMenu(event) {
  burgerMenuOpen = false;
  $(".mobile-sub").removeClass("extend");
  $(".mobile-sub").addClass("collapse");
  $(".plusicon").attr("visibility", "visible");
  $(".minusicon").attr("visibility", "hidden");

  setTimeout(() => {
    $(".mobile-sub").removeClass("collapse");
  }, 1000);
}

/** TOGGLER SECTION */
let theme_toggler = document.querySelector("#theme_toggler");

theme_toggler.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("website_theme", "dark-mode");
  } else {
    localStorage.setItem("website_theme", "default");
  }
});

function retrieve_theme() {
  var theme = localStorage.getItem("website_theme");
  if (theme != null) {
    document.body.classList.remove("default", "dark-mode");
    document.body.classList.add(theme);
  }
}

/**CAROUSSEL SECTION */
function leftCarrousselBtnPressed(imgList, captionList) {
  if (
    imgList instanceof Array &&
    $(".carousselImg").attr("ongoing") == "false"
  ) {
    let currIndex = imgList.indexOf($(".carousselImg").attr("src"));
    if (currIndex == 0) {
      currIndex = imgList.length;
    }
    currIndex = currIndex - 1;
    $(".carousselImg").addClass("slide-left");
    $(".carousselImg").attr("ongoing", "true");
    setTimeout(() => {
      $(".carousselImg").attr("src", imgList[currIndex]);
      $(".carousselCaption").text(captionList[currIndex]);
      setTimeout(() => {
        $(".carousselImg").removeClass("slide-left");
        $(".carousselImg").attr("ongoing", "false");
      }, 800);
    }, 200);
  }
}

function rightCarrousselBtnPressed(imgList, captionList) {
  if (
    imgList instanceof Array &&
    $(".carousselImg").attr("ongoing") == "false"
  ) {
    let currIndex = imgList.indexOf($(".carousselImg").attr("src"));
    if (currIndex == imgList.length - 1) {
      currIndex = -1;
    }
    currIndex = currIndex + 1;
    $(".carousselImg").addClass("slide-right");
    $(".carousselImg").attr("ongoing", "true");
    setTimeout(() => {
      $(".carousselImg").attr("src", imgList[currIndex]);
      $(".carousselCaption").text(captionList[currIndex]);
      setTimeout(() => {
        $(".carousselImg").removeClass("slide-right");
        $(".carousselImg").attr("ongoing", "false");
      }, 800);
    }, 200);
  }
}

/** THEME SECTION */
retrieve_theme();

window.addEventListener(
  "storage",
  function () {
    retrieve_theme();
  },
  false
);
