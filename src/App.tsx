import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const drinks = [
  {
    name: "Клубника / матча",
    note: "матча · клубничная пена · овсяное молоко",
    number: "01",
    className: "drink-card--matcha",
    image: asset("media/drink-matcha.webp"),
  },
  {
    name: "Кокос / эспрессо",
    note: "двойной эспрессо · кокосовая вода · лёд",
    number: "02",
    className: "drink-card--coconut",
    image: asset("media/drink-coconut.webp"),
  },
  {
    name: "Карамель / сырная пена",
    note: "айс латте · солёная карамель · фирменная пена",
    number: "03",
    className: "drink-card--caramel",
    image: asset("media/drink-caramel.webp"),
  },
]

// координаты (% от контейнера) рассчитаны через проекцию Меркатора,
// чтобы точки совпадали с точечной картой мира world-dots.svg
const coffeeCities = [
  { name: "Казань", count: 42, x: 64.59, y: 20.65, featured: true },
  { name: "Москва", count: 35, x: 61.09, y: 20.65 },
  { name: "Санкт-Петербург", count: 18, x: 58.95, y: 15.99 },
  { name: "Нижний Новгород", count: 14, x: 63.23, y: 19.99 },
  { name: "Уфа", count: 11, x: 66.73, y: 21.32 },
  { name: "Екатеринбург", count: 9, x: 68.09, y: 19.32 },
  { name: "Самара", count: 8, x: 64.98, y: 23.32 },
  { name: "Челябинск", count: 6, x: 68.29, y: 21.32 },
  { name: "Пермь", count: 5, x: 66.93, y: 17.99 },
  { name: "Ижевск", count: 4, x: 65.76, y: 19.32 },
  { name: "Алматы", count: 3, x: 72.96, y: 31.98 },
  { name: "Дубай", count: 5, x: 66.54, y: 44.63 },
]

// отдельная точка вне сети — независимый проект, показывается серым
const independentPoint = { name: "Лос-Анджелес", label: "Независимый проект", x: 14.98, y: 38.64 }

const mapNotes = [
  { value: 95, suffix: "+", label: "кофеен на этапе строительства" },
  { value: 5, suffix: "", label: "стран" },
]

const tickerItems = ["быстрее очереди", "точно как любишь", "кофе уже ждёт"]

