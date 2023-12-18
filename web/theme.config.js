const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © InvenHost by <a href="https://mjmair.com">@matmair</a>.
        <a href="/feed.xml" className="float">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a.float {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
