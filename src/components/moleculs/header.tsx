function Header(v: string) {
  return <h1 key={v} className="text-4xl font-bold" id={v}>{v}</h1>
}

function HeaderMedium(v: string) {
  return <h2 key={v} className="text-3xl font-bold" id={v}>{v}</h2>
}

function HeaderSmall(v: string) {
  return <h3 key={v} className="text-2xl font-bold" id={v}>{v}</h3>
}

export { Header, HeaderMedium, HeaderSmall }
