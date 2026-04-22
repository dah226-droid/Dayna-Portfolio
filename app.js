const drinks = {
  daiquiri: {
    name: 'Strawberry Daiquiri',
    taste: ['Sweet & Fruity', 'Tart & Tangy', 'Cool & Icy', 'Subtle Boozy'],
    ingredients: 'White rum, Lime Juice, Simple Syrup, Frozen Strawberries, Ice Cube',
    prep: '5 Minutes', serving: '6 – 8 ppl', calories: '107 Calories',
    svg: `<svg width="180" height="220" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 30 L100 130 L170 30 Z" fill="none" stroke="#3a3a3a" stroke-width="2.5"/>
      <path d="M42 55 L158 55 L100 130 Z" fill="#e8303a" opacity="0.85"/>
      <line x1="100" y1="130" x2="100" y2="190" stroke="#3a3a3a" stroke-width="2.5"/>
      <ellipse cx="100" cy="190" rx="40" ry="8" fill="none" stroke="#3a3a3a" stroke-width="2"/>
      <circle cx="152" cy="38" r="16" fill="#c8e870" stroke="#3a3a3a" stroke-width="1.5"/>
      <line x1="152" y1="22" x2="152" y2="54" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="136" y1="38" x2="168" y2="38" stroke="#3a3a3a" stroke-width="1"/>
      <path d="M138 30 C138 20 148 18 148 28 C148 36 140 42 138 30 Z" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
      <path d="M148 28 C148 18 158 20 158 30 C156 42 148 36 148 28 Z" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
      <path d="M72 206 C64 200 56 206 62 210 C68 214 72 206 72 206" fill="#e8608a"/>
      <path d="M72 206 C80 200 88 206 82 210 C76 214 72 206 72 206" fill="#e8608a"/>
      <circle cx="72" cy="206" r="4" fill="#e8608a"/>
    </svg>`,
    steps: [
      {
        title: 'Step 1. Pour ingredients into a blender:',
        illustration: `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="80" width="60" height="80" rx="8" fill="none" stroke="#3a3a3a" stroke-width="2"/>
          <path d="M65 80 Q90 60 115 80" fill="#f0f0f0" stroke="#3a3a3a" stroke-width="1.5"/>
          <rect x="56" y="155" width="68" height="16" rx="4" fill="#9b6348" stroke="#3a3a3a" stroke-width="1.5"/>
          <circle cx="90" cy="163" r="5" fill="#3a3a3a" opacity="0.3"/>
          <path d="M52 20 C52 10 62 8 62 18 C62 26 54 32 52 20 Z" fill="#e84040"/>
          <path d="M62 18 C62 8 72 10 72 20 C70 32 62 26 62 18 Z" fill="#e84040"/>
          <circle cx="80" cy="30" r="6" fill="#c8e060" opacity="0.8"/>
          <rect x="100" y="15" width="8" height="20" rx="3" fill="#e0e0e0" transform="rotate(15,104,25)"/>
          <line x1="62" y1="35" x2="75" y2="70" stroke="#3a3a3a" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="80" y1="38" x2="82" y2="72" stroke="#3a3a3a" stroke-width="1" stroke-dasharray="3,3"/>
        </svg>`,
        desc: 'Place the rum, 1/2 cup of the lime juice, 1/4 cup of the simple syrup, strawberries, and ice cubes into a blender and pulse until completely blended with a slushy consistency.'
      },
      {
        title: 'Step 2. Taste for any needed adjustments:',
        illustration: `<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="20" width="22" height="110" rx="6" fill="none" stroke="#3a3a3a" stroke-width="2"/>
          <rect x="74" y="10" width="14" height="14" rx="4" fill="none" stroke="#3a3a3a" stroke-width="1.5"/>
          <circle cx="40" cy="70" r="24" fill="#c8e060" stroke="#3a3a3a" stroke-width="1.5"/>
          <circle cx="40" cy="70" r="18" fill="none" stroke="#a0c040" stroke-width="1"/>
          <line x1="40" y1="46" x2="40" y2="94" stroke="#3a3a3a" stroke-width="0.8"/>
          <line x1="16" y1="70" x2="64" y2="70" stroke="#3a3a3a" stroke-width="0.8"/>
        </svg>`,
        desc: 'Check the consistency and flavor. Add more lime juice for more tartness or more simple syrup to sweeten, if needed. You may also want more ice to make it slushier in consistency. A daiquiri is not an exact science, so adjust as you see fit.'
      },
      {
        title: 'Step 3. Pour and serve:',
        illustration: `<svg width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 20 L80 105 L136 20 Z" fill="none" stroke="#3a3a3a" stroke-width="2.5"/>
          <path d="M34 44 L126 44 L80 105 Z" fill="#e8303a" opacity="0.85"/>
          <line x1="80" y1="105" x2="80" y2="155" stroke="#3a3a3a" stroke-width="2.5"/>
          <ellipse cx="80" cy="155" rx="32" ry="7" fill="none" stroke="#3a3a3a" stroke-width="2"/>
          <circle cx="120" cy="28" r="13" fill="#c8e870" stroke="#3a3a3a" stroke-width="1.5"/>
          <path d="M110 24 C110 15 120 14 120 24 C120 30 112 35 110 24 Z" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
          <path d="M120 24 C120 14 130 15 130 24 C128 35 120 30 120 24 Z" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
          <rect x="6" y="155" width="148" height="14" rx="4" fill="#9b6348"/>
          <path d="M56 166 C50 162 44 166 50 169 C56 172 56 166 56 166" fill="#e8608a"/>
          <path d="M56 166 C62 162 68 166 62 169 C56 172 56 166 56 166" fill="#e8608a"/>
          <circle cx="56" cy="166" r="3" fill="#e8608a"/>
        </svg>`,
        desc: 'Divide the daiquiris between glasses. Garnish and serve.'
      }
    ]
  },

  bellini: {
    name: 'Peach Bellini',
    taste: ['Sweet & Peachy', 'Light & Bubbly', 'Fruity', 'Refreshing'],
    ingredients: 'Peach Purée, Prosecco, Peach Schnapps, Fresh Peach',
    prep: '5 Minutes', serving: '4 – 6 ppl', calories: '95 Calories',
    svg: `<svg width="160" height="200" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 10 Q28 60 40 80 Q52 60 52 10 Z" fill="#f5a030" opacity="0.8" stroke="#3a3a3a" stroke-width="1.5"/>
      <path d="M28 10 L52 10" stroke="#3a3a3a" stroke-width="1.5"/>
      <line x1="40" y1="80" x2="40" y2="98" stroke="#3a3a3a" stroke-width="1.5"/>
      <ellipse cx="40" cy="98" rx="14" ry="4" fill="none" stroke="#3a3a3a" stroke-width="1.5"/>
      <circle cx="40" cy="8" r="10" fill="#f5c070" stroke="#3a3a3a" stroke-width="1.2"/>
      <path d="M40 8 Q44 4 48 8" stroke="#3a3a3a" stroke-width="0.8" fill="none"/>
      <path d="M28 88 C24 84 20 88 24 90 C28 92 28 88 28 88" fill="#e8608a"/>
      <path d="M28 88 C32 84 36 88 32 90 C28 92 28 88 28 88" fill="#e8608a"/>
      <circle cx="28" cy="88" r="2.5" fill="#e8608a"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Prepare the peach purée:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="60" r="40" fill="#f5a030" stroke="#3a3a3a" stroke-width="2"/><circle cx="80" cy="60" r="28" fill="#f5c070"/><path d="M80 20 Q86 14 80 20" stroke="#3a3a3a" stroke-width="1.5" fill="none"/><line x1="80" y1="20" x2="80" y2="10" stroke="#3a3a3a" stroke-width="1.5"/></svg>`, desc: 'Peel and pit fresh peaches. Blend until smooth to create a velvety peach purée. Strain through a fine sieve for an extra silky texture.' },
      { title: 'Step 2. Chill your glasses:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 10 Q58 70 80 90 Q102 70 100 10 Z" fill="#ddeeff" opacity="0.6" stroke="#3a3a3a" stroke-width="1.5"/><path d="M60 10 L100 10" stroke="#3a3a3a" stroke-width="1.5"/><text x="65" y="55" font-size="20" fill="#80c0f0">❄</text></svg>`, desc: 'Pop your champagne flutes in the freezer for 10 minutes. A chilled glass keeps your bellini perfectly cold and bubbly.' },
      { title: 'Step 3. Build and serve:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55 10 Q53 75 80 92 Q107 75 105 10 Z" fill="#f5b040" opacity="0.5" stroke="#3a3a3a" stroke-width="1.5"/><path d="M55 10 L105 10" stroke="#3a3a3a" stroke-width="1.5"/><path d="M55 40 Q80 30 105 40" stroke="#f5d080" stroke-width="1.5" fill="none"/><circle cx="80" cy="8" r="7" fill="#f5c070" stroke="#3a3a3a" stroke-width="1"/></svg>`, desc: 'Add 2 tablespoons of peach purée to the bottom of each chilled flute. Slowly pour chilled Prosecco over the back of a spoon to preserve the bubbles. Give it a gentle stir and garnish with a fresh peach slice.' }
    ]
  },

  espresso: {
    name: 'Espresso Martini',
    taste: ['Rich & Bold', 'Coffee Kick', 'Sweet', 'Slightly Bitter'],
    ingredients: 'Vodka, Espresso, Coffee Liqueur, Simple Syrup, Coffee Beans',
    prep: '5 Minutes', serving: '1 – 2 ppl', calories: '165 Calories',
    svg: `<svg width="160" height="180" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10 L40 60 L72 10 Z" fill="none" stroke="#3a3a3a" stroke-width="1.8"/>
      <path d="M18 28 L62 28 L40 60 Z" fill="#6b3420" opacity="0.9"/>
      <line x1="40" y1="60" x2="40" y2="90" stroke="#3a3a3a" stroke-width="1.8"/>
      <line x1="24" y1="90" x2="56" y2="90" stroke="#3a3a3a" stroke-width="1.8"/>
      <path d="M28 100 C24 96 20 100 24 102 C28 104 28 100 28 100" fill="#e8608a"/>
      <path d="M28 100 C32 96 36 100 32 102 C28 104 28 100 28 100" fill="#e8608a"/>
      <circle cx="28" cy="100" r="2.5" fill="#e8608a"/>
      <ellipse cx="34" cy="22" rx="3" ry="4" fill="#3a2010" transform="rotate(-20,34,22)"/>
      <ellipse cx="40" cy="20" rx="3" ry="4" fill="#3a2010"/>
      <ellipse cx="46" cy="22" rx="3" ry="4" fill="#3a2010" transform="rotate(20,46,22)"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Brew a fresh espresso shot:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="60" height="70" rx="8" fill="none" stroke="#3a3a3a" stroke-width="2"/><rect x="60" y="40" width="40" height="14" rx="4" fill="none" stroke="#3a3a3a" stroke-width="1.5"/><ellipse cx="80" cy="125" rx="20" ry="5" fill="none" stroke="#3a3a3a" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="120" stroke="#6b3420" stroke-width="2" stroke-dasharray="2,2"/><text x="68" y="82" font-size="10" fill="#6b3420" font-family="serif">espresso</text></svg>`, desc: 'Brew a fresh, strong shot of espresso and let it cool slightly. Fresh espresso gives the best crema and richest flavor for your martini.' },
      { title: 'Step 2. Shake vigorously over ice:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="62" y="20" width="36" height="90" rx="10" fill="#808080" stroke="#3a3a3a" stroke-width="2"/><rect x="68" y="14" width="24" height="10" rx="5" fill="#606060" stroke="#3a3a3a" stroke-width="1.5"/><line x1="50" y1="40" x2="40" y2="50" stroke="#e8608a" stroke-width="1.5" stroke-dasharray="2,2"/><line x1="110" y1="40" x2="120" y2="50" stroke="#e8608a" stroke-width="1.5" stroke-dasharray="2,2"/></svg>`, desc: 'Add the vodka, espresso, coffee liqueur, and simple syrup to a cocktail shaker filled with ice. Shake hard for 15-20 seconds until the outside of the shaker is very cold.' },
      { title: 'Step 3. Double strain and garnish:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 L80 90 L130 20 Z" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M44 45 L116 45 L80 90 Z" fill="#6b3420" opacity="0.8"/><line x1="80" y1="90" x2="80" y2="120" stroke="#3a3a3a" stroke-width="2"/><line x1="60" y1="120" x2="100" y2="120" stroke="#3a3a3a" stroke-width="2"/><ellipse cx="68" cy="36" rx="3" ry="4" fill="#3a2010" transform="rotate(-20,68,36)"/><ellipse cx="80" cy="33" rx="3" ry="4" fill="#3a2010"/><ellipse cx="92" cy="36" rx="3" ry="4" fill="#3a2010" transform="rotate(20,92,36)"/></svg>`, desc: 'Double strain into a chilled martini glass for a silky smooth texture. Garnish with exactly three coffee beans on top — a traditional symbol of health, wealth, and happiness.' }
    ]
  },

  pinacolada: {
    name: 'Piña Colada',
    taste: ['Tropical & Sweet', 'Creamy', 'Coconutty', 'Ice Cold'],
    ingredients: 'White Rum, Coconut Cream, Pineapple Juice, Ice, Pineapple Wedge',
    prep: '5 Minutes', serving: '2 – 4 ppl', calories: '245 Calories',
    svg: `<svg width="160" height="200" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 14 Q14 80 40 100 Q66 80 62 14 Z" fill="#f0f0d0" opacity="0.9" stroke="#3a3a3a" stroke-width="1.5"/>
      <path d="M18 14 L62 14" stroke="#3a3a3a" stroke-width="1.5"/>
      <path d="M44 8 C44 2 54 0 54 10 C54 16 46 18 44 8 Z" fill="#f5d842" stroke="#3a3a3a" stroke-width="1"/>
      <circle cx="36" cy="6" r="5" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="36" y1="1" x2="34" y2="-4" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="50" y1="8" x2="38" y2="80" stroke="#90c080" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Combine all ingredients:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="70" width="50" height="55" rx="8" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M58 70 Q80 55 102 70" fill="#f0f0d0" stroke="#3a3a3a" stroke-width="1.5"/><rect x="52" y="120" width="56" height="12" rx="4" fill="#9b6348"/><circle cx="80" cy="40" r="15" fill="#f5d842" stroke="#3a3a3a" stroke-width="1.5"/><text x="72" y="44" font-size="11" fill="#3a3a3a">🍍</text></svg>`, desc: 'Add the rum, coconut cream, pineapple juice, and a generous cup of ice into a blender. The ratio is everything — you want creaminess without it being too thick.' },
      { title: 'Step 2. Blend to smooth perfection:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="60" width="50" height="65" rx="8" fill="#f0f8ff" stroke="#3a3a3a" stroke-width="2"/><path d="M58 60 Q80 45 102 60" fill="#f0f0d0" stroke="#3a3a3a" stroke-width="1.5"/><rect x="52" y="122" width="56" height="12" rx="4" fill="#9b6348"/><circle cx="80" cy="125" r="5" fill="#3a3a3a" opacity="0.3"/><path d="M65 90 Q80 82 95 90 Q80 100 65 90" fill="#f5f0d0" stroke="#3a3a3a" stroke-width="1"/></svg>`, desc: 'Blend on high for 30-40 seconds until completely smooth and creamy. The mixture should be thick and frosty — like a tropical dream.' },
      { title: 'Step 3. Serve in a chilled glass:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 14 Q36 80 80 100 Q124 80 120 14 Z" fill="#f0f0d0" opacity="0.8" stroke="#3a3a3a" stroke-width="2"/><path d="M40 14 L120 14" stroke="#3a3a3a" stroke-width="2"/><path d="M88 8 C88 2 100 0 100 10 C100 16 90 18 88 8 Z" fill="#f5d842" stroke="#3a3a3a" stroke-width="1.2"/><circle cx="72" cy="6" r="6" fill="#e84040" stroke="#3a3a3a" stroke-width="1.2"/><line x1="96" y1="8" x2="76" y2="78" stroke="#90c080" stroke-width="2.5" stroke-linecap="round"/></svg>`, desc: 'Pour into a chilled glass garnished with a pineapple wedge and maraschino cherry. Add a paper straw and a tiny paper umbrella for full tropical vibes.' }
    ]
  },

  tequila: {
    name: 'Tequila Sunrise',
    taste: ['Citrusy & Bright', 'Sweet', 'Layered Flavors', 'Fruity'],
    ingredients: 'Tequila, Orange Juice, Grenadine, Ice, Orange Slice, Cherry',
    prep: '3 Minutes', serving: '1 – 2 ppl', calories: '175 Calories',
    svg: `<svg width="160" height="200" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="40" height="88" rx="10" fill="none" stroke="#3a3a3a" stroke-width="1.8"/>
      <rect x="20" y="56" width="40" height="42" rx="8" fill="#e84040" opacity="0.6"/>
      <rect x="20" y="30" width="40" height="30" fill="#f5a030" opacity="0.7"/>
      <rect x="20" y="10" width="40" height="24" rx="10" fill="#f5d842" opacity="0.6"/>
      <circle cx="56" cy="14" r="10" fill="#f5a030" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="56" y1="4" x2="56" y2="24" stroke="#3a3a3a" stroke-width="0.8"/>
      <line x1="46" y1="14" x2="66" y2="14" stroke="#3a3a3a" stroke-width="0.8"/>
      <circle cx="44" cy="10" r="4" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="48" y1="8" x2="48" y2="20" stroke="#3a3a3a" stroke-width="1"/>
      <path d="M42 8 Q48 3 54 8 Z" fill="#4090e0" stroke="#3a3a3a" stroke-width="0.8"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Fill glass with ice and tequila:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="50" height="100" rx="12" fill="#f5f5f5" stroke="#3a3a3a" stroke-width="2"/><text x="68" y="70" font-size="18">🧊</text><text x="68" y="95" font-size="14">🥃</text></svg>`, desc: 'Fill a tall glass with ice to the brim. Pour in 60ml of your favourite blanco or reposado tequila over the ice.' },
      { title: 'Step 2. Add fresh orange juice:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="50" height="100" rx="12" fill="none" stroke="#3a3a3a" stroke-width="2"/><rect x="55" y="60" width="50" height="60" rx="10" fill="#f5a030" opacity="0.6"/><circle cx="110" cy="25" r="18" fill="#f5a030" stroke="#3a3a3a" stroke-width="1.5"/><line x1="110" y1="7" x2="110" y2="43" stroke="#3a3a3a" stroke-width="0.8"/><line x1="92" y1="25" x2="128" y2="25" stroke="#3a3a3a" stroke-width="0.8"/></svg>`, desc: 'Squeeze fresh orange juice directly into the glass, filling it about 3/4 full. Fresh OJ makes a world of difference — please don\'t use the carton kind for this one.' },
      { title: 'Step 3. Float the grenadine:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="50" height="100" rx="12" fill="none" stroke="#3a3a3a" stroke-width="2"/><rect x="55" y="80" width="50" height="40" rx="10" fill="#e84040" opacity="0.5"/><rect x="55" y="40" width="50" height="44" fill="#f5a030" opacity="0.5"/><rect x="55" y="20" width="50" height="24" rx="12" fill="#f5d842" opacity="0.5"/><circle cx="80" cy="16" r="6" fill="#e84040" stroke="#3a3a3a" stroke-width="1"/></svg>`, desc: 'Slowly pour grenadine over the back of a bar spoon so it sinks to the bottom, creating the beautiful sunrise gradient. Garnish with an orange slice and cherry — do NOT stir.' }
    ]
  },

  margarita: {
    name: 'Margarita',
    taste: ['Tangy & Citrusy', 'Sweet & Salty', 'Punchy', 'Refreshing'],
    ingredients: 'Tequila, Triple Sec, Lime Juice, Salt (rim), Ice, Lime Wedge',
    prep: '5 Minutes', serving: '1 – 2 ppl', calories: '168 Calories',
    svg: `<svg width="160" height="180" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="20" width="36" height="52" rx="8" fill="#d0f0a0" opacity="0.7" stroke="#3a3a3a" stroke-width="1.8"/>
      <line x1="40" y1="72" x2="40" y2="88" stroke="#3a3a3a" stroke-width="1.8"/>
      <ellipse cx="40" cy="88" rx="14" ry="4" fill="none" stroke="#3a3a3a" stroke-width="1.5"/>
      <circle cx="22" cy="26" r="9" fill="#c0e060" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="22" y1="17" x2="22" y2="35" stroke="#3a3a3a" stroke-width="0.8"/>
      <path d="M28 82 C24 78 20 82 24 84 C28 86 28 82 28 82" fill="#e8608a"/>
      <path d="M28 82 C32 78 36 82 32 84 C28 86 28 82 28 82" fill="#e8608a"/>
      <circle cx="28" cy="82" r="2" fill="#e8608a"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Salt the rim:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="30" width="50" height="90" rx="8" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M52 30 Q80 20 108 30" fill="none" stroke="#e8e8e8" stroke-width="6"/><circle cx="40" cy="50" r="14" fill="#c0e060" stroke="#3a3a3a" stroke-width="1.5"/></svg>`, desc: 'Rub a lime wedge around the rim of your glass, then dip it in a shallow plate of coarse salt. This salty crust is the signature of a perfect margarita.' },
      { title: 'Step 2. Shake it all together:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="62" y="20" width="36" height="90" rx="10" fill="#808080" stroke="#3a3a3a" stroke-width="2"/><rect x="68" y="14" width="24" height="10" rx="5" fill="#606060" stroke="#3a3a3a" stroke-width="1.5"/><line x1="50" y1="50" x2="38" y2="60" stroke="#d0f090" stroke-width="1.5"/><line x1="110" y1="50" x2="122" y2="60" stroke="#d0f090" stroke-width="1.5"/></svg>`, desc: 'Add tequila, triple sec, and freshly squeezed lime juice to a shaker with plenty of ice. Shake hard for 15 seconds — you want it ice cold and well diluted.' },
      { title: 'Step 3. Strain and garnish:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="80" rx="10" fill="#d0f0a0" opacity="0.6" stroke="#3a3a3a" stroke-width="2"/><line x1="80" y1="110" x2="80" y2="128" stroke="#3a3a3a" stroke-width="2"/><ellipse cx="80" cy="128" rx="18" ry="5" fill="none" stroke="#3a3a3a" stroke-width="1.5"/><circle cx="46" cy="36" r="11" fill="#c0e060" stroke="#3a3a3a" stroke-width="1"/></svg>`, desc: 'Strain into your salt-rimmed glass over fresh ice (or serve straight up). Garnish with a lime wedge. Sip. Repeat.' }
    ]
  },

  aperol: {
    name: 'Aperol Spritz',
    taste: ['Bittersweet', 'Bubbly', 'Light & Easy', 'Citrusy'],
    ingredients: 'Aperol, Prosecco, Splash of Soda, Ice, Orange Slice',
    prep: '2 Minutes', serving: '1 ppl', calories: '125 Calories',
    svg: `<svg width="160" height="180" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="16" width="44" height="62" rx="12" fill="none" stroke="#3a3a3a" stroke-width="1.8"/>
      <rect x="18" y="40" width="44" height="38" rx="10" fill="#e87030" opacity="0.6"/>
      <rect x="18" y="16" width="44" height="28" rx="12" fill="#f5a030" opacity="0.35"/>
      <circle cx="54" cy="22" r="10" fill="#f5a030" stroke="#3a3a3a" stroke-width="1.2"/>
      <line x1="54" y1="12" x2="54" y2="32" stroke="#3a3a3a" stroke-width="0.8"/>
      <line x1="44" y1="22" x2="64" y2="22" stroke="#3a3a3a" stroke-width="0.8"/>
      <line x1="44" y1="14" x2="38" y2="70" stroke="#e8608a" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Fill glass with ice:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="20" width="70" height="100" rx="14" fill="none" stroke="#3a3a3a" stroke-width="2"/><text x="65" y="80" font-size="24">🧊</text></svg>`, desc: 'Fill a large wine glass generously with ice cubes. The spritz lives and dies by temperature — the colder the better.' },
      { title: 'Step 2. Pour Aperol then Prosecco:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="20" width="70" height="100" rx="14" fill="none" stroke="#3a3a3a" stroke-width="2"/><rect x="45" y="70" width="70" height="50" rx="12" fill="#e87030" opacity="0.5"/><rect x="45" y="20" width="70" height="54" fill="#f5a030" opacity="0.3"/></svg>`, desc: 'Pour 60ml Aperol directly over the ice. Then slowly pour 90ml of chilled Prosecco — pour gently to keep all those beautiful bubbles.' },
      { title: 'Step 3. Top with soda & garnish:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="20" width="70" height="100" rx="14" fill="none" stroke="#3a3a3a" stroke-width="2"/><rect x="45" y="60" width="70" height="60" rx="12" fill="#e87030" opacity="0.5"/><rect x="45" y="20" width="70" height="44" fill="#f5a030" opacity="0.2"/><circle cx="110" cy="25" r="14" fill="#f5a030" stroke="#3a3a3a" stroke-width="1.2"/><line x1="50" y1="20" x2="44" y2="80" stroke="#e8608a" stroke-width="2" stroke-linecap="round"/></svg>`, desc: 'Add a splash of soda water. Garnish with a large orange slice. Give it the gentlest stir. This is best sipped in the sunshine.' }
    ]
  },

  french75: {
    name: 'French 75',
    taste: ['Bright & Citrusy', 'Elegant', 'Sparkling', 'Subtly Sweet'],
    ingredients: 'Gin, Lemon Juice, Simple Syrup, Champagne, Lemon Twist',
    prep: '5 Minutes', serving: '1 – 2 ppl', calories: '140 Calories',
    svg: `<svg width="160" height="200" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 12 Q24 72 40 86 Q56 72 54 12 Z" fill="#f5f0a0" opacity="0.7" stroke="#3a3a3a" stroke-width="1.5"/>
      <path d="M26 12 L54 12" stroke="#3a3a3a" stroke-width="1.5"/>
      <circle cx="50" cy="10" r="9" fill="#f5e040" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="50" y1="1" x2="50" y2="19" stroke="#3a3a3a" stroke-width="0.8"/>
      <path d="M28 78 C24 74 20 78 24 80 C28 82 28 78 28 78" fill="#e8608a"/>
      <path d="M28 78 C32 74 36 78 32 80 C28 82 28 78 28 78" fill="#e8608a"/>
      <circle cx="28" cy="78" r="2" fill="#e8608a"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Shake the base:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="62" y="20" width="36" height="90" rx="10" fill="#808080" stroke="#3a3a3a" stroke-width="2"/><rect x="68" y="14" width="24" height="10" rx="5" fill="#606060" stroke="#3a3a3a" stroke-width="1.5"/><circle cx="44" cy="65" r="18" fill="#f5e040" stroke="#3a3a3a" stroke-width="1.5"/></svg>`, desc: 'Combine gin, fresh lemon juice, and simple syrup in a cocktail shaker with ice. Shake vigorously for 10-15 seconds until very cold.' },
      { title: 'Step 2. Strain into a chilled flute:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 10 Q58 80 80 95 Q102 80 100 10 Z" fill="#f5f0d0" opacity="0.6" stroke="#3a3a3a" stroke-width="1.5"/><path d="M60 10 L100 10" stroke="#3a3a3a" stroke-width="1.5"/></svg>`, desc: 'Double strain the mixture into a chilled champagne flute, filling it about halfway. This removes any ice shards for a silky-smooth drink.' },
      { title: 'Step 3. Top with champagne:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55 10 Q53 80 80 96 Q107 80 105 10 Z" fill="#f5f0b0" opacity="0.6" stroke="#3a3a3a" stroke-width="1.5"/><path d="M55 10 L105 10" stroke="#3a3a3a" stroke-width="1.5"/><circle cx="80" cy="8" r="7" fill="#f5e040" stroke="#3a3a3a" stroke-width="1"/><path d="M60 45 Q80 38 100 45" stroke="#f5d040" stroke-width="1.2" fill="none"/><path d="M58 60 Q80 52 102 60" stroke="#f5d040" stroke-width="1" fill="none"/></svg>`, desc: 'Top with cold Champagne or Prosecco, pouring slowly to preserve the bubbles. Garnish with a long lemon twist. This drink is simply chic.' }
    ]
  },

  lychee: {
    name: 'Lychee Martini',
    taste: ['Floral & Exotic', 'Sweet', 'Light', 'Delicately Fragrant'],
    ingredients: 'Vodka, Lychee Juice, Lychee Liqueur, Lime Juice, Lychee',
    prep: '5 Minutes', serving: '1 – 2 ppl', calories: '155 Calories',
    svg: `<svg width="160" height="180" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12 L40 56 L72 12 Z" fill="none" stroke="#3a3a3a" stroke-width="1.8"/>
      <path d="M16 28 L64 28 L40 56 Z" fill="#f0f0f8" opacity="0.7"/>
      <line x1="40" y1="56" x2="40" y2="82" stroke="#3a3a3a" stroke-width="1.8"/>
      <line x1="24" y1="82" x2="56" y2="82" stroke="#3a3a3a" stroke-width="1.8"/>
      <line x1="50" y1="10" x2="58" y2="26" stroke="#e8608a" stroke-width="1.5"/>
      <circle cx="60" cy="28" r="5" fill="#f0d8e0" stroke="#e8608a" stroke-width="1"/>
      <path d="M28 92 C24 88 20 92 24 94 C28 96 28 92 28 92" fill="#e8608a"/>
      <path d="M28 92 C32 88 36 92 32 94 C28 96 28 92 28 92" fill="#e8608a"/>
      <circle cx="28" cy="92" r="2" fill="#e8608a"/>
    </svg>`,
    steps: [
      { title: 'Step 1. Prepare your lychee:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="65" r="35" fill="#f8e8f0" stroke="#e8608a" stroke-width="2"/><circle cx="80" cy="65" r="25" fill="#f0d8e8"/><circle cx="80" cy="65" r="14" fill="#f8f0f4"/></svg>`, desc: 'Open a can of lychees and reserve 60ml of the syrup. You\'ll use both the lychee fruit for garnish and the fragrant syrup in the cocktail. Fresh lychees are even more beautiful when in season.' },
      { title: 'Step 2. Shake with ice:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="62" y="20" width="36" height="90" rx="10" fill="#808080" stroke="#3a3a3a" stroke-width="2"/><rect x="68" y="14" width="24" height="10" rx="5" fill="#606060" stroke="#3a3a3a" stroke-width="1.5"/><line x1="50" y1="45" x2="38" y2="55" stroke="#f0d0e8" stroke-width="1.5"/><line x1="110" y1="45" x2="122" y2="55" stroke="#f0d0e8" stroke-width="1.5"/></svg>`, desc: 'Add vodka, lychee juice, lychee liqueur, and a squeeze of fresh lime to a shaker with ice. Shake well for 20 seconds — you want it super cold.' },
      { title: 'Step 3. Strain, garnish, and serve:', illustration: `<svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 L80 88 L130 20 Z" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M44 46 L116 46 L80 88 Z" fill="#f0e8f8" opacity="0.6"/><line x1="80" y1="88" x2="80" y2="115" stroke="#3a3a3a" stroke-width="2"/><line x1="62" y1="115" x2="98" y2="115" stroke="#3a3a3a" stroke-width="2"/><line x1="95" y1="18" x2="104" y2="40" stroke="#e8608a" stroke-width="1.5"/><circle cx="106" cy="42" r="7" fill="#f0d8e8" stroke="#e8608a" stroke-width="1.2"/></svg>`, desc: 'Strain into a chilled martini glass. Thread a lychee onto a cocktail pick and balance it on the rim. This cocktail is as pretty as it is delicious.' }
    ]
  }
};

