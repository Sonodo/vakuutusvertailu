import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_URL } from '@/lib/constants';
import { SITE_CONFIG } from '@/components/disclosure';

const SITE_NAME = SITE_CONFIG.siteName;

export const metadata: Metadata = {
  title: 'Luotettavuus ja rahoitus — näin ansaitsemme rahaa',
  description: `Miten ${SITE_NAME} valitsee vakuutusyhtiöt, järjestää tarjoukset ja ansaitsee rahaa. Avoin selvitys palkkioista, järjestysalgoritmista ja siitä mitä emme tee.`,
  alternates: { canonical: `${SITE_URL}/luotettavuus` },
  robots: { index: true, follow: true },
};

export default function LuotettavuusPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 sm:py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Toimituksen periaatteet
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Luotettavuus ja rahoitus
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Tämä sivu kertoo avoimesti, miten {SITE_NAME} hankkii tietonsa,
              järjestää vakuutustarjoukset ja ansaitsee rahaa. Tavoitteemme on
              rehellinen, kuluttajan etua palveleva vertailu.
            </p>
          </header>

          <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Mistä vakuutusyhtiöt tulevat</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Keräämme vakuutusyhtiöiden hinta- ja ehtotiedot suoraan heidän
              julkisilta sivuiltaan ja Finanssivalvonnan rekistereistä.
              Hinta-arviot perustuvat julkisiin hinnoittelutyökaluihin —
              lopullinen hinta selviää vasta yhtiön omasta tarjouksesta.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Sisällytämme listalle <strong>kaikki Suomen merkittävät
              vakuutusyhtiöt</strong> riippumatta siitä, onko meillä heidän
              kanssaan kaupallinen sopimus: Pohjola/OP, LähiTapiola, If, Fennia,
              Turva, Pohjantähti, POP Vakuutus, Aktia, Alandia ja Säästöpankki
              Vakuutus.
            </p>
          </section>

          <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Järjestysalgoritmi</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Vakuutustarjoukset järjestetään{' '}
              <strong>oletuksena syöttämiesi tietojen perusteella</strong>{' '}
              ({SITE_CONFIG.rankingCriteria}). Algoritmi <strong>ei</strong>{' '}
              ota huomioon palkkion suuruutta. Käyttäjä voi vaihtaa
              järjestysperusteen vapaasti.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Kumppanitarjoukset on merkitty selkeästi pillillä{' '}
              <span className="rounded-full bg-[#E8EEF6] px-2 py-0.5 text-[11px] font-semibold text-[#3B5266]">
                Kumppanitarjous
              </span>
              . Muut kantavat merkintää{' '}
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                Markkinahinta
              </span>
              .
            </p>
          </section>

          <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Mitä emme tee</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Emme nosta tarjouksia esiin palkkion suuruuden
                  perusteella.</strong> Pay-for-placement on meille kielletty.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Emme piilota kilpailijoita.</strong> Vertailussa
                  esiintyvät kaikki suuret yhtiöt — myös ne, joiden kanssa
                  meillä ei ole sopimusta.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Emme anna vakuutusneuvontaa.</strong> Olemme tieto- ja
                  vertailupalvelu (IDD-direktiivin mukainen aggregaattori), emme
                  vakuutusasiamies.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  <strong>Emme välitä henkilötietojasi vakuutusyhtiöille</strong>{' '}
                  ennen kuin teet tietoisen klikkauspäätöksen.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Päivitysväli</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Vakuutustuotteiden hinta-arviot ja kattavuustiedot tarkistetaan
              vähintään neljännesvuosittain (jokaisen yhtiön julkisten
              hinnoittelutyökalujen kautta). Muutokset ehtoihin päivitetään heti
              kun ne tulevat tietoomme. Jokaisella vertailusivulla näkyy
              &quot;Päivitetty&quot;-päivämäärä.
            </p>
          </section>

          <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Miten ansaitsemme rahaa</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Saamme komission osasta vakuutusyhtiöiden kanssa solmituista
              sopimuksista, kun klikkaat kumppanin tarjousta ja päädyt tekemään
              vakuutuksen. Tämä komissio ei vaikuta sinun maksamaasi
              vakuutusmaksuun. Ilman tätä tulonlähdettä emme voisi ylläpitää
              maksutonta vertailupalvelua.
            </p>
          </section>

          <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy">Onko jotain epäselvää?</h2>
            <p className="mt-2 text-gray-700">
              Lue lisää{' '}
              <Link href="/metodologia" className="text-teal underline hover:text-teal-dark">
                vertailumenetelmästä
              </Link>{' '}
              tai{' '}
              <Link href="/yhteystiedot" className="text-teal underline hover:text-teal-dark">
                ota yhteyttä
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
