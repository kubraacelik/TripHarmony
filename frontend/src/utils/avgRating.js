const calculateAvgRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return { avgRating: 0, totalRating: 0 }; // Eğer yorum yoksa 0 döndür
  }

  const totalRating = reviews.reduce((acc, item) => {
    const rating = Number(item.rating);
    return acc + (isNaN(rating) ? 0 : rating); // Geçersiz rating'leri 0 olarak kabul et
  }, 0);

  const avgRating = reviews.length ? (totalRating / reviews.length).toFixed(1) : 0; // Eğer yorum varsa, ortalama hesapla, yoksa 0 döndür

  return {
    avgRating, // Ortalama 1 ondalıklı olarak göster
    totalRating
  };
};

export default calculateAvgRating;
