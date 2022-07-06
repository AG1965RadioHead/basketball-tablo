let homeCount = 0
let guestCount = 0
let countHome = document.getElementById("home-count")
let countGuest = document.getElementById("guest-count")

function increment1() {
  homeCount += 1
  countHome.textContent = homeCount
}

function increment2() {
  homeCount += 2
  countHome.textContent = homeCount
}

function increment3() {
  homeCount += 3
  countHome.textContent = homeCount
}

function incrementG1() {
  guestCount += 1
  countGuest.textContent = guestCount
}

function incrementG2() {
  guestCount += 2
  countGuest.textContent = guestCount
}

function incrementG3() {
  guestCount += 3
  countGuest.textContent = guestCount
}
