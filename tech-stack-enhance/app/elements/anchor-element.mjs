export default function anchorElement({ html }) {


  return html`
      <a href="#"><slot></slot></a>

      <style>
    a {
        position: relative;
        z-index: 1;
        border: 1px solid var(--blue);
        padding: .75rem;
        background-color: var(--white);
        border-radius: 10px;
        color: var(--blue);
        font-weight: 700;
        text-decoration: none;
    }

    a:hover {
        right: 1px;
        top: 1px;
    }

    a::after {
        content: "";
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid var(--blue);
        background-color: var(--white);
        border-radius: 10px;
        color: var(--blue);
        right: 2px;
        top: 2px;
    }

    a:hover::after {
        right: 1px;
        top: 1px;
    }
</style>
    `
}