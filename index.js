const span = document.querySelector("span");
const img = document.querySelector("img");
const icons = document.querySelectorAll('i');
console.log(icons);

const data = fetch(`https://randomuser.me/api/`);

data.then(function (x) {
  console.log(x);
  const json = x.json();
  return json;
})
  .then(function (json) {
    const user = json;
    console.log(user);
    const cell = user.results[0].cell
    console.log(cell);
    const pic = user.results[0].picture.large;
    console.log(pic);
    img.src = `${pic}`;
    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener('mouseenter', function (e) {
        console.log(e.target.className);
        if (e.target.className === `fas fa-user`) {
          span.innerHTML = `${cell}`;
          icons[0].style.color = `red`
        } else if (e.target.className === `far fa-envelope`) {
          span.innerHTML = `${pic}`;
        } else {
          span.innerHTML = `ok`;
        }
      })
    }
  });


