"use strict";
//VARIABLES
const body = document.body;
const productDropdownBtn = document.querySelector(".nav-item-1");
const productDropdownArrow = document.querySelector(".fas-1");
const productDropdownMenu = document.querySelector(".dropdown-1");
const companyDropdownBtn = document.querySelector(".nav-item-2");
const companyDropdownArrow = document.querySelector(".fas-2");
const companyDropdownMenu = document.querySelector(".dropdown-2");
const connectDropdownBtn = document.querySelector(".nav-item-3");
const connectDropdownArrow = document.querySelector(".fas-3");
const connectDropdownMenu = document.querySelector(".dropdown-3");

const hamburgerDrop = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector(".fa-times");
const mobileMenu = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
//FUNCTIONS

const activateProductDropdown = function () {
  productDropdownArrow.classList.add("active");
  productDropdownMenu.classList.remove("hidden");
};
const deactivateProductDropdown = function () {
  productDropdownArrow.classList.remove("active");
  productDropdownMenu.classList.add("hidden");
};

const activateCompanyDropdown = function () {
  companyDropdownArrow.classList.add("active");
  companyDropdownMenu.classList.remove("hidden");
};
const deactivateCompanyDropdown = function () {
  companyDropdownArrow.classList.remove("active");
  companyDropdownMenu.classList.add("hidden");
};
const activateConnectDropdown = function () {
  connectDropdownArrow.classList.add("active");
  connectDropdownMenu.classList.remove("hidden");
};
const deactivateConnectDropdown = function () {
  connectDropdownArrow.classList.remove("active");
  connectDropdownMenu.classList.add("hidden");
};

const dropDown1 = function () {
  if (!companyDropdownMenu.classList.contains("hidden")) {
    deactivateCompanyDropdown();
    activateProductDropdown();
  } else if (!connectDropdownMenu.classList.contains("hidden")) {
    deactivateConnectDropdown();
    activateProductDropdown();
  } else if (!productDropdownMenu.classList.contains("hidden")) {
    deactivateProductDropdown();
  } else {
    activateProductDropdown();
  }
};
const dropDown2 = function () {
  if (!productDropdownMenu.classList.contains("hidden")) {
    deactivateProductDropdown();
    activateCompanyDropdown();
  } else if (!connectDropdownMenu.classList.contains("hidden")) {
    deactivateConnectDropdown();
    activateCompanyDropdown();
  } else if (!companyDropdownMenu.classList.contains("hidden")) {
    deactivateCompanyDropdown();
  } else {
    activateCompanyDropdown();
  }
};
const dropDown3 = function () {
  if (!productDropdownMenu.classList.contains("hidden")) {
    deactivateProductDropdown();
    activateConnectDropdown();
  } else if (!companyDropdownMenu.classList.contains("hidden")) {
    deactivateCompanyDropdown();
    activateConnectDropdown();
  } else if (!connectDropdownMenu.classList.contains("hidden")) {
    deactivateConnectDropdown();
  } else {
    activateConnectDropdown();
  }
};
//EVENT LISTENERS

productDropdownBtn.addEventListener("click", dropDown1);
companyDropdownBtn.addEventListener("click", dropDown2);
connectDropdownBtn.addEventListener("click", dropDown3);

hamburgerDrop.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  hamburgerClose.classList.remove("hidden");
  hamburgerDrop.classList.add("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
});
hamburgerClose.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  hamburgerClose.classList.add("hidden");
  hamburgerDrop.classList.remove("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
});
overlay.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  hamburgerClose.classList.add("hidden");
  hamburgerDrop.classList.remove("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
});
//MOBILE NAV
//VARIABLES
const mobileProductDropdownBtn = document.querySelector(
  ".mobile-nav-heading-1"
);
const mobileProductDropdownArrow = document.querySelector(".fas-mobile-1");
const mobileProductDropdownMenu = document.querySelector(".mobile-dropdown-1");
const mobileCompanyDropdownBtn = document.querySelector(
  ".mobile-nav-heading-2"
);
const mobileCompanyDropdownArrow = document.querySelector(".fas-mobile-2");
const mobileCompanyDropdownMenu = document.querySelector(".mobile-dropdown-2");
const mobileConnectDropdownBtn = document.querySelector(
  ".mobile-nav-heading-3"
);
const mobileConnectDropdownArrow = document.querySelector(".fas-mobile-3");
const mobileConnectDropdownMenu = document.querySelector(".mobile-dropdown-3");

//FUNCTIONS

const activateMobileProductDropdown = function () {
  mobileProductDropdownArrow.classList.add("active");
  mobileProductDropdownMenu.classList.remove("hidden");
};
const deactivateMobileProductDropdown = function () {
  mobileProductDropdownArrow.classList.remove("active");
  mobileProductDropdownMenu.classList.add("hidden");
};

const activateMobileCompanyDropdown = function () {
  mobileCompanyDropdownArrow.classList.add("active");
  mobileCompanyDropdownMenu.classList.remove("hidden");
};
const deactivateMobileCompanyDropdown = function () {
  mobileCompanyDropdownArrow.classList.remove("active");
  mobileCompanyDropdownMenu.classList.add("hidden");
};
const activateMobileConnectDropdown = function () {
    mobileConnectDropdownArrow.classList.add("active");
    mobileConnectDropdownMenu.classList.remove("hidden");
};
const deactivateMobileConnectDropdown = function () {
    mobileConnectDropdownArrow.classList.remove("active");
    mobileConnectDropdownMenu.classList.add("hidden");
};

const dropDown1Mobile = function () {
  if (!mobileCompanyDropdownMenu.classList.contains("hidden")) {
    deactivateMobileCompanyDropdown();
    activateMobileProductDropdown();
  } else if (!mobileConnectDropdownMenu.classList.contains("hidden")) {
    deactivateMobileConnectDropdown();
    activateMobileProductDropdown();
  } else if (!mobileProductDropdownMenu.classList.contains("hidden")) {
    deactivateMobileProductDropdown();
  } else {
    activateMobileProductDropdown();
  }
};
const dropDown2Mobile = function () {
  if (!mobileProductDropdownMenu.classList.contains("hidden")) {
    deactivateMobileProductDropdown();
    activateMobileCompanyDropdown();
  } else if (!mobileConnectDropdownMenu.classList.contains("hidden")) {
    deactivateMobileConnectDropdown();
    activateMobileCompanyDropdown();
  } else if (!mobileCompanyDropdownMenu.classList.contains("hidden")) {
    deactivateMobileCompanyDropdown();
  } else {
    activateMobileCompanyDropdown();
  }
};
const dropDown3Mobile = function () {
  if (!mobileProductDropdownMenu.classList.contains("hidden")) {
    deactivateMobileProductDropdown();
    activateMobileConnectDropdown();
  } else if (!mobileCompanyDropdownMenu.classList.contains("hidden")) {
    deactivateMobileCompanyDropdown();
    activateMobileConnectDropdown();
  } else if (!mobileConnectDropdownMenu.classList.contains("hidden")) {
    deactivateMobileConnectDropdown();
  } else {
    activateMobileConnectDropdown();
  }
};

mobileProductDropdownBtn.addEventListener("click", dropDown1Mobile);
mobileCompanyDropdownBtn.addEventListener("click", dropDown2Mobile);
mobileConnectDropdownBtn.addEventListener("click", dropDown3Mobile);

