import DonationLightbox from "./app/app";
import "./scss/main.scss";
//run();
const initDonationLightbox = () => {
  window.DonationLightbox = DonationLightbox;
  let donationLightbox = new DonationLightbox();
  // Set default options
  if (typeof window.DonationLightboxOptions !== "undefined") {
    donationLightbox.setOptions(window.DonationLightboxOptions);
  }
};

if (document.readyState === "complete") {
  initDonationLightbox();
} else {
  window.addEventListener("load", initDonationLightbox);
}
