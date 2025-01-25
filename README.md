https://web2-projekt4-1.onrender.com
Svi zahtjevi su ispunjeni

interpolation/one-way binding - na više mjesta, npr. views/SeriesView.vue 23. linija
two-way binding - views/EditSeries.vue linije 4-25 
methods - views/EditSeries.vue linija 55
computed properties - views/SeriesView.vue 12. linija
barem jedan scoped style - na svakom viewu
koristiti barem jedan lifecycle hook - views/SeriesView.vue 9. linija
routing (više stranica) - router/index.js
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - na /series, /series/id, /edit/id
dinamičko usmjeravanje s 404 stranicom ("catch all") - views/NotFoundView.vue file
(barem) dvije komponente
komponenta bez stanja, koristiti properties
komponenta sa stanjem
barem jedna komponenta mora emitirati barem jedan event - components/MarkAsWathched.vue linija 10
store (Pinia) -  stores/series.js
asinkroni dohvat podataka s backenda, možete: -  stores/series.js, dohvaća se seriesList iz Mockyja
koristiti Firebase ili Back4App, Mocky, itd.
vlastiti storage, ili
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)




