'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import './special-promo.css';

const dishes = [
  {
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=86&w=1100&auto=format&fit=crop',
    alt: 'Nasi goreng rempah dengan udang panggang',
    label: 'Nasi Goreng Pesisir',
  },
  {
    src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=86&w=1100&auto=format&fit=crop',
    alt: 'Mie berbumbu dengan tomat dan rempah segar',
    label: 'Mie Rempah Nusantara',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=86&w=1100&auto=format&fit=crop',
    alt: 'Sajian laut dengan sayuran segar',
    label: 'Laut & Kebun',
  },
];

const promos = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=88&w=1800&auto=format&fit=crop',
    alt: 'Meja makan elegan dengan sajian spesial',
    kicker: 'Pilihan minggu ini',
    title: 'Jamuan Senja untuk Berdua',
    description: 'Nikmati menu berurutan yang merangkai rasa pesisir, kebun, dan rempah Nusantara dalam satu malam yang hangat.',
    note: 'Senin–Kamis, mulai pukul 17.00',
  },
  {
    image: 'https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?q=88&w=1800&auto=format&fit=crop',
    alt: 'Suasana makan malam yang hangat',
    kicker: 'Untuk momen bersama',
    title: 'Perayaan di Meja Nusantara',
    description: 'Paket berbagi untuk keluarga dan sahabat dengan hidangan tengah meja, pencuci mulut, dan racikan minuman khas.',
    note: 'Tersedia untuk empat orang atau lebih',
  },
  {
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=88&w=1800&auto=format&fit=crop',
    alt: 'Interior restoran dengan meja yang tertata',
    kicker: 'Pengalaman akhir pekan',
    title: 'Brunch Rasa Kepulauan',
    description: 'Akhir pekan yang santai dengan pilihan sajian gurih, manis, dan segar dari berbagai sudut kepulauan.',
    note: 'Sabtu–Minggu, pukul 10.00–14.00',
  },
];

const stories = [
  { title: 'Cerita di balik rempah pilihan kami', category: 'Dari Dapoer', image: dishes[0] },
  { title: 'Menghidangkan laut dengan cara yang lebih segar', category: 'Bahan Lokal', image: dishes[1] },
  { title: 'Satu meja, banyak cerita Nusantara', category: 'Pengalaman', image: dishes[2] },
];

