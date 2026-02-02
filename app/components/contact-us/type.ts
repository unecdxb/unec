export type ContactData = {
    metaTitle: string;
    metaDescription: string;
    firstSection: {
        items: {
            title: string,
            address: string,
            phone: string,
            email: string,
            fax: string,
            po: string,
            map: string,
        }[]
    }
}