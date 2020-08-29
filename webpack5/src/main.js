let output;
const dynamic = async () => {
    const data = await new Promise((resolve, reject) =>{
        resolve("异步数据");
    })
    return data;
}
console.log(dynamic());
output = (await dynamic()) + '🐻' + Math.random();

export default dynamic();