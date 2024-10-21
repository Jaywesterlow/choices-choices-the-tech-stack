export default function footerSection({ html }) {


  return html`
      <footer>
    <article>
        <h2>FDND Microsites</h2>
        <p>FDND maakt gebruik van microsites. Microsites zijn kleine websites ter ondersteuning van een campagne, informatie over een product, dienst of voor een ander specifiek doel.</p>
    </article>
    <ul>
        <li><anchor-element>FDND.nl</anchor-element></li>
        <li><anchor-element>Contact en routebeschrijving</anchor-element></li>
        <li><anchor-element>Programma</anchor-element></li>
        <li><anchor-element>Partners</anchor-element></li>
        <li><anchor-element>Niveaumatrix</anchor-element></li>
        <li><anchor-element>Documenten</anchor-element></li>
        <li><anchor-element>We Love Web</anchor-element></li>
    </ul>
    <aside>
        <footer-svg><footer-svg>
    </aside>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--purple);
        padding: clamp(1rem, calc(100vw / 24), 5rem) clamp(1rem, calc(100vw / 24), 5rem) 0 calc(clamp(1rem, calc(100vw / 24), 5rem) * 2);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }

    footer article {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        color: var(--blue);
    }

    footer article h2 {
        font-size: clamp(var(--radius), calc(40 / 60* 100vw / 24), 3.25rem);
    }

    footer article p {
        font-size: clamp(1rem, calc(18 / 60* 100vw / 24), var(--radius));
        font-weight: 500;
        letter-spacing: -0.03em;
        margin-top: 1.1em;
        max-width: 60ch;
    }

    footer ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 800px;
        gap: .75rem;
        margin-top: 1rem;
    }

    footer ul li {
        list-style-type: none;
        padding: .75rem 0;
    }

    footer aside {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 5rem 0 var(--radius);
    }
</style>

    `
}