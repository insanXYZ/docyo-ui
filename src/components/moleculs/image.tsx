export default function Image(src: string, alt?: string) {
  return (
    <img src={src} alt={alt} className="w-full h-96 object-contain" />
  )
}
