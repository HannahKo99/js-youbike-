// 程式碼寫這裡
// document.addEventListener("DOMContentLoaded", () => {



const form = document.querySelector("#searchForm");

const keyword = document.querySelector("#searchKeyword");

// const btn = document.querySelector("#btn")

// 表單有預設的summit，要先停止預設:用preventDefault
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = keyword.value.trim();
  // trim:刪除空白字元
  const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  if (query != "") {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((stations) => {

        const list = document.querySelector(".siteList")
        list.innerHTML = ""

        stations
        .filter((station) => {
          return station.ar.includes(query)})
        .forEach((station) => {
          const item = `<li class="list-group-item fs-5">
          <i class="fas fa-bicycle"></i>
          ${station.sna.replace("YouBike2.0_", "")}(${station.available_rent_bikes})<br>
          <small class="text-muted">${station.ar}</small>
          </li>`

          list.insertAdjacentHTML("beforeend", item)

        });
      });
  }
});

// fetch(url)
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((stations) => {
//         const searchResult = stations
//         .fliter((station) => {
//             return station.sna
//         })

//     })
