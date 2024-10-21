export default function heroSection({ html }) {
  return html`
    <section>
    <article>
        <p>We Love Web lezingen door uitgenodigde gastsprekers</p>
        <h1>FDND: We Love Web</h1>
    </article>
    <img src="/_public/header-image.jpg" alt="Foto van een We Love Web meeting">
    <article>
        <p>Aantal We Love Webs:</p>
        <div>
            <li><anchor-element>Afgelopen: </anchor-element></li>
            <li><anchor-element>Aankomend: </anchor-element></li>
        </div>
    </article>
</section>

<style>
    section {
        width: 100%;
        margin-bottom: 0;
        position: relative;
        padding: 0 clamp(1rem, calc(100vw / 24), 5rem) 0;
        margin-bottom: 4rem;
    }

    section article:nth-child(1) {
        position: absolute;
        right: 0;
        left: auto;
        z-index: 2;
        background-color: var(--grey);
        border-radius: 0 0 0 2.48rem;
        color: var(--blue);
        font-family: 'Open Sans', sans-serif;
        padding: 0 clamp(1.5rem, calc(100vw / 24* 40 / 60), 2.5rem) clamp(1.5rem, calc(100vw / 24* 40 / 60), 2.5rem);
    }
    
    @media (max-width: 750px) {
        section article:nth-child(1) {
            width: 100%;
            position: relative;
        }
    }
    
    section article:nth-child(1)::before {
        content: '';
        position: absolute;
        left: -2.48rem;
        width: 2.48rem;
        height: 2.48rem;
        background: radial-gradient(circle at left bottom, transparent 2.5rem, var(--grey) 1.48rem) border-box;
    }

    @media (max-width: 750px) {
        section article:nth-child(1)::before {
            display: none;
        }
    }
    
    section article:nth-child(1)::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -2.48rem;
        width: 2.48rem;
        height: 2.48rem;
        background: radial-gradient(circle at left bottom, transparent 2.5rem, var(--grey) 1.48rem) border-box;
    }

    @media (max-width: 750px) {
        section article:nth-child(1)::after {
            display: none;
        }
    }
    
    
    section article:nth-child(1) p {
        text-transform: uppercase;
        width: clamp(18.75rem, calc(100vw / 24* 500 / 60), 41rem);
        font-size: clamp(1rem, calc(18 / 60* 100vw / 24), 1.5rem);
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.02em;    
    }
    
    @media (max-width: 750px) {
        section article:nth-child(1) p {
            width: auto;
        }       
    }
    
    section article:nth-child(1) h1 {
        margin-top: 0.1em;
        width: clamp(18.75rem, calc(100vw / 24* 500 / 60), 41rem);
        font-size: clamp(2.5rem, calc(64 / 60* 100vw / 24), 5rem);
        letter-spacing: -0.05em;
        line-height: 1;
    }

    @media (max-width: 750px) {
        section article:nth-child(1) h1 {
            width: auto;
        }
    }

    section img {
        position: relative;
        width: 100%;
        z-index: 1;
        border-radius: 2.48rem;
        display: block;
    }
 
    @media (max-width: 750px) {
        section img {
            border-radius: 1.25rem;
        }
    }

    section article:nth-child(3) {
        position: absolute;
        bottom: 0;
        z-index: 2;
        color: var(--blue);
        font-family: 'Open Sans', sans-serif;
        border-radius: 0 2.48rem 0 0;
        background-color: var(--grey);
        padding: clamp(1.5rem, calc(100vw / 24* 40 / 60), 2.5rem) clamp(1.5rem, calc(100vw / 24* 40 / 60), 2.5rem) 0;
    }
    
    @media (max-width: 750px) {
        section article:nth-child(3) {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    section article:nth-child(3)::before {
        content: '';
        position: absolute;
        top: -2.48rem;
        left: 0;
        width: 2.48rem;
        height: 2.48rem;
        background: radial-gradient(circle at top right, transparent 2.5rem, var(--grey) 1.48rem) border-box;       
    }

    @media (max-width: 750px) {
        section article:nth-child(3)::before {
            display: none;
        }
    }
    
    section article:nth-child(3)::after {
        content: '';
        position: absolute;
        right: -2.48rem;
        bottom: 0;
        width: 2.48rem;
        height: 2.48rem;
        background: radial-gradient(circle at right top, transparent 2.5rem, var(--grey) 1.48rem) border-box;      
    }

    @media (max-width: 750px) {
        section article:nth-child(3)::after {
            display: none;
        }
    }

    section article:nth-child(3) p {
        text-transform: uppercase;
        font-size: clamp(1.5rem, calc(18 / 60* 100vw / 24), 3rem);
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.02em;
        margin-bottom: 1rem;
    }
    
    section article:nth-child(3) div {
        margin-bottom: .8rem;
        width: fit-content;
        display: flex;
        gap: 1rem;
    }

</style>
`
}