export default function SpecialPromoPage() {
  const [activePromo, setActivePromo] = useState(0);
  const promo = promos[activePromo];

  const changePromo = (direction: number) => {
    setActivePromo((current) => (current + direction + promos.length) % promos.length);
  };

  return (
    <main className="promo-page" id="top">
      <section className="promo-hero" aria-labelledby="promo-page-title">
        <Image
          className="promo-hero-image"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=90&w=2200&auto=format&fit=crop"
          alt="Suasana hangat restoran Dapoer Nusantara"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="promo-hero-shade" />

        <div className="promo-hero-content">
          <p className="promo-eyebrow">Rasa Nusantara, disajikan istimewa</p>
          <h1 id="promo-page-title">Momen istimewa,<br />rasa yang berkesan</h1>
          <p className="promo-lead">
            Temukan pilihan jamuan musiman untuk makan malam hangat, perayaan kecil,
            dan akhir pekan yang ingin Anda nikmati lebih lama.
          </p>
          <div className="promo-actions">
            <a href="#reservation" className="promo-pill promo-pill-primary">
              Reservasi sekarang <ArrowRight aria-hidden="true" size={19} />
            </a>
            <Link href="/menu" className="promo-pill">
              Lihat menu <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>
        <div className="promo-hero-curve" aria-hidden="true" />
      </section>

      <section className="promo-dishes" aria-labelledby="signature-heading">
        <p className="section-kicker">Pilihan dari dapoer</p>
        <div className="promo-dish-grid">
          {dishes.map((dish, index) => (
            <figure className={`promo-dish-card dish-${index + 1}`} key={dish.src}>
              <Image src={dish.src} alt={dish.alt} fill sizes="(max-width: 760px) 31vw, 340px" unoptimized />
              <figcaption>{dish.label}</figcaption>
            </figure>
          ))}
        </div>

        <a className="promo-title-pill" href="#featured" id="signature-heading">
          Jelajahi promo <ArrowRight aria-hidden="true" size={24} />
        </a>
      </section>

      <section className="featured-promo" id="featured" aria-labelledby="featured-title">
        <div className="featured-inner">
          <div className="featured-heading">
            <p className="section-kicker section-kicker-light">Penawaran terbatas</p>
            <h2 id="featured-title">Lebih dari sekadar makan malam</h2>
          </div>

          <div className="promo-showcase">
            <button className="carousel-button carousel-prev" type="button" onClick={() => changePromo(-1)} aria-label="Promo sebelumnya">
              <ChevronLeft aria-hidden="true" />
            </button>

            <div className="promo-photo-wrap" aria-live="polite">
              <Image
                key={promo.image}
                src={promo.image}
                alt={promo.alt}
                fill
                sizes="(max-width: 760px) 90vw, 860px"
                unoptimized
              />
              <span className="promo-photo-label">{promo.kicker}</span>
            </div>

            <button className="carousel-button carousel-next" type="button" onClick={() => changePromo(1)} aria-label="Promo berikutnya">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="carousel-dots" aria-label="Pilih promo">
            {promos.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activePromo ? 'active' : ''}
                onClick={() => setActivePromo(index)}
                aria-label={`Tampilkan ${item.title}`}
                aria-current={index === activePromo ? 'true' : undefined}
              />
            ))}
          </div>

          <div className="promo-copy" aria-live="polite">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <span><Clock3 aria-hidden="true" size={18} /> {promo.note}</span>
          </div>
        </div>
      </section>

      <section className="promo-details" aria-labelledby="details-title">
        <div className="details-intro">
          <p className="section-kicker">Dirancang untuk dinikmati</p>
          <h2 id="details-title">Setiap detail sudah kami siapkan</h2>
        </div>
        <div className="detail-grid">
          <article>
            <Sparkles aria-hidden="true" />
            <h3>Menu musiman</h3>
            <p>Sajian berubah mengikuti bahan terbaik yang hadir dari kebun, laut, dan pasar lokal.</p>
          </article>
          <article>
            <UsersRound aria-hidden="true" />
            <h3>Untuk meja Anda</h3>
            <p>Pilihan porsi dan penyajian dapat disesuaikan untuk makan berdua maupun perayaan bersama.</p>
          </article>
          <article>
            <Clock3 aria-hidden="true" />
            <h3>Waktu terbatas</h3>
            <p>Promo tersedia pada hari dan jam tertentu. Reservasi lebih awal agar momen Anda tetap nyaman.</p>
          </article>
        </div>
      </section>

      <section className="promo-reservation" id="reservation" aria-labelledby="reservation-title">
        <div className="reservation-card">
          <p className="section-kicker section-kicker-light">Simpan meja Anda</p>
          <h2 id="reservation-title">Rayakan malam ini bersama kami</h2>
          <p>Pilih promo favorit Anda, lalu beri tahu tim kami saat melakukan reservasi.</p>
          <a href="mailto:reservation@dapoernusantara.id?subject=Reservasi%20Special%20Promo" className="reservation-link">
            Mulai reservasi <ArrowRight aria-hidden="true" size={21} />
          </a>
        </div>
      </section>

      <section className="promo-stories" aria-labelledby="stories-title">
        <div className="stories-heading">
          <div>
            <p className="section-kicker">Catatan dari kami</p>
            <h2 id="stories-title">Cerita dari Dapoer</h2>
          </div>
          <Link className="all-stories-link" href="/#blog">Lihat semua <ArrowRight aria-hidden="true" size={18} /></Link>
        </div>
        <div className="story-grid">
          {stories.map((story) => (
            <Link className="story-card" href="/#blog" key={story.title}>
              <div className="story-image">
                <Image src={story.image.src} alt={story.image.alt} fill sizes="(max-width: 760px) 88vw, 340px" unoptimized />
              </div>
              <span>{story.category}</span>
              <h3>{story.title}</h3>
              <span className="story-link">Baca cerita <ArrowRight aria-hidden="true" size={17} /></span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
