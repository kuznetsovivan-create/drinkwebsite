# Медиа для сайта Дринкит

Сайт уже содержит стилизованные заглушки и не ломается без этих файлов. После генерации положите готовые файлы в `public/media` под указанными именами — они подключатся автоматически.

## Общая арт-дирекция

- Не делать «тёмную кофейную рекламу» с мешками зёрен, паром и деревянным столом.
- Визуальный язык: молодая городская кофейня будущего, продукт как яркий персональный объект, фирменный синий, тёплый оранжевый, лаймовый и розовый акценты, нержавеющая сталь, чистый направленный свет.
- Фотореализм уровня международной рекламной кампании, но с лёгкой дерзостью fashion/editorial-съёмки.
- Не генерировать надписи и логотипы. Если логотип нужен на стакане, приложить официальный референс отдельным изображением и попросить модель сохранить его без изменений. Любую испорченную типографику лучше удалить — текст на сайте уже отрисован отдельно.
- Во всей серии должны совпадать свет, контраст, оптика и степень зерна.

## 1. Главный напиток

**Имя файла:** `hero-signature.webp`

**Где используется:** первый экран, справа.

**Параметры Nano Banana:** вертикальный кадр 4:5; не менее 2048 × 2560 px; прозрачный фон/alpha; WebP с качеством 88–92; объект целиком, вокруг него 12–15% свободного пространства.

**Промпт:**

> Isolated premium product photograph of a signature iced drink for a modern technology-first coffee shop. A tall transparent cup with a clean geometric clear lid, containing distinct and visually appealing layers: pale oat milk, caramel-toned espresso, airy creamy cheese foam, a few delicate condensation droplets, and large crystal-clear ice cubes. Rotate the cup approximately 7 degrees and photograph it from a slightly low angle so it feels like a bold fashion object. Clean studio lighting: a large soft key light from the left, a subtle lime rim light from the right, and a warm orange reflection from below. Photorealistic, world-class commercial advertising photography, exceptional micro-detail in the plastic, liquid, foam, and ice, physically accurate reflections, 85 mm lens, f/8, crisp controlled focus. Fully transparent background with an alpha channel; a soft isolated shadow is acceptable. No hands, no table, no interior, no text, no logo, no watermark, no props, no deformed cup, and no second cup.

**Важно:** если прозрачный фон получается плохо, сгенерируйте на ровном цвете `#2437F4`, затем удалите фон в редакторе.

## 2. Клубника / матча

**Имя файла:** `drink-matcha.webp`

**Где используется:** первая карточка раздела «Дринкит лаборатория».

**Параметры Nano Banana:** 4:5; 1792 × 2240 px или выше; WebP 85–90; фон `#BFE16A`; продукт занимает 58–66% высоты; композиция по центру.

**Промпт:**

> Vertical product photograph of an experimental signature drink for a vibrant urban coffee shop. A tall transparent cup with a lower layer of soft green matcha and oat milk, topped with a pastel pink cold strawberry foam and a delicate dusting of freeze-dried strawberry. Include crystal-clear ice cubes and natural condensation. The cup floats slightly above the surface, rotated approximately 5 degrees, casting a soft physically accurate shadow. Solid lime-green background in #BFE16A. Bold contemporary advertising light with soft highlights, editorial food-fashion photography, 70 mm lens, high detail, natural-looking liquid and foam, restrained glossiness. No people, no hands, no text, no logo, no straw, no additional objects, only one cup, no coffee beans, and no wooden surfaces.

## 3. Кокос / эспрессо

**Имя файла:** `drink-coconut.webp`

**Где используется:** вторая карточка раздела «Дринкит лаборатория».

**Параметры Nano Banana:** 4:5; 1792 × 2240 px или выше; WebP 85–90; тёплый светлый фон `#F3EEE3`; тот же масштаб и ракурс, что у первой карточки.

**Промпт:**

> Vertical product photograph of a transparent iced signature drink. A tall clear cup filled with crystal-clear coconut water, large transparent ice cubes, and a distinct dark layer of freshly poured double espresso forming an elegant organic cloud in the upper third of the drink. Add subtle condensation and physically believable interaction between the liquids. The cup floats slightly above the surface, rotated approximately minus 4 degrees, with a soft realistic shadow. Minimal warm off-white background in #F3EEE3, a cool blue rim light, and a gentle sunlit highlight. Premium editorial food-fashion advertising photography, 70 mm lens, high detail. Only one cup. No people, no hands, no text, no logo, no coconuts, no coffee beans, no decorative props, and no wooden surfaces.

## 4. Карамель / сырная пена

**Имя файла:** `drink-caramel.webp`

**Где используется:** третья карточка раздела «Дринкит лаборатория».

**Параметры Nano Banana:** 4:5; 1792 × 2240 px или выше; WebP 85–90; фон `#E88345`; тот же масштаб и ракурс, что у других карточек.

**Промпт:**

> Vertical premium product photograph of an iced latte in a tall transparent cup. Show a beautiful milk-to-coffee gradient, large crystal-clear ice cubes, a generous layer of dense creamy cheese foam, and a delicate spiral of salted caramel on top. Add a few condensation droplets and physically realistic textures in the foam, liquid, and ice. The cup floats slightly above the surface, rotated approximately 6 degrees, casting a distinctive soft shadow. Clean warm orange background in #E88345, bold directional light, and a cool blue reflection along one edge. Contemporary international food-fashion advertising photography, 70 mm lens, high detail. Only one cup. No people, no hands, no text, no logo, no coffee beans, no wooden surfaces, and no unnecessary props.

## 5. Видео интерьера

**Имя файла:** `drinkit-space.mp4`

**Где используется:** полноэкранный раздел «кофейня, где будущее уже наступило».

**Фактические параметры:** Veo 3.1 High; 16:9; 1920 × 1080; 8 секунд; 24 fps; фотореализм; H.264 MP4. Файл уже сгенерирован и подключён.

**Промпт:**

> One continuous 12-second cinematic shot inside a next-generation urban coffee shop in Moscow, inspired by a bright experimental technology-first café, not a rustic coffee shop. The camera begins close to a warm orange textured floor and performs a very slow, perfectly stabilized forward dolly toward an open stainless-steel bar. Reflective steel counters, light plywood seating, a large soft glowing installation above the bar, self-service digital kiosks and a wall of smart pickup cells create a balance of warm hospitality and precise technology. A barista in a clean neutral uniform finishes a vivid layered iced drink and places it into one pickup cell; two stylish young guests cross the deep background naturally, never looking at camera. High color-rendering architectural light, subtle blue accents, warm skin tones, realistic reflections, premium architectural film, 24 mm lens, f/5.6, cinematic but bright exposure, natural motion blur, restrained fine film grain. End framing and lighting must closely match the first frame for a seamless loop. No readable text, no invented logos, no warped hands, no floating objects, no fast camera movement, no timelapse, no dark moody café, no wooden rustic aesthetic, no excessive depth of field, no dramatic steam, no audio.

**Монтаж петли:** последние 8–12 кадров плавно совместить с первыми; не добавлять заставку, титры, логотип или затемнение. Самая важная зона кадра — правая половина; слева поверх видео на сайте расположен крупный текст.

## Проверка перед добавлением

1. На стаканах нет случайных букв, второго логотипа и лишних крышек.
2. Все три карточки выглядят как одна серия: одинаковый масштаб, высота камеры и направление света.
3. Продукт не обрезан по верхнему и нижнему краю.
4. Видео остаётся светлым после наложения тёмного градиента на сайте.
5. Названия файлов полностью совпадают с указанными выше, включая регистр и расширение.
