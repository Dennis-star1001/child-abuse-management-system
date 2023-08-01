const url = "http://localhost/child_abuse_management_system_db";

export const api = async (page, data) => {
    const request = await fetch(`${url}/${page}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    

    const res = await request.json();
    console.log("response",res)
    return res;

}