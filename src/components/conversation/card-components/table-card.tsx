
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { BaseCard } from "./base-card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "@/lib/design-system/typography";

interface TableCardProps {
  title?: string;
  description?: string;
  summary?: string;
  data: Record<string, any>[];
  columns: { key: string; header: string }[];
  className?: string;
}

export function TableCard({
  title,
  description,
  summary,
  data,
  columns,
  className,
}: TableCardProps) {
  const [displayRows, setDisplayRows] = useState(10);
  const displayColumns = columns.slice(0, 4); // Limit to max 4 columns
  const hasMoreRows = data.length > displayRows;

  const handleLoadMore = () => {
    setDisplayRows((prev) => prev + 10);
  };

  const handleShowLess = () => {
    setDisplayRows(Math.max(10, displayRows - 10));
  };

  return (
    <BaseCard
      title={title}
      description={description}
      className={cn("bg-card", className)}
      contentClassName="p-0"
    >
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {displayColumns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.slice(0, displayRows).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {displayColumns.map((column) => (
                  <TableCell key={column.key}>
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {summary && (
        <div className="p-4 text-sm border-t border-border">
          <Text as="span" weight="semibold" size="sm">Summary:</Text>{" "}
          <Text as="span" color="muted" size="sm">{summary}</Text>
        </div>
      )}

      {(hasMoreRows || displayRows > 10) && (
        <div className="flex justify-center p-2 border-t border-border">
          {displayRows > 10 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShowLess}
              className="text-xs"
            >
              <ArrowUp className="h-3 w-3 mr-1" />
              Show Less
            </Button>
          )}
          {hasMoreRows && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoadMore}
              className="text-xs"
            >
              <ArrowDown className="h-3 w-3 mr-1" />
              Load More Rows
            </Button>
          )}
        </div>
      )}
    </BaseCard>
  );
}
