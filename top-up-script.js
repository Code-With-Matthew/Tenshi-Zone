const gameData = {
  'valorant': {
    title: 'Valorant',
    publisher: 'Riot Games',
    cover: 'img/Top-up Valo.jpg',
    description: 'Top up Valorant Points dalam hitungan detik! Cukup masukkan Riot ID Anda, pilih nominal yang diinginkan, selesaikan pembayaran, dan Points akan langsung ditambahkan ke akun Valorant Anda.',
    currencyName: 'Points',
    currencyIcon: 'img/Valo.png',
    denominations: [
      { amount: '125 Points', price: 'Rp 15.000' },
      { amount: '420 Points', price: 'Rp 50.000' },
      { amount: '700 Points', price: 'Rp 80.000' },
      { amount: '1375 Points', price: 'Rp 150.000' },
      { amount: '2400 Points', price: 'Rp 250.000' },
      { amount: '4000 Points', price: 'Rp 400.000' },
    ]
  },
  'mobile-legends': {
      title: 'Mobile Legends',
      publisher: 'Moonton', 
      cover: 'img/Top-up ML.jpg',
      description: 'Top up Diamond ML hanya dalam hitungan detik! Cukup masukan User ID & Server MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran, dan Diamond akan langsung masuk ke akun Mobile Legends Anda.',
      currencyName: 'Diamonds',
      currencyIcon: 'img/FF-ML.png',
      denominations: [
        { amount: '86 Diamonds', price: 'Rp 25.000' },
        { amount: '172 Diamonds', price: 'Rp 50.000' },
        { amount: '257 Diamonds', price: 'Rp 75.000' },
        { amount: '514 Diamonds', price: 'Rp 150.000' },
        { amount: '706 Diamonds', price: 'Rp 200.000' },
        { amount: '1050 Diamonds', price: 'Rp 300.000' },
    ]
  },
  'genshin-impact': {
      title: 'Genshin Impact',
      publisher: 'HoYoverse',
      cover: 'img/Top-up GI.jpg',
      description: 'Beli Genesis Crystals untuk Genshin Impact dalam sekejap! Masukkan UID dan Server Anda, pilih nominal yang diinginkan, bayar, dan crystals akan langsung dikreditkan ke akun Anda.',
      currencyName: 'Genesis Crystals',
      currencyIcon: 'img/GI.png',
      denominations: [
        { amount: '60 Genesis Crystals', price: 'Rp 16.000' },
        { amount: '300 + 30 Crystals', price: 'Rp 79.000' },
        { amount: '980 + 110 Crystals', price: 'Rp 249.000' },
        { amount: '1980 + 260 Crystals', price: 'Rp 479.000' },
    ]
  },
  'pubg-mobile': {
    title: 'PUBG Mobile',
    publisher: 'Tencent Games',
    cover: 'img/Top-up PUBGM.jpg',
    description: 'Isi ulang UC PUBG Mobile dengan mudah dan cepat. Cukup masukkan ID Karakter Anda, pilih jumlah UC, dan selesaikan pembayaran. UC akan segera masuk ke akun PUBG Mobile Anda.',
    currencyName: 'UC',
    currencyIcon: 'img/PUBGM.png',
    denominations: [
      { amount: '60 UC', price: 'Rp 15.000' },
      { amount: '325 UC', price: 'Rp 75.000' },
      { amount: '660 UC', price: 'Rp 150.000' },
      { amount: '1800 UC', price: 'Rp 450.000' },
    ]
  },
  'free-fire': {
    title: 'Free Fire',
    publisher: 'Garena',
    cover: 'img/Top-up FF.jpg',
    description: 'Top up Diamond Free Fire secara instan! Masukkan ID Pemain Anda, pilih nominal Diamond, lakukan pembayaran, dan nikmati item-item keren di dalam game.',
    currencyName: 'Diamonds',
    currencyIcon: 'img/FF-ML.png',
    denominations: [
      { amount: '70 Diamonds', price: 'Rp 10.000' },
      { amount: '140 Diamonds', price: 'Rp 20.000' },
      { amount: '355 Diamonds', price: 'Rp 50.000' },
      { amount: '720 Diamonds', price: 'Rp 100.000' },
    ]
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const gameKey = params.get('game') || 'mobile-legends'; 
  const selectedGame = gameData[gameKey];

  document.getElementById('game-cover').src = selectedGame.cover;
  document.getElementById('game-title').textContent = selectedGame.title;
  document.getElementById('game-publisher').textContent = selectedGame.publisher;
  document.getElementById('game-description').textContent = selectedGame.description;
  
  const denominationsGrid = document.getElementById('denominations-grid');
  denominationsGrid.innerHTML = ''; 
  selectedGame.denominations.forEach(item => {
      const card = document.createElement('div');
      card.className = 'selectable-card p-4 rounded-lg cursor-pointer text-center';
      card.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center">
          <img src="${selectedGame.currencyIcon}" alt="${selectedGame.currencyName}" class="currency-icon w-12 h-12 object-contain mb-2">
          <p class="font-bold">${item.amount} ${selectedGame.currencyName}</p>
          <p class="text-sm text-gray-400 mt-1">${item.price}</p>
        </div>
      `;
      denominationsGrid.appendChild(card);
  });

const selectableCards = document.querySelectorAll('.selectable-card');
selectableCards.forEach(card => {
    card.addEventListener('click', () => {
        const parent = card.parentElement;
        parent.querySelectorAll('.selectable-card').forEach(c => c.classList.remove('selected'));
        
        card.classList.add('selected');
    });
});
lucide.createIcons();
});