function showDetail(key) {
  const d = drinks[key];

  document.getElementById('detail-drink-name').textContent = d.name;
  document.getElementById('detail-svg-container').innerHTML = d.svg;

  const tasteEl = document.getElementById('detail-taste');
  tasteEl.innerHTML = d.taste
    .map((t, i) => `<li class="${i > 1 ? 'dark' : ''}">${t}</li>`)
    .join('');

  document.getElementById('detail-ingredients').textContent = d.ingredients;
  document.getElementById('detail-meta').innerHTML =
    `Prep time: ${d.prep}<br>Serving: ${d.serving}<br>${d.calories}`;

  const stepsEl = document.getElementById('detail-steps');
  stepsEl.innerHTML = d.steps.map(s => `
    <div class="step">
      <div class="step-title">${s.title}</div>
      <div class="step-illustration">${s.illustration}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  `).join('');

  document.getElementById('home-page').style.display = 'none';
  const detailPage = document.getElementById('detail-page');
  detailPage.style.display = 'block';
  detailPage.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  const detailPage = document.getElementById('detail-page');
  detailPage.style.display = 'none';
  detailPage.classList.remove('active');
  document.getElementById('home-page').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetailPage(key) {
  const d = drinks[key];
  if (!d) return;

  const nameEl = document.getElementById('detail-drink-name');
  const svgEl = document.getElementById('detail-svg-container');
  const tasteEl = document.getElementById('detail-taste');
  const ingredientsEl = document.getElementById('detail-ingredients');
  const metaEl = document.getElementById('detail-meta');
  const stepsEl = document.getElementById('detail-steps');

  if (!nameEl || !svgEl || !tasteEl || !ingredientsEl || !metaEl || !stepsEl) {
    return;
  }

  nameEl.textContent = d.name;
  svgEl.innerHTML = d.svg;
  tasteEl.innerHTML = d.taste
    .map((t, i) => `<li class="${i > 1 ? 'dark' : ''}">${t}</li>`)
    .join('');
  ingredientsEl.textContent = d.ingredients;
  metaEl.innerHTML = `Prep time: ${d.prep}<br>Serving: ${d.serving}<br>${d.calories}`;
  stepsEl.innerHTML = d.steps.map(s => `
    <div class="step">
      <div class="step-title">${s.title}</div>
      <div class="step-illustration">${s.illustration}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  `).join('');

  document.title = `SipPretty - ${d.name}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const drinkKey = document.body.dataset.drink;
  if (drinkKey) {
    renderDetailPage(drinkKey);
  }
});
