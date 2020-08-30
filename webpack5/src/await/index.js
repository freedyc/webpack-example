const dynamic = async () => {
    const data = await new Promise((resolve, reject) =>{
        resolve("异步数据");
    })
    return data;
}
const output = await dynamic()
export default output + '🚗'