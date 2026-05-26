const conf = {
    PROJECT_ID : String(import.meta.env.VITE_PROJECT_ID),
    API_ENDPOINT : String(import.meta.env.VITE_API_ENDPOINT),
    DATABASE_ID : String(import.meta.env.VITE_DATABASE_ID),
    TABLE_ID: String(import.meta.env.VITE_TABLE_ID),
    BUCKET_ID:String(import.meta.env.VITE_BUCKET_ID)
}
export default conf