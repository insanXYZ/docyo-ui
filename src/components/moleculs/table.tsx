import { Table as ShadTable, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";

export default function Table({ headers, children }: { headers: string[], children: React.ReactNode }) {
  return (
    <ShadTable>
      <TableHeader>
        <TableRow>
          {headers?.map(v => (
            <TableHead>
              {v}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {children}
      </TableBody>
    </ShadTable>
  )
}
