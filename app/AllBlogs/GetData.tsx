export default async function GetData() {
    const res = await fetch('http://localhost:4000/get_blogs',)
    if(!res.ok){
        console.log('error to fetch data ')
    }
    return  res.json()
}
