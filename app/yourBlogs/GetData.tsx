export default async function GetData() {
    const server = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
    const res = await fetch(`${server}/blogs`,)
    if(!res.ok){
        console.log('error to fetch data ')
    }
    return  res.json()
}
