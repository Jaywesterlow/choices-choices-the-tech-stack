export default function aboutSection({ html }) {
  return html`
    <section>
	<figure>
		<img src="/_public/funda.jpg" alt="Foto van een We Love Web meeting">
		<div>
			<Anchor anchorLink={'/'} anchorLabel={'Link naar niks'} anchorText={'We Love Web: Spotify lezing'}></Anchor>
		</div>
	</figure>

	<article>
		<h2>Georganiseerde gastcolleges</h2>
		<h3><span class="highlight">FDND:</span> We Love Web</h3>
		<h4>
			FDND organiseert de We Love Web sessies! Hierin komt een spreker zijn of haar ervaringen over
			werken in de software industrie delen met onze studenten.
		</h4>
		<p>Op deze pagina kunt u de afgelopen en aankomende We Love Web sessies bekijken.</p>
	</article>
</section>

<style>
	section {
		padding: 0 1.25rem;
		display: flex;
		flex-direction: column;
	}

	@media only screen and (min-width: 768px) {
		section {
			flex-direction: row;
			align-items: center;
			gap: 1.875rem;
			padding: 0 3.75rem;
		}
	}

	@media only screen and (min-width: 1024px) {
		section {
			padding: 0 5rem;
			gap: 3.75rem;
		}
	}

	figure {
		position: relative;
	}

	div {
		display: inline-block;
		position: absolute;
		width: max-content;
		bottom: -0.5rem;
		left: 50%;
		transform: translateX(-50%);
	}

	@media only screen and (min-width: 768px) {
		div {
			display: none;
		}
	}

	@media only screen and (min-width: 1440px) {
		div {
			display: block;
			left: 80%;
		}
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 1.25rem;
		display: block;
	}

	h2 {
		margin-top: 3.75rem;
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-bold);
		color: var(--blue);
		text-transform: uppercase;
		text-decoration: underline;
	}

	h3 {
		color: var(--purple);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
	}

	@media only screen and (min-width: 768px) {
		h3 {
			font-size: var(--font-size-lg);
		}
	}

	@media only screen and (min-width: 1440px) {
		h3 {
			font-size: var(--font-size-xxl);
		}
	}

	.highlight {
		display: block;
	}

	h4 {
		margin-top: 10px;
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-reg);
		color: var(--blue);
		line-height: 1.8;
	}

	@media only screen and (min-width: 768px) {
		h4 {
			font-size: var(--font-size-sm);
			font-weight: 500;
		}
	}

	@media only screen and (min-width: 1440px) {
		h4 {
			font-size: 1.875rem;
			max-width: 59.375rem;
		}
	}

	p {
		margin-top: 1.5rem;
		font-size: var(--font-size-md);
		color: var(--blue);
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: 768px) {
		p {
			font-size: var(--font-size-sm);
			margin-top: 10px;
		}
	}

	@media only screen and (min-width: 1440px) {
		p {
			max-width: 43.75rem;
		}
	}
</style>
  `
}