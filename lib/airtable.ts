import Airtable, { Record, Records } from "airtable";
import { FieldSet } from "airtable/lib/field_set";

export const TABLE_NAME = "Teachers";
export interface NormalizedRecord {
    id: string;
    [key: string]: any;
}
const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = airtable.base(process.env.AIRTABLE_BASE_ID || "");

export const getTable = (tableName: string) => base(tableName);

export const normalizeRecords = (
    records: Records<FieldSet> | Array<Record<FieldSet>>
): NormalizedRecord[] => {
    return Array.from(records).map((record) => ({
        id: record.id,
        ...record.fields,
    }));
};
