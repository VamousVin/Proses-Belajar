// Merubah style menggunakan js
const bg = document.getElementById("bg");
const input = document.getElementById("input");

function konfirm() {
  bg.style.backgroundColor = input.value;
}

// Merubah style menggunakan js menggunakan opsi
const bg2 = document.getElementById("bg2");
const input2 = document.getElementById("input2");
const judul2 = document.getElementById("judul2");
const penjelasan2 = document.getElementById("penjelasan2");

function konfirm2() {
  const opsi = select.options.selectedIndex;
  console.log("berhasil");

  switch (opsi) {
    case 1:
      bg2.style.backgroundColor = input2.value;
      break;
    case 2:
      judul2.style.color = input2.value;
      break;
    case 3:
      penjelasan2.style.color = input2.value;
      break;
  }
}
