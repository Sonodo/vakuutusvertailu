import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tietoa meistä — Kuka tekee Valitse Vakuutuksen?',
  description:
    'Valitse Vakuutus auttaa suomalaisia löytämään sopivimman vakuutuksen. Järjestys perustuu hintaan, kattavuuteen ja asiakastyytyväisyyteen — sama menetelmä jokaiselle tuotteelle.',
  alternates: {
    canonical: `${SITE_URL}/tietoa`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Tietoa meistä', href: '/tietoa' },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Tietoa meistä
          </h1>

          <div className="prose max-w-none">
            <h2>Mikä on {SITE_NAME}?</h2>
            <p>
              {SITE_NAME} on puolueeton vakuutusvertailupalvelu, joka auttaa suomalaisia
              löytämään sopivimman vakuutuksen omiin tarpeisiinsa. Vertailemme{' '}
              <strong>Suomen merkittävimpien vakuutusyhtiöiden</strong> tuotteita,
              hintoja ja ehtoja yhdessä paikassa.
            </p>

            <h2>Missiomme</h2>
            <p>
              Autamme suomalaisia tekemään paremman vakuutusvalinnan. Vertailemme
              hintoja, kattavuutta ja asiakastyytyväisyyttä samalla menetelmällä
              jokaiselle tuotteelle — jotta sinä saat selkeän kuvan markkinasta
              yhdellä silmäyksellä ja voit päättää itse.
            </p>

            <h2>Mitä teemme</h2>
            <ul>
              <li>
                Vertailemme <strong>auto-, koti-, matka-, lemmikki-, henki-,
                tapaturma- ja lapsivakuutuksia</strong> kattavasti
              </li>
              <li>
                Hinta-arviot perustuvat <strong>julkisiin hintatietoihin ja
                vakuutusyhtiöiden verkkolaskureihin</strong> — suuntaa-antavia,
                eivät sitovia tarjouksia
              </li>
              <li>
                Järjestys perustuu hintaan, kattavuuteen ja asiakastyytyväisyyteen —
                sama menetelmä jokaiselle tuotteelle
              </li>
              <li>
                Emme ole vakuutusneuvoja emmekä vakuutusmeklari — olemme tietopalvelu
              </li>
              <li>
                Lopullinen päätös vakuutuksen ostamisesta on aina sinun ja vakuutusyhtiön
                välinen asia
              </li>
            </ul>

            <h2>Tietolähteemme</h2>
            <p>
              Hintatietomme perustuvat vakuutusyhtiöiden julkisiin hintatietoihin,
              verkkolaskureihin ja kuluttajakyselyihin. Päivitämme hintatiedot
              säännöllisesti. Jokainen vertailusivu näyttää viimeisimmän
              päivityspäivämäärän.
            </p>

            <h2 id="nain-ansaitsemme">Näin ansaitsemme rahaa</h2>
            <p>
              {SITE_NAME} on ilmainen käyttäjille. Pidämme palvelun pystyssä
              kahdella tavalla:
            </p>
            <ol>
              <li>
                <strong>Affiliate-komissiot.</strong> Osa vakuutusyhtiöiden linkeistä
                on kumppanuuslinkkejä. Kun siirryt niiden kautta yhtiön sivulle ja
                otat vakuutuksen, saamme kiinteän komission. Sinulle hinta on täsmälleen
                sama kuin ilman linkkiämme — komissio tulee yhtiön omasta markkinointibudjetista.
              </li>
              <li>
                <strong>Display-mainonta.</strong> Saatamme näyttää sivustolla
                Google Adsense -mainoksia tai muuta display-mainontaa.
              </li>
            </ol>
            <p>
              Jokainen mainos- tai affiliate-linkki on merkitty selkeästi{' '}
              <strong>Mainos-merkinnällä</strong>. Affiliate-sopimus ei vaikuta
              vertailujärjestykseen eikä siihen, mitä yhtiöitä vertailuumme sisältyy.
              Emme saa komissiota sisällöstä, oppaista tai vertailutaulukoista.
            </p>

            <h2>Sääntely ja rooli</h2>
            <p>
              {SITE_NAME} toimii <strong>tietopalveluna</strong>, ei vakuutusneuvojana
              eikä vakuutusmeklarina. Emme ole rekisteröityneet Finanssivalvontaan
              vakuutusedustajaksi, koska emme välitä vakuutussopimuksia emmekä anna
              henkilökohtaista vakuutusneuvontaa. Tarjoamme informaatiota ja työkaluja,
              joiden avulla voit itse verrata markkinaa ja tehdä päätöksen.
            </p>

            <h2>Arvomme</h2>
            <ul>
              <li>
                <strong>Käyttäjä ensin:</strong> jokainen päätös optimoidaan sen
                mukaan, mikä palvelee kuluttajaa parhaiten
              </li>
              <li>
                <strong>Puolueettomuus:</strong> sama menetelmä jokaiselle tuotteelle,
                ei suosikkeja, ei piilotettuja tuloksia
              </li>
              <li>
                <strong>Ajantasaisuus:</strong> tarkistamme hintatiedot säännöllisesti,
                jotta näet aina ajantasaisen kuvan markkinasta
              </li>
              <li>
                <strong>Koulutus:</strong> autamme ymmärtämään vakuutuksia ennen
                ostopäätöstä — selkokielisiä oppaita ja vertailuja
              </li>
              <li>
                <strong>Yksityisyyden suoja:</strong> emme kerää henkilötietoja
                vertailun tekemiseen
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/metodologia"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Näin vertailemme</h3>
              <p className="text-sm text-gray-600">
                Lue miten vertailujärjestys ja pisteet lasketaan.
              </p>
            </Link>
            <Link
              href="/tietosuoja"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Tietosuoja</h3>
              <p className="text-sm text-gray-600">
                Miten käsittelemme tietojasi ja mitä evästeitä käytämme.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
