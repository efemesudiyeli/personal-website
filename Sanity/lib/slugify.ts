export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Türkçe karakterleri değiştir
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    // Diğer özel karakterleri kaldır
    .replace(/\s+/g, '-') // boşlukları tire ile değiştir
    .replace(/[^\w\-]+/g, '') // kelime karakterleri ve tire dışındakileri kaldır
    .replace(/\-\-+/g, '-') // çoklu tireleri tek tire yap
    .replace(/^-+/, '') // başındaki tireleri kaldır
    .replace(/-+$/, '') // sonundaki tireleri kaldır
}
