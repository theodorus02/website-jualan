function kirimWA(){
    const nama = document.getElementById("nama").value;
    const layanan = document.getElementById("layanan").value;
    const pesan = document.getElementById("pesan").value;
  
    const nomorWA = "6281377033153"; // GANTI NOMOR KAMU
  
    const text = `Halo, saya ${nama}. Saya tertarik dengan paket ${layanan}. ${pesan}`;
    window.open(
      "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(text),
      "_blank"
    );
  }
  
  function pesan(paket){
    const nomorWA = "6281377033153"; // NOMOR SAMA
    const text = `Halo, saya tertarik dengan paket ${paket}. Mohon info lebih lanjut.`;
    window.open(
      "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(text),
      "_blank"
    );
  }
  
