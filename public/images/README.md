# Slike za novo spletno stran (glasbazaporoko.si)

Ta mapa vsebuje vse fotografije, ki jih uporablja spletna stran. Izvor je
`glasbazaporoko.si` (WordPress media), s katero se trenutno mapa še **NI**
samodejno sinhronizirala — to je treba storiti enkrat.

## Hitri začetek (priporočeno)

Iz omrežja, ki ima dostop do `glasbazaporoko.si`, zaženi:

```bash
npm run download:assets
```

Skripta v `scripts/download-assets.mjs` bo prenesla vseh **14** datotek v to
mapo. Idempotentna je — že prenesene datoteke preskoči.

## Ročni prenos (če skripta ne uspe)

Vsak vnos spodaj povezuje **lokalno ime datoteke** ⇄ **izvorni URL** na živi
spletni strani in **kje se prikaže** v novi kodi. Datoteko shrani z imenom v
spodnji tabeli — kód je nanj že vezana.

| Lokalna pot | Vir (klikni za prenos) | Uporabljeno v |
| --- | --- | --- |
| `hero-glasba-za-poroko.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki-1.jpg | Hero — glavna vizualna fotografija desno |
| `barbara-zalaznik-portret.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/glasba-na-poroki-barbara.jpg | Sekcija „O meni" — portret |
| `galerija-1-porocni-obred.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/Poroka-violina-1.jpg | Galerija — velika ploščica |
| `galerija-2-civilni-obred.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/glasba-na-poroki-12.jpg | Galerija |
| `galerija-3-sprejem-svatov.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/glasba-za-poroko-15.jpg | Galerija |
| `galerija-4-prvi-ples.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/glasba-za-poroko-17.jpg | Galerija (široka) + ozadje Final CTA |
| `galerija-5-elektricna-violina.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/violinistka-novoletna-zabava.jpg | Galerija |
| `galerija-6-poroka.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/glasba-na-poroki-14.jpg | Galerija |
| `nastop-1.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/Barbara-Zalaznik-Matos-10.jpg | Video sekcija — poster #1 |
| `nastop-2.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/barbara-zalaznik-events.jpg | Video sekcija — poster #2 |
| `nastop-3.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/250239805_4849407348426371_3358522333113619773_n.jpg | Video sekcija — poster #3 |
| `ambient-header.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2020/11/header-background-scaled-1.jpg | Mnenja — diskretno ozadje |
| `ambient-footer.jpg` | https://www.glasbazaporoko.si/wp-content/uploads/2020/11/footer-background-scaled-1.jpg | (rezerva) |
| `logo-bz.png` | https://www.glasbazaporoko.si/wp-content/uploads/2022/11/LOGO-BZ.png | (neobvezno — header trenutno uporablja eleganten SVG) |

### Postopek za ročni prenos

1. V brskalniku odpri zgornji URL.
2. Desni klik na fotografijo → **„Shrani sliko kot…"**.
3. Datoteko poimenuj **točno tako**, kot je navedeno v stolpcu „Lokalna pot".
4. Shrani jo v `public/images/`.

## Videi

Mapa `/public/videos/` je pripravljena.

Stran podpira **dva načina** za nastope (videz se ne spremeni; v `app/lib/media.ts`
samo nastavi `youtubeId` ali `localFile`):

1. **YouTube/Vimeo embed** (priporočeno za hitrost in SEO):
   - V `app/lib/media.ts` nastavi `VIDEOS[i].youtubeId = "..."` (ID iz URL-ja
     `https://youtu.be/<ID>`).
   - Stran avtomatsko prikaže `iframe` z `youtube-nocookie.com` (brez
     piškotkov, GDPR-friendly).
2. **Lokalna datoteka** (če videov ni na YouTube):
   - Datoteke shrani v `public/videos/` z imenom (npr.) `nastop-1.mp4`.
   - V `app/lib/media.ts` nastavi `VIDEOS[i].localFile = "nastop-1.mp4"`.

## Vse poti so centralizirane

Če preimenuješ datoteke ali zamenjaš slike, popravi samo en file:
**`app/lib/media.ts`**. Vsi `<Image>` v aplikaciji uporabljajo te konstante,
zato se sprememba odraža povsod.

## SEO alt teksti

Vsak `MediaAsset` ima `alt` v slovenščini z relevantnimi ključnimi besedami
(*glasba za poroko*, *poročna glasba*, *glasbenik za poroko*, *glasba za
poročni obred*, *poroka Slovenija*). Po potrebi jih lahko še dodatno
prilagodiš v `app/lib/media.ts`.
