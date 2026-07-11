# Complete Brand Kit

**CampaignAI**

A comprehensive design system combining ethical innovation with democratic/participatory values. Our visual identity embodies the hope, professionalism, and forward-thinking spirit that drives transformative political campaigns. This guide defines our visual language, values, and design principles for consistent, impactful communication.

---

*Section 01*

## Brand Color System

Our color palette combines patriotic symbolism with modern vibrancy. Each color has been carefully named and calibrated to work harmoniously across digital and print applications while maintaining accessibility standards. Each color serves a specific purpose in our visual hierarchy and communication strategy.

### Primary Brand Colors

- **Liberty Crimson** `#FF3366` — A bold, energetic coral-red that radiates confidence and action. This forward-thinking red breaks from traditional burgundy tones, symbolizing a new era of political engagement. It conveys urgency and passion while remaining approachable and modern. *(Usage: CTAs, key headlines, attention moments (20%))*

- **Beacon White** `#E8F4F8` — A luminous, ice-kissed white with subtle blue undertones that evokes clarity, transparency, and hope. This isn't stark white—it's infused with light, suggesting dawn breaking and new possibilities. It represents the illumination of truth and the bright future your platform enables. *(Usage: Backgrounds, text on dark surfaces (35%))*

- **Freedom Blue** `#4D9FFF` — A vibrant, optimistic sky blue that captures the feeling of limitless potential and open horizons. Energetic without being aggressive, this blue represents trust, innovation, and the forward momentum of progress. It's the blue of clear skies and new days. *(Usage: Primary branding, interactive elements (30%))*

- **Regal Navy** `#0D1B3E` — A commanding, deep regal blue that grounds the palette with authority and elegance. Richer and more distinguished than pure black, it evokes tradition, depth, and trustworthiness while bringing a sophisticated warmth that pure black cannot. This anchor color allows the brighter blues and crimsons to shine while projecting timeless professionalism. *(Usage: Primary backgrounds, body text (15%))*

### Secondary Tones — "Progress Gradient"

- **Victory Rose** `#FF6B8F` — Softer coral-pink for hover states and secondary CTAs.

- **Horizon Azure** `#7AB8FF` — Lighter sky blue for backgrounds and data visualization.

- **Dawn Frost** `#F5FAFC` — Ultra-light tint for alternating sections and cards.

### Neutral Grays — "Foundation Series"

- **Granite** `#2C2C2C` — Deep charcoal for secondary text and UI borders.

- **Slate** `#666666` — Medium gray for supporting text and disabled states.

- **Silver Mist** `#B8B8B8` — Light gray for dividers and placeholder text.

### Accent Colors — "Impact Collection"

- **Pioneer Gold** `#FFB800` — Optimistic gold for success states and achievements.

- **Verdant Future** `#00D084` — Fresh green for positive metrics and confirmations.

- **Alert Amber** `#FF9500` — Warm orange for warnings and important notifications.

- **Critical Scarlet** `#E62E2E` — Deeper red for error states and critical alerts.

---

*Section 01 — Supplement*

## Patriot Gradient Treatment

A diagonal red-white-blue gradient that unifies all four primary brand colors into a single, 
high-impact statement. Reserved for special moments — hero headlines and key CTAs — to create 
unmistakable patriotic energy without overuse.

### Gradient Definition

```css
/* For buttons and dark-bg text — includes Beacon White midpoint */
--gradient-patriot: linear-gradient(135deg, #FF3366
0%, /* Liberty Crimson */
#E8F4F8
40%, /* Beacon White   */
#4D9FFF
80%, /* Freedom Blue   */
#0D1B3E
100%
/* Regal Navy     */); /* For text on light backgrounds — red-to-blue, no white stop */
--gradient-patriot-no-white: linear-gradient(135deg, #FF3366
0%, /* Liberty Crimson */
#C0407A
30%, /* Crimson bridge  */
#4D9FFF
65%, /* Freedom Blue   */
#0D1B3E
100%
/* Regal Navy     */);
```

### Live Demos

```css
/* No-white variant for light backgrounds */
background: var(--gradient-patriot-no-white); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
```

```css
/* Full variant with white stop — dark bg only */
<
h1
class
="
text-patriot-gradient-dark
">
Your Headline Here
</
h1
>
```

Buttons: `Join the Movement` | `Get Started Today`

```css
<
button
class
="
btn btn-patriot
">
Join the Movement
</
button
>
```

Buttons: `Volunteer Now` | `Donate Today`

