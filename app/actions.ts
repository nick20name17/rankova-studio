import { getTable, NormalizedRecord, normalizeRecords } from '@/lib/airtable'
import { ICard, IItem, ISection } from './[locale]/sections/prices/PricesMock'
import { Price } from './types/teachers'

export async function getTeachers(): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials are not properly configured')
    }

    try {
        const records = await getTable('Teachers')
            .select({
                maxRecords: 50,
                view: 'Grid view',
            })
            .firstPage()

        return normalizeRecords(records)
    } catch (error) {
        console.error('Airtable error:', error)
        throw new Error('Failed to fetch records')
    }
}

export async function getPrices(): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials are not properly configured')
    }

    try {
        const records = await getTable('Prices')
            .select({
                maxRecords: 50,
                view: 'Grid view',
            })
            .firstPage()

        return normalizeRecords(records)
    } catch (error) {
        console.error('Airtable error:', error)
        throw new Error('Failed to fetch records')
    }
}

export async function getSectionsByIds(
    sectionIds: string[]
): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials are not properly configured')
    }

    if (!sectionIds?.length) {
        return []
    }

    try {
        const formula = `OR(${sectionIds.map((id) => `RECORD_ID()='${id}'`).join(',')})`

        const records = await getTable('Sections')
            .select({
                filterByFormula: formula,
                maxRecords: 50,
            })
            .firstPage()

        const normalizedRecords = normalizeRecords(records)

        // Maintain the original order from sectionIds
        return sectionIds
            .map((id) => normalizedRecords.find((record) => record.id === id))
            .filter((record): record is NormalizedRecord => record !== undefined)
    } catch (error) {
        console.error('Airtable error:', error)
        throw new Error('Failed to fetch sections')
    }
}

export async function getItemsByIds(itemIds: string[]): Promise<NormalizedRecord[]> {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials are not properly configured')
    }

    if (!itemIds?.length) {
        return []
    }

    try {
        const formula = `OR(${itemIds.map((id) => `RECORD_ID()='${id}'`).join(',')})`

        const records = await getTable('Items')
            .select({
                filterByFormula: formula,
                maxRecords: 50,
            })
            .firstPage()

        const normalizedRecords = normalizeRecords(records)

        // Maintain the original order from itemIds
        return itemIds
            .map((id) => normalizedRecords.find((record) => record.id === id))
            .filter((record): record is NormalizedRecord => record !== undefined)
    } catch (error) {
        console.error('Airtable error:', error)
        throw new Error('Failed to fetch items')
    }
}

// Main price normalization function
export async function fetchAndNormalizePrices(): Promise<ICard[]> {
    // Fetch initial price data
    const prices = (await getPrices()) as Price[]

    // Process each price card individually
    const normalizedPrices = await Promise.all(
        prices.map(async (priceCard) => {
            // Get only the sections that belong to this price card
            const cardSections = (await getSectionsByIds(
                priceCard?.sections
            )) as any as ISection[]

            // Process each section's items individually
            const processedSections = await Promise.all(
                cardSections.map(async (section) => {
                    // If the section has items, fetch only those items
                    if (section?.items && Array.isArray(section.items)) {
                        const sectionItems = (await getItemsByIds(
                            section.items as any as string[]
                        )) as unknown as IItem[]
                        return {
                            ...section,
                            items: sectionItems,
                        }
                    }
                    // If the section doesn't have items array, return it as is
                    return section
                })
            )

            // Return the price card with its specific sections and items
            return {
                title: priceCard?.title,
                // @ts-ignore
                'title(eng)': priceCard?.['title(eng)'],
                icon: priceCard?.icon[0]?.url,
                sections: processedSections,
            }
        })
    )

    return normalizedPrices
}
