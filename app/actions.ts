import { getTable, NormalizedRecord, normalizeRecords } from "@/lib/airtable";

export async function getTeachers(): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error("Airtable credentials are not properly configured");
    }

    try {
        const records = await getTable("Teachers")
            .select({
                maxRecords: 100,
                view: "Grid view",
            })
            .all();

        return normalizeRecords(records);
    } catch (error) {
        console.error("Airtable error:", error);
        throw new Error("Failed to fetch records");
    }
}

export async function getPrices(): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error("Airtable credentials are not properly configured");
    }

    try {
        const records = await getTable("Prices")
            .select({
                maxRecords: 100,
                view: "Grid view",
            })
            .all();

        return normalizeRecords(records);
    } catch (error) {
        console.error("Airtable error:", error);
        throw new Error("Failed to fetch records");
    }
}
