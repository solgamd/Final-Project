// export const json = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
//     let headers: any = {
//         'Content-type': 'application/json'
//     };

//     try {
//         let result = await fetch(uri, {
//             method, 
//             headers,
//             body: JSON.stringify(body)
//         });
//         console.log(body);
//         if (result.ok) {
//             return <T>(await result.json());
//         } else {
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// };