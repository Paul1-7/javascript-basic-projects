const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener("click", () => {
  let ramdomHex = '#'
  for (let i = 0; i < 6; i++) {
    ramdomHex += hex[getRandomNumber()]
  }
  console.log({ramdomHex});
  document.body.style.backgroundColor = ramdomHex;
  color.textContent = ramdomHex;
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}