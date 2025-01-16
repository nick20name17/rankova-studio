import { getTable, normalizeRecords, TABLE_NAME } from "@/lib/airtable";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const records = await getTable(TABLE_NAME)
            .select({
                maxRecords: 100,
                view: "Grid view",
            })
            .all();

        return NextResponse.json(normalizeRecords(records));
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch records" },
            { status: 500 }
        );
    }
}