```css
/* Identical markup, context adapts */
<
button
class
="
btn btn-patriot
">
Volunteer Now
</
button
>
```

### Usage Rules

> ✓ Use WhenHero section display text (48px+)Single high-priority CTA button per pageCampaign launch or landmark announcementsFull-bleed header moments on light or dark bgText must be bold weight (700 minimum)

> ⚠ Use SparinglyMaximum one gradient element per viewportAvoid at body text sizes — unreadable below 32pxNever pair with Liberty Crimson or Freedom Blue text nearbyPrefer solid colors for secondary CTAs on the same pageDon't animate unless motion is intentional and subtle

> ✗ Never UseBody copy, captions, or UI labelsMultiple gradient elements on a single screenButtons and gradient headlines simultaneouslyOn patterned or photographic backgroundsAs a fill for icons, borders, or dividers

---

*Section 02*

## Brand Typography System

Our dual-font system pairs **Manrope** for impactful headlines with **Inter** for exceptional readability. Together, they create a voice that's both authoritative and accessible — professional expertise with human approachability.

### Typography Hierarchy — Light Backgrounds

### Typography Hierarchy — Dark Backgrounds

---

*Section 03*

## Colors + Typography In Action

See how our color palette and typography system work together to create impactful, accessible, and emotionally resonant brand experiences for candidates and campaigns across the nation.

> **Action-Driven MessagingWhen urgency meets optimism, Liberty Crimson commands attention while inspiring confidence. 
Perfect for calls-to-action that move people from awareness to engagement.**

> **Trust-Building CommunicationFreedom Blue creates an atmosphere of openness and possibility. Use it to communicate 
innovation, reliability, and the forward momentum of progress.**

> **The Future of Campaigns Has Arrived**
>
> Powered by CampaignAI technologyIn an era where data drives decisions and technology shapes narratives, 
political campaigns need tools that honor democratic principles while delivering results. 
Our platform combines cutting-edge artificial intelligence with unwavering ethical standards.We believe campaigns should be transparent, voter-focused, and grounded in truth. 
That's why every feature we build prioritizes authenticity over manipulation, 
insight over assumption, and community over algorithms.

### Powered by CampaignAI technology

### Interactive Elements

**Button Styles:**

- Primary Action: `Start Your Campaign`

- Urgent Action: `Get Started Now`

- Secondary Action: `Learn More`

- Alternative Style: `View Demo`

### Content Cards

**Content Cards:**

---

*Section 04*

## Brand Guidelines

Consistent application of our brand system ensures recognition, builds trust, and 
maintains professional quality across all touchpoints. Follow these guidelines to 
create cohesive, effective communications.

### Color Usage Guidelines

#### DO: Follow These Practices

- Use Liberty Crimson sparingly for CTAs and key actions (20% of design)

- Freedom Blue should dominate digital interfaces (30% of design)

- Beacon White provides breathing room and clarity (35% of design)

- Regal Navy anchors designs and creates contrast (15% of design)

- Maintain AAA accessibility standards for text contrast

- Use accent colors purposefully for status indicators

- Test colors on both light and dark backgrounds

#### DON'T: Avoid These Mistakes

- Don't overuse Liberty Crimson—it loses impact

- Don't mix colors arbitrarily without considering hierarchy

- Don't use light gray text on light backgrounds

- Don't substitute brand colors with "close enough" alternatives

- Don't ignore accessibility contrast ratios

- Don't use more than 3-4 colors in a single composition

- Don't create gradients with colors from different families

### Typography Guidelines

#### DO: Follow These Practices

- Use Manrope 800 for hero headlines and major impact

- Use Manrope 700 for H1-H4 section headers

- Use Inter 400 for all body text and paragraphs

- Use Inter 600 for subheadings and emphasis

- Maintain consistent line-height (1.6-1.7 for body text)

- Use negative letter-spacing for large headlines

- Ensure minimum 16px font size for body text

#### DON'T: Avoid These Mistakes

- Don't use Inter for large display headlines

- Don't use Manrope for body text or long paragraphs

- Don't use all caps for extended text blocks

- Don't mix more than 2 font families

- Don't use italic styles (not part of our system)

- Don't use tight line-height that reduces readability

- Don't skip heading levels (e.g., H2 to H5)

### Accessibility Standards

---

### CampaignAI Brand Kit

This brand kit represents the CampaignAI commitment to: ethical innovation, democratic values, and transformative campaigns.

*© 2026 CampaignAI, Inc. • Brand Kit v1.0*