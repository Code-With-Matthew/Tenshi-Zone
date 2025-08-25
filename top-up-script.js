const gameData = {
  'valorant': {
    title: 'Valorant',
    publisher: 'Riot Games',
    cover: 'img/Top-up Valo.jpg',
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
  const denominationsGrid = document.getElementById('denominations-grid');
  denominationsGrid.innerHTML = ''; 
  selectedGame.denominations.forEach(item => {
      const card = document.createElement('div');
      card.className = 'selectable-card p-4 rounded-lg cursor-pointer text-center';
      card.innerHTML = `
        <p class="font-bold">${item.amount}</p>
        <p class="text-sm text-gray-400">${item.price}</p>
      `;
      denominationsGrid.appendChild(card);
  });
const selectableCards = document.querySelectorAll('.selectable-card');
selectableCards.forEach(card => {
    card.addEventListener('click', () => {
        // Hapus class 'selected' dari semua kartu di dalam parent yang sama
        const parent = card.parentElement;
        parent.querySelectorAll('.selectable-card').forEach(c => c.classList.remove('selected'));
        
        // Tambahkan class 'selected' ke kartu yang diklik
        card.classList.add('selected');
    });
});
lucide.createIcons();
});
