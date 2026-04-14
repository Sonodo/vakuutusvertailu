import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Näin vertailemme — Metodologia',
  description:
    'Näin Valitse Vakuutus vertailee vakuutuksia: järjestys perustuu hintaan, kattavuuteen ja asiakastyytyväisyyteen — sama menetelmä jokaiselle tuotteelle.',
  alternates: {
    canonical: `${SITE_URL}/metodologia`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Näin vertailemme', href: '/metodologia' },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Näin vertailemme vakuutuksia
          </h1>

          <div className="prose max-w-none">
            <p>
              Vertailumme järjestys perustuu aina objektiivisiin kriteereihin —
              hintaan, kattavuuteen, omavastuuseen ja asiakastyytyväisyyteen.
              Sama menetelmä koskee jokaista vakuutusta.
            </p>

            <h2>Vertailujärjestys</h2>
            <p>
              Oletuksena vertailutulokset järjestetään <strong>edullisimmasta kalleimpaan</strong> hinta-arvion mukaan.
              Käyttäjä voi vaihtaa järjestyksen myös seuraaviin:
            </p>
            <ol>
              <li>
                <strong>Edullisin arvio ensin</strong> — matalin arvioitu vuosihinta ylimmäisenä
              </li>
              <li>
                <strong>Kattavin ensin</strong> — laajin turva ja eniten sisältyvät korvaukset
              </li>
              <li>
                <strong>Suurin markkinaosuus ensin</strong> — suurimman markkinaosuuden omaavat yhtiöt
              </li>
              <li>
                <strong>Tyytyväisimmät asiakkaat</strong> — korkein asiakastyytyväisyysarvosana
              </li>
            </ol>
            <p>
              <strong>Tärkeää:</strong> Affiliate- tai mainossopimus yhtiön kanssa{' '}
              <strong>ei vaikuta järjestykseen</strong>. Sama algoritmi koskee jokaista
              yhtiötä riippumatta siitä, saammeko linkistä komissiota.
            </p>

            <h2 id="nain-ansaitsemme">Näin ansaitsemme</h2>
            <p>
              {SITE_NAME} on ilmainen käyttäjille. Pidämme palvelun pystyssä kahdella tavalla:
            </p>
            <ol>
              <li>
                <strong>Affiliate-komissiot.</strong> Osa vakuutusyhtiöiden linkeistä on
                kumppanuuslinkkejä. Jos siirryt niiden kautta yhtiön sivulle ja otat
                vakuutuksen, saamme kiinteän komission. Sinulle hinta on täsmälleen
                sama kuin ilman linkkiämme — komissio tulee yhtiön omasta markkinointibudjetista.
              </li>
              <li>
                <strong>Mainonta.</strong> Saatamme näyttää sivustolla Google Adsense -mainoksia
                tai muuta display-mainontaa.
              </li>
            </ol>
            <p>
              Jokainen mainos- tai affiliate-linkki on merkitty selkeästi{' '}
              <strong>Mainos-merkinnällä</strong> ja käyttää{' '}
              <code>rel="sponsored nofollow"</code> -attribuutteja.
              Emme saa komissiota sisällöstä (artikkelit, oppaat, vertailutaulukot)
              eikä affiliate-sopimus vaikuta siihen, mitä yhtiöitä vertailuumme sisältyy
              tai missä järjestyksessä ne näkyvät.
            </p>
            <p>
              <em>Lähde: Käyttöehdot §4 — Affiliate- ja kumppanuussuhteet.</em>
            </p>

            <h2>Datalähteet ja hintojen laskenta</h2>
            <p>
              {SITE_NAME} esittää <strong>hinta-arvioita, ei sitovia tarjouksia</strong>.
              Hinta-arviot perustuvat:
            </p>
            <ul>
              <li>Vakuutusyhtiöiden julkisiin verkkosivuihin ja hintatietoihin</li>
              <li>Vakuutusyhtiöiden omiin verkkolaskureihin</li>
              <li>Kuluttajakyselyihin ja julkisiin tutkimuksiin</li>
              <li>Toimialan raportteihin ja tilastoihin</li>
            </ul>
            <p>
              Hinta-arviot päivitetään säännöllisesti. Jokainen vertailusivu
              näyttää viimeisimmän päivityspäivämäärän.
            </p>

            <h2>Asiakastyytyväisyysarvosanat</h2>
            <p>
              Asiakastyytyväisyysarvosanat perustuvat useisiin julkisiin lähteisiin:
            </p>
            <ul>
              <li>EPSI Rating Suomi — vuosittainen vakuutusalan tutkimus</li>
              <li>Suomen Asiakastieto / Alma Talent tutkimukset</li>
              <li>Vakuutusyhtiöiden omat julkaisemat NPS-luvut</li>
              <li>Kuluttajapalautteet ja arviot verkossa</li>
            </ul>
            <p>
              Laskemme painotetun keskiarvon näistä lähteistä ja esitämme sen asteikolla 0–10.
            </p>

            <h2>Kattavuusvertailu</h2>
            <p>
              Vertailemme vakuutustuotteiden kattavuutta seuraavien tekijöiden perusteella:
            </p>
            <ul>
              <li>Mitä tuotteen perusturva sisältää</li>
              <li>Mitä lisäturvia on saatavilla</li>
              <li>Omavastuun vaihtoehdot ja tasot</li>
              <li>Korvauksen ylärajat</li>
              <li>Erityisominaisuudet (esim. bonusturva, sijaisauto)</li>
            </ul>

            <h2>Vakuutusyhtiöiden valinta</h2>
            <p>
              Vertailuumme sisältyy <strong>Suomen merkittävimmät vakuutusyhtiöt</strong>,
              jotka kattavat yhdessä yli 95 % Suomen vakuutusmarkkinoista:
            </p>
            <ol>
              <li>Pohjola Vakuutus / OP (32,6 % markkinaosuus)</li>
              <li>LähiTapiola (26,4 %)</li>
              <li>If Vakuutus (21,1 %)</li>
              <li>Fennia (9,9 %)</li>
              <li>Turva (~3–4 %)</li>
              <li>Pohjantähti (~2–3 %)</li>
              <li>POP Vakuutus (~2–3 %)</li>
              <li>Aktia (&lt;2 %)</li>
              <li>Alandia (erikoisvakuuttaja)</li>
              <li>Säästöpankki Vakuutus</li>
            </ol>

            <h2>Tietojen todentaminen</h2>
            <p>
              Jokainen hintatieto ja kattavuustieto tarkistetaan ennen julkaisua.
              Todentamisprosessimme:
            </p>
            <ol>
              <li>Kerätään hintatiedot vakuutusyhtiöiden verkkolaskureista</li>
              <li>Ristiinajetaan usean lähteen tiedot</li>
              <li>Merkitään viimeinen tarkistuspäivämäärä jokaiselle tiedolle</li>
              <li>Päivitetään tiedot säännöllisesti ja aina kun hinnanmuutoksia havaitaan</li>
            </ol>

            <h2>Mitä emme tee</h2>
            <ul>
              <li>Ei dark patterneja</li>
              <li>Ei väärennettyjä arvosteluja</li>
              <li>Ei piilotettuja kustannuksia</li>
              <li>Emme myy käyttäjätietoja</li>
            </ul>

            <h2>Vastuuvapauslauseke</h2>
            <p>
              {SITE_NAME} on tietopalvelu, ei vakuutusneuvoja eikä vakuutusmeklari.
              Emme anna henkilökohtaista vakuutusneuvontaa. Hinta-arviot ovat
              suuntaa-antavia ja perustuvat julkisiin tietoihin. Lopullinen
              vakuutuksen hinta ja ehdot määräytyvät aina vakuutusyhtiön ja asiakkaan
              välisessä sopimuksessa.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/tietoa"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Tietoa meistä</h3>
              <p className="text-sm text-gray-600">
                Keitä me olemme ja miksi teemme tätä.
              </p>
            </Link>
            <Link
              href="/yhteystiedot"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Yhteystiedot</h3>
              <p className="text-sm text-gray-600">
                Ota yhteyttä — vastaamme mielellämme kysymyksiisi.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
