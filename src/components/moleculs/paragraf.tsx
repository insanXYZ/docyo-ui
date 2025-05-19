import parse from 'html-react-parser';

export default function Paragraf(v: string) {
  return <p>{parse(v)}</p>
}
