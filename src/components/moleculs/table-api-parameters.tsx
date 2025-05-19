import Table from "./table";
import { z } from "zod"
import { EnumApiContent, type ApiParseString } from "@/types";
import { TableCell, TableRow } from "../ui/table";
import CodeMockup from "./code-mockup";


export default function TableApiParameter({ stringJson }: { stringJson: string }) {
  const EnumApiContentSchema = z.nativeEnum(EnumApiContent);

  const ApiContentSchema = z.object({
    type: EnumApiContentSchema,
    value: z.string()
  });

  const ApiParseStringSchema = z.record(z.array(ApiContentSchema));

  var parsed: ApiParseString | undefined

  try {
    const raw = JSON.parse(stringJson)
    parsed = ApiParseStringSchema.parse(raw)
  } catch {
    null
  }



  return (
    <Table headers={[
      "Name",
      "Description"
    ]}>
      {parsed && Object.entries(parsed || {}).map(([key, contentArray]) => (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>
            {contentArray.map(v => {
              switch (v.type) {
                case EnumApiContent.DescriptionString:
                  return <div>{v.value}</div>
                case EnumApiContent.Code:
                  return CodeMockup(v.value)
              }
            })}
          </TableCell>
        </TableRow>
      ))}

    </Table>
  )
}
