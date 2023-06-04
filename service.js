function randomArray(arr) {
  let newArray = arr.slice(); // Menggunakan slice() untuk membuat salinan array baru

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Menukar posisi elemen menggunakan destructuring assignment
  }

  return newArray;
}

function generateRandomNumbers(count = 6) {
  let result = [];

  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let formattedNum = randomNum.toString().padStart(3, "0");
    result.push(`music-${formattedNum}`);
  }

  return result;
}

function getPlaylist() {
  return [
    {
      name: "recomendation",
      ids: generateRandomNumbers(6),
    },
    {
      name: "popular",
      ids: generateRandomNumbers(6),
    },
    {
      name: "mood",
      ids: generateRandomNumbers(6),
    },
  ];
}

module.exports = {
  randomArray,
  getPlaylist,
};
