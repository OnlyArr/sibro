const tombol = document.getElementById('tombol');
const teksCss = document.getElementById('teks-css');

//variabel komentar

const kirim = document.getElementById('kirim');
const inputNama = document.getElementById('input-nama');
const inputKomentar = document.getElementById('input-komentar');
const daftarKomentar =document.getElementById('daftar-komentar');

let komentar =JSON.parse(localStorage.getItem('komentar')) || [];

tombol.addEventListener('click', () => {
      // 3. Ubah sesuatu
      teksCss.textContent = 'sayang sinbro sayang sibro sayang sibro sayang sibro';
      teksCss.style.color = '#353c4b';
      teksCss.style.fontWeight = 'bold';
    });

    //fungsi komentar

function tampilkan(nama, isi) {
    const kotak = document.createElement('div');
    kotak.className = 'komentar-item';

    const judul = document.createElement('strong');
    judul.textContent = nama;

    const teks = document.createElement('p');
    teks.textContent = isi;

    kotak.append(judul, teks);
    daftarKomentar.prepend(kotak);
}

komentar.forEach(k => tampilkan(k.nama, k.isi));

kirim.addEventListener('click', () => {
    const nama = inputNama.value.trim();
    const isi = inputKomentar.value.trim();

    if (nama === '' || isi === '') {
        alert('Nama dan komentar harus diisi');
        return;
    }

    komentar.push({ nama, isi });
    localStorage.setItem('komentar', JSON.stringify(komentar));

    tampilkan(nama, isi);
    inputNama.value = '';
    inputKomentar.value = '';
});
