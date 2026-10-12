# Müşteriye sorulacaklar – Pass Autoservice

Sitede şu an placeholder olan her şey burada. Sitede sarı çizgili kutuyla işaretli alanlar (`class="ph"`) bunlar. Site dosyaları `public/` klasöründe.
Bilgi gelince değeri değiştir, ardından o elemandan `ph` class'ını sil.
Kalan placeholder'ları bulmak için: `cd public && grep -rn 'class="[^"]*ph\|0000\|Muster\|\[' *.html`

## 1. İletişim (en önemlisi)
| Alan | Şu an | Nerede |
|---|---|---|
| Telefon (görünen format) | `0000 / 000 000` | index.html: header, kontakt; impressum; datenschutz |
| Telefon (link, +49 formatı) | `tel:+4900000000000` | index.html: 5 yerde (header, hero, kontakt ×2, mobil bar) |
| WhatsApp numarası | `wa.me/4900000000000` | index.html: hero, kontakt, mobil bar. **WhatsApp kullanıyor mu? Kullanmıyorsa butonları kaldırırız.** |
| Adres (sokak, no, PLZ, şehir) | `Musterstraße 1, 00000 Musterstadt` | index.html: kontakt, JSON-LD, 3× Google Maps linki; impressum; datenschutz |
| Şehir | `[Stadt]` | index.html: `<title>`, meta description, og:title, hero kicker, über uns |
| E-posta | `info@pass-autoservice.de` | Cloudflare Email Routing ile müşterinin mevcut mailine yönlendirilecek. **Hangi adrese yönlensin?** |

## 2. Açılış saatleri
Şu an: Pzt–Cum 08:00–18:00, Cmt 09:00–13:00, Paz kapalı (uydurma).
- Gerçek saatler? Öğle arası var mı?
- index.html'de **iki yerde** var: görünen tablo ve JSON-LD (Google için). İkisi aynı olmalı.

## 3. Hizmetler (Leistungen)
Şu an 8 tipik hizmet var: Inspektion & Wartung, Ölwechsel, Bremsen, Reifenservice, HU/AU-Service, Klimaservice, Fehlerdiagnose, Batterie & Elektrik.
- Hangileri gerçekten yapılıyor, eksik olan ne var? (Örn. Auspuff, Kupplung, Zahnriemen, Unfallinstandsetzung, Achsvermessung, Lack…)
- **HU/AU:** TÜV/DEKRA yerinde muayeneye geliyor mu, yoksa sadece hazırlık mı yapılıyor? Metni buna göre düzeltiriz.
- **Klimaservice:** Klima dolum cihazı var mı?
- Üstteki kayan şeritte (ticker) aynı liste var, onu da güncelle.
- Reifeneinlagerung (lastik saklama) yapıyor mu? Yapıyorsa iyi bir satış noktası.

## 4. Hakkımızda (Über uns)
- Firma ne zamandan beri var (`[Jahr]`)?
- Sahibinin adı (`[Vorname Nachname]`)
- Ünvanı: **Kfz-Meister mi?** (Meister'se hem metinde hem Impressum'da belirtelim, güven veriyor)
- Kaç yıllık tecrübe (`[XX] Jahre Erfahrung`)?
- Ekip kaç kişi? Sitede kendini nasıl tanıtmak istiyor, birkaç cümle

## 5. Doğrulanması gereken iddialar
Sitede şu an yazıyor, müşteri onaylamalı:
- „Alle Marken" (tüm markalara bakılıyor mu?)
- „Kosten vorab besprochen" (fiyat işe başlamadan önce konuşuluyor mu?)
- „Herstellergarantie bleibt erhalten" (üretici talimatlarına göre bakım yapılıyor mu?)
- „Termine nach telefonischer Absprache" (randevu sadece telefonla mı alınıyor, randevusuz da gelinebiliyor mu?)

## 6. Görseller
| Görsel | Format | Nereye |
|---|---|---|
| Atölye fotoğrafı (dış cephe veya içerisi) | Dikey 4:5, en az 1200×1500 | Hero |
| Sahibi veya ekip fotoğrafı | Yatay 5:4, en az 1200×960 | Über uns |
| Logo (varsa) | SVG veya yüksek çözünürlüklü PNG | Şu an plaka tarzı yazı logosu var. Gerçek logo varsa onu koyarız. |

Telefonla çekilmiş, iyi ışıkta fotoğraflar yeterli. Stok fotoğraf kullanmayalım, yerel atölyede gerçek fotoğraf güven veriyor.

## 7. Impressum (yasal zorunluluk)
- Firma türü: Einzelunternehmen mi, GmbH mı? GmbH'ysa Geschäftsführer, Handelsregister no ve Registergericht da gerekiyor.
- Sahibinin tam adı
- USt-IdNr. (varsa)
- Handwerksrolle kaydı / hangi Handwerkskammer'e bağlı?

## 8. Datenschutz
- Taslak hazır. Yayına almadan önce eRecht24 veya datenschutz-generator.de ile oluşturulan metinle değiştir ya da kontrol et.
- Sorumlu kişi bilgileri Impressum ile aynı.

## 9. Domain ve hesaplar (toplantıda)
- [ ] Domain: `pass-autoservice.de` (satın almadan önce boş olduğunu tekrar kontrol et). Alan adı değişirse `index.html` (canonical, og:url, JSON-LD), `robots.txt` ve `sitemap.xml` da güncellenmeli.
- [ ] GoDaddy hesabı: müşterinin maili, 2FA, auto-renew açık, ek paketler kaldırılmış, **yenileme fiyatı kontrol edilmiş**
- [ ] Nameserver'lar Cloudflare'e çevrilmiş