export default function App() {
  useSmoothScroll()
  const [phoneActive, setPhoneActive] = useState(false)
  const [heroActive, setHeroActive] = useState(false)
  const [ctaVideoFading, setCtaVideoFading] = useState(false)
  const pointerX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.7 })
  const pointerY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.7 })
  const phoneX = useTransform(pointerX, [-1, 1], [-14, 14])
  const phoneY = useTransform(pointerY, [-1, 1], [-14, 14])
  const phoneRotateX = useTransform(pointerY, [-1, 1], [7, -7])
  const phoneRotateY = useTransform(pointerX, [-1, 1], [-8, 8])
  const firstBubbleX = useTransform(pointerX, [-1, 1], [-9, 9])
  const firstBubbleY = useTransform(pointerY, [-1, 1], [-5, 5])
  const secondBubbleX = useTransform(pointerX, [-1, 1], [8, -8])
  const secondBubbleY = useTransform(pointerY, [-1, 1], [5, -5])
  const heroPointerX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.8 })
  const heroPointerY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.8 })
  const heroX = useTransform(heroPointerX, [-1, 1], [-18, 18])
  const heroY = useTransform(heroPointerY, [-1, 1], [-18, 18])
  const heroRotateX = useTransform(heroPointerY, [-1, 1], [6, -6])
  const heroRotateY = useTransform(heroPointerX, [-1, 1], [-7, 7])
  const firstOrbitX = useTransform(heroPointerX, [-1, 1], [-10, 10])
  const firstOrbitY = useTransform(heroPointerY, [-1, 1], [-6, 6])
  const secondOrbitX = useTransform(heroPointerX, [-1, 1], [8, -8])
  const secondOrbitY = useTransform(heroPointerY, [-1, 1], [5, -5])
  const thirdOrbitX = useTransform(heroPointerX, [-1, 1], [-6, 6])
  const thirdOrbitY = useTransform(heroPointerY, [-1, 1], [8, -8])

  const handlePhonePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetPhonePointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const togglePhoneFocus = () => setPhoneActive((active) => !active)

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      togglePhoneFocus()
    }
  }

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    heroPointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    heroPointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetHeroPointer = () => {
    heroPointerX.set(0)
    heroPointerY.set(0)
  }

  const toggleHeroFocus = () => setHeroActive((active) => !active)

  const handleHeroKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleHeroFocus()
    }
  }

  const handleCtaVideoTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget
    const fading = video.duration > 0 && video.currentTime > 0.15 && video.duration - video.currentTime < 0.7
    if (fading !== ctaVideoFading) setCtaVideoFading(fading)
  }

  const restartCtaVideo = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget
    video.currentTime = 0
    setCtaVideoFading(false)
    void video.play()
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#начало" aria-label="Дринкит — на главную">
          <img className="brand-logo" src={asset("drinkit-logo.png")} alt="" />
          <span>дринкит</span>
        </a>
        <nav className="nav-links" aria-label="Основная навигация">
          <a href="#как-работает">как это работает</a>
          <a href="#лаборатория">напитки</a>
          <a href="#пространство">кофейни</a>
        </nav>
        <a className="nav-order" href="#собрать">
          собрать свой <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="начало">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              кофейня на каждый день · 56°50′ с. ш.
            </motion.p>
            <h1>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                твой кофе.
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                твои правила.
              </motion.span>
            </h1>
            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p>
                Собери напиток под своё настроение. Закажи по пути. Забери без
                очереди — он уже знает твоё имя.
              </p>
              <a className="primary-button" href="#собрать">
                хочу свой напиток <span>↓</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-object"
            initial={{ opacity: 0, scale: 0.86, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onPointerMove={handleHeroPointerMove}
            onPointerLeave={resetHeroPointer}
          >
            <motion.div className="orbit orbit--one" style={{ x: firstOrbitX, y: firstOrbitY }}>овсяное</motion.div>
            <motion.div className="orbit orbit--two" style={{ x: secondOrbitX, y: secondOrbitY }}>+ сырная пена</motion.div>
            <motion.div className="orbit orbit--three" style={{ x: thirdOrbitX, y: thirdOrbitY }}>готово через 4 мин</motion.div>
            <div className="hero-halo" />
            <motion.img
              className="hero-generated-media"
              src={asset("media/hero-signature.webp")}
              alt="Яркий фирменный напиток Дринкит"
              role="button"
              tabIndex={0}
              aria-pressed={heroActive}
              onClick={toggleHeroFocus}
              onKeyDown={handleHeroKeyDown}
              style={{ x: heroX, y: heroY, rotateX: heroRotateX, rotateY: heroRotateY }}
              animate={{ scale: heroActive ? 1.06 : 1 }}
              whileTap={{ scale: 0.97 }}
              onError={(event) => { event.currentTarget.style.display = "none" }}
            />
          </motion.div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>заказ № 184</span>
            <strong>бариста уже готовит</strong>
          </div>
        </section>

        <div className="running-line" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group}>
                {tickerItems.concat(tickerItems).map((item, index) => (
                  <span key={`${group}-${index}`}>{item}<i>✦</i></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="ritual section-pad" id="как-работает">
          <div className="section-intro">
            <p className="eyebrow">01 / новый ежедневный ритуал</p>
            <h2>кофе подстраивается<br />под тебя. не наоборот.</h2>
          </div>

          <div className="ritual-layout">
            <div
              className="phone-scene"
              onPointerMove={handlePhonePointerMove}
              onPointerLeave={resetPhonePointer}
            >
              <motion.img
                className="phone-app-image"
                src={asset("media/drinkit-app-phone.png")}
                alt="Приложение Дринкит на экране телефона"
                role="button"
                tabIndex={0}
                aria-pressed={phoneActive}
                onClick={togglePhoneFocus}
                onKeyDown={handlePhoneKeyDown}
                style={{ x: phoneX, y: phoneY, rotateX: phoneRotateX, rotateY: phoneRotateY }}
                animate={{ scale: phoneActive ? 1.05 : 1 }}
                whileTap={{ scale: 0.97 }}
              />
              <motion.div
                className="phone-bubble phone-bubble--first"
                style={{ x: firstBubbleX, y: firstBubbleY }}
              >
                без очереди
              </motion.div>
              <motion.div
                className="phone-bubble phone-bubble--second"
                style={{ x: secondBubbleX, y: secondBubbleY }}
              >
                + 38 дринккоинов
              </motion.div>
            </div>

            <ol className="ritual-steps">
              <li>
                <span>01</span>
                <div><h3>заказывай по пути</h3><p>Пара касаний в приложении — и бариста уже начинает готовить.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>настраивай как любишь</h3><p>Молоко, сироп, шоты, температура и фирменная пенка — решаешь ты.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>забирай без ожидания</h3><p>Приложение подскажет, когда напиток окажется в умной ячейке.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="lab section-pad" id="лаборатория">
          <div className="section-intro section-intro--split">
            <div>
              <p className="eyebrow">02 / дринкит лаборатория</p>
              <h2>классика —<br />только начало.</h2>
            </div>
            <p className="intro-note">
              В собственной лаборатории мы соединяем кофе, фрукты, специи и
              текстуры. Так появляются напитки, ради которых хочется свернуть с
              привычного маршрута.
            </p>
          </div>

          <div className="drink-grid">
            {drinks.map((drink, index) => (
              <motion.article
                className={`drink-card ${drink.className}`}
                key={drink.name}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="card-number">{drink.number}</span>
                <div className="card-art">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    onError={(event) => { event.currentTarget.style.display = "none" }}
                  />
                </div>
                <h3>{drink.name}</h3>
                <p>{drink.note}</p>
                <span className="card-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="builder section-pad" id="собрать">
          <div className="builder-heading">
            <p className="eyebrow">03 / собери свой</p>
            <h2>один латте.<br /><span><CountUp to={9216} /></span> вариантов.</h2>
          </div>

          <div className="builder-stage">
            <video
              className="builder-mockup"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Анимация приложения Дринкит с настройками напитка"
            >
              <source src={asset("media/builder-mockup.webm")} type="video/webm" />
              <source src={asset("media/builder-mockup.mp4")} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="space" id="пространство">
          <div className="space-media">
            <video
              src={asset("media/drinkit-space.mp4")}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Интерьер технологичной кофейни Дринкит"
              onError={(event) => { event.currentTarget.style.display = "none" }}
            />
            <div className="space-fallback">
              <div className="steel-counter"><span>уже готово</span><i /><i /><i /><i /></div>
              <div className="light-object" />
            </div>
            <div className="space-overlay">
              <p className="eyebrow">04 / место встречи</p>
              <h2>кофейня,<br />где будущее<br />уже наступило.</h2>
            </div>
          </div>

          <div className="space-map section-pad">
            <div className="section-intro">
              <p className="eyebrow">05 / где нас искать</p>
              <h2>дринкит уже<br />в твоём городе.</h2>
            </div>

            <div className="coffee-map">
              <img
                className="coffee-map-bg"
                src={asset("media/world-dots.svg")}
                alt="Карта мира с точками"
                aria-hidden="true"
              />
              <div className="coffee-map-halo" aria-hidden="true" />
              {coffeeCities.map((city) => (
                <button
                  type="button"
                  className={`map-pin ${city.featured ? "map-pin--featured" : ""}`}
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  key={city.name}
                  aria-label={`${city.name}: ${city.count} кофеен`}
                >
                  <span className="map-pin-dot" />
                  <span className="map-pin-tip">
                    {city.name} <strong>({city.count})</strong>
                  </span>
                </button>
              ))}

              <button
                type="button"
                className="map-pin map-pin--muted"
                style={{ left: `${independentPoint.x}%`, top: `${independentPoint.y}%` }}
                aria-label={`${independentPoint.name}: ${independentPoint.label}`}
              >
                <span className="map-pin-dot" />
                <span className="map-pin-label">{independentPoint.label}</span>
              </button>

              <div className="map-notes" aria-label="Планы роста">
                {mapNotes.map((note) => (
                  <span key={note.label}><CountUp to={note.value} suffix={note.suffix} /> {note.label}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2>кажется, пора<br />выпить<br />что-нибудь<br /><span>своё.</span></h2>
          <a href="https://guest.drinkit.ru/ru" target="_blank" rel="noreferrer">
            открыть приложение <span>↗</span>
          </a>
          <video
            className={`cta-video ${ctaVideoFading ? "cta-video--fading" : ""}`}
            src={asset("media/drinkit-anim.mp4")}
            autoPlay
            muted
            playsInline
            aria-label="Фирменный напиток Дринкит на умной выдаче"
            onTimeUpdate={handleCtaVideoTimeUpdate}
            onEnded={restartCtaVideo}
          />
        </section>
      </main>

      <footer>
        <a className="brand" href="#начало">
          <img className="brand-logo" src={asset("drinkit-logo.png")} alt="" />
          <span>дринкит</span>
        </a>
        <p>кофейня на каждый день</p>
        <div><a href="#лаборатория">напитки</a><a href="#пространство">кофейни</a><a href="https://guest.drinkit.ru/ru">приложение</a></div>
        <small>концепт-сайт · {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startedAt = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1200, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(to * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }

      frame = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to])

  return <span ref={ref}>{new Intl.NumberFormat("ru-RU").format(value)}{suffix}</span>
}